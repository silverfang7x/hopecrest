"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const headlineContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const headlineItem = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const partners = [
  "Global Relief Alliance",
  "CareBridge International",
  "FutureRoots Foundation",
  "Unity Health Collective",
  "Rise Together Network",
  "Open Hands Initiative",
];

export default function HeroSection() {
  return (
    <>
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden bg-primary px-6 pb-24 pt-32 md:pt-36"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="hero-blob hero-blob--one" />
          <div className="hero-blob hero-blob--two" />
          <div className="hero-blob hero-blob--three" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl">
          <motion.div
            className="max-w-4xl"
            variants={headlineContainer}
            initial="hidden"
            animate="show"
          >
            <motion.p
              variants={headlineItem}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-body text-4xl font-light text-cream/95 md:text-6xl"
            >
              Building
            </motion.p>
            <motion.p
              variants={headlineItem}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-body mt-1 text-4xl font-light text-cream/95 md:text-6xl"
            >
              Brighter
            </motion.p>
            <motion.div
              variants={headlineItem}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative mt-2 inline-block"
            >
              <p className="font-display text-6xl font-black italic leading-none text-cream sm:text-7xl md:text-8xl lg:text-9xl">
                Futures
              </p>
              <svg
                className="absolute -bottom-5 left-0 w-full max-w-[320px] text-accent md:-bottom-6 md:max-w-[430px]"
                viewBox="0 0 320 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M3 24C24 6 46 34 67 18C88 2 109 31 131 16C152 1 174 29 196 15C217 1 240 29 261 16C280 5 298 20 317 12"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>

            <motion.p
              variants={headlineItem}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mt-10 max-w-2xl text-base leading-relaxed text-cream/75 md:text-xl"
            >
              We connect donors with programs that transform communities across 40+ countries.
            </motion.p>

            <motion.div
              variants={headlineItem}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="#donate"
                className="rounded-full bg-accent px-8 py-4 text-base font-semibold text-primary transition-colors hover:bg-accentDark md:text-lg"
              >
                Donate Now
              </Link>
              <Link
                href="#programs"
                className="rounded-full border border-accent/60 bg-transparent px-8 py-4 text-base font-semibold text-accent transition-colors hover:border-accent hover:bg-accent/10 md:text-lg"
              >
                Explore Programs
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute inset-x-0 bottom-7 flex justify-center">
          <div className="relative h-px w-44 bg-cream/20">
            <span className="scroll-dot absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-cream/10 bg-surface/80 py-4">
        <div className="ticker-track">
          {[...partners, ...partners].map((name, index) => (
            <span key={`${name}-${index}`} className="ticker-item">
              {name}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
