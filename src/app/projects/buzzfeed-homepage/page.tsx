import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ThemePicker from "@/components/ThemePicker";

export const metadata: Metadata = {
  title: "BuzzFeed Homepage Redesign — Alex Gervais",
  description:
    "Redesigned BuzzFeed's homepage to modernize the content hierarchy, increasing engagement and ad revenue across the site.",
};

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

function CaseStudyCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[28px] overflow-hidden transition-colors duration-300 ${className}`}
      style={{ backgroundColor: "var(--portfolio-card-image-bg)", border: "1px solid var(--portfolio-card-border)" }}
    >
      {children}
    </div>
  );
}

export default function BuzzFeedHomepagePage() {
  return (
    <main className="case-study-container mx-auto w-full">
      {/* Nav bar: back button + social links */}
      <header className="pt-8 flex items-center justify-between mb-[60px] max-sm:mb-[50px]">
        <Link
          href="/"
          className="back-button size-[34px] rounded-full bg-white shadow-[0px_4px_10px_0px_rgba(0,0,0,0.05)] flex items-center justify-center hover:opacity-70 transition-[opacity,border-color] duration-300"
          style={{ border: "1px solid var(--portfolio-card-border)" }}
        >
          <Image
            src="/images/icons/back_button.svg"
            alt="Back to portfolio"
            width={12}
            height={12}
            className="back-button-icon"
          />
        </Link>
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
      </header>

      {/* Title & description */}
      <div className="mb-[82px] max-sm:mb-[62px]">
        <h1 className="font-semibold text-[31px] leading-[1.2] tracking-[-0.02em] max-w-[359px] max-sm:max-w-[282px] transition-colors duration-300" style={{ color: "var(--portfolio-primary)" }}>
          BuzzFeed Homepage Redesign
        </h1>
        <div className="mt-[44px] flex max-sm:flex-col max-sm:gap-4 gap-[100px]">
          <p className="text-[16px] leading-[1.35] tracking-[-0.16px] max-w-[481px] transition-colors duration-300" style={{ color: "var(--portfolio-primary)" }}>
            BuzzFeed&apos;s homepage was the site&apos;s biggest driver of engagement
            and ad revenue, but it hadn&apos;t evolved to match how people consumed
            content. I redesigned the homepage to modernize the content hierarchy,
            introduce interactive elements like inline reactions and embedded social
            content, and give the editorial team flexible new curation tools. The
            redesign increased both engagement and ad revenue across the site.
          </p>
          <div className="flex max-sm:flex-row max-sm:gap-4 sm:flex-col sm:gap-2 text-[14px] leading-[1.35] tracking-[-0.14px] transition-colors duration-300" style={{ color: "var(--portfolio-accent)" }}>
            <span>BuzzFeed</span>
            <span>Aug 2019 - Oct 2019</span>
          </div>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="case-layout-desktop flex-col gap-8">
        {/* Row 1: Full-width hero */}
        <CaseStudyCard>
          <div className="relative w-full" style={{ aspectRatio: "1200/700" }}>
            <Image
              src="/images/projects/homepage_image_1.png"
              alt="BuzzFeed homepage redesign — desktop view"
              fill
              className="object-cover"
              sizes="1200px"
            />
          </div>
        </CaseStudyCard>

        {/* Row 2: Left column (tall + small) + Right column (medium + wide) */}
        <div className="grid grid-cols-[379px_789px] gap-8 items-start">
          {/* Left column */}
          <div className="flex flex-col gap-8">
            <CaseStudyCard>
              <div className="relative w-full" style={{ aspectRatio: "379/725" }}>
                <Image
                  src="/images/projects/homepage_image_2.png"
                  alt="Mobile homepage layout"
                  fill
                  className="object-cover"
                  sizes="379px"
                />
              </div>
            </CaseStudyCard>
            <CaseStudyCard>
              <div className="relative w-full" style={{ aspectRatio: "379/272" }}>
                <Image
                  src="/images/projects/homepage_image_5.png"
                  alt="Mobile in and out content view"
                  fill
                  className="object-cover"
                  sizes="379px"
                />
              </div>
            </CaseStudyCard>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-8">
            <CaseStudyCard>
              <div className="relative w-full" style={{ aspectRatio: "789/416" }}>
                <Image
                  src="/images/projects/homepage_image_3.png"
                  alt="Content package layout"
                  fill
                  className="object-cover"
                  sizes="789px"
                />
              </div>
            </CaseStudyCard>
            <CaseStudyCard>
              <div className="relative w-full" style={{ aspectRatio: "789/585" }}>
                <Image
                  src="/images/projects/homepage_image_4.png"
                  alt="Social content units — desktop and mobile"
                  fill
                  className="object-cover"
                  sizes="789px"
                />
              </div>
            </CaseStudyCard>
          </div>
        </div>

        {/* Row 4: Three equal cards */}
        <div className="grid grid-cols-[379px_379px_379px] gap-8">
          <CaseStudyCard>
            <div className="relative w-full" style={{ aspectRatio: "379/272" }}>
              <Image
                src="/images/projects/homepage_image_6.png"
                alt="Top comments section"
                fill
                className="object-cover"
                sizes="379px"
              />
            </div>
          </CaseStudyCard>
          <CaseStudyCard>
            <div className="relative w-full" style={{ aspectRatio: "379/272" }}>
              <Image
                src="/images/projects/home_page_image_7.png"
                alt="Trending content module"
                fill
                className="object-cover"
                sizes="379px"
              />
            </div>
          </CaseStudyCard>
          <CaseStudyCard>
            <div className="relative w-full" style={{ aspectRatio: "379/272" }}>
              <Image
                src="/images/projects/homepage_image_8.png"
                alt="Content curation interface"
                fill
                className="object-cover"
                sizes="379px"
              />
            </div>
          </CaseStudyCard>
        </div>
      </div>

      {/* Tablet layout */}
      <div className="case-layout-tablet flex-col gap-8">
        {/* Row 1: Full-width hero */}
        <CaseStudyCard>
          <div className="relative w-full" style={{ aspectRatio: "780/522" }}>
            <Image
              src="/images/projects/homepage_image_1.png"
              alt="BuzzFeed homepage redesign — desktop view"
              fill
              className="object-cover"
              sizes="780px"
            />
          </div>
        </CaseStudyCard>

        {/* Row 2: Full-width content package */}
        <CaseStudyCard>
          <div className="relative w-full" style={{ aspectRatio: "780/428" }}>
            <Image
              src="/images/projects/homepage_image_3.png"
              alt="Content package layout"
              fill
              className="object-cover"
              sizes="780px"
            />
          </div>
        </CaseStudyCard>

        {/* Row 3: Phone left + social units right */}
        <div className="grid grid-cols-[290px_458px] gap-8 items-start">
          <CaseStudyCard>
            <div className="relative w-full" style={{ aspectRatio: "290/571" }}>
              <Image
                src="/images/projects/homepage_image_2.png"
                alt="Mobile homepage layout"
                fill
                className="object-cover"
                sizes="290px"
              />
            </div>
          </CaseStudyCard>
          <CaseStudyCard>
            <div className="relative w-full" style={{ aspectRatio: "458/571" }}>
              <Image
                src="/images/projects/home_image_4_mobile_tablet.png"
                alt="Social content units"
                fill
                className="object-cover"
                sizes="458px"
              />
            </div>
          </CaseStudyCard>
        </div>

        {/* Row 4: Two equal cards */}
        <div className="grid grid-cols-[374px_374px] gap-8">
          <CaseStudyCard>
            <div className="relative w-full" style={{ aspectRatio: "374/295" }}>
              <Image
                src="/images/projects/homepage_image_5.png"
                alt="Mobile in and out content view"
                fill
                className="object-cover"
                sizes="374px"
              />
            </div>
          </CaseStudyCard>
          <CaseStudyCard>
            <div className="relative w-full" style={{ aspectRatio: "374/295" }}>
              <Image
                src="/images/projects/homepage_image_6.png"
                alt="Top comments section"
                fill
                className="object-cover"
                sizes="374px"
              />
            </div>
          </CaseStudyCard>
        </div>

        {/* Row 5: Two equal cards */}
        <div className="grid grid-cols-[374px_374px] gap-8">
          <CaseStudyCard>
            <div className="relative w-full" style={{ aspectRatio: "374/272" }}>
              <Image
                src="/images/projects/home_page_image_7.png"
                alt="Trending content module"
                fill
                className="object-cover"
                sizes="374px"
              />
            </div>
          </CaseStudyCard>
          <CaseStudyCard>
            <div className="relative w-full" style={{ aspectRatio: "374/272" }}>
              <Image
                src="/images/projects/homepage_image_8.png"
                alt="Content curation interface"
                fill
                className="object-cover"
                sizes="374px"
              />
            </div>
          </CaseStudyCard>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="case-layout-mobile flex-col gap-6">
        <CaseStudyCard>
          <div className="relative w-full" style={{ aspectRatio: "346/202" }}>
            <Image
              src="/images/projects/homepage_image_1.png"
              alt="BuzzFeed homepage redesign — desktop view"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </CaseStudyCard>

        <CaseStudyCard>
          <div className="relative w-full" style={{ aspectRatio: "346/662" }}>
            <Image
              src="/images/projects/homepage_image_2.png"
              alt="Mobile homepage layout"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </CaseStudyCard>

        <CaseStudyCard>
          <div className="relative w-full" style={{ aspectRatio: "346/183" }}>
            <Image
              src="/images/projects/homepage_image_3.png"
              alt="Content package layout"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </CaseStudyCard>

        <CaseStudyCard>
          <div className="relative w-full" style={{ aspectRatio: "346/414" }}>
            <Image
              src="/images/projects/home_image_4_mobile_tablet.png"
              alt="Social content units"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </CaseStudyCard>

        <CaseStudyCard>
          <div className="relative w-full" style={{ aspectRatio: "346/248" }}>
            <Image
              src="/images/projects/homepage_image_5.png"
              alt="Mobile in and out content view"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </CaseStudyCard>

        <CaseStudyCard>
          <div className="relative w-full" style={{ aspectRatio: "346/248" }}>
            <Image
              src="/images/projects/homepage_image_6.png"
              alt="Top comments section"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </CaseStudyCard>

        <CaseStudyCard>
          <div className="relative w-full" style={{ aspectRatio: "346/248" }}>
            <Image
              src="/images/projects/home_page_image_7.png"
              alt="Trending content module"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </CaseStudyCard>

        <CaseStudyCard>
          <div className="relative w-full" style={{ aspectRatio: "346/248" }}>
            <Image
              src="/images/projects/homepage_image_8.png"
              alt="Content curation interface"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </CaseStudyCard>
      </div>

      <Footer />
    </main>
  );
}
