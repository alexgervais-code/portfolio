import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import PasswordGate from "@/components/PasswordGate";
import ThemePicker from "@/components/ThemePicker";

export const metadata: Metadata = {
  title: "Agentic Workflows — Alex Gervais",
  description:
    "Redesigning HubSpot's workflow builder to integrate AI agents as first-class action steps, helping 250,000+ businesses automate with custom agents.",
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

export default function AgenticWorkflowPage() {
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

      <PasswordGate password="blueberry" storageKey="unlock:agentic-workflow">
      {/* Title & description */}
      <div className="mb-[82px] max-sm:mb-[62px]">
        <h1 className="font-semibold text-[31px] leading-[1.2] tracking-[-0.02em] max-w-[429px] max-sm:max-w-none transition-colors duration-300" style={{ color: "var(--portfolio-primary)" }}>
          Agentic Workflows
        </h1>
        <div className="mt-[44px] flex max-sm:flex-col max-sm:gap-4 gap-[100px]">
          <p className="text-[16px] leading-[1.35] tracking-[-0.16px] max-w-[481px] transition-colors duration-300" style={{ color: "var(--portfolio-primary)" }}>
            Workflows is a core automation tool used by a significant portion of
            HubSpot&apos;s 280,000+ customers. It&apos;s the kind of tool businesses
            build their daily operations on top of. It had grown powerful over the
            years, but that power came with complexity: longtime users relied on it,
            while newer users struggled to get started, and core functionality got
            buried under years of additions. I worked on the redesign to modernize
            the experience and expand what the tool could do, while carefully mapping
            migration paths so legacy users wouldn&apos;t lose the workflows they&apos;d
            come to rely on.
          </p>
          <div className="flex max-sm:flex-row max-sm:gap-4 sm:flex-col sm:gap-2 text-[14px] leading-[1.35] tracking-[-0.14px] transition-colors duration-300" style={{ color: "var(--portfolio-accent)" }}>
            <span>HubSpot</span>
            <span>Nov 2025 - Present</span>
          </div>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="case-layout-desktop flex-col gap-8">
        {/* Row 1: Full-width hero */}
        <CaseStudyCard>
          <div className="relative w-full" style={{ aspectRatio: "1200/723" }}>
            <Image
              src="/images/workflows_image_1.png"
              alt="Agentic workflow builder canvas"
              fill
              className="object-cover"
              sizes="1200px"
            />
          </div>
        </CaseStudyCard>

        {/* Row 2: Narrow icons + wide runs */}
        <div className="grid grid-cols-[379px_789px] gap-8 items-start">
          <CaseStudyCard>
            <div className="relative w-full" style={{ aspectRatio: "379/416" }}>
              <Image
                src="/images/workflows_image_2.png"
                alt="Workflow action status icons"
                fill
                className="object-contain"
                sizes="379px"
              />
            </div>
          </CaseStudyCard>
          <CaseStudyCard>
            <div className="relative w-full" style={{ aspectRatio: "789/416" }}>
              <Image
                src="/images/workflows_image_3.png"
                alt="Workflow runs panel with active canvas"
                fill
                className="object-cover"
                sizes="789px"
              />
            </div>
          </CaseStudyCard>
        </div>

        {/* Row 3: Left stacked (send emails + context menu) + Right tall status grid */}
        <div className="grid grid-cols-[379px_789px] gap-8 items-start">
          <div className="flex flex-col gap-8">
            <CaseStudyCard>
              <div className="relative w-full" style={{ aspectRatio: "379/276" }}>
                <Image
                  src="/images/workflows_image_4.png"
                  alt="Send email action cards with integration icons"
                  fill
                  className="object-contain"
                  sizes="379px"
                />
              </div>
            </CaseStudyCard>
            <CaseStudyCard>
              <div className="relative w-full" style={{ aspectRatio: "379/276" }}>
                <Image
                  src="/images/workflows_image_5.png"
                  alt="Workflow canvas context menu"
                  fill
                  className="object-contain"
                  sizes="379px"
                />
              </div>
            </CaseStudyCard>
          </div>
          <CaseStudyCard>
            <div className="relative w-full" style={{ aspectRatio: "789/585" }}>
              <Image
                src="/images/workflows_image_6.png"
                alt="Action step status states"
                fill
                className="object-cover"
                sizes="789px"
              />
            </div>
          </CaseStudyCard>
        </div>
      </div>

      {/* Tablet layout */}
      <div className="case-layout-tablet flex-col gap-8">
        {/* Row 1: Full-width hero */}
        <CaseStudyCard>
          <div className="relative w-full" style={{ aspectRatio: "780/470" }}>
            <Image
              src="/images/workflows_image_1.png"
              alt="Agentic workflow builder canvas"
              fill
              className="object-cover"
              sizes="780px"
            />
          </div>
        </CaseStudyCard>

        {/* Row 2: Full-width runs */}
        <CaseStudyCard>
          <div className="relative w-full" style={{ aspectRatio: "780/411" }}>
            <Image
              src="/images/workflows_image_3.png"
              alt="Workflow runs panel with active canvas"
              fill
              className="object-cover"
              sizes="780px"
            />
          </div>
        </CaseStudyCard>

        {/* Row 3: Full-width status states grid */}
        <CaseStudyCard>
          <div className="relative w-full" style={{ aspectRatio: "780/578" }}>
            <Image
              src="/images/workflows_image_6.png"
              alt="Action step status states"
              fill
              className="object-cover"
              sizes="780px"
            />
          </div>
        </CaseStudyCard>

        {/* Row 4: Narrow icons + wide send emails */}
        <div className="grid grid-cols-[290px_458px] gap-8 items-start">
          <CaseStudyCard>
            <div className="relative w-full" style={{ aspectRatio: "290/318" }}>
              <Image
                src="/images/workflows_image_2.png"
                alt="Workflow action status icons"
                fill
                className="object-contain"
                sizes="290px"
              />
            </div>
          </CaseStudyCard>
          <CaseStudyCard>
            <div className="relative w-full" style={{ aspectRatio: "458/318" }}>
              <Image
                src="/images/workflows_image_4.png"
                alt="Send email action cards with integration icons"
                fill
                className="object-contain"
                sizes="458px"
              />
            </div>
          </CaseStudyCard>
        </div>

        {/* Row 5: Full-width context menu */}
        <CaseStudyCard>
          <div className="relative w-full" style={{ aspectRatio: "780/272" }}>
            <Image
              src="/images/workflows_image_5.png"
              alt="Workflow canvas context menu"
              fill
              className="object-contain"
              sizes="780px"
            />
          </div>
        </CaseStudyCard>
      </div>

      {/* Mobile layout */}
      <div className="case-layout-mobile flex-col gap-6">
        <CaseStudyCard>
          <div className="relative w-full" style={{ aspectRatio: "346/208" }}>
            <Image
              src="/images/workflows_image_1.png"
              alt="Agentic workflow builder canvas"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </CaseStudyCard>

        <CaseStudyCard>
          <div className="relative w-full" style={{ aspectRatio: "346/380" }}>
            <Image
              src="/images/workflows_image_2.png"
              alt="Workflow action status icons"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </CaseStudyCard>

        <CaseStudyCard>
          <div className="relative w-full" style={{ aspectRatio: "346/183" }}>
            <Image
              src="/images/workflows_image_3.png"
              alt="Workflow runs panel with active canvas"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </CaseStudyCard>

        <CaseStudyCard>
          <div className="relative w-full" style={{ aspectRatio: "346/252" }}>
            <Image
              src="/images/workflows_image_4.png"
              alt="Send email action cards with integration icons"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </CaseStudyCard>

        <CaseStudyCard>
          <div className="relative w-full" style={{ aspectRatio: "346/252" }}>
            <Image
              src="/images/workflows_image_5.png"
              alt="Workflow canvas context menu"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </CaseStudyCard>

        <CaseStudyCard>
          <div className="relative w-full" style={{ aspectRatio: "346/257" }}>
            <Image
              src="/images/workflows_image_6.png"
              alt="Action step status states"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </CaseStudyCard>
      </div>

      <Footer />
      </PasswordGate>
    </main>
  );
}
