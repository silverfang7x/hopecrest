"use client";

import { Eye, Target } from "lucide-react";
import { motion } from "framer-motion";
import CTASection from "@/components/home/CTASection";
import StatsSection from "@/components/home/StatsSection";

const timeline = [
  {
    year: "2010",
    title: "Hopecrest is Founded",
    description: "Launched with a mission to connect donors to high-impact grassroots programs.",
  },
  {
    year: "2013",
    title: "First Global Partnerships",
    description: "Expanded operations into 10 countries through trusted community partners.",
  },
  {
    year: "2017",
    title: "Education and Health Scale-Up",
    description: "Introduced flagship education and rural health initiatives across new regions.",
  },
  {
    year: "2021",
    title: "Digital Impact Platform",
    description: "Built transparent donor reporting and real-time impact tracking dashboards.",
  },
  {
    year: "2024",
    title: "Global Reach Milestone",
    description: "Reached 40+ countries with hundreds of programs serving vulnerable communities.",
  },
];

const team = [
  { initials: "AK", name: "Amina Khan", role: "Executive Director", bio: "Leads strategy and global partnerships." },
  { initials: "JC", name: "Jonas Cole", role: "Programs Lead", bio: "Oversees field delivery and local teams." },
  { initials: "PR", name: "Priya Rao", role: "Impact Analyst", bio: "Drives evidence, measurement, and reporting." },
  { initials: "ML", name: "Mateo Lima", role: "Donor Relations", bio: "Builds meaningful donor-community connections." },
  { initials: "SN", name: "Sara Njoroge", role: "Regional Director", bio: "Guides East Africa implementation and growth." },
  { initials: "DW", name: "Daniel Wu", role: "Operations", bio: "Strengthens systems, logistics, and governance." },
];

const teamAvatarColors = [
  "bg-accent/20 text-accent",
  "bg-indigo-500/20 text-indigo-300",
  "bg-emerald-500/20 text-emerald-300",
  "bg-cyan-500/20 text-cyan-300",
  "bg-violet-500/20 text-violet-300",
  "bg-teal-500/20 text-teal-300",
];

export default function AboutPage() {
  return (
    <main className="bg-primary">
      <section className="relative overflow-hidden px-6 pb-20 pt-32 md:pb-24 md:pt-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-28 top-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl md:h-96 md:w-96" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Who We Are</p>
          <h1 className="mt-4 font-display text-5xl italic leading-tight text-cream md:text-7xl">
            About Hopecrest
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-cream/80">
            Hopecrest is a nonprofit connecting generous donors with locally led programs that solve real
            community needs. We combine transparency, partnership, and long-term commitment to help people
            build safer, healthier, and more resilient futures.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 md:pb-24">
        <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-2">
          <motion.article
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-2xl border border-cream/10 bg-surface/70 p-7 md:p-8"
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
              <Target />
            </div>
            <h2 className="mt-5 font-display text-3xl italic text-cream">Our Mission</h2>
            <p className="mt-4 text-cream/75">
              We mobilize resources and direct them into proven programs that improve access to clean
              water, education, healthcare, and opportunity.
            </p>
            <p className="mt-3 text-cream/75">
              By working alongside local leaders, we ensure every contribution supports practical change
              that communities can sustain for years to come.
            </p>
          </motion.article>

          <motion.article
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-2xl border border-cream/10 bg-surface/70 p-7 md:p-8"
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
              <Eye />
            </div>
            <h2 className="mt-5 font-display text-3xl italic text-cream">Our Vision</h2>
            <p className="mt-4 text-cream/75">
              We envision a world where geography and income do not determine whether a family has clean
              water, quality education, or basic healthcare.
            </p>
            <p className="mt-3 text-cream/75">
              Through transparent giving and measurable outcomes, we aim to create a future where every
              community can thrive with dignity and resilience.
            </p>
          </motion.article>
        </div>
      </section>

      <StatsSection />

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="font-display text-4xl italic text-cream md:text-5xl">Our Timeline</h2>
          <div className="relative mt-10">
            <div className="absolute left-6 top-0 h-full w-px bg-cream/20 md:left-1/2 md:-ml-px" />

            <div className="space-y-8">
              {timeline.map((entry, index) => (
                <motion.div
                  key={entry.year}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className={`relative pl-16 md:pl-0 ${
                    index % 2 === 0 ? "md:pr-[52%]" : "md:pl-[52%]"
                  }`}
                >
                  <span className="absolute left-0 top-2 inline-flex h-12 w-12 items-center justify-center rounded-full border border-accent/60 bg-primary text-sm font-semibold text-accent md:left-1/2 md:-translate-x-1/2">
                    {entry.year}
                  </span>

                  <div className="rounded-xl border border-cream/10 bg-surface/70 p-5 md:p-6">
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
          <h2 className="font-display text-4xl italic text-cream md:text-5xl">The Team</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <article
                key={member.name}
                className="rounded-2xl border border-cream/10 bg-surface/65 p-6 transition-colors hover:border-accent"
              >
                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-full text-lg font-semibold ${teamAvatarColors[index % teamAvatarColors.length]}`}
                >
                  {member.initials}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-cream">{member.name}</h3>
                <p className="mt-1 text-sm uppercase tracking-[0.14em] text-accent/90">{member.role}</p>
                <p className="mt-3 text-sm text-cream/75">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:pb-24">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="font-display text-4xl italic text-cream md:text-5xl">Transparency</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              { label: "Admin Cost", value: 8 },
              { label: "Programs", value: 87 },
              { label: "Fundraising", value: 5 },
            ].map((item) => (
              <article key={item.label} className="rounded-2xl border border-cream/10 bg-surface/70 p-6">
                <p className="text-sm uppercase tracking-[0.14em] text-cream/65">{item.label}</p>
                <p className="mt-2 text-3xl font-semibold text-accent">{item.value}%</p>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-primary/80">
                  <div className="h-full rounded-full bg-accent" style={{ width: `${item.value}%` }} />
                </div>
              </article>
            ))}
          </div>
          <p className="mt-5 text-sm text-cream/65">
            Certified by GiveWell. Audited annually.
          </p>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
