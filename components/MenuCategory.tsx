import type { MenuCategoryData } from "@/data/menu";
import MenuItem from "./MenuItem";
import { Diamond } from "./decor";

export default function MenuCategory({
  category,
}: {
  category: MenuCategoryData;
}) {
  return (
    <section
      id={`menu-${category.id}`}
      aria-labelledby={`menu-${category.id}-heading`}
      className="scroll-mt-40"
    >
      <div className="mb-4 flex items-baseline gap-4">
        <h3
          id={`menu-${category.id}-heading`}
          className="flex items-center gap-3 font-sans text-sm font-semibold uppercase tracking-[0.35em] text-plum"
        >
          <Diamond size={11} />
          {category.label}
        </h3>
        {category.note && (
          <p className="font-script text-xl text-basil">{category.note}</p>
        )}
      </div>
      <div className="hairline mb-2" />

      <ul className="divide-y divide-dotted divide-ink/20">
        {category.items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
