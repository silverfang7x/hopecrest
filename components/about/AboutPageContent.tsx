"use client";

import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useRef } from "react";
import CTASection from "@/components/home/CTASection";

const impactStats = [
  { value: 12, prefix: "$", suffix: "M+", label: "Raised" },
  { value: 40, suffix: "+", label: "Countries" },
  { value: 180, suffix: "+", label: "Programs" },
  { value: 92, suffix: "%", label: "Impact Score" },
];

const timeline = [
  {
    year: "2010",
    title: "Hopecrest Founded",
    description: "Started with 3 programs in East Africa",
  },
  {
    year: "2013",
    title: "Expanded to Asia",
    description: "Launched education programs in India and Bangladesh",
  },
  {
    year: "2017",
    title: "$1M Milestone",
    description: "First million dollars raised for clean water",
  },
  {
    year: "2020",
    title: "40 Countries",
    description: "Reached beneficiaries across 40 nations",
  },
  {
    year: "2024",
    title: "180+ Programs",
    description: "Largest program portfolio in our history",
  },
];

const team = [
  {
    initials: "SC",
    name: "Sarah Chen",
    role: "CEO",
    bio: "Leads Hopecrest's global strategy and long-term vision.",
  },
  {
    initials: "MO",
    name: "Marcus Obi",
    role: "COO",
    bio: "Oversees operations, regional coordination, and delivery.",
  },
  {
    initials: "PS",
    name: "Priya Sharma",
    role: "Programs Director",
    bio: "Guides program design and impact quality standards.",
  },
  {
    initials: "DK",
    name: "David Kim",
    role: "Tech Lead",
    bio: "Builds technology that powers transparency and scale.",
  },
  {
    initials: "AD",
    name: "Amara Diallo",
    role: "Partnerships",
    bio: "Cultivates nonprofit and donor partnerships worldwide.",
  },
  {
    initials: "LM",
    name: "Lena Muller",
    role: "Finance",
    bio: "Ensures rigorous financial stewardship and reporting.",
  },
];

function ImpactCounter({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <span ref={ref} className="font-body text-4xl font-semibold text-accent md:text-5xl">
      <CountUp end={inView ? value : 0} duration={2.1} prefix={prefix} suffix={suffix} preserveValue />
    </span>
  );
}

