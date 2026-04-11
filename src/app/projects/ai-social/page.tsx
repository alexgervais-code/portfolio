import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Social Publishing Tools — Alex Gervais",
  description:
    "Spearheaded the development of an agentic workflow builder, resulting in a 40% increase in team efficiency.",
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
      className={`bg-[#edf4ff] border border-[#c8dbff] rounded-[28px] overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

export default function AISocialPage() {
  return (
    <main className="case-study-container mx-auto w-full">
      {/* Nav bar: back button + social links */}
      <header className="pt-8 flex items-center justify-between mb-[60px] max-sm:mb-[50px]">
        <Link
          href="/"
          className="size-[34px] rounded-full bg-white border border-[#c8dbff] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.05)] flex items-center justify-center hover:opacity-70 transition-opacity"
        >
          <Image
            src="/images/icons/back_button.svg"
            alt="Back to portfolio"
            width={12}
            height={12}
          />
        </Link>
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
              className="relative size-4 block hover:opacity-70 transition-opacity"
            >
              <Image
                src={link.icon}
                alt={link.label}
                fill
                className="object-contain"
              />
            </a>
          ))}
        </nav>
      </header>

      {/* Title & description */}
      <div className="mb-[82px] max-sm:mb-[62px]">
        <h1 className="font-bold text-[#0057f9] text-[28px] leading-[1.35] tracking-[-0.28px] max-w-[359px] max-sm:max-w-[282px]">
          AI Social Publishing Tools
        </h1>
        <div className="mt-[44px] flex max-sm:flex-col max-sm:gap-4 gap-[100px]">
          <p className="text-[#0057f9] text-[16px] leading-[1.35] tracking-[-0.16px] max-w-[481px]">
            BuzzFeed relies on a suite of powerful social publishing tools powered
            by machine learning that help automate the distribution of over 1200+
            new pieces of content per day. I led the design these of these tools,
            and spearheaded an effort to make our automation system easier to
            understand and configure. I redesigned our core tool and created a new
            tool for driving Instagram and TikTok referral.
          </p>
          <div className="flex max-sm:flex-row max-sm:gap-4 sm:flex-col sm:gap-2 text-[#6b9af2] text-[14px] leading-[1.35] tracking-[-0.14px]">
            <span>BuzzFeed</span>
            <span>2019 - 2022</span>
          </div>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="case-layout-desktop flex-col gap-8">
        {/* Row 1: Full-width hero */}
        <CaseStudyCard>
          <div className="relative w-full" style={{ aspectRatio: "1200/700" }}>
            <Image
              src="/images/projects/ai_social_tools/image_1.png"
              alt="AI Social Publishing Tools — main interface"
              fill
              className="object-cover"
              sizes="1200px"
            />
          </div>
        </CaseStudyCard>

        {/* Row 2: Tall left card + wide right card stacked with smaller cards */}
        <div className="grid grid-cols-[379fr_789fr] gap-8">
          {/* Left tall card spanning 2 rows */}
          <CaseStudyCard className="row-span-2">
            <div
              className="relative w-full"
              style={{ aspectRatio: "379/725" }}
            >
              <Image
                src="/images/projects/ai_social_tools/image_2.png"
                alt="Mobile social feed view"
                fill
                className="object-cover"
                sizes="379px"
              />
            </div>
          </CaseStudyCard>

          {/* Right top card */}
          <CaseStudyCard>
            <div
              className="relative w-full"
              style={{ aspectRatio: "789/354" }}
            >
              <Image
                src="/images/projects/ai_social_tools/image_3.png"
                alt="Automations workflow"
                fill
                className="object-cover"
                sizes="789px"
              />
            </div>
          </CaseStudyCard>

          {/* Right bottom: 2 cards side by side */}
          <div className="grid grid-cols-2 gap-8">
            <CaseStudyCard>
              <div
                className="relative w-full"
                style={{ aspectRatio: "379/339" }}
              >
                <Image
                  src="/images/projects/ai_social_tools/image_4.png"
                  alt="Publishing interface"
                  fill
                  className="object-cover"
                  sizes="379px"
                />
              </div>
            </CaseStudyCard>
            <CaseStudyCard>
              <div
                className="relative w-full"
                style={{ aspectRatio: "379/339" }}
              >
                <Image
                  src="/images/projects/ai_social_tools/image_5.png"
                  alt="Social content cards"
                  fill
                  className="object-cover"
                  sizes="379px"
                />
              </div>
            </CaseStudyCard>
          </div>
        </div>

        {/* Row 3: Three equal cards */}
        <div className="grid grid-cols-3 gap-8">
          <CaseStudyCard>
            <div
              className="relative w-full"
              style={{ aspectRatio: "379/244" }}
            >
              <Image
                src="/images/projects/ai_social_tools/image_6.png"
                alt="Emoji engagement analytics"
                fill
                className="object-cover"
                sizes="379px"
              />
            </div>
          </CaseStudyCard>
          <CaseStudyCard>
            <div
              className="relative w-full"
              style={{ aspectRatio: "379/244" }}
            >
              <Image
                src="/images/projects/ai_social_tools/image_7.png"
                alt="Social post preview"
                fill
                className="object-cover"
                sizes="379px"
              />
            </div>
          </CaseStudyCard>
          <CaseStudyCard>
            <div
              className="relative w-full"
              style={{ aspectRatio: "379/244" }}
            >
              <Image
                src="/images/projects/ai_social_tools/image_8.png"
                alt="Content analytics view"
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
        {/* Hero */}
        <CaseStudyCard className="w-full">
          <div className="relative w-full" style={{ aspectRatio: "789/487" }}>
            <Image
              src="/images/projects/ai_social_tools/image_1.png"
              alt="AI Social Publishing Tools — main interface"
              fill
              className="object-cover"
              sizes="789px"
            />
          </div>
        </CaseStudyCard>

        {/* Row 2: Tall left + right stacked column */}
        <div className="grid grid-cols-[242fr_515fr] gap-8 items-start">
          <CaseStudyCard>
            <div
              className="relative w-full"
              style={{ aspectRatio: "242/442" }}
            >
              <Image
                src="/images/projects/ai_social_tools/image_2.png"
                alt="Mobile social feed view"
                fill
                className="object-cover"
                sizes="242px"
              />
            </div>
          </CaseStudyCard>
          <div className="flex flex-col gap-8">
            <CaseStudyCard>
              <div
                className="relative w-full"
                style={{ aspectRatio: "516/231" }}
              >
                <Image
                  src="/images/projects/ai_social_tools/image_3_md_breakpoint.png"
                  alt="Automations workflow"
                  fill
                  className="object-cover"
                  sizes="516px"
                />
              </div>
            </CaseStudyCard>
            <div className="grid grid-cols-2 gap-8">
              <CaseStudyCard>
                <div
                  className="relative w-full"
                  style={{ aspectRatio: "242/179" }}
                >
                  <Image
                    src="/images/projects/ai_social_tools/image_4.png"
                    alt="Publishing interface"
                    fill
                    className="object-cover"
                    sizes="242px"
                  />
                </div>
              </CaseStudyCard>
              <CaseStudyCard>
                <div
                  className="relative w-full"
                  style={{ aspectRatio: "242/179" }}
                >
                  <Image
                    src="/images/projects/ai_social_tools/image_5.png"
                    alt="Social content cards"
                    fill
                    className="object-cover"
                    sizes="242px"
                  />
                </div>
              </CaseStudyCard>
            </div>
          </div>
        </div>

        {/* Row 3: Three small cards */}
        <div className="grid grid-cols-3 gap-8">
          <CaseStudyCard>
            <div
              className="relative w-full"
              style={{ aspectRatio: "242/160" }}
            >
              <Image
                src="/images/projects/ai_social_tools/image_6.png"
                alt="Emoji engagement analytics"
                fill
                className="object-cover"
                sizes="242px"
              />
            </div>
          </CaseStudyCard>
          <CaseStudyCard>
            <div
              className="relative w-full"
              style={{ aspectRatio: "242/160" }}
            >
              <Image
                src="/images/projects/ai_social_tools/image_7_md_breakpoint.png"
                alt="Social post preview"
                fill
                className="object-cover"
                sizes="242px"
              />
            </div>
          </CaseStudyCard>
          <CaseStudyCard>
            <div
              className="relative w-full"
              style={{ aspectRatio: "241/160" }}
            >
              <Image
                src="/images/projects/ai_social_tools/image_8.png"
                alt="Content analytics view"
                fill
                className="object-cover"
                sizes="241px"
              />
            </div>
          </CaseStudyCard>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="case-layout-mobile flex-col gap-6">
        <CaseStudyCard>
          <div className="relative w-full" style={{ aspectRatio: "346/223" }}>
            <Image
              src="/images/projects/ai_social_tools/image_1.png"
              alt="AI Social Publishing Tools — main interface"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </CaseStudyCard>

        <CaseStudyCard>
          <div className="relative w-full" style={{ aspectRatio: "346/509" }}>
            <Image
              src="/images/projects/ai_social_tools/image_2.png"
              alt="Mobile social feed view"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </CaseStudyCard>

        <CaseStudyCard>
          <div className="relative w-full" style={{ aspectRatio: "346/231" }}>
            <Image
              src="/images/projects/ai_social_tools/image_3_mobile_breakpoint.png"
              alt="Social bots automations"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </CaseStudyCard>

        <CaseStudyCard>
          <div className="relative w-full" style={{ aspectRatio: "346/306" }}>
            <Image
              src="/images/projects/ai_social_tools/image_4.png"
              alt="Publishing interface"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </CaseStudyCard>

        <CaseStudyCard>
          <div className="relative w-full" style={{ aspectRatio: "346/305" }}>
            <Image
              src="/images/projects/ai_social_tools/image_5.png"
              alt="Social content cards"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </CaseStudyCard>

        <CaseStudyCard>
          <div className="relative w-full" style={{ aspectRatio: "346/229" }}>
            <Image
              src="/images/projects/ai_social_tools/image_6.png"
              alt="Emoji engagement analytics"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </CaseStudyCard>

        <CaseStudyCard>
          <div className="relative w-full" style={{ aspectRatio: "346/283" }}>
            <Image
              src="/images/projects/ai_social_tools/image_7_mobile_breakpoint.png"
              alt="Social post preview"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </CaseStudyCard>

        <CaseStudyCard>
          <div className="relative w-full" style={{ aspectRatio: "346/259" }}>
            <Image
              src="/images/projects/ai_social_tools/image_8.png"
              alt="Content analytics view"
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
