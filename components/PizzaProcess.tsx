"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Diamond, Eyebrow } from "./decor";
import Reveal from "./Reveal";

const steps = [
  { number: "01", title: "Dough", caption: "48 hours of slow fermentation" },
  { number: "02", title: "Sauce", caption: "Crushed tomatoes, nothing else" },
  { number: "03", title: "Ingredients", caption: "Laid on by hand, generously" },
  { number: "04", title: "Oven", caption: "90 seconds of wood-fired heat" },
  { number: "05", title: "Table", caption: "Made to be shared" },
];

/** 0 → 1 ramp across [from, to], clamped at both ends. */
function ramp(v: number, from: number, to: number) {
  return Math.min(1, Math.max(0, (v - from) / (to - from)));
}

/** Flat brand-styled pizza illustration, built up layer by layer on scroll. */
function StageCanvas({
  progress,
}: {
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  /*
   * Every value below is computed in JS — the function form of `useTransform`.
   * The array form lets Framer hand accelerable properties like `opacity` to a
   * native scroll timeline while transforms keep running on the main thread;
   * the two ranges disagree, which left the photograph stuck part-faded at the
   * end of the pin with the drawing still at full strength underneath.
   */
  const doughScale = useTransform(() => 0.55 + 0.45 * ramp(progress.get(), 0, 0.1));
  const doughRotate = useTransform(() => 100 * ramp(progress.get(), 0, 1));
  const sauceScale = useTransform(() => ramp(progress.get(), 0.2, 0.34));

  // toppings pop in one after another during stage 03
  const t1 = useTransform(() => ramp(progress.get(), 0.4, 0.46));
  const t2 = useTransform(() => ramp(progress.get(), 0.45, 0.51));
  const t3 = useTransform(() => ramp(progress.get(), 0.5, 0.56));

  // oven: warm glow and char during stage 04
  const glow = useTransform(() => {
    const p = progress.get();
    return Math.min(ramp(p, 0.6, 0.68), 1 - ramp(p, 0.78, 0.84));
  });
  const char = useTransform(() => 0.45 * ramp(progress.get(), 0.62, 0.78));

  /*
   * Final reveal: the drawing dissolves into the photograph. Both sides of the
   * crossfade share one ramp so the drawing is fully gone the moment the photo
   * is fully there, and it finishes at 0.9 — the remaining tenth of the pin
   * holds the finished pizza before the section releases.
   */
  const photoOpacity = useTransform(() => ramp(progress.get(), 0.78, 0.9));
  const drawingOpacity = useTransform(() => 1 - ramp(progress.get(), 0.78, 0.9));
  const photoScale = useTransform(() => 0.9 + 0.1 * ramp(progress.get(), 0.78, 0.94));

  return (
    <div className="relative aspect-square w-[280px] sm:w-[340px] lg:w-[min(480px,50svh)]">
      {/* oven glow behind the pizza */}
      <motion.div
        aria-hidden="true"
        style={{ opacity: glow }}
        className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(224,122,58,0.5),transparent_65%)]"
      />

      <motion.svg
        viewBox="0 0 200 200"
        style={{ rotate: doughRotate, opacity: drawingOpacity }}
        className="relative h-full w-full"
        aria-hidden="true"
      >
        {/* dough */}
        <motion.g style={{ scale: doughScale, transformOrigin: "center" }}>
          <circle cx="100" cy="100" r="92" fill="var(--color-crust)" />
          <circle cx="100" cy="100" r="78" fill="#f3e7c8" />
          {/* char spots, darken in the oven */}
          <motion.g fill="#4a2e14" style={{ opacity: char }}>
            <circle cx="100" cy="12" r="4" />
            <circle cx="152" cy="30" r="3.4" />
            <circle cx="184" cy="84" r="4.2" />
            <circle cx="176" cy="140" r="3" />
            <circle cx="130" cy="182" r="4" />
            <circle cx="66" cy="186" r="3.2" />
            <circle cx="22" cy="146" r="4.4" />
            <circle cx="12" cy="90" r="3.2" />
            <circle cx="34" cy="40" r="4" />
          </motion.g>
        </motion.g>

        {/* sauce */}
        <motion.g style={{ scale: sauceScale, transformOrigin: "center" }}>
          <path
            d="M100 28c20-3 40 6 52 20 12 15 18 34 12 52-5 18-18 33-35 40-18 8-40 6-54-6-15-12-24-31-22-50 2-18 12-36 27-46 6-4 13-8 20-10z"
            fill="var(--color-sauce)"
            opacity="0.92"
          />
        </motion.g>

        {/* toppings */}
        <motion.g style={{ opacity: t1, scale: t1, transformOrigin: "center" }}>
          <circle cx="78" cy="70" r="11" fill="#fff8e7" />
          <circle cx="130" cy="120" r="12" fill="#fff8e7" />
          <circle cx="94" cy="146" r="9" fill="#fff8e7" />
        </motion.g>
        <motion.g style={{ opacity: t2, scale: t2, transformOrigin: "center" }}>
          <circle cx="124" cy="66" r="10" fill="#fff8e7" />
          <circle cx="62" cy="112" r="10" fill="#fff8e7" />
          {/* mushroom slices */}
          <path
            d="M104 96c8-6 16-6 24 0-3 6-8 9-12 9s-9-3-12-9z"
            fill="#a5814e"
          />
          <path
            d="M64 82c7-5 13-5 20 0-2 5-6 8-10 8s-8-3-10-8z"
            fill="#a5814e"
          />
        </motion.g>
        <motion.g style={{ opacity: t3, scale: t3, transformOrigin: "center" }}>
          {/* basil */}
          <path
            d="M92 58c-8-2-12-6-13-14 8 2 12 6 13 14z"
            fill="var(--color-basil)"
          />
          <path
            d="M140 96c8-1 13 2 16 9-8 1-13-2-16-9z"
            fill="var(--color-basil)"
          />
          <path
            d="M84 126c-8 1-13-2-16-9 8-1 13 2 16 9z"
            fill="var(--color-basil)"
          />
        </motion.g>
      </motion.svg>

      {/* The real thing, sized to land exactly on the drawn dough: the SVG
          crust has r=92 in a 200 viewBox, so 92% of the canvas — a 4% inset.
          `pizza-round.jpg` is cropped so the pizza fills that circle edge to
          edge; swapping in a looser crop will show background in the corners. */}
      <motion.div
        style={{ opacity: photoOpacity, scale: photoScale }}
        className="absolute inset-[4%] overflow-hidden rounded-full shadow-2xl shadow-ink/30"
      >
        <Image
          src="/images/pizza-round.jpg"
          alt="The finished pizza, fresh out of the wood-fired oven"
          fill
          sizes="(min-width: 1024px) 480px, 340px"
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}

