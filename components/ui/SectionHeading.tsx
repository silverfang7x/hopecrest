"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  className?: string;
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={clsx("mx-auto max-w-3xl text-center", className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
    >
      {eyebrow ? (
        <motion.p
          variants={itemVariants}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent"
        >
          {eyebrow}
        </motion.p>
      ) : null}

      <motion.h2
        variants={itemVariants}
        className="font-display text-4xl leading-tight text-cream md:text-5xl"
      >
        {title}
      </motion.h2>

      {subtitle ? (
        <motion.p
          variants={itemVariants}
          className="mx-auto mt-5 max-w-2xl text-base text-muted md:text-lg"
        >
          {subtitle}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
