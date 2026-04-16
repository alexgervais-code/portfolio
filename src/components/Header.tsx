"use client";

import Image from "next/image";
import { useRef, useState, useCallback, useEffect } from "react";
import ThemePicker from "./ThemePicker";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/alex-gervais/",
    label: "LinkedIn",
    icon: "/images/icons/linkedin_logo_for_top_nav_first_position.svg",
  },
  {
    href: "https://x.com/alex___gervais",
    label: "X (Twitter)",
    icon: "/images/icons/x_logo_top_right.svg",
  },
  {
    href: "/resume/Resume.pdf",
    label: "CV",
    icon: "/images/icons/cv_icon_for_top_nav_third_position.svg",
    download: true,
  },
  {
    href: "mailto:alexgervais.ui@gmail.com",
    label: "Email",
    icon: "/images/icons/email_icon_for_top_nav_last_position.svg",
  },
];

export default function Header() {
  const avatarRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [canHover, setCanHover] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanHover(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!avatarRef.current) return;
    const rect = avatarRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    const maxShift = 12;
    setOffset({
      x: Math.max(-maxShift, Math.min(maxShift, dx * 0.35)),
      y: Math.max(-maxShift, Math.min(maxShift, dy * 0.35)),
    });
  }, []);

  const handleMouseEnter = useCallback((e: React.MouseEvent) => {
    if (!canHover) return;
    setIsHovering(true);
    handleMouseMove(e);
  }, [canHover, handleMouseMove]);

  const handleMouseLeave = useCallback(() => {
    if (!canHover) return;
    setIsHovering(false);
    setOffset({ x: 0, y: 0 });
  }, [canHover]);

  const handleTap = useCallback(() => {
    if (canHover) return;
    setOffset({ x: 0, y: 0 });
    setIsHovering((prev) => !prev);
  }, [canHover]);

  return (
    <header className="pt-8">
      {/* Top bar: avatar + name | social icons */}
      <div className="flex items-center justify-between mb-[70px]">
        <div className="flex items-center gap-[10px]">
          <div
            ref={avatarRef}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleTap}
            className="avatar-border relative size-[34px] rounded-full overflow-hidden shrink-0 ease-out cursor-pointer"
            style={{
              transform: isHovering
                ? `scale(1.6) translate(${offset.x}px, ${offset.y}px)`
                : "scale(1) translate(0px, 0px)",
              zIndex: isHovering ? 10 : undefined,
              transition: "transform 0.3s ease-out, border-color 0.3s ease",
            }}
          >
            <Image
              src="/images/avatar.png"
              alt="Alex Gervais"
              fill
              className="object-cover scale-125"
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="font-semibold text-base tracking-[-0.48px] leading-none transition-colors duration-300" style={{ color: "var(--portfolio-primary)" }}>
              Alex Gervais
            </span>
            <div
              className="wave-line w-[85px] h-[4px] theme-icon"
              style={{
                backgroundImage: "url('/images/header-illustration.svg')",
                backgroundRepeat: "repeat-x",
                backgroundSize: "85px 4px",
              }}
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ThemePicker />
        <nav className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              download={"download" in link && link.download ? "" : undefined}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="relative size-4 block hover:opacity-70 hover:scale-125 transition-[opacity,transform] duration-200"
            >
              <Image
                src={link.icon}
                alt={link.label}
                fill
                className="object-contain theme-icon"
              />
            </a>
          ))}
        </nav>
        </div>
      </div>

    </header>
  );
}
