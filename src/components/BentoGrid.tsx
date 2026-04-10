import Image from "next/image";
import PortfolioCard from "./PortfolioCard";
import AboutMe from "./AboutMe";
import {
  headerCard,
  col1Projects,
  col2Projects,
  col3Projects,
} from "@/lib/projects";

export default function BentoGrid() {
  return (
    <section>
      <div className="grid grid-cols-3 gap-x-8 items-start">
        {/* Columns 1 + 2: hero text then independent card columns */}
        <div className="col-span-2 flex flex-col gap-8">
          {/* Hero text */}
          <div className="mb-[22px]">
            <h1 className="font-bold text-[#0057f9] text-[28px] leading-[1.35] tracking-[-0.01em] mb-4">
              Product designer and maker that brings ideas to life through craft
              and play
            </h1>
            <p className="text-[#0049f9] text-[15px] leading-[1.48] flex items-center">
              Currently crafting AI experiences as a senior product designer at{" "}
              <a
                href="https://hubspot.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 font-medium inline-flex items-center gap-[3px] border-b border-dashed border-[#9ab8ff]"
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

          {/* Independent card columns */}
          <div className="grid grid-cols-2 gap-x-8 items-start">
            {/* Column 1 */}
            <div className="flex flex-col gap-8">
              {col1Projects.map((project) => (
                <PortfolioCard key={project.id} project={project} />
              ))}
            </div>
            {/* Column 2 */}
            <div className="flex flex-col gap-8">
              {col2Projects.map((project) => (
                <PortfolioCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>

        {/* Column 3: BuzzFeed AI Games card top-aligned with hero + remaining cards + About Me */}
        <div className="flex flex-col gap-8">
          <PortfolioCard project={headerCard} />
          {col3Projects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
          {/* About Me — overflows left to also cover column 2 */}
          <div className="w-[calc(200%+32px)] -ml-[calc(100%+32px)]">
            <AboutMe />
          </div>
        </div>
      </div>
    </section>
  );
}
