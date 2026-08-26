"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import AdminLogin from "./AdminLogin";
import AdminPanel from "./AdminPanel";
import { AUTH_KEY } from "@/lib/content";

// Singleton state for the 7-click counter (shared via custom event)
let clickCount = 0;
let clickTimer: ReturnType<typeof setTimeout> | null = null;
const CLICK_THRESHOLD = 7;
const CLICK_WINDOW_MS = 3000; // 7 clicks within 3 seconds

type AdminGateProps = {
  logoClickTrigger: number; // increments when logo is clicked
};

export default function AdminGate({ logoClickTrigger }: AdminGateProps) {
  const [showLogin, setShowLogin] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [isAuthed, setIsAuthed] = useState(false);

  // Check existing auth on mount
  useEffect(() => {
    const t = setTimeout(() => {
      try {
        const authed = sessionStorage.getItem(AUTH_KEY) === "true";
        if (authed) setIsAuthed(true);
      } catch {}
    }, 0);
    return () => clearTimeout(t);
  }, []);

  // Listen for logo clicks
  useEffect(() => {
    if (logoClickTrigger === 0) return;
    clickCount += 1;

    // Reset counter after window
    if (clickTimer) clearTimeout(clickTimer);
    clickTimer = setTimeout(() => {
      clickCount = 0;
    }, CLICK_WINDOW_MS);

    if (clickCount >= CLICK_THRESHOLD) {
      clickCount = 0;
      if (clickTimer) clearTimeout(clickTimer);
      // If already authed, open panel directly; else open login
      const t = setTimeout(() => {
        if (isAuthed) {
          setShowPanel(true);
        } else {
          setShowLogin(true);
        }
      }, 0);
      return () => clearTimeout(t);
    }
  }, [logoClickTrigger, isAuthed]);

  const handleLoginSuccess = useCallback(() => {
    setIsAuthed(true);
    setShowLogin(false);
    setShowPanel(true);
  }, []);

  const handleClosePanel = useCallback(() => {
    setShowPanel(false);
  }, []);

  return (
    <>
      <AdminLogin
        open={showLogin}
        onClose={() => setShowLogin(false)}
        onSuccess={handleLoginSuccess}
      />
      <AnimatePresence>
        {showPanel && <AdminPanel onClose={handleClosePanel} />}
      </AnimatePresence>
    </>
  );
}
