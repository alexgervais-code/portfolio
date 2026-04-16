"use client";

import { useState, useEffect, FormEvent } from "react";

interface PasswordGateProps {
  password: string;
  storageKey: string;
  children: React.ReactNode;
}

export default function PasswordGate({
  password,
  storageKey,
  children,
}: PasswordGateProps) {
  const [mounted, setMounted] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined" && sessionStorage.getItem(storageKey) === "1") {
      setUnlocked(true);
    }
  }, [storageKey]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim().toLowerCase() === password.toLowerCase()) {
      sessionStorage.setItem(storageKey, "1");
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!mounted) {
    return <div className="min-h-[60vh]" aria-hidden />;
  }

  if (unlocked) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-[calc(100dvh-126px)] max-sm:min-h-[calc(100dvh-116px)] flex flex-col items-center justify-center px-6">
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full max-w-[360px]">
        <p
          className="text-[16px] leading-[1.35] tracking-[-0.16px] text-center transition-colors duration-300"
          style={{ color: "var(--portfolio-primary)" }}
        >
          This case study is password protected
        </p>
        <div className="w-full relative">
          <input
            type="password"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              if (error) setError(false);
            }}
            placeholder="Enter password"
            autoFocus
            aria-label="Password"
            className="w-full h-[44px] rounded-full px-5 text-[14px] leading-[1.35] tracking-[-0.14px] outline-none transition-colors duration-300 focus:shadow-[0_0_0_3px_var(--portfolio-card-border)]"
            style={{
              backgroundColor: "var(--portfolio-card-bg)",
              border: `1px solid ${error ? "#e06666" : "var(--portfolio-card-border)"}`,
              color: "var(--portfolio-primary)",
            }}
          />
        </div>
        <button
          type="submit"
          disabled={input.trim().length === 0}
          className="h-[44px] rounded-full px-6 text-[14px] leading-[1.35] tracking-[-0.14px] font-medium cursor-pointer transition-[opacity,transform] duration-200 hover:opacity-85 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:opacity-40"
          style={{
            backgroundColor: "var(--portfolio-primary)",
            color: "var(--portfolio-bg)",
          }}
        >
          Unlock
        </button>
        {error && (
          <p
            className="text-[13px] leading-[1.35] tracking-[-0.13px] transition-colors duration-300"
            style={{ color: "#e06666" }}
          >
            Incorrect password, try again
          </p>
        )}
      </form>
    </div>
  );
}
