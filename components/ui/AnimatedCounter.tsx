"use client";

import clsx from "clsx";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";

type AnimatedCounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

export default function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 2,
  className,
}: AnimatedCounterProps) {
  const counterRef = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(counterRef, { once: true, amount: 0.55 });

  return (
    <span ref={counterRef} className={clsx("font-display text-4xl text-cream md:text-5xl", className)}>
      <CountUp
        start={0}
        end={isInView ? value : 0}
        duration={duration}
        prefix={prefix}
        suffix={suffix}
        preserveValue
      />
    </span>
  );
}
