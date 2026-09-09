"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Diamond, Sprig } from "./decor";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "14%"]);
  const sprigY = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "-30%"]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative overflow-hidden pt-28 md:pt-32"
    >
      <motion.div
        style={{ y: sprigY }}
        className="pointer-events-none absolute left-[4%] top-24 hidden text-basil/50 lg:block"
      >
        <Sprig />
      </motion.div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-16 md:px-8 lg:min-h-[calc(100svh-10rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-20">
        {/* Copy */}
        <div className="relative max-w-xl lg:max-w-none">
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 flex items-center gap-3 font-script text-2xl text-basil md:text-3xl"
          >
            classic recipes
            <Diamond size={11} className="text-plum" />
            modern techniques
          </motion.p>

          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2.9rem,7.2vw,6.2rem)] font-semibold leading-[0.98] tracking-tight text-ink"
          >
            Pizza, but{" "}
            <em className="font-light italic">a little</em>{" "}
            <span className="text-plum">yours.</span>
          </motion.h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-7 max-w-md text-lg leading-relaxed text-ink/75 md:text-xl"
          >
            Classic recipes, modern techniques, and pizzas made to be shared.
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#menu"
              className="rounded-full bg-plum px-8 py-4 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-cream transition-all duration-300 hover:scale-[1.04] hover:shadow-lg hover:shadow-plum/20"
            >
              Explore the Menu
            </a>
            <a
              href="#contact"
              className="rounded-full border border-ink/25 px-8 py-4 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-ink transition-all duration-300 hover:border-plum hover:text-plum"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="mt-14 hidden items-center gap-4 lg:flex"
          >
            <span className="hairline w-16" />
            <p className="font-sans text-[11px] uppercase tracking-[0.35em] text-ink/50">
              Wood-fired · Hand-stretched · Naturally leavened
            </p>
          </motion.div>
        </div>

        {/* Editorial image, arched frame with parallax */}
        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div
            aria-hidden="true"
            className="absolute -left-4 -top-4 h-full w-full rounded-t-full border border-orchid"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-ink">
            <motion.div style={{ y: imageY }} className="absolute inset-0 scale-[1.18]">
              <Image
                src="/images/pizza-margherita.jpg"
                alt="Wood-fired margherita pizza with a leopard-spotted crust, fresh from the oven"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 90vw"
                className="object-cover"
              />
            </motion.div>
          </div>
          <div className="absolute -bottom-5 -left-5 rotate-[-4deg] rounded-full bg-cream px-5 py-2 shadow-sm ring-1 ring-ink/10">
            <p className="font-script text-xl text-plum">fresh from the oven ✦</p>
          </div>
          <Diamond
            size={20}
            className="absolute -right-2 top-10 text-plum md:-right-6"
          />
        </motion.div>
      </div>
    </section>
  );
}
