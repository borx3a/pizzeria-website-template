"use client";

import Image from "next/image";
import { menu, showcaseIds } from "@/data/menu";
import Reveal from "./Reveal";
import { Diamond, Eyebrow } from "./decor";

/**
 * Hand-drawn pizza line illustration, in the spirit of the botanical
 * sketches on a printed menu — used for pizzas without photography yet.
 */
function PizzaSketch({ variant }: { variant: "margherita" | "four-cheese" }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      className="h-full w-full p-10"
    >
      {/* crust */}
      <circle cx="100" cy="100" r="88" stroke="currentColor" strokeWidth="2" />
      <circle
        cx="100"
        cy="100"
        r="72"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeDasharray="1 6"
        strokeLinecap="round"
      />
      {variant === "margherita" ? (
        <g stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
          {/* basil leaves */}
          <path d="M74 70c-9-2-14-7-15-16 9 2 14 7 15 16z" />
          <path d="M130 62c2-9 7-14 16-15-2 9-7 14-16 15z" />
          <path d="M62 122c-9 1-15-2-19-10 9-1 15 2 19 10z" />
          <path d="M138 132c8-4 14-3 21 2-8 4-14 3-21-2z" />
          <path d="M104 106c-6-7-6-14-1-22 6 7 6 14 1 22z" />
          {/* mozzarella pools */}
          <path d="M88 84a8 8 0 1 1 .1 0z" strokeDasharray="0" />
          <path d="M120 96a7 7 0 1 1 .1 0z" />
          <path d="M76 104a6 6 0 1 1 .1 0z" />
          <path d="M112 128a7 7 0 1 1 .1 0z" />
        </g>
      ) : (
        <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          {/* slice cuts */}
          <path d="M100 30v140M30 100h140M51 51l98 98M149 51l-98 98" opacity="0.55" />
          {/* cheese blobs */}
          <path d="M84 66c6-4 12-2 15 4-7 3-12 2-15-4z" strokeLinejoin="round" />
          <path d="M124 84c7-1 11 2 13 9-7 1-11-2-13-9z" strokeLinejoin="round" />
          <path d="M66 120c6-3 11-1 15 4-6 3-11 1-15-4z" strokeLinejoin="round" />
          <path d="M116 124c6-4 12-3 16 2-6 4-12 3-16-2z" strokeLinejoin="round" />
          {/* cracked pepper */}
          <path d="M92 100l2 2M110 64l2 2M76 88l2 2M132 108l2 2M96 140l2 2" />
        </g>
      )}
    </svg>
  );
}

const cardStyles = [
  { rotate: "lg:-rotate-2", offset: "lg:mt-10" },
  { rotate: "lg:rotate-1", offset: "" },
  { rotate: "lg:-rotate-1", offset: "lg:mt-16" },
];

const sketchTone = {
  margherita: "bg-orchid/25 text-plum",
  "four-cheese": "bg-basil/10 text-basil",
} as const;

export default function PizzaShowcase() {
  const pizzas = menu.find((c) => c.id === "pizzas")?.items ?? [];
  const featured = showcaseIds
    .map((id) => pizzas.find((p) => p.id === id))
    .filter((p) => p !== undefined);

  return (
    <section className="overflow-hidden bg-paper py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mb-14 flex flex-col items-start justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Eyebrow className="mb-4 text-basil">The favourites</Eyebrow>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-6xl">
              Stories baked into{" "}
              <span className="italic text-plum">every slice.</span>
            </h2>
          </div>
          <p className="max-w-xs font-script text-2xl leading-snug text-basil">
            three regulars&apos; favourites, straight from the oven ✦
          </p>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-3 md:gap-6 lg:gap-10">
          {featured.map((pizza, i) => (
            <Reveal
              key={pizza.id}
              delay={i * 0.12}
              className={`${cardStyles[i].offset}`}
            >
              <article
                className={`group relative rounded-2xl bg-cream p-5 ring-1 ring-ink/10 transition-transform duration-500 hover:-translate-y-2 ${cardStyles[i].rotate}`}
              >
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  {pizza.image ? (
                    <Image
                      src={pizza.image}
                      alt={pizza.imageAlt ?? pizza.name}
                      fill
                      sizes="(min-width: 768px) 30vw, 90vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className={`flex h-full w-full items-center justify-center ${
                        sketchTone[pizza.id as keyof typeof sketchTone] ??
                        "bg-orchid/25 text-plum"
                      }`}
                    >
                      <PizzaSketch
                        variant={pizza.id === "four-cheese" ? "four-cheese" : "margherita"}
                      />
                    </div>
                  )}
                </div>

                <div className="flex items-start justify-between gap-3 px-1 pb-1 pt-5">
                  <div>
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
                      {pizza.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/60">
                      {pizza.description}
                    </p>
                  </div>
                  <Diamond
                    size={16}
                    className="mt-1.5 shrink-0 text-plum transition-transform duration-500 group-hover:rotate-45"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
