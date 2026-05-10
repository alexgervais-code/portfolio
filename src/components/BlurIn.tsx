"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";

export default function BlurIn({
  children,
  delay = 0,
  duration = 0.8,
  triggerOnLoad = false,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  triggerOnLoad?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<"hidden" | "animating" | "done">("hidden");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (triggerOnLoad) {
      setTimeout(() => setPhase("animating"), delay);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setPhase("animating"), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, triggerOnLoad]);

  const style: React.CSSProperties =
    phase === "hidden"
      ? {
          opacity: 0,
          filter: "blur(4px)",
          transform: "translateY(8px)",
        }
      : phase === "animating"
        ? {
            opacity: 1,
            filter: "blur(0px)",
            transform: "translateY(0)",
            transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1), filter ${duration}s cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1)`,
          }
        : {};

  return (
    <div
      ref={ref}
      style={style}
      onTransitionEnd={phase === "animating" ? () => setPhase("done") : undefined}
    >
      {children}
    </div>
  );
}
