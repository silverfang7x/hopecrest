"use client";

import { Github, Globe, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#programs", label: "Programs" },
  { href: "#impact", label: "Impact" },
  { href: "#donate", label: "Donate" },
];

const socialLinks = [
  { href: "mailto:hello@hopecrest.org", label: "Email", icon: Mail },
  { href: "https://github.com", label: "GitHub", icon: Github },
  { href: "https://hopecrest.org", label: "Website", icon: Globe },
];

export default function Footer() {
  return (
    <motion.footer
      className="mt-20 w-full border-t border-accent/50 bg-primary"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl px-6 py-14">
        <blockquote className="mx-auto max-w-4xl text-center font-display text-2xl italic leading-relaxed text-cream md:text-3xl">
          “The best way to find yourself is to lose yourself in the service of others.”
          <span className="mt-3 block text-base text-cream/80">— Gandhi</span>
        </blockquote>

        <div className="mt-14 grid gap-10 border-t border-cream/10 pt-10 md:grid-cols-3">
          <div>
            <div className="inline-flex items-center gap-2">
              <span className="font-display text-2xl italic">Hopecrest</span>
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            </div>
            <p className="mt-4 max-w-sm text-sm text-cream/75">
              Empowering communities through service, dignity, and lasting opportunity.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-cream/60">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="nav-link text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-cream/60">
              Contact
            </h3>
            <a
              href="mailto:hello@hopecrest.org"
              className="mt-4 inline-block text-sm text-cream/80 transition-colors hover:text-accent"
            >
              hello@hopecrest.org
            </a>
            <div className="mt-5 flex items-center gap-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-6 text-center text-sm text-cream/60 md:flex md:items-center md:justify-between md:text-left">
          <p>&copy; {new Date().getFullYear()} Hopecrest. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built for people. Built for impact.</p>
        </div>
      </div>
    </motion.footer>
  );
}
