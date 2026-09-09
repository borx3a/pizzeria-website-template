"use client";

import { useEffect, useState } from "react";
import { menu } from "@/data/menu";
import MenuCategory from "./MenuCategory";
import Reveal from "./Reveal";
import { Eyebrow, Sprig } from "./decor";

export default function Menu() {
  const [active, setActive] = useState(menu[0]?.id);

  // Scroll-spy: highlight the category currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id.replace("menu-", ""));
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    for (const category of menu) {
      const el = document.getElementById(`menu-${category.id}`);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const jump = (id: string) => {
    document
      .getElementById(`menu-${id}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="menu" className="relative py-20 md:py-28">
      <Sprig className="pointer-events-none absolute right-[6%] top-16 hidden text-basil/40 lg:block" flip />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mb-12 max-w-xl md:mb-16">
          <Eyebrow className="mb-4 text-basil">From our kitchen</Eyebrow>
          <h2 className="font-display text-5xl font-semibold tracking-tight text-plum md:text-7xl">
            The Menu
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">
            A short menu, done properly. Everything is made in-house, from the
            slow-fermented dough to the last drizzle of green oil.
          </p>
        </Reveal>

        {/* Mobile: horizontally scrollable category pills */}
        <div className="no-scrollbar sticky top-16 z-30 -mx-5 mb-8 overflow-x-auto border-y border-ink/10 bg-cream/95 px-5 py-3 backdrop-blur-sm lg:hidden">
          <div className="flex gap-2">
            {menu.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => jump(category.id)}
                className={`shrink-0 rounded-full px-5 py-2 font-sans text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${
                  active === category.id
                    ? "bg-plum text-cream"
                    : "bg-ink/5 text-ink/70"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-16">
          {/* Desktop: sticky category rail */}
          <aside className="hidden lg:block">
            <nav
              aria-label="Menu categories"
              className="sticky top-32 space-y-1"
            >
              {menu.map((category, i) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => jump(category.id)}
                  className={`group flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left transition-all duration-300 ${
                    active === category.id
                      ? "bg-plum/[0.06] text-plum"
                      : "text-ink/50 hover:text-ink"
                  }`}
                >
                  <span className="font-sans text-[10px] tracking-[0.2em]">
                    0{i + 1}
                  </span>
                  <span className="font-display text-lg font-semibold tracking-tight">
                    {category.label}
                  </span>
                  <span
                    className={`ml-auto h-[2px] rounded-full bg-plum transition-all duration-500 ${
                      active === category.id ? "w-8" : "w-0"
                    }`}
                  />
                </button>
              ))}

              <div className="px-4 pt-8">
                <div className="dotted-rule mb-4" />
                <p className="font-script text-xl leading-snug text-basil">
                  please let us know about any allergies ✦
                </p>
              </div>
            </nav>
          </aside>

          {/* Items */}
          <div className="space-y-16">
            {menu.map((category, i) => (
              <Reveal key={category.id} delay={i * 0.05}>
                <MenuCategory category={category} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
