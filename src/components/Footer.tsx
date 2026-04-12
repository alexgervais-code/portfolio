import Image from "next/image";

export default function Footer() {
  return (
    <footer className="pt-[32px] pb-[48px] flex flex-col-reverse sm:flex-row items-start sm:items-center gap-2 sm:gap-0 sm:justify-between">
      <span className="text-[16px] sm:text-sm transition-colors duration-300" style={{ color: "var(--portfolio-footer)" }}>© 2026 Alex Gervais</span>
      <div className="flex items-center gap-1.5 text-[16px] sm:text-sm transition-colors duration-300" style={{ color: "var(--portfolio-footer)" }}>
        <span>Designed by me, built with Claude Code</span>
        <Image
          src="/images/claude_code_logo_for_footer.png"
          alt="Claude Code"
          width={16}
          height={16}
          className="object-contain opacity-60 theme-icon"
        />
      </div>
    </footer>
  );
}
