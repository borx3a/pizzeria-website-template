import Image from "next/image";
import Reveal from "./Reveal";
import { site } from "@/data/site";
import { Diamond } from "./decor";

const polaroids = [
  {
    src: "/images/pizza-margherita.jpg",
    alt: "Margherita pizza from above",
    rotate: "-rotate-3",
    note: "oven day ✦",
  },
  {
    src: "/images/bruschetta.jpg",
    alt: "Bruschetta starter on a board",
    rotate: "rotate-2",
    note: "new starter!",
  },
  {
    src: "/images/table-setting.jpg",
    alt: "A laid table waiting for the first pizza",
    rotate: "-rotate-1",
    note: "table for two",
  },
];

export default function Social() {
  return (
    <section className="overflow-hidden border-y border-ink/10 bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="flex items-center gap-3">
              <Diamond size={14} className="text-plum" />
              <p className="font-sans text-xs uppercase tracking-[0.4em] text-basil">
                On Instagram
              </p>
            </div>
            <h2 className="mt-4 font-display text-5xl font-bold tracking-tight text-plum md:text-7xl">
              {site.instagram.handle.toUpperCase()}
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">
              Daily slices, specials, and whatever came out of the oven looking
              too good not to post.
            </p>
            <a
              href={site.instagram.url}
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-plum px-8 py-4 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-plum transition-colors duration-300 hover:bg-plum hover:text-cream"
            >
              Follow us on Instagram
              <span aria-hidden="true">→</span>
            </a>
          </Reveal>

          <div className="flex justify-center gap-4 md:gap-6">
            {polaroids.map((polaroid, i) => (
              <Reveal key={polaroid.src} delay={i * 0.12}>
                <figure
                  className={`w-32 rounded-lg bg-cream p-2 pb-6 shadow-lg shadow-ink/10 ring-1 ring-ink/10 transition-transform duration-500 hover:-translate-y-2 hover:rotate-0 sm:w-40 md:w-48 ${polaroid.rotate} ${
                    i === 1 ? "mt-10" : ""
                  }`}
                >
                  <div className="relative aspect-square overflow-hidden rounded-md">
                    <Image
                      src={polaroid.src}
                      alt={polaroid.alt}
                      fill
                      sizes="200px"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-2 text-center font-script text-lg text-basil">
                    {polaroid.note}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
