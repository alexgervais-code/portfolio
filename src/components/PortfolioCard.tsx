import Image from "next/image";
import type { Project } from "@/lib/projects";

interface PortfolioCardProps {
  project: Project;
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  const {
    title,
    description,
    imageSrc,
    logoSrc,
    logoLabel,
    logoSecondarySrc,
    logoSecondaryLabel,
    logoHeight,
    imageAspectRatio,
  } = project;

  return (
    <div className="bg-[#f7faff] border border-[#c8dbff] rounded-[28px] overflow-hidden flex flex-col">
      {/* Image area */}
      <div
        className="relative w-full bg-[#edf4ff] overflow-hidden"
        style={{ aspectRatio: imageAspectRatio }}
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {logoSrc && (
          <div className={`absolute top-3 left-3 bg-white border border-[#c8dbff] rounded-[60px] flex items-center justify-center px-[8px] h-[26px] ${logoSecondarySrc ? 'gap-1.5' : ''}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} alt={logoLabel ?? ""} className="w-auto" style={{ height: logoHeight ?? 16 }} />
            {logoSecondarySrc && (
              <>
                <span className="text-[#0057f9] text-xs leading-none select-none">
                  ×
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logoSecondarySrc}
                  alt={logoSecondaryLabel ?? ""}
                  className="h-[16px] w-auto"
                />
              </>
            )}
          </div>
        )}
      </div>

      {/* Text area */}
      <div className="px-5 pt-5 pb-[17px] flex flex-col gap-1.5">
        <p className="font-semibold text-[#0057f9] text-base leading-5">
          {title}
        </p>
        <p className="text-[#6492ff] text-sm leading-[1.4]">{description}</p>
      </div>
    </div>
  );
}
