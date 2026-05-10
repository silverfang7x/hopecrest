"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import Button from "@/components/ui/Button";

const amountOptions = [25, 50, 100, 250] as const;

const container = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function CTASection() {
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(50);
  const [customAmount, setCustomAmount] = useState("");

  const donationAmount = useMemo(() => {
    if (selectedAmount === "custom") {
      const parsed = Number(customAmount);
      return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
    }

    return selectedAmount;
  }, [customAmount, selectedAmount]);

  const familySupport = donationAmount > 0 ? donationAmount / 50 : 0;
  const familyText =
    familySupport % 1 === 0 ? familySupport.toFixed(0) : familySupport.toFixed(1);

  return (
    <section
      id="donate"
      className="relative w-full overflow-hidden px-6 py-20 md:py-24"
      style={{ background: "linear-gradient(135deg, #004D3D 0%, #007A60 100%)" }}
    >
      <div className="noise-texture" aria-hidden="true" />

      <motion.div
        className="relative mx-auto flex w-full max-w-4xl flex-col items-center text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.p
          variants={item}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/80"
        >
          Make a Difference Today
        </motion.p>

        <motion.h2
          variants={item}
          className="mt-5 max-w-3xl font-display text-4xl italic leading-tight text-cream md:text-6xl"
        >
          Your $50 provides clean water for a family for one year.
        </motion.h2>

        <motion.div
          variants={item}
          className="mt-10 flex w-full max-w-3xl flex-wrap items-center justify-center gap-3"
        >
          {amountOptions.map((amount) => (
            <button
              key={amount}
              type="button"
              onClick={() => setSelectedAmount(amount)}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                selectedAmount === amount
                  ? "border-cream bg-cream text-primary"
                  : "border-cream/40 bg-transparent text-cream hover:border-cream/70"
              }`}
            >
              ${amount}
            </button>
          ))}

          <button
            type="button"
            onClick={() => setSelectedAmount("custom")}
            className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
              selectedAmount === "custom"
                ? "border-cream bg-cream text-primary"
                : "border-cream/40 bg-transparent text-cream hover:border-cream/70"
            }`}
          >
            Custom
          </button>
        </motion.div>

        {selectedAmount === "custom" ? (
          <motion.div variants={item} className="mt-4 w-full max-w-xs">
            <label htmlFor="custom-donation" className="sr-only">
              Enter custom donation amount
            </label>
            <input
              id="custom-donation"
              type="number"
              min="1"
              inputMode="numeric"
              placeholder="Enter amount"
              value={customAmount}
              onChange={(event) => setCustomAmount(event.target.value)}
              className="w-full rounded-full border border-cream/40 bg-primary/20 px-5 py-3 text-center text-cream placeholder:text-cream/50 focus:border-cream/70 focus:outline-none"
            />
          </motion.div>
        ) : null}

        <motion.p variants={item} className="mt-6 text-sm text-cream/85 md:text-base">
          {donationAmount > 0
            ? `A $${donationAmount.toLocaleString()} gift helps provide clean water support for about ${familyText} ${
                Number(familyText) === 1 ? "family" : "families"
              } for one year.`
            : "Choose an amount to preview your impact."}
        </motion.p>

        <motion.div variants={item} className="mt-8">
          <Button variant="primary" size="lg" className="px-10 py-4 text-lg font-semibold">
            Donate Now
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
