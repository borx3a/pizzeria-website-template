"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";
import { Diamond, Eyebrow, ScribbleArrow } from "./decor";

export default function Story() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", reduced ? "0%" : "-8%"]
  );

  return (
    <section id="story" ref={ref} className="py-20 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <Eyebrow className="mb-4 text-basil">Our story</Eyebrow>
          <h2 className="font-display text-5xl font-semibold tracking-tight text-plum md:text-7xl">
            Your story goes here.
          </h2>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/75">
            <p>
              This is the place to say how it started — the first oven, the
              first batch of dough, the reason the doors opened at all.
            </p>
            <p>
              We ferment our dough slowly, char it fast, and top it with things
              we actually want to eat. Some combinations are classics for a
              reason. Others are entirely your own.
            </p>
            <p>
              No shortcuts, no freezer, no fuss. Just a hot oven, good hands,
              and pizza that&apos;s better when the whole table reaches for it.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <Diamond size={14} className="text-plum" />
            <p className="font-script text-2xl text-basil">
              — from the kitchen
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="relative overflow-hidden rounded-2xl">
            <motion.div style={{ y: imageY }} className="relative aspect-[4/5] scale-[1.12]">
              <Image
                src="/images/bruschetta.jpg"
                alt="Bruschetta with marinated tomatoes, basil and olive oil on a wooden board"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* handwritten annotations, like margin notes on the printed menu */}
          <div className="absolute -left-3 top-8 rotate-[-6deg] md:-left-8">
            <p className="rounded-full bg-cream px-4 py-1.5 font-script text-2xl text-basil shadow-sm ring-1 ring-ink/10">
              classic recipes
            </p>
            <ScribbleArrow className="ml-10 mt-1 text-basil/80" />
          </div>
          <div className="absolute -right-2 bottom-10 rotate-[4deg] md:-right-6">
            <ScribbleArrow className="mb-1 ml-2 -scale-y-100 text-basil/80" flip />
            <p className="rounded-full bg-cream px-4 py-1.5 font-script text-2xl text-basil shadow-sm ring-1 ring-ink/10">
              modern techniques
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
