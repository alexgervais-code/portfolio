import Image from "next/image";
import type { Project } from "@/lib/projects";

interface PortfolioCardProps {
  project: Project;
  useResponsiveImage?: boolean;
}

export default function PortfolioCard({ project, useResponsiveImage }: PortfolioCardProps) {
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
  } = project;

  const activeImageSrc = useResponsiveImage && responsiveImageSrc ? responsiveImageSrc : imageSrc;
  const activeAspectRatio = useResponsiveImage && responsiveImageAspectRatio ? responsiveImageAspectRatio : imageAspectRatio;

  return (
    <div className="bg-[#f7faff] border border-[#c8dbff] rounded-[28px] overflow-hidden flex flex-col">
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
          <div className={`absolute top-3 left-3 bg-white border border-[#c8dbff] rounded-[60px] flex items-center justify-center ${logoSecondarySrc ? 'px-[4px] h-[26px] gap-1' : logoPill ? 'px-[8px] h-[26px]' : 'size-[26px]'}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} alt={logoLabel ?? ""} className="w-auto" style={{ height: logoHeight ?? 16 }} />
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
        <p className="text-[#6492ff] text-sm leading-[1.4] max-sm:text-[16px]">{description}</p>
      </div>
    </div>
  );
}
