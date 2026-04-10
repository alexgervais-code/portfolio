export interface Project {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  logoSrc?: string;
  logoLabel?: string;
  logoSecondarySrc?: string;
  logoSecondaryLabel?: string;
  logoHeight?: number;
  logoPill?: boolean;
  responsiveImageSrc?: string;
  responsiveImageAspectRatio?: string;
  /** CSS aspect-ratio value for the image area, e.g. "379/343" */
  imageAspectRatio: string;
}

// The BuzzFeed AI Games card lives in the header (col 3, top)
export const headerCard: Project = {
  id: "buzzfeed-ai-games",
  title: "BuzzFeed's AI Games And Experiences",
  description: "LLM-powered experiences for buzzfeed.com",
  imageSrc: "/images/projects/AI_games_card_image.png",
  logoSrc: "/images/logos/buzzfeed_logo_for_cards.png",
  logoLabel: "BuzzFeed",
  imageAspectRatio: "379/348",
};

export const col1Projects: Project[] = [
  {
    id: "agentic-workflow",
    title: "Agentic Workflow Builder",
    description:
      "Helping 250,000+ businesses grow with custom agents and AI workflows",
    imageSrc: "/images/agentic_workflows_card_image.png",
    logoSrc: "/images/logos/hubspot_logo_for_agentic_workflows_card.png",
    logoLabel: "HubSpot",
    logoHeight: 12,
    logoPill: true,
    imageAspectRatio: "379/343",
  },
  {
    id: "prime-day",
    title: "Prime Day AI Shopping Guide",
    description:
      "An LLM-powered shopping experience created as part of a collaboration with Amazon",
    imageSrc: "/images/projects/prime_day_ai_shopping_guide_card_image.png",
    logoSrc: "/images/logos/buzzfeed_logo_for_cards.png",
    logoLabel: "BuzzFeed",
    logoSecondarySrc:
      "/images/logos/amazing_logo_for_prime_day_shopping_guide_card.png",
    logoSecondaryLabel: "Amazon",
    imageAspectRatio: "379/202",
  },
  {
    id: "reminder-liner",
    title: "Reminder Liner",
    description:
      "Wearable device for students that teaches good habits and helps them pack their bag",
    imageSrc: "/images/projects/reminder_liner_card_image.png",
    responsiveImageSrc: "/images/projects/reminder_liner_tall.png",
    responsiveImageAspectRatio: "379/516",
    imageAspectRatio: "379/275",
  },
];

export const col2Projects: Project[] = [
  {
    id: "ai-social",
    title: "AI Social Publishing Tools",
    description:
      "Maximizing social platform engagement with automation and machine learning",
    imageSrc: "/images/projects/AI_social_publishing_tools_card_image.png",
    logoSrc: "/images/logos/huffpost_logo_for_ai_social_posts_card.png",
    logoLabel: "HuffPost",
    logoPill: true,
    imageAspectRatio: "379/322",
  },
  {
    id: "ontrack-ivf",
    title: "OnTrack IVF Web and Mobile App",
    description:
      "Improving the patient experience and reducing treatment errors in IVF treatment",
    imageSrc: "/images/projects/ontrack_ivf_card_image.png",
    logoSrc: "/images/logos/university_of_michigan_logo_for_ontrack_ivf_card.png",
    logoLabel: "University of Michigan",
    imageAspectRatio: "379/187",
  },
];

// Col 3 in the bento grid (BuzzFeed AI Games is in the header)
export const col3Projects: Project[] = [
  {
    id: "buzzfeed-homepage",
    title: "BuzzFeed Homepage",
    description:
      "Growing engagement and revenue on buzzfeed.com through a homepage redesign and design language refresh",
    imageSrc: "/images/buzzfeed_homepage_card_image.png",
    logoSrc: "/images/logos/buzzfeed_logo_for_cards.png",
    logoLabel: "BuzzFeed",
    imageAspectRatio: "379/348",
  },
];
