"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#programs", label: "Programs" },
  { href: "#impact", label: "Impact" },
];

export default function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 80);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          hasScrolled
            ? "border-b border-cream/10 bg-surface/95 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6">
          <Link href="#home" className="inline-flex items-center gap-2">
            <span className="font-display text-2xl italic tracking-tight">Hopecrest</span>
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
            <Link
              href="#donate"
              className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-primary transition-colors hover:bg-accentDark"
            >
              Donate
            </Link>
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-cream transition-colors hover:bg-cream/10 md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -24, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 flex min-h-screen flex-col bg-surface/95 px-6 pb-10 pt-28 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-1 flex-col items-center justify-center gap-8 text-2xl">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-link text-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#donate"
                className="mt-2 rounded-full bg-accent px-8 py-3 text-lg font-medium text-primary transition-colors hover:bg-accentDark"
                onClick={() => setIsMenuOpen(false)}
              >
                Donate
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
