"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import ProgramCard from "@/components/ui/ProgramCard";
import { programs } from "@/lib/programs";

const categories = ["All", "Education", "Health", "Environment", "Women Empowerment"] as const;
type CategoryFilter = (typeof categories)[number];

type ToastState = {
  visible: boolean;
  message: string;
};

export default function ProgramsPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const [toast, setToast] = useState<ToastState>({ visible: false, message: "" });

  useEffect(() => {
    if (!toast.visible) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setToast({ visible: false, message: "" });
    }, 2200);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [toast.visible]);

  const filteredPrograms = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return programs.filter((program) => {
      const matchesCategory =
        activeCategory === "All" ? true : program.category === activeCategory;
      const matchesQuery =
        normalized.length === 0
          ? true
          : `${program.title} ${program.description} ${program.category}`
              .toLowerCase()
              .includes(normalized);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const handleShare = async (slug: string) => {
    const shareUrl = `${window.location.origin}/programs/${slug}`;

    try {
      await navigator.clipboard.writeText(shareUrl);
      setToast({ visible: true, message: "Program link copied to clipboard." });
    } catch {
      setToast({ visible: true, message: "Could not copy link. Please copy it manually." });
    }
  };

  return (
    <main className="bg-primary pb-20">
      <section className="border-b border-cream/10 bg-surface/70 px-6 pb-10 pt-28 md:pb-12 md:pt-32">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Hopecrest Programs</p>
          <h1 className="mt-4 font-display text-4xl italic text-cream md:text-6xl">Our Programs</h1>

          <div className="mt-8 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <label
              htmlFor="program-search"
              className="flex items-center gap-3 rounded-full border border-cream/20 bg-primary/60 px-4 py-3"
            >
              <Search size={18} className="text-cream/60" />
              <input
                id="program-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search programs..."
                className="w-full bg-transparent text-sm text-cream placeholder:text-cream/45 focus:outline-none"
              />
            </label>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
                    activeCategory === category
                      ? "border-accent bg-accent text-primary"
                      : "border-cream/30 text-cream/80 hover:border-cream/55"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pt-10 md:pt-12">
        <div className="mx-auto w-full max-w-6xl">
          <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredPrograms.map((program) => (
                <motion.div
                  key={program.id}
                  layout
                  initial={{ opacity: 0, y: 18, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -14, scale: 0.98 }}
                  transition={{ duration: 0.26, ease: "easeOut" }}
                >
                  <ProgramCard
                    image={program.image}
                    category={program.category}
                    title={program.title}
                    description={program.description}
                    slug={`/programs/${program.slug}`}
                    onShare={() => handleShare(program.slug)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredPrograms.length === 0 ? (
            <div className="rounded-2xl border border-cream/15 bg-surface/50 px-6 py-14 text-center">
              <p className="font-display text-3xl italic text-cream">No programs found</p>
              <p className="mt-2 text-sm text-cream/70">Try a different search term or category.</p>
            </div>
          ) : null}
        </div>
      </section>

      <AnimatePresence>
        {toast.visible ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-xl border border-accent/40 bg-surface px-4 py-3 text-sm text-cream shadow-2xl"
            role="status"
            aria-live="polite"
          >
            <span>{toast.message}</span>
            <button
              type="button"
              className="rounded-full p-1 text-cream/60 transition-colors hover:text-cream"
              onClick={() => setToast({ visible: false, message: "" })}
              aria-label="Dismiss notification"
            >
              <X size={14} />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </main>
  );
}
