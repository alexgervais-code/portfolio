"use client";

import { useState, useCallback } from "react";

type ThemeId = "ocean" | "light" | "dark";

function RippleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7c3-2 6-2 9 0s6 2 9 0" />
      <path d="M3 17c3-2 6-2 9 0s6 2 9 0" />
      <path d="M3 12c3-2 6-2 9 0s6 2 9 0" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0" />
      <path d="M3 12h1m8-9v1m8 8h1m-9 8v1m-6.4-15.4l.7.7m12.1-.7l-.7.7m0 11.4l.7.7m-12.1-.7l-.7.7" />
    </svg>
  );
}

function MoonIcon({ filled }: { filled?: boolean }) {
  if (filled) {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341-.82-.476-1.644-1.298-1.31a6.5 6.5 0 0 1-6.864-10.787l.077-.08c.551-.63.113-1.653-.758-1.653h-.266l-.068-.006l-.06-.002z" />
      </svg>
    );
  }
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1-8.313-12.454l0 .008" />
    </svg>
  );
}

const themeIcons: Record<ThemeId, (active: boolean) => React.ReactNode> = {
  ocean: () => <RippleIcon />,
  light: () => <SunIcon />,
  dark: (active) => <MoonIcon filled={active} />,
};

const themeLabels: Record<ThemeId, string> = {
  ocean: "Ocean mode",
  light: "Light mode",
  dark: "Dark mode",
};

const themeOrder: ThemeId[] = ["ocean", "light", "dark"];

export default function ThemePicker() {
  const [active, setActive] = useState<ThemeId>("ocean");

  const activeIndex = themeOrder.indexOf(active);

  const switchTheme = useCallback((id: ThemeId) => {
    setActive(id);
    document.documentElement.setAttribute("data-theme", id);
  }, []);

  return (
    <>
      {/* Desktop: horizontal pill */}
      <div className="hidden xs:block">
        <div className="relative h-[30px] w-[84px] rounded-full" style={{ backgroundColor: "var(--portfolio-theme-picker-bg)" }}>
          {/* Selection indicator */}
          <div
            className="absolute top-[2px] size-[26px] rounded-full shadow-[0_2px_6px_rgba(0,0,0,0.08)] transition-[left,background-color,border-color] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
            style={{ left: 3 + activeIndex * 26, borderColor: "var(--portfolio-theme-picker-border)", borderWidth: 1, borderStyle: "solid", backgroundColor: "var(--portfolio-theme-picker-indicator)" }}
          />
          {/* Icons */}
          <div className="absolute top-[7px] left-[8px] flex items-center gap-[10px] z-10">
            {themeOrder.map((id) => (
              <button
                key={id}
                onClick={() => switchTheme(id)}
                aria-label={themeLabels[id]}
                className="cursor-pointer flex items-center justify-center transition-colors duration-200 size-[16px]"
                style={{ color: active === id ? "var(--portfolio-primary)" : "var(--portfolio-theme-picker-inactive)" }}
              >
                {themeIcons[id](active === id)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: fixed bottom-left, vertical */}
      <div className="xs:hidden fixed bottom-5 left-5 z-[100]">
        <div
          className="relative w-[44px] h-[116px] rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
          style={{ backgroundColor: "var(--portfolio-theme-picker-bg)", border: "1px solid var(--portfolio-card-border)" }}
        >
          {/* Selection indicator */}
          <div
            className="absolute left-[3px] size-[36px] rounded-full shadow-[0_2px_6px_rgba(0,0,0,0.08)] transition-[top,background-color,border-color] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
            style={{ top: 4 + activeIndex * 36, borderColor: "var(--portfolio-theme-picker-border)", borderWidth: 1, borderStyle: "solid", backgroundColor: "var(--portfolio-theme-picker-indicator)" }}
          />
          {/* Icons */}
          <div className="absolute left-[12px] top-[13px] flex flex-col items-center gap-[18px] z-10">
            {themeOrder.map((id) => (
              <button
                key={id}
                onClick={() => switchTheme(id)}
                aria-label={themeLabels[id]}
                className="cursor-pointer flex items-center justify-center transition-colors duration-200 size-[18px]"
                style={{ color: active === id ? "var(--portfolio-primary)" : "var(--portfolio-theme-picker-inactive)" }}
              >
                {themeIcons[id](active === id)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
