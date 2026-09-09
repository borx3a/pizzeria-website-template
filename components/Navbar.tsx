"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/data/site";
import { Diamond } from "./decor";

const links = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#story" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-ink/10 bg-cream/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-[4.5rem] md:px-8">
        <Link
          href="#home"
          className="relative z-50 shrink-0"
          aria-label={`${site.name} — home`}
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt={site.name}
            width={1039}
            height={212}
            priority
            className="h-9 w-auto md:h-10"
          />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="link-underline font-sans text-xs font-medium uppercase tracking-[0.25em] text-ink transition-colors hover:text-plum"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#menu"
            className="hidden rounded-full bg-plum px-6 py-2.5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-cream transition-transform duration-300 hover:scale-[1.04] hover:bg-plum/90 sm:block"
          >
            View Menu
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`h-[1.5px] w-6 bg-ink transition-transform duration-300 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-6 bg-ink transition-transform duration-300 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 flex h-svh flex-col justify-between bg-cream px-6 pb-10 pt-28 lg:hidden"
          >
            <ul className="space-y-2">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.45 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-4 py-2 font-display text-4xl font-semibold text-ink transition-colors hover:text-plum"
                  >
                    <span className="font-sans text-xs tracking-[0.3em] text-basil">
                      0{i + 1}
                    </span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 text-plum">
                <Diamond size={12} />
                <p className="font-script text-2xl text-basil">
                  Pizza · People · Good Times
                </p>
              </div>
              <a
                href="#menu"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-plum px-8 py-4 text-center font-sans text-sm font-semibold uppercase tracking-[0.2em] text-cream"
              >
                View Menu
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
