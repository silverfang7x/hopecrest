"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import Button from "@/components/ui/Button";
import { programs } from "@/lib/programs";

const amountOptions = [
  { amount: 10, impact: "Provides school supplies for 1 student" },
  { amount: 25, impact: "Feeds 5 children for a month" },
  { amount: 50, impact: "Delivers clean water to a family" },
  { amount: 100, impact: "Supports a mobile health clinic day" },
  { amount: 250, impact: "Funds a teacher training workshop" },
] as const;

const stepTitles = ["Choose Amount", "Your Details", "Confirm & Pay"] as const;

export default function DonatePage() {
  const [step, setStep] = useState(1);
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [selectedAmount, setSelectedAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [programSlug, setProgramSlug] = useState(programs[0]?.slug ?? "");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [newsletter, setNewsletter] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  const finalAmount = useMemo(() => {
    const custom = Number(customAmount);
    return custom > 0 ? custom : selectedAmount;
  }, [customAmount, selectedAmount]);

  const selectedProgram = useMemo(
    () => programs.find((program) => program.slug === programSlug),
    [programSlug],
  );

  const donorName = anonymous ? "Anonymous Donor" : `${firstName} ${lastName}`.trim() || "Friend";

  const canContinueStep1 = finalAmount > 0 && Boolean(programSlug);
  const canContinueStep2 = anonymous || (firstName.trim() && lastName.trim() && email.trim());

  const renderStep = () => {
    if (step === 1) {
      return (
        <motion.section
          key="step-1"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="space-y-8"
        >
          <div>
            <h2 className="font-display text-4xl italic text-cream">Choose Amount</h2>
            <p className="mt-2 text-cream/70">Select how you would like to contribute.</p>
          </div>

          <div className="inline-flex rounded-full border border-cream/20 bg-primary/40 p-1">
            <button
              type="button"
              onClick={() => setFrequency("one-time")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                frequency === "one-time" ? "bg-accent text-primary" : "text-cream/80 hover:text-cream"
              }`}
            >
              One-time
            </button>
            <button
              type="button"
              onClick={() => setFrequency("monthly")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                frequency === "monthly" ? "bg-accent text-primary" : "text-cream/80 hover:text-cream"
              }`}
            >
              Monthly
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {amountOptions.map((option) => {
              const isSelected = !customAmount && selectedAmount === option.amount;

              return (
                <button
                  key={option.amount}
                  type="button"
                  onClick={() => {
                    setCustomAmount("");
                    setSelectedAmount(option.amount);
                  }}
                  className={`rounded-2xl border p-5 text-left transition-all ${
                    isSelected
                      ? "border-accent bg-accent/15 shadow-[0_0_0_1px_rgba(0,200,150,0.5)]"
                      : "border-cream/15 bg-surface/70 hover:border-accent/45"
                  }`}
                >
                  <p className="text-3xl font-semibold text-cream">${option.amount}</p>
                  <p className="mt-2 text-sm text-cream/70">{option.impact}</p>
                </button>
              );
            })}
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="customAmount" className="mb-2 block text-sm font-medium text-cream/80">
                Custom amount
              </label>
              <input
                id="customAmount"
                type="number"
                min="1"
                placeholder="Enter custom amount"
                value={customAmount}
                onChange={(event) => setCustomAmount(event.target.value)}
                className="w-full rounded-xl border border-cream/20 bg-primary/50 px-4 py-3 text-cream placeholder:text-cream/45 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/40"
              />
            </div>

            <div>
              <label htmlFor="programSelect" className="mb-2 block text-sm font-medium text-cream/80">
                Select program
              </label>
              <select
                id="programSelect"
                value={programSlug}
                onChange={(event) => setProgramSlug(event.target.value)}
                className="w-full rounded-xl border border-cream/20 bg-primary/50 px-4 py-3 text-cream outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/40"
              >
                {programs.map((program) => (
                  <option key={program.id} value={program.slug} className="bg-primary text-cream">
                    {program.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <Button
            size="lg"
            className="w-full md:w-auto"
            onClick={() => setStep(2)}
            disabled={!canContinueStep1}
          >
            Continue
          </Button>
        </motion.section>
      );
    }

    if (step === 2) {
      return (
        <motion.section
          key="step-2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="space-y-8"
        >
          <div>
            <h2 className="font-display text-4xl italic text-cream">Your Details</h2>
            <p className="mt-2 text-cream/70">Tell us who this gift is from.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-cream/80">
                First name
              </label>
              <input
                id="firstName"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                className="w-full rounded-xl border border-cream/20 bg-primary/50 px-4 py-3 text-cream outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/40"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-cream/80">
                Last name
              </label>
              <input
                id="lastName"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                className="w-full rounded-xl border border-cream/20 bg-primary/50 px-4 py-3 text-cream outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/40"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-cream/80">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-xl border border-cream/20 bg-primary/50 px-4 py-3 text-cream outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/40"
            />
          </div>

          <div className="space-y-4">
            <button
              type="button"
              onClick={() => setAnonymous((prev) => !prev)}
              className="flex items-center gap-3 text-left"
            >
              <span
                className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${
                  anonymous ? "bg-accent" : "bg-cream/30"
                }`}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-primary transition-transform ${
                    anonymous ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </span>
              <span className="text-sm text-cream/85">Donate anonymously</span>
            </button>

            <label className="flex items-center gap-3 text-sm text-cream/85">
              <input
                type="checkbox"
                checked={newsletter}
                onChange={(event) => setNewsletter(event.target.checked)}
                className="h-4 w-4 rounded border-cream/30 bg-primary/70 text-accent focus:ring-accent"
              />
              Receive monthly impact updates by email
            </label>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button variant="ghost" size="lg" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button size="lg" onClick={() => setStep(3)} disabled={!canContinueStep2}>
              Continue
            </Button>
          </div>
        </motion.section>
      );
    }

    return (
      <motion.section
        key="step-3"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="space-y-8"
      >
        <div>
          <h2 className="font-display text-4xl italic text-cream">Confirm &amp; Pay</h2>
          <p className="mt-2 text-cream/70">Review your gift before completing donation.</p>
        </div>

        <div className="rounded-2xl border border-cream/15 bg-surface/70 p-6">
          <h3 className="text-lg font-semibold text-cream">Donation Summary</h3>
          <dl className="mt-4 space-y-3 text-sm text-cream/80">
            <div className="flex justify-between gap-4">
              <dt>Amount</dt>
              <dd className="font-semibold text-cream">${finalAmount.toLocaleString()}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Frequency</dt>
              <dd className="font-semibold capitalize text-cream">{frequency}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Program</dt>
              <dd className="font-semibold text-cream">{selectedProgram?.title ?? "General Fund"}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Donor</dt>
              <dd className="font-semibold text-cream">{donorName}</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-2xl border border-cream/15 bg-primary/60 p-6">
          <p className="text-sm text-cream/75">Secure payment powered by Stripe</p>
          <div className="mt-4 space-y-3">
            <div className="rounded-xl border border-cream/20 bg-surface/70 px-4 py-3 text-cream/60">
              Card number •••• •••• •••• ••••
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-cream/20 bg-surface/70 px-4 py-3 text-cream/60">
                MM / YY
              </div>
              <div className="rounded-xl border border-cream/20 bg-surface/70 px-4 py-3 text-cream/60">
                CVC
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button variant="ghost" size="lg" onClick={() => setStep(2)}>
            Back
          </Button>
          <Button size="lg" onClick={() => setShowSuccess(true)}>
            Complete Donation
          </Button>
        </div>
      </motion.section>
    );
  };

  return (
    <main className="min-h-screen bg-primary px-6 pb-20 pt-28 md:pt-32">
      <div className="mx-auto w-full max-w-4xl">
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Donate</p>
          <h1 className="mt-3 font-display text-5xl italic text-cream">Support Hopecrest</h1>

          <div className="mt-8">
            <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.16em] text-cream/65">
              <span>Step {step} / 3</span>
              <span>{stepTitles[step - 1]}</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((number) => (
                <div
                  key={number}
                  className={`h-2 rounded-full ${
                    number <= step ? "bg-accent" : "bg-cream/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </header>

        <div className="rounded-3xl border border-cream/15 bg-surface/45 p-6 md:p-8">
          <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {showSuccess ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/95 px-6"
          >
            <div className="confetti-burst" aria-hidden="true">
              {Array.from({ length: 26 }).map((_, index) => (
                <span
                  key={index}
                  className="confetti-piece"
                  style={
                    {
                      "--left": `${Math.random() * 100}%`,
                      "--delay": `${Math.random() * 0.4}s`,
                      "--duration": `${1.6 + Math.random() * 1.1}s`,
                      "--rotate": `${Math.random() * 360}deg`,
                    } as CSSProperties
                  }
                />
              ))}
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative z-10 text-center"
            >
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-accent/15">
                <Check className="h-12 w-12 text-accent" strokeWidth={3} />
              </div>
              <h2 className="mt-7 font-display text-5xl italic text-cream md:text-6xl">
                Thank you, {donorName}!
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-cream/75">
                Your support helps expand life-changing programs across communities worldwide.
              </p>
              <Button
                size="lg"
                className="mt-8"
                onClick={() => {
                  setShowSuccess(false);
                  setStep(1);
                }}
              >
                Close
              </Button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </main>
  );
}
