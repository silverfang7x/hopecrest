"use client";

import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

const stories = [
  {
    name: "Amara",
    country: "Kenya",
    theme: "clean water",
    image:
      "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?auto=format&fit=crop&w=1800&q=80",
    quote:
      "Before the new wells arrived, we walked for hours each day. Now our children are in school and our harvests are stronger.",
    href: "/impact/amara-kenya",
  },
  {
    name: "Priya",
    country: "India",
    theme: "education",
    image:
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1800&q=80",
    quote:
      "The scholarship program gave me books, mentorship, and belief. I became the first girl in my village to graduate.",
    href: "/impact/priya-india",
  },
  {
    name: "Carlos",
    country: "Brazil",
    theme: "healthcare",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=80",
    quote:
      "With mobile clinics reaching our community, my family finally receives regular care and life-saving medicine.",
    href: "/impact/carlos-brazil",
  },
];

export default function ImpactSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const storyProgress = useTransform(scrollYProgress, [0, 1], [0, stories.length - 1]);

  useMotionValueEvent(storyProgress, "change", (latest) => {
    const next = Math.max(0, Math.min(stories.length - 1, Math.round(latest)));
    setActiveIndex(next);
  });

  return (
    <section id="impact" ref={sectionRef} className="bg-primary">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-2 md:py-0">
        <aside className="md:sticky md:top-24 md:flex md:h-[calc(100vh-6rem)] md:flex-col md:justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Impact Stories</p>
          <h2 className="mt-4 max-w-md font-display text-4xl italic leading-tight text-cream md:text-6xl">
            Real Stories. Real Change.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-cream/75 md:text-lg">
            Every donation powers locally led programs that create long-term progress. Meet the people
            behind the outcomes and see what sustained support makes possible.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <div className="h-24 w-px bg-cream/20" />
            <div className="flex flex-col gap-3">
              {stories.map((story, index) => (
                <button
                  key={story.name}
                  type="button"
                  aria-label={`Show story: ${story.name}, ${story.country}`}
                  className="group inline-flex items-center gap-3 text-left"
                >
                  <motion.span
                    className="block rounded-full"
                    animate={{
                      width: activeIndex === index ? 12 : 8,
                      height: activeIndex === index ? 12 : 8,
                      backgroundColor: activeIndex === index ? "#00C896" : "rgba(245,240,232,0.35)",
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  />
                  <span
                    className={`text-xs uppercase tracking-[0.16em] transition-colors ${
                      activeIndex === index ? "text-cream" : "text-cream/55"
                    }`}
                  >
                    {story.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </aside>

        <div className="space-y-8 md:space-y-0">
          {stories.map((story) => (
            <article
              key={story.name}
              className="relative min-h-[80vh] overflow-hidden rounded-3xl border border-cream/10 md:min-h-screen"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${story.image})` }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/75 to-primary/35" />

              <div className="relative flex min-h-[80vh] flex-col justify-end p-8 md:min-h-screen md:p-12">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {story.theme}
                </p>
                <blockquote className="mt-4 max-w-xl font-display text-3xl italic leading-tight text-cream md:text-5xl">
                  “{story.quote}”
                </blockquote>
                <p className="mt-6 text-sm uppercase tracking-[0.14em] text-cream/80">
                  {story.name}, {story.country}
                </p>
                <Link
                  href={story.href}
                  className="mt-5 inline-flex w-fit text-sm font-semibold text-accent transition-colors hover:text-accentDark"
                >
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