export default function PizzaProcess() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [stage, setStage] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setStage(Math.min(steps.length - 1, Math.floor(v * steps.length)));
  });
  const barScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Reduced motion: skip the pinned sequence entirely and show a calm summary.
  if (reduced) {
    return (
      <section className="bg-ink py-20 text-cream md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Eyebrow className="mb-4 text-orchid">The process</Eyebrow>
          <h2 className="mb-12 font-display text-4xl font-semibold md:text-6xl">
            How a pizza is born
          </h2>
          <ol className="grid gap-8 md:grid-cols-5">
            {steps.map((step) => (
              <li key={step.number}>
                <p className="font-sans text-sm tracking-[0.3em] text-orchid">
                  {step.number}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-cream/60">{step.caption}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative h-[420vh] bg-ink text-cream">
      <div className="sticky top-0 flex h-svh flex-col overflow-hidden">
        {/* progress bar */}
        <motion.div
          style={{ scaleX: barScale }}
          className="absolute inset-x-0 top-0 z-10 h-[3px] origin-left bg-plum"
        />

        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 py-10 md:px-8">
          <Reveal>
            <Eyebrow className="mb-3 text-orchid">The process</Eyebrow>
            <h2 className="font-display text-3xl font-semibold md:text-5xl">
              How a pizza is born
            </h2>
          </Reveal>

          <div className="mt-8 flex flex-1 flex-col items-center justify-center gap-10 lg:mt-0 lg:flex-row lg:gap-16">
            {/* step list — desktop */}
            <ol className="hidden w-full max-w-sm shrink-0 space-y-6 lg:block">
              {steps.map((step, i) => (
                <li
                  key={step.number}
                  className={`flex items-baseline gap-5 border-l-2 pl-6 transition-all duration-500 ${
                    stage === i
                      ? "border-plum opacity-100"
                      : "border-cream/15 opacity-35"
                  }`}
                >
                  <span className="font-sans text-sm tracking-[0.3em] text-orchid">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-display text-3xl font-semibold">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-cream/60">{step.caption}</p>
                  </div>
                  {stage === i && (
                    <Diamond size={12} className="ml-auto self-center text-plum" />
                  )}
                </li>
              ))}
            </ol>

            <div className="flex w-full items-center justify-center lg:flex-1">
              <StageCanvas progress={scrollYProgress} />
            </div>

            {/* current step — mobile */}
            <div className="text-center lg:hidden">
              <p className="font-sans text-xs tracking-[0.35em] text-orchid">
                {steps[stage].number} / 05
              </p>
              <h3 className="mt-1 font-display text-3xl font-semibold">
                {steps[stage].title}
              </h3>
              <p className="mt-1 text-sm text-cream/60">
                {steps[stage].caption}
              </p>
              <div className="mt-4 flex justify-center gap-2">
                {steps.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      stage === i ? "w-6 bg-plum" : "w-1.5 bg-cream/25"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
