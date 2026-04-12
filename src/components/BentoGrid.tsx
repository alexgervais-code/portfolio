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
      <h1 className="font-semibold text-[31px] sm:text-[31px] leading-[1.2] tracking-[-0.02em] mb-4 max-sm:max-w-[90%] transition-colors duration-300" style={{ color: "var(--portfolio-primary)" }}>
        Product designer and maker that brings ideas to life through craft
        and play
      </h1>
      <p className="text-[18px] sm:text-[15px] leading-[1.48] transition-colors duration-300" style={{ color: "var(--portfolio-subtitle)" }}>
        Currently crafting AI experiences as a senior product designer at{" "}
        <a
          href="https://hubspot.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium inline-flex items-center gap-[3px] border-b border-dashed border-[var(--portfolio-card-border)]"
          style={{ color: "var(--portfolio-subtitle)" }}
        >
          HubSpot
          <span className="inline-flex items-center justify-center size-[14px] shrink-0">
            <span className="link-arrow-mask" />
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
      <div className="layout-desktop grid-cols-[357px_357px_357px] gap-x-8 items-start">
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
      <div className="layout-tablet flex-col items-center">
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
      <div className="layout-mobile">
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
