import Image from "next/image";
import Reveal from "./Reveal";
import { site } from "@/data/site";
import { Diamond, Eyebrow, Sprig } from "./decor";

type GalleryEntry =
  | {
      type: "image";
      src: string;
      alt: string;
      ratio: string;
    }
  | {
      type: "tile";
      variant: "script" | "botanical" | "wordmark";
    };

/**
 * Editorial photo wall. Add new photos to /public/images and list them here —
 * decorative brand tiles are mixed in between the photographs.
 */
const entries: GalleryEntry[] = [
  {
    type: "image",
    src: "/images/pizza-margherita.jpg",
    alt: "Wood-fired margherita pizza with a leopard-spotted crust",
    ratio: "aspect-[4/5]",
  },
  { type: "tile", variant: "script" },
  {
    type: "image",
    src: "/images/table-setting.jpg",
    alt: "A laid table with a pizza, basil and water glasses against white tiles",
    ratio: "aspect-[4/3]",
  },
  {
    type: "image",
    src: "/images/bruschetta.jpg",
    alt: "Bruschetta with marinated tomatoes and basil on a wooden board",
    ratio: "aspect-square",
  },
  { type: "tile", variant: "wordmark" },
  { type: "tile", variant: "botanical" },
];

function Tile({ variant }: { variant: "script" | "botanical" | "wordmark" }) {
  if (variant === "script") {
    return (
      <div className="flex aspect-square flex-col items-center justify-center gap-4 rounded-xl bg-plum p-8 text-center">
        <Diamond size={16} className="text-orchid" />
        <p className="font-script text-3xl leading-snug text-cream md:text-4xl">
          good pizza is better shared
        </p>
      </div>
    );
  }
  if (variant === "botanical") {
    return (
      <div className="flex aspect-[4/5] flex-col items-center justify-center gap-6 rounded-xl bg-paper p-8 ring-1 ring-ink/10">
        <Sprig className="text-basil" />
        <p className="font-sans text-[11px] uppercase tracking-[0.4em] text-ink/50">
          {site.name} · Wood-fired
        </p>
        <Sprig className="text-basil" flip />
      </div>
    );
  }
  return (
    <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-orchid/30 p-8">
      <p className="text-outline-plum select-none font-display text-4xl font-bold tracking-tight md:text-5xl">
        {site.name}
      </p>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
          <div>
            <Eyebrow className="mb-4 text-basil">The gallery</Eyebrow>
            <h2 className="font-display text-5xl font-semibold tracking-tight text-plum md:text-7xl">
              In the room
            </h2>
          </div>
          <p className="max-w-xs font-script text-2xl leading-snug text-basil">
            slices, tables, dough &amp; details ✦
          </p>
        </Reveal>

        <div className="columns-2 gap-4 md:columns-3 md:gap-6 [&>*]:mb-4 md:[&>*]:mb-6">
          {entries.map((entry, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08} className="break-inside-avoid">
              {entry.type === "image" ? (
                <figure className={`group relative overflow-hidden rounded-xl ${entry.ratio}`}>
                  <Image
                    src={entry.src}
                    alt={entry.alt}
                    fill
                    sizes="(min-width: 768px) 30vw, 45vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-plum/40 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <Diamond size={16} className="text-cream" />
                  </div>
                </figure>
              ) : (
                <Tile variant={entry.variant} />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
