import { site } from "@/data/site";
import { Diamond } from "./decor";

const words = site.marqueeWords;

export default function Marquee() {
  const row = (
    <div className="flex shrink-0 items-center">
      {[...words, ...words].map((word, i) => (
        <span key={i} className="flex items-center">
          <span className="px-6 font-sans text-sm font-medium uppercase tracking-[0.3em] text-cream md:px-10">
            {word}
          </span>
          <Diamond size={9} className="text-orchid" />
        </span>
      ))}
    </div>
  );

  return (
    <div
      aria-hidden="true"
      className="flex overflow-hidden border-y border-ink/10 bg-plum py-3.5"
    >
      <div className="animate-marquee flex">{row}{row}</div>
    </div>
  );
}
