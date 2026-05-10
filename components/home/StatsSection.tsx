"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  {
    value: 12,
    prefix: "$",
    suffix: "M+",
    label: "Raised",
    description: "Mobilized through donor-funded campaigns and emergency response efforts.",
  },
  {
    value: 40,
    suffix: "+",
    label: "Countries",
    description: "Where Hopecrest supports local teams, partners, and grassroots initiatives.",
  },
  {
    value: 180,
    suffix: "+",
    label: "Programs",
    description: "Focused on education, healthcare access, and sustainable livelihood building.",
  },
  {
    value: 92,
    suffix: "%",
    label: "Impact Score",
    description: "Based on independent evaluations of long-term community outcomes.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export default function StatsSection() {
  return (
    <section className="bg-surface px-6 py-20 md:py-24">
      <motion.div
        className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={containerVariants}
      >
        {stats.map((stat) => (
          <motion.article
            key={stat.label}
            variants={itemVariants}
            className="rounded-xl border border-cream/10 border-l-2 border-l-accent bg-primary/35 p-5 md:p-6"
          >
            <AnimatedCounter
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              duration={2.2}
              className="font-body text-3xl font-semibold text-accent sm:text-4xl md:text-5xl"
            />
            <h3 className="mt-4 text-lg font-bold text-cream">{stat.label}</h3>
            <p className="mt-2 text-sm leading-relaxed text-cream/70">{stat.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
