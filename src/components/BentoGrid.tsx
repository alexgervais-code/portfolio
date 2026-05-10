import PortfolioCard from "./PortfolioCard";
import AboutMe from "./AboutMe";
import BlurIn from "./BlurIn";
import {
  headerCard,
  col1Projects,
  col2Projects,
  col3Projects,
} from "@/lib/projects";

function HeroText() {
  return (
    <div className="mb-[22px] max-sm:mb-[58px]">
      <BlurIn delay={100} duration={1.5}>
        <h1 className="font-semibold text-[31px] sm:text-[31px] leading-[1.2] tracking-[-0.02em] mb-4 max-sm:max-w-[90%] transition-colors duration-300" style={{ color: "var(--portfolio-primary)" }}>
          Product designer and maker that brings ideas to life through craft
          and play
        </h1>
      </BlurIn>
      <BlurIn delay={300} duration={1.6}>
        <p className="text-[18px] sm:text-[15px] leading-[1.48] transition-colors duration-300" style={{ color: "var(--portfolio-subtitle)" }}>
          Senior product designer at{" "}
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
          . Based in Austin, TX.
        </p>
      </BlurIn>
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
                  <BlurIn key={project.id} delay={1000} duration={1.6} triggerOnLoad>
                    <PortfolioCard project={project} />
                  </BlurIn>
                ))}
              </div>
              <div className="flex flex-col gap-8">
                {col2Projects.map((project) => (
                  <BlurIn key={project.id} delay={1000} duration={1.6} triggerOnLoad>
                    <PortfolioCard project={project} />
                  </BlurIn>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <BlurIn delay={1000} duration={1.6} triggerOnLoad>
              <PortfolioCard project={headerCard} />
            </BlurIn>
            {col3Projects.map((project) => (
              <BlurIn key={project.id} delay={1000} duration={1.6} triggerOnLoad>
                <PortfolioCard project={project} />
              </BlurIn>
            ))}
            <div className="w-[calc(200%+32px)] -ml-[calc(100%+32px)]">
              <BlurIn delay={1000} duration={1.6} triggerOnLoad>
                <AboutMe />
              </BlurIn>
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
            <BlurIn delay={1000} duration={1.6} triggerOnLoad><PortfolioCard project={col1Projects[0]} /></BlurIn>
            <BlurIn delay={1000} duration={1.6} triggerOnLoad><PortfolioCard project={headerCard} /></BlurIn>
            <BlurIn delay={1000} duration={1.6} triggerOnLoad><PortfolioCard project={col2Projects[1]} /></BlurIn>
            <BlurIn delay={1000} duration={1.6} triggerOnLoad><PortfolioCard project={col1Projects[1]} /></BlurIn>
          </div>
          <div className="flex flex-col gap-8">
            <BlurIn delay={1000} duration={1.6} triggerOnLoad><PortfolioCard project={col2Projects[0]} /></BlurIn>
            <BlurIn delay={1000} duration={1.6} triggerOnLoad><PortfolioCard project={col3Projects[0]} /></BlurIn>
            <BlurIn delay={1000} duration={1.6} triggerOnLoad><PortfolioCard project={col1Projects[2]} useResponsiveImage /></BlurIn>
          </div>
        </div>
        <div className="mt-8 w-[712px]">
          <BlurIn delay={1000} duration={1.6} triggerOnLoad><AboutMe /></BlurIn>
        </div>
      </div>

      {/* Mobile: single-column layout */}
      <div className="layout-mobile">
        <HeroText />
        <div className="flex flex-col gap-6">
          <BlurIn delay={1000} duration={1.6} triggerOnLoad><PortfolioCard project={col1Projects[0]} /></BlurIn>
          <BlurIn delay={1000} duration={1.6} triggerOnLoad><PortfolioCard project={col2Projects[0]} /></BlurIn>
          <BlurIn delay={1000} duration={1.6} triggerOnLoad><PortfolioCard project={headerCard} /></BlurIn>
          <BlurIn delay={1000} duration={1.6} triggerOnLoad><PortfolioCard project={col3Projects[0]} /></BlurIn>
          <BlurIn delay={1000} duration={1.6} triggerOnLoad><PortfolioCard project={col2Projects[1]} /></BlurIn>
          <BlurIn delay={1000} duration={1.6} triggerOnLoad><PortfolioCard project={col1Projects[1]} /></BlurIn>
          <BlurIn delay={1000} duration={1.6} triggerOnLoad><PortfolioCard project={col1Projects[2]} /></BlurIn>
        </div>
        <div className="mt-6">
          <BlurIn delay={1000} duration={1.6} triggerOnLoad><AboutMe mobile /></BlurIn>
        </div>
      </div>
    </section>
  );
}