export default function AboutPageContent() {
  return (
    <main className="bg-primary">
      <section className="relative overflow-hidden px-6 pb-20 pt-32 md:pb-24 md:pt-36">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-72 w-72 rounded-full bg-accent/15 blur-3xl md:h-[30rem] md:w-[30rem]" />
        </div>
        <motion.div
          className="relative mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <h1 className="font-display text-5xl italic text-cream md:text-7xl">About Hopecrest</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-cream/80">
            Driven by purpose. Measured by impact.
          </p>
        </motion.div>
      </section>

      <section className="px-6 pb-20 md:pb-24">
        <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-2">
          <motion.article
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-2xl border border-cream/10 border-t-2 border-t-accent bg-surface p-7 md:p-8"
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 21s-6.716-4.35-9.192-8.077C.83 9.96 1.902 6.2 4.95 4.95c2.056-.842 4.2-.264 5.55 1.2 1.35-1.464 3.494-2.042 5.55-1.2 3.048 1.25 4.12 5.01 2.142 7.973C18.716 16.65 12 21 12 21z" />
              </svg>
            </div>
            <h2 className="mt-5 font-display text-3xl italic text-cream">Our Mission</h2>
            <p className="mt-4 text-cream/75">
              Hopecrest connects donors with vetted nonprofits across the globe, ensuring support reaches
              trusted local teams tackling urgent community needs.
            </p>
            <p className="mt-3 text-cream/75">
              We prioritize accountability, measurable outcomes, and long-term partnership so each gift
              drives meaningful progress where it is needed most.
            </p>
          </motion.article>

          <motion.article
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-2xl border border-cream/10 border-t-2 border-t-accent bg-surface p-7 md:p-8"
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm7.93 9h-3.02a15.9 15.9 0 0 0-1.1-4.33A8.03 8.03 0 0 1 19.93 11zM12 4c.94 1.28 1.64 3.03 1.9 5h-3.8c.26-1.97.96-3.72 1.9-5zM4.07 13h3.02c.13 1.54.5 3.01 1.1 4.33A8.03 8.03 0 0 1 4.07 13zm3.02-2H4.07a8.03 8.03 0 0 1 4.12-4.33A15.9 15.9 0 0 0 7.09 11zm1.99 0a13.9 13.9 0 0 1 1.12-4.95A13.9 13.9 0 0 1 11.32 11H9.08zm2.24 2a13.9 13.9 0 0 1-1.12 4.95A13.9 13.9 0 0 1 9.08 13h2.24zm1.76 4.95A13.9 13.9 0 0 1 11.96 13h2.24a13.9 13.9 0 0 1-1.12 4.95zM16.91 13h3.02a8.03 8.03 0 0 1-4.12 4.33c.6-1.32.97-2.79 1.1-4.33zm-1.99-2h-2.24a13.9 13.9 0 0 1 1.12-4.95A13.9 13.9 0 0 1 14.92 11z" />
              </svg>
            </div>
            <h2 className="mt-5 font-display text-3xl italic text-cream">Our Vision</h2>
            <p className="mt-4 text-cream/75">
              We believe a person\x27s future should never be limited by where they were born, their income,
              or access to basic services.
            </p>
            <p className="mt-3 text-cream/75">
              Our vision is a world where opportunity is universal and communities have the tools to
              create healthy, dignified, and resilient lives.
            </p>
          </motion.article>
        </div>
      </section>

      <section className="bg-surface px-6 py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
        >
          {impactStats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-xl border border-cream/10 border-l-2 border-l-accent bg-primary/35 p-5 md:p-6"
            >
              <ImpactCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              <h3 className="mt-4 text-lg font-bold text-cream">{stat.label}</h3>
            </article>
          ))}
        </motion.div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="font-display text-4xl italic text-cream md:text-5xl"
          >
            Our Timeline
          </motion.h2>

          <div className="relative mt-10">
            <div className="absolute left-6 top-0 h-full w-px bg-cream/20 md:left-1/2 md:-ml-px" />
            <div className="space-y-8">
              {timeline.map((entry, index) => (
                <motion.div
                  key={entry.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -35 : 35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className={`relative pl-16 md:pl-0 ${
                    index % 2 === 0 ? "md:pr-[52%]" : "md:pl-[52%]"
                  }`}
                >
                  <span className="absolute left-0 top-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-sm font-semibold text-primary md:left-1/2 md:-translate-x-1/2">
                    {entry.year}
                  </span>
                  <div className="rounded-xl border border-cream/10 bg-surface p-5 md:p-6">
                    <h3 className="font-display text-2xl italic text-cream">{entry.title}</h3>
                    <p className="mt-2 text-sm text-cream/75">{entry.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:pb-24">
        <div className="mx-auto w-full max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="font-display text-4xl italic text-cream md:text-5xl"
          >
            The People Behind the Mission
          </motion.h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: index * 0.04, ease: "easeOut" }}
                className="rounded-2xl border border-cream/10 bg-surface/65 p-6 transition-all hover:border-accent hover:shadow-[0_0_0_1px_rgba(0,200,150,0.45)]"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent/20 text-lg font-semibold text-accent">
                  {member.initials}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-cream">{member.name}</h3>
                <p className="mt-1 text-sm uppercase tracking-[0.14em] text-accent/90">{member.role}</p>
                <p className="mt-3 text-sm text-cream/75">{member.bio}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:pb-24">
        <div className="mx-auto w-full max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="font-display text-4xl italic text-cream md:text-5xl"
          >
            Where Your Money Goes
          </motion.h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              { label: "Programs", value: 87, barColor: "bg-accent" },
              { label: "Admin", value: 8, barColor: "bg-muted" },
              { label: "Fundraising", value: 5, barColor: "bg-muted" },
            ].map((item, index) => (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
                className="rounded-2xl border border-cream/10 bg-surface p-6"
              >
                <p className="text-sm uppercase tracking-[0.14em] text-cream/65">{item.label}</p>
                <p className="mt-2 text-3xl font-semibold text-cream">{item.value}%</p>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-primary/80">
                  <div className={`h-full rounded-full ${item.barColor}`} style={{ width: `${item.value}%` }} />
                </div>
              </motion.article>
            ))}
          </div>
          <p className="mt-5 text-sm text-cream/65">
            Certified by GiveWell. Audited annually. Full financials available on request.
          </p>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
