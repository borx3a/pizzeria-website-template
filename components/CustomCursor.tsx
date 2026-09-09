"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

/**
 * Subtle trailing ring cursor for desktop pointers. The native cursor stays
 * visible; the ring simply drifts behind it and grows over interactive
 * elements. Disabled on touch devices and for reduced-motion users.
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const reduced = useReducedMotion();

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 320, damping: 28, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 320, damping: 28, mass: 0.6 });

  useEffect(() => {
    if (reduced || !window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as Element | null;
      setActive(Boolean(target?.closest("a, button")));
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [reduced, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden md:block"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        className="-ml-4 -mt-4 h-8 w-8 rounded-full border border-plum/50"
        animate={{ scale: active ? 1.8 : 1, opacity: active ? 0.9 : 0.5 }}
        transition={{ duration: 0.25 }}
      />
    </motion.div>
  );
}
