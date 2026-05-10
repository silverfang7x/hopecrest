"use client";

import * as Progress from "@radix-ui/react-progress";
import { Copy, Check } from "lucide-react";
import { useMemo, useState } from "react";
import Button from "@/components/ui/Button";

type ProgramDonationCardProps = {
  title: string;
  slug: string;
  raised: number;
  goal: number;
  beneficiaries: string;
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

export default function ProgramDonationCard({
  title,
  slug,
  raised,
  goal,
  beneficiaries,
}: ProgramDonationCardProps) {
  const [copied, setCopied] = useState(false);

  const progressValue = useMemo(() => {
    if (goal <= 0) {
      return 0;
    }
    return Math.min(100, Math.round((raised / goal) * 100));
  }, [goal, raised]);

  const handleCopy = async () => {
    const url = `${window.location.origin}/programs/${slug}`;

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <aside className="rounded-2xl border border-cream/15 bg-surface/85 p-6 shadow-xl backdrop-blur-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Program Funding</p>
      <h3 className="mt-3 font-display text-2xl italic text-cream">{title}</h3>

      <div className="mt-6 space-y-2">
        <div className="flex items-center justify-between text-sm text-cream/80">
          <span>Raised</span>
          <span className="font-semibold text-cream">{formatCurrency(raised)}</span>
        </div>
        <div className="flex items-center justify-between text-sm text-cream/80">
          <span>Goal</span>
          <span className="font-semibold text-cream">{formatCurrency(goal)}</span>
        </div>
      </div>

      <Progress.Root
        className="relative mt-4 h-2.5 overflow-hidden rounded-full bg-primary/70"
        value={progressValue}
      >
        <Progress.Indicator
          className="h-full bg-accent transition-transform duration-500"
          style={{ transform: `translateX(-${100 - progressValue}%)` }}
        />
      </Progress.Root>

      <p className="mt-3 text-sm text-cream/75">{progressValue}% funded</p>
      <p className="mt-2 text-sm text-cream/75">
        <span className="font-semibold text-cream">{beneficiaries}</span> reached so far
      </p>

      <Button variant="primary" size="lg" className="mt-6 w-full justify-center">
        Donate to this program
      </Button>

      <div className="mt-5 flex items-center justify-between rounded-xl border border-cream/15 bg-primary/50 px-4 py-3">
        <p className="text-sm text-cream/80">Share this program</p>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-2 rounded-full border border-accent/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent transition-colors hover:border-accent hover:bg-accent/10"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? "Copied" : "Copy Link"}
        </button>
      </div>
    </aside>
  );
}
