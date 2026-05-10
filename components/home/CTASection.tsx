"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const amountOptions = [25, 50, 100, 250] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function CTASection() {
  const [selected, setSelected] = useState("$50");
  const [customValue, setCustomValue] = useState("");

  const presetImpactText: Record<string, string> = {
    $25: "Your $25 helps provide clean water for a family for one month.",
    $50: "Your $50 provides clean water for a family for one year.",
    $100: "Your $100 supports clean water and hygiene resources for multiple families.",
    $250: "Your $250 helps fund community-scale water access improvements.",
  };

  const headlineText =
    selected === "Custom" && customValue
      ? `Your $${customValue} makes a real difference.`
      : (presetImpactText[selected] ?? "Your gift makes a real difference.");

  return (
    <section
      id="donate"
      className="relative w-full overflow-hidden px-6 py-20 md:py-24"
      style={{ background: "linear-gradient(135deg, #004D3D 0%, #007A60 100%)" }}
    >
      <div className="noise-texture" aria-hidden="true" />

      <motion.div
        className="relative mx-auto flex w-full max-w-4xl flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.p
          variants={itemVariants}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/80"
        >
          Make a Difference Today
        </motion.p>

        <motion.h2
          variants={itemVariants}
          className="mt-5 max-w-3xl font-display text-4xl italic leading-tight text-cream md:text-6xl"
        >
          {headlineText}
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex w-full max-w-3xl flex-wrap items-center justify-center gap-3"
        >
          {amountOptions.map((amount) => (
            <button
              key={amount}
              type="button"
              onClick={() => {
                setSelected(`$${amount}`);
                setCustomValue("");
              }}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                selected === `$${amount}`
                  ? "border-cream bg-cream text-primary"
                  : "border-cream/40 bg-transparent text-cream hover:border-cream/70"
              }`}
            >
              ${amount}
            </button>
          ))}

          <button
            type="button"
            onClick={() => setSelected("Custom")}
            className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
              selected === "Custom"
                ? "border-cream bg-cream text-primary"
                : "border-cream/40 bg-transparent text-cream hover:border-cream/70"
            }`}
          >
            Custom
          </button>
        </motion.div>

        {selected === "Custom" ? (
          <motion.input
            variants={itemVariants}
            type="number"
            placeholder="Enter amount in $"
            value={customValue}
            onChange={(e) => setCustomValue(e.target.value)}
            className="mt-4 bg-white/10 border border-white/30 text-white placeholder-white/50 rounded-full px-6 py-3 text-center text-lg outline-none focus:border-white w-48"
          />
        ) : null}

        <motion.div variants={itemVariants} className="mt-8">
          <Link
            href="/donate"
            className="inline-flex items-center justify-center rounded-full bg-accent px-10 py-4 text-lg font-semibold text-primary transition-colors hover:bg-accentDark"
          >
            Donate Now
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
