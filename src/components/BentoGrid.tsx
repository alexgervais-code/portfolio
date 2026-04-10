import Image from "next/image";
import PortfolioCard from "./PortfolioCard";
import AboutMe from "./AboutMe";
import {
  headerCard,
  col1Projects,
  col2Projects,
  col3Projects,
} from "@/lib/projects";

function HeroText() {
  return (
    <div className="mb-[22px] max-sm:mb-[58px]">
      <h1 className="font-bold text-[#0057f9] text-[32px] sm:text-[28px] leading-[1.35] tracking-[-0.01em] mb-4 max-sm:max-w-[90%]">
        Product designer and maker that brings ideas to life through craft
        and play
      </h1>
      <p className="text-[#0049f9] text-[18px] sm:text-[15px] leading-[1.48]">
        Currently crafting AI experiences as a senior product designer at{" "}
        <a
          href="https://hubspot.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium inline-flex items-center gap-[3px] border-b border-dashed border-[#9ab8ff]"
        >
          HubSpot
          <span className="relative inline-block size-[14px] shrink-0">
            <Image
              src="/images/icons/arrow_pointer_icon_for_links.svg"
              alt=""
              fill
              className="object-contain"
            />
          </span>
        </a>
      </p>
    </div>
  );
}

export default function BentoGrid() {
  return (
    <section>
      {/* Desktop: 3-column layout */}
      <div className="hidden desktop:grid grid-cols-[357px_357px_357px] gap-x-8 items-start">
          <div className="col-span-2 flex flex-col gap-8">
            <HeroText />
            <div className="grid grid-cols-2 gap-x-8 items-start">
              <div className="flex flex-col gap-8">
                {col1Projects.map((project) => (
                  <PortfolioCard key={project.id} project={project} />
                ))}
              </div>
              <div className="flex flex-col gap-8">
                {col2Projects.map((project) => (
                  <PortfolioCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <PortfolioCard project={headerCard} />
            {col3Projects.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
            <div className="w-[calc(200%+32px)] -ml-[calc(100%+32px)]">
              <AboutMe />
            </div>
          </div>
      </div>

      {/* Tablet: 2-column layout */}
      <div className="hidden sm:max-desktop:flex flex-col items-center">
        <div className="w-[712px]">
          <HeroText />
        </div>
        <div className="grid grid-cols-[340px_340px] gap-8 items-start">
          <div className="flex flex-col gap-8">
            <PortfolioCard project={col1Projects[0]} />
            <PortfolioCard project={headerCard} />
            <PortfolioCard project={col2Projects[1]} />
            <PortfolioCard project={col1Projects[1]} />
          </div>
          <div className="flex flex-col gap-8">
            <PortfolioCard project={col2Projects[0]} />
            <PortfolioCard project={col3Projects[0]} />
            <PortfolioCard project={col1Projects[2]} useResponsiveImage />
          </div>
        </div>
        <div className="mt-8 w-[712px]">
          <AboutMe />
        </div>
      </div>

      {/* Mobile: single-column layout */}
      <div className="sm:hidden">
        <HeroText />
        <div className="flex flex-col gap-6">
          <PortfolioCard project={col1Projects[0]} />
          <PortfolioCard project={col2Projects[0]} />
          <PortfolioCard project={headerCard} />
          <PortfolioCard project={col3Projects[0]} />
          <PortfolioCard project={col2Projects[1]} />
          <PortfolioCard project={col1Projects[1]} />
          <PortfolioCard project={col1Projects[2]} />
        </div>
        <div className="mt-6">
          <AboutMe mobile />
        </div>
      </div>
    </section>
  );
}
