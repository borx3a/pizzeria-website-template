"use client";

import Image from "next/image";
import { formatPrice, type MenuItemData } from "@/data/menu";
import { Diamond } from "./decor";

export default function MenuItem({ item }: { item: MenuItemData }) {
  const price = formatPrice(item.price);

  return (
    <li className="group relative py-6 first:pt-2 last:pb-2">
      {/* purple accent line, grows on hover */}
      <span
        aria-hidden="true"
        className="absolute -left-5 top-6 bottom-6 w-[2.5px] origin-top scale-y-0 rounded-full bg-plum transition-transform duration-500 ease-out group-hover:scale-y-100 md:-left-8"
      />

      <div className="flex items-baseline">
        <h4 className="font-display text-xl font-semibold tracking-tight text-ink transition-all duration-300 group-hover:translate-x-1 group-hover:text-plum md:text-2xl">
          {item.name}
        </h4>
        <span className="dot-leader" aria-hidden="true" />
        {price && (
          <p className="shrink-0 font-sans text-sm font-semibold tracking-wide text-plum md:text-base">
            {price}
          </p>
        )}
      </div>

      <p className="mt-2 max-w-md pr-4 text-[15px] leading-relaxed text-ink/65 md:pr-40">
        {item.description}
      </p>

      {/* hover photo reveal for items that have an image */}
      {item.image && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-8 right-0 hidden w-40 rotate-[3deg] opacity-0 shadow-xl shadow-ink/20 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:rotate-[1deg] group-hover:opacity-100 lg:block"
        >
          <Image
            src={item.image}
            alt=""
            width={320}
            height={320}
            className="aspect-square rounded-lg object-cover"
          />
          <Diamond
            size={14}
            className="absolute -left-2 -top-2 text-plum"
          />
        </div>
      )}
    </li>
  );
}
