"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

interface PortfolioCardProps {
  project: Project;
  useResponsiveImage?: boolean;
}

function ComingSoonPill() {
  return (
    <div
      className="h-[41px] rounded-full shadow-[0_6px_12.6px_rgba(0,0,0,0.1)] flex items-center px-[18px] gap-[2px] pointer-events-none whitespace-nowrap hover-cursor-pill"
      style={{ backgroundColor: "var(--hover-cursor-bg)", border: "1px solid var(--hover-cursor-border)" }}
    >
      <span className="text-[14px] leading-[1.44] tracking-[-0.14px]" style={{ color: "var(--portfolio-accent)" }}>
        Coming soon{" "}
        <span className="inline-flex w-[12px]">
          <span className="ellipsis-dot">.</span>
          <span className="ellipsis-dot ellipsis-dot-2">.</span>
          <span className="ellipsis-dot ellipsis-dot-3">.</span>
        </span>
      </span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M5.833 14.167 14.167 5.833M14.167 5.833H6.667M14.167 5.833v7.5"
          stroke="var(--portfolio-accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function ViewCursor() {
  return (
    <div
      className="w-[41px] h-[41px] rounded-full shadow-[0_6px_12.6px_rgba(0,0,0,0.1)] flex items-center justify-center pointer-events-none"
      style={{ backgroundColor: "var(--hover-cursor-bg)", border: "1px solid var(--hover-cursor-border)" }}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.833 14.167 14.167 5.833M14.167 5.833H6.667M14.167 5.833v7.5"
          stroke="var(--portfolio-primary)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function PortfolioCard({
  project,
  useResponsiveImage,
}: PortfolioCardProps) {
  const {
    title,
    description,
    imageSrc,
    darkImageSrc,
    lightImageSrc,
    logoSrc,
    logoLabel,
    logoSecondarySrc,
    logoSecondaryLabel,
    logoHeight,
    logoPill,
    responsiveImageSrc,
    responsiveImageAspectRatio,
    imageAspectRatio,
    href,
  } = project;

  const [theme, setTheme] = useState("ocean");

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.getAttribute("data-theme") || "ocean");
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    setTheme(document.documentElement.getAttribute("data-theme") || "ocean");
    return () => observer.disconnect();
  }, []);

  const [hovered, setHovered] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isPhone, setIsPhone] = useState(false);
  const [phoneToast, setPhoneToast] = useState<{ phase: "hidden" | "in" | "out"; x: number; y: number }>({ phase: "hidden", x: 0, y: 0 });
  const phoneTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 479px)");
    const update = () => setIsPhone(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
    }
  }, []);

  const handleMouseEnter = useCallback((e: React.MouseEvent) => {
    if (isPhone) return;
    setHovered(true);
    requestAnimationFrame(() => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    });
  }, [isPhone]);

  const handlePhoneTap = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!isPhone || href) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + 48;
    if (phoneTimeoutRef.current) clearTimeout(phoneTimeoutRef.current);
    setPhoneToast({ phase: "in", x, y });
    phoneTimeoutRef.current = setTimeout(() => {
      setPhoneToast((p) => ({ ...p, phase: "out" }));
      phoneTimeoutRef.current = setTimeout(() => {
        setPhoneToast((p) => ({ ...p, phase: "hidden" }));
      }, 400);
    }, 2000);
  }, [isPhone, href]);

  const themedImageSrc =
    theme === "dark" && darkImageSrc ? darkImageSrc :
    theme === "light" && lightImageSrc ? lightImageSrc :
    imageSrc;
  const activeImageSrc =
    useResponsiveImage && responsiveImageSrc ? responsiveImageSrc : themedImageSrc;
  const activeAspectRatio =
    useResponsiveImage && responsiveImageAspectRatio
      ? responsiveImageAspectRatio
      : imageAspectRatio;

  const card = (
    <div
      className="rounded-[28px] overflow-hidden flex flex-col transition-colors duration-300"
      style={{ backgroundColor: "var(--portfolio-card-bg)", border: "1px solid var(--portfolio-card-border)", cursor: isPhone ? "default" : "none" } as React.CSSProperties}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={handlePhoneTap}
    >
      {/* Image area */}
      <div
        className="relative w-full overflow-hidden transition-colors duration-300"
        style={{ backgroundColor: "var(--portfolio-card-image-bg)", aspectRatio: activeAspectRatio } as React.CSSProperties}
      >
        <Image
          src={activeImageSrc}
          alt={title}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {logoSrc && (
          <div
            className={`logo-pill-border absolute top-3 left-3 bg-white rounded-[60px] flex items-center justify-center ${logoSecondarySrc ? "px-[4px] h-[26px] gap-1" : logoPill ? "px-[8px] h-[26px]" : "size-[26px]"}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoSrc}
              alt={logoLabel ?? ""}
              className="w-auto"
              style={{ height: logoHeight ?? 16 }}
            />
            {logoSecondarySrc && (
              <>
                <span className="logo-x text-sm leading-none select-none translate-x-[1px] -translate-y-[1px]" style={{ color: "var(--portfolio-primary)" }}>
                  ×
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logoSecondarySrc}
                  alt={logoSecondaryLabel ?? ""}
                  className="h-[16px] w-auto translate-y-[1px] mr-[2px]"
                />
              </>
            )}
          </div>
        )}
      </div>

      {/* Text area */}
      <div className="px-5 pt-5 pb-[17px] flex flex-col gap-1.5 transition-colors duration-300" style={{ backgroundColor: "var(--portfolio-card-text-bg)" } as React.CSSProperties}>
        <p className="font-semibold text-base leading-5 max-sm:text-[18px] transition-colors duration-300" style={{ color: "var(--portfolio-primary)" }}>
          {title}
        </p>
        <p className="text-sm leading-[1.4] max-sm:text-[16px] transition-colors duration-300" style={{ color: "var(--portfolio-accent)" }}>
          {description}
        </p>
      </div>

    </div>
  );

  const cursor = !isPhone && hovered && (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none will-change-transform"
    >
      {href ? <ViewCursor /> : <ComingSoonPill />}
    </div>
  );

  const phonePill = phoneToast.phase !== "hidden" && (
    <div
      className="fixed z-[9999] pointer-events-none"
      style={{
        left: phoneToast.x,
        top: phoneToast.y,
        animation:
          phoneToast.phase === "in"
            ? "toast-pop 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards"
            : "toast-fade 0.25s ease-in forwards",
      }}
    >
      <ComingSoonPill />
    </div>
  );

  if (href) {
    return (
      <>
        <Link href={href}>{card}</Link>
        {cursor}
        {phonePill}
      </>
    );
  }

  return (
    <>
      {card}
      {cursor}
      {phonePill}
    </>
  );
}
