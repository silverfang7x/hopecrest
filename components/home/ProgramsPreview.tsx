"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProgramCard from "@/components/ui/ProgramCard";

const programs = [
  {
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=80",
    category: "Environment",
    title: "Clean Water Initiative",
    description:
      "Building resilient clean-water systems and community-led sanitation programs in water-stressed regions.",
    slug: "/programs/clean-water-initiative",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80",
    category: "Education",
    title: "Girls Education Fund",
    description:
      "Providing scholarships, safe classrooms, and mentorship pathways so girls can stay in school and thrive.",
    slug: "/programs/girls-education-fund",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1400&q=80",
    category: "Health",
    title: "Rural Healthcare Access",
    description:
      "Expanding preventive care, telehealth, and mobile clinics for remote communities with limited services.",
    slug: "/programs/rural-healthcare-access",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const item = {
  hidden: { y: 28, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export default function ProgramsPreview() {
  return (
    <section id="programs" className="bg-primary px-6 py-20 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Featured Programs</p>
            <h2 className="mt-3 font-display text-4xl italic text-cream md:text-5xl">Where your support creates change</h2>
          </div>
          <Link
            href="/programs"
            className="hidden text-sm font-semibold text-accent transition-colors hover:text-accentDark md:inline-flex"
          >
            View all programs →
          </Link>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={item} className="md:row-span-2">
            <ProgramCard
              image={programs[0].image}
              category={programs[0].category}
              title={programs[0].title}
              description={programs[0].description}
              slug={programs[0].slug}
              className="h-full"
              imageClassName="md:h-[26rem] md:aspect-auto"
            />
          </motion.div>

          <motion.div variants={item} className="md:col-start-2 md:row-start-1">
            <ProgramCard
              image={programs[1].image}
              category={programs[1].category}
              title={programs[1].title}
              description={programs[1].description}
              slug={programs[1].slug}
            />
          </motion.div>

          <motion.div variants={item} className="md:col-start-3 md:row-start-2">
            <ProgramCard
              image={programs[2].image}
              category={programs[2].category}
              title={programs[2].title}
              description={programs[2].description}
              slug={programs[2].slug}
            />
          </motion.div>
        </motion.div>

        <Link
          href="/programs"
          className="mt-8 inline-flex text-sm font-semibold text-accent transition-colors hover:text-accentDark md:hidden"
        >
          View all programs →
        </Link>
      </div>
    </section>
  );
}
