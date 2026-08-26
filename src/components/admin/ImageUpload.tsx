"use client";

import { useState, useRef, useCallback } from "react";
import { Upload, Loader2, Check, X, Link as LinkIcon, Image as ImageIcon } from "lucide-react";

/**
 * ImageUpload — file picker + drag/drop + image compression + GitHub API upload.
 * Returns a public URL that's auto-filled into the field.
 *
 * Flow:
 * 1. User picks a file (or drags & drops)
 * 2. Image is compressed via canvas (max 1400px, JPEG 0.85)
 * 3. Compressed image is uploaded to GitHub repo at public/uploads/
 * 4. Public URL is returned: /uploads/<filename>
 * 5. Vercel serves it from public/ on next deploy
 *    (and from the live dev server immediately)
 */
export default function ImageUpload({
  currentUrl,
  onUploadSuccess,
}: {
  currentUrl?: string;
  onUploadSuccess: (url: string) => void;
}) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Compress image via canvas — returns base64 + dataUrl
  const compressImage = useCallback(
    (file: File): Promise<{ base64: string; dataUrl: string; width: number; height: number }> => {
      return new Promise((resolve, reject) => {
        if (!file.type.startsWith("image/")) {
          reject(new Error("Please select an image file (JPEG, PNG, WebP)."));
          return;
        }
        const reader = new FileReader();
        reader.onerror = () => reject(new Error("Could not read file."));
        reader.onload = (e) => {
          const img = new Image();
          img.onerror = () => reject(new Error("Could not load image."));
          img.onload = () => {
            const MAX_WIDTH = 1400;
            const MAX_HEIGHT = 1400;
            let { width, height } = img;
            if (width > MAX_WIDTH) {
              height = (height * MAX_WIDTH) / width;
              width = MAX_WIDTH;
            }
            if (height > MAX_HEIGHT) {
              width = (width * MAX_HEIGHT) / height;
              height = MAX_HEIGHT;
            }
            const canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext("2d");
            if (!ctx) {
              reject(new Error("Canvas not supported."));
              return;
            }
            // White background (for transparent PNGs)
            ctx.fillStyle = "#FFFFFF";
            ctx.fillRect(0, 0, width, height);
            ctx.drawImage(img, 0, 0, width, height);
            const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
            // Strip "data:image/jpeg;base64," prefix
            const base64 = dataUrl.split(",")[1];
            resolve({ base64, dataUrl, width, height });
          };
          img.src = e.target?.result as string;
        };
        reader.readAsDataURL(file);
      });
    },
    []
  );

  const uploadToGithub = useCallback(
    async (base64: string, filename: string): Promise<string> => {
      const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN || "";
      const owner = process.env.NEXT_PUBLIC_GITHUB_OWNER || "jatinpitrola-eng";
      const repo = process.env.NEXT_PUBLIC_GITHUB_REPO || "one-touch-event-decor";
      const path = `public/uploads/${filename}`;

      if (!token) {
        throw new Error(
          "GitHub token not configured. Set NEXT_PUBLIC_GITHUB_TOKEN env var."
        );
      }

      // Check if file already exists (unlikely with timestamp, but check)
      let sha: string | undefined;
      try {
        const checkRes = await fetch(
          `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
          {
            headers: {
              Authorization: `token ${token}`,
              Accept: "application/vnd.github+json",
            },
          }
        );
        if (checkRes.ok) {
          const data = await checkRes.json();
          sha = data.sha;
        }
      } catch {}

      // Upload (PUT)
      const res = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
        {
          method: "PUT",
          headers: {
            Authorization: `token ${token}`,
            Accept: "application/vnd.github+json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: `chore: upload image ${filename} via admin panel`,
            content: base64,
            sha,
            branch: "main",
          }),
        }
      );

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || `Upload failed (HTTP ${res.status})`);
      }

      // Return relative URL — Vercel serves from public/
      return `/uploads/${filename}`;
    },
    []
  );

  const handleFile = useCallback(
    async (file: File) => {
      setError("");
      setSuccess(false);
      setUploading(true);
      try {
        // Validate size (max 15MB before compression)
        if (file.size > 15 * 1024 * 1024) {
          throw new Error("Image too large. Max 15MB before compression.");
        }
        // Compress
        const { base64 } = await compressImage(file);
        // Build a clean filename
        const ext = "jpg";
        const safeBase = (file.name || "image")
          .replace(/\.[^/.]+$/, "")
          .replace(/[^a-zA-Z0-9-_]/g, "-")
          .toLowerCase()
          .slice(0, 30);
        const filename = `${safeBase || "image"}-${Date.now()}.${ext}`;
        // Upload to GitHub
        const publicUrl = await uploadToGithub(base64, filename);
        // Notify parent
        onUploadSuccess(publicUrl);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      } catch (e: any) {
        setError(e.message || "Upload failed. Please try again.");
      } finally {
        setUploading(false);
      }
    },
    [compressImage, uploadToGithub, onUploadSuccess]
  );

  // File input change
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
    // Reset input so same file can be picked again
    e.target.value = "";
  };

  // Drag & drop
  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const onDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  return (
    <div className="mt-2">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/jpg"
        onChange={onFileChange}
        className="hidden"
      />

      {/* Drop zone */}
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        disabled={uploading}
        className={`w-full flex flex-col items-center justify-center gap-2 px-4 py-5 rounded-xl border-2 border-dashed transition-all ${
          dragOver
            ? "border-[#B87333] bg-[#B87333]/8"
            : "border-[#E5D9C0] hover:border-[#B87333] hover:bg-[#B87333]/4"
        } ${uploading ? "opacity-60 cursor-wait" : "cursor-pointer"}`}
      >
        {uploading ? (
          <>
            <Loader2 className="w-5 h-5 text-[#B87333] animate-spin" />
            <span className="text-xs text-[#6B5D4A]">Uploading & compressing...</span>
          </>
        ) : success ? (
          <>
            <Check className="w-5 h-5 text-green-600" />
            <span className="text-xs text-green-700 font-medium">Uploaded!</span>
          </>
        ) : (
          <>
            <Upload className="w-5 h-5 text-[#B87333]" />
            <span className="text-xs font-medium text-[#0B3D2E]">
              Click to upload or drag & drop
            </span>
            <span className="text-[10px] text-[#6B5D4A]">
              JPEG, PNG, WebP · Max 15MB · Auto-compressed to 1400px
            </span>
          </>
        )}
      </button>

      {/* Error */}
      {error && (
        <p className="mt-2 text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg p-2">
          {error}
        </p>
      )}

      {/* Show current URL */}
      {currentUrl && !uploading && (
        <p className="mt-2 flex items-center gap-1.5 text-[10px] text-[#6B5D4A]">
          <LinkIcon className="w-3 h-3" />
          <span className="truncate">{currentUrl}</span>
        </p>
      )}
    </div>
  );
}
