"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Lock, KeyRound, ArrowRight, CheckCircle2, Eye, EyeOff } from "lucide-react";
import { ADMIN_CREDENTIALS, simpleHash, AUTH_KEY } from "@/lib/content";

type Step = "credentials" | "access" | "success";

export default function AdminLogin({
  open,
  onClose,
  onSuccess,
}: {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}) {
  const [step, setStep] = useState<Step>("credentials");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accessCode, setAccessCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => {
        setStep("credentials");
        setError("");
        setEmail("");
        setPassword("");
        setAccessCode("");
      }, 0);
      return () => clearTimeout(t);
    }
  }, [open]);

  const handleCredentials = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (
      email.trim().toLowerCase() === ADMIN_CREDENTIALS.email &&
      password === ADMIN_CREDENTIALS.password
    ) {
      setStep("access");
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  const handleAccess = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (accessCode === ADMIN_CREDENTIALS.accessCode) {
      setStep("success");
      try {
        sessionStorage.setItem(AUTH_KEY, "true");
      } catch {}
      setTimeout(() => {
        onSuccess();
      }, 1500);
    } else {
      setError("Invalid access code. Please verify and try again.");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#07261d]/90 backdrop-blur-xl"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 30, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md bg-[#F7F1E8] rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="relative bg-[#0B3D2E] text-[#F7F1E8] p-6">
              <button
                aria-label="Close"
                onClick={onClose}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#F7F1E8]/10 hover:bg-[#F7F1E8]/20 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#B87333] flex items-center justify-center">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-script text-lg text-[#E8B4B8]">One Touch</p>
                  <h2 className="font-display text-xl font-bold">Admin Access</h2>
                </div>
              </div>
              {/* Step indicator */}
              <div className="flex gap-2 mt-5">
                <div className={`flex-1 h-1 rounded-full ${step === "credentials" ? "bg-[#B87333]" : "bg-[#F7F1E8]/30"}`} />
                <div className={`flex-1 h-1 rounded-full ${step === "access" ? "bg-[#B87333]" : step === "success" ? "bg-[#B87333]" : "bg-[#F7F1E8]/30"}`} />
                <div className={`flex-1 h-1 rounded-full ${step === "success" ? "bg-[#B87333]" : "bg-[#F7F1E8]/30"}`} />
              </div>
              <p className="text-xs text-[#F7F1E8]/70 mt-2">
                Step {step === "credentials" ? "1" : step === "access" ? "2" : "3"} of 3 —{" "}
                {step === "credentials"
                  ? "Verify your credentials"
                  : step === "access"
                  ? "Enter access code"
                  : "Access granted"}
              </p>
            </div>

            {/* Body */}
            <div className="p-6 md:p-8">
              {step === "credentials" && (
                <form onSubmit={handleCredentials} className="space-y-4">
                  <div>
                    <label className="admin-label">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B5D4A]" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="admin@onetouchevents.in"
                        className="admin-input pl-10"
                        autoFocus
                      />
                    </div>
                  </div>
                  <div>
                    <label className="admin-label">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B5D4A]" />
                      <input
                        type={showPassword ? "text" : "password"}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="admin-input pl-10 pr-10"
                      />
                      <button
                        type="button"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        onClick={() => setShowPassword((s) => !s)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B5D4A] hover:text-[#B87333]"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  {error && (
                    <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#0B3D2E] text-[#F7F1E8] rounded-full hover:bg-[#B87333] transition-colors font-medium"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-center text-xs text-[#6B5D4A]">
                    Demo credentials: admin@onetouchevents.in / onetouch2024
                  </p>
                </form>
              )}

              {step === "access" && (
                <form onSubmit={handleAccess} className="space-y-4">
                  <div className="text-center mb-2">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#B87333]/15 flex items-center justify-center mb-3">
                      <KeyRound className="w-7 h-7 text-[#B87333]" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-[#0B3D2E]">
                      Enter Access Code
                    </h3>
                    <p className="text-sm text-[#6B5D4A] mt-1">
                      A 6-digit code has been sent to your registered device.
                    </p>
                  </div>
                  <div>
                    <label className="admin-label">6-Digit Access Code</label>
                    <input
                      type="text"
                      inputMode="numeric"
                      maxLength={6}
                      required
                      value={accessCode}
                      onChange={(e) => setAccessCode(e.target.value.replace(/\D/g, ""))}
                      placeholder="••••••"
                      className="admin-input text-center text-2xl tracking-[0.5em] font-bold"
                      autoFocus
                    />
                  </div>
                  {error && (
                    <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#0B3D2E] text-[#F7F1E8] rounded-full hover:bg-[#B87333] transition-colors font-medium"
                  >
                    Verify & Enter Admin
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-center text-xs text-[#6B5D4A]">
                    Demo access code: 741852
                  </p>
                  <button
                    type="button"
                    onClick={() => setStep("credentials")}
                    className="w-full text-center text-xs text-[#B87333] hover:underline"
                  >
                    ← Back to credentials
                  </button>
                </form>
              )}

              {step === "success" && (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-20 h-20 mx-auto rounded-full bg-[#0B3D2E] flex items-center justify-center mb-4"
                  >
                    <CheckCircle2 className="w-10 h-10 text-[#F7F1E8]" />
                  </motion.div>
                  <h3 className="font-display text-2xl font-bold text-[#0B3D2E]">
                    Welcome back, Admin!
                  </h3>
                  <p className="text-sm text-[#6B5D4A] mt-2">
                    Opening your control panel...
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
