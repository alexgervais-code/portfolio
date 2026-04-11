"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

interface PortfolioCardProps {
  project: Project;
  useResponsiveImage?: boolean;
}

function CustomCursor({ isClickable }: { isClickable: boolean }) {
  if (isClickable) {
    return (
      <div className="w-[41px] h-[41px] rounded-full bg-white border border-[#e9e9e9] shadow-[0_6px_12.6px_rgba(0,0,0,0.1)] flex items-center justify-center pointer-events-none">
        <svg
          width="14"
          height="14"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.833 14.167 14.167 5.833M14.167 5.833H6.667M14.167 5.833v7.5"
            stroke="#0057f9"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="h-[41px] rounded-full bg-white border border-[#e9e9e9] shadow-[0_6px_12.6px_rgba(0,0,0,0.1)] flex items-center px-[18px] gap-[6px] pointer-events-none whitespace-nowrap">
      <span className="text-[#888] text-[14px] leading-[1.44] tracking-[-0.14px]">
        Coming soon{" "}
        <span className="inline-flex w-[18px]">
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
          stroke="#888"
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

  const [hovered, setHovered] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    targetPos.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleMouseEnter = useCallback((e: React.MouseEvent) => {
    // Snap to initial position so it doesn't animate in from (0,0)
    targetPos.current = { x: e.clientX, y: e.clientY };
    currentPos.current = { x: e.clientX, y: e.clientY };
    setHovered(true);
  }, []);

  useEffect(() => {
    if (!hovered) {
      cancelAnimationFrame(rafRef.current);
      return;
    }

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      const ease = 0.15;
      currentPos.current.x = lerp(currentPos.current.x, targetPos.current.x, ease);
      currentPos.current.y = lerp(currentPos.current.y, targetPos.current.y, ease);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [hovered]);

  const activeImageSrc =
    useResponsiveImage && responsiveImageSrc ? responsiveImageSrc : imageSrc;
  const activeAspectRatio =
    useResponsiveImage && responsiveImageAspectRatio
      ? responsiveImageAspectRatio
      : imageAspectRatio;

  const card = (
    <div
      className={`bg-[#f7faff] border border-[#c8dbff] rounded-[28px] overflow-hidden flex flex-col${href ? " transition-shadow hover:shadow-[0_2px_12px_rgba(0,87,249,0.08)]" : ""}`}
      style={{ cursor: "none" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Image area */}
      <div
        className="relative w-full bg-[#edf4ff] overflow-hidden"
        style={{ aspectRatio: activeAspectRatio }}
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
            className={`absolute top-3 left-3 bg-white border border-[#c8dbff] rounded-[60px] flex items-center justify-center ${logoSecondarySrc ? "px-[4px] h-[26px] gap-1" : logoPill ? "px-[8px] h-[26px]" : "size-[26px]"}`}
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
                <span className="text-[#0057f9] text-sm leading-none select-none">
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
      <div className="px-5 pt-5 pb-[17px] flex flex-col gap-1.5">
        <p className="font-semibold text-[#0057f9] text-base leading-5 max-sm:text-[18px]">
          {title}
        </p>
        <p className="text-[#6492ff] text-sm leading-[1.4] max-sm:text-[16px]">
          {description}
        </p>
      </div>
    </div>
  );

  const cursor = hovered && (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none will-change-transform"
    >
      <CustomCursor isClickable={!!href} />
    </div>
  );

  if (href) {
    return (
      <>
        <Link href={href}>{card}</Link>
        {cursor}
      </>
    );
  }

  return (
    <>
      {card}
      {cursor}
    </>
  );
}
