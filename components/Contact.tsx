import Reveal from "./Reveal";
import { site } from "@/data/site";
import { Diamond, Eyebrow } from "./decor";

/**
 * Contact details come from `data/site.ts`. Until they are filled in, the
 * rows read as placeholders and the buttons point nowhere.
 */
const details = [
  { label: "Address", value: site.contact.address, href: null },
  { label: "Phone", value: site.contact.phone, href: null },
  { label: "Opening Hours", value: site.contact.hours, href: null },
  {
    label: "Instagram",
    value: site.instagram.handle,
    href: site.instagram.url,
  },
];

const actions = [
  { label: "Get Directions", href: "#" },
  { label: "Call Us", href: "#" },
  { label: "Instagram", href: site.instagram.url },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-plum py-20 text-cream md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <Eyebrow className="mb-4 text-orchid">Find us</Eyebrow>
          <h2 className="font-display text-[clamp(3rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-tight">
            Come for
            <br />
            <span className="italic font-light">a slice.</span>
          </h2>
          <p className="mt-6 font-script text-3xl text-orchid">
            Good pizza is better shared.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal delay={0.1}>
            <dl className="divide-y divide-cream/15">
              {details.map((detail) => (
                <div
                  key={detail.label}
                  className="flex items-baseline justify-between gap-6 py-5"
                >
                  <dt className="font-sans text-[11px] uppercase tracking-[0.35em] text-orchid">
                    {detail.label}
                  </dt>
                  <dd className="text-right font-display text-lg text-cream/90">
                    {detail.href ? (
                      <a href={detail.href} className="link-underline">
                        {detail.value}
                      </a>
                    ) : (
                      detail.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-wrap gap-3">
              {actions.map((action, i) => (
                <a
                  key={action.label}
                  href={action.href}
                  className={`rounded-full px-7 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                    i === 0
                      ? "bg-cream text-plum hover:scale-[1.04]"
                      : "border border-cream/40 text-cream hover:border-cream hover:bg-cream/10"
                  }`}
                >
                  {action.label}
                </a>
              ))}
            </div>
          </Reveal>

          {/* Map area — replace with an embedded map when the address is known */}
          <Reveal delay={0.2}>
            <div className="flex h-full min-h-[320px] flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-cream/25 p-10 text-center">
              <Diamond size={22} className="text-orchid" />
              <p className="font-display text-2xl font-semibold">
                Map on its way
              </p>
              <p className="max-w-xs text-sm leading-relaxed text-cream/60">
                Paste your map embed into{" "}
                <span className="font-sans">Contact.tsx</span> to replace this
                placeholder.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
