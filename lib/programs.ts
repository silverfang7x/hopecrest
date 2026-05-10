export type Program = {
  id: number;
  slug: string;
  title: string;
  category: "Education" | "Health" | "Environment" | "Women Empowerment";
  description: string;
  image: string;
  countryTags: string[];
  raised: number;
  goal: number;
  beneficiaries: string;
};

export const programs: Program[] = [
  {
    id: 1,
    slug: "clean-water-initiative",
    title: "Clean Water Initiative",
    category: "Environment",
    description:
      "Installing solar-powered wells and community water stations to provide safe, reliable drinking water.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=80",
    countryTags: ["Kenya", "Uganda", "Tanzania"],
    raised: 420000,
    goal: 600000,
    beneficiaries: "38,000 people",
  },
  {
    id: 2,
    slug: "girls-education-fund",
    title: "Girls Education Fund",
    category: "Education",
    description:
      "Scholarships, school supplies, and mentorship programs helping girls complete secondary education.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80",
    countryTags: ["India", "Nepal"],
    raised: 310000,
    goal: 500000,
    beneficiaries: "12,500 students",
  },
  {
    id: 3,
    slug: "rural-healthcare-access",
    title: "Rural Healthcare Access",
    category: "Health",
    description:
      "Mobile clinics and telehealth access connecting remote families to preventive and primary care.",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1400&q=80",
    countryTags: ["Brazil", "Peru"],
    raised: 510000,
    goal: 700000,
    beneficiaries: "64,000 patients",
  },
  {
    id: 4,
    slug: "mothers-microenterprise-circle",
    title: "Mothers Microenterprise Circle",
    category: "Women Empowerment",
    description:
      "Training, seed grants, and coaching that help women launch sustainable local businesses.",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1400&q=80",
    countryTags: ["Ghana", "Rwanda"],
    raised: 205000,
    goal: 350000,
    beneficiaries: "1,900 entrepreneurs",
  },
  {
    id: 5,
    slug: "school-meals-network",
    title: "School Meals Network",
    category: "Education",
    description:
      "Daily nutrition programs in underserved schools to improve attendance, focus, and long-term outcomes.",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1400&q=80",
    countryTags: ["Bangladesh", "Philippines"],
    raised: 260000,
    goal: 400000,
    beneficiaries: "28,300 children",
  },
  {
    id: 6,
    slug: "community-climate-resilience",
    title: "Community Climate Resilience",
    category: "Environment",
    description:
      "Restoring ecosystems and improving climate adaptation with local conservation and clean-energy efforts.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    countryTags: ["Colombia", "Indonesia"],
    raised: 340000,
    goal: 520000,
    beneficiaries: "22 communities",
  },
];
