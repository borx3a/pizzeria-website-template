import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { Diamond } from "./decor";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#story" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-5 py-14 md:px-8">
        <Link href="#home" aria-label="Back to top">
          <Image
            src="/logo.png"
            alt={site.name}
            width={1039}
            height={212}
            className="h-12 w-auto"
          />
        </Link>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="link-underline font-sans text-xs font-medium uppercase tracking-[0.25em] text-ink/70 transition-colors hover:text-plum"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.instagram.url}
                className="link-underline font-sans text-xs font-medium uppercase tracking-[0.25em] text-ink/70 transition-colors hover:text-plum"
              >
                Instagram
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Diamond size={10} className="text-plum" />
          <p className="font-script text-2xl text-basil">
            Pizza · People · Good Times
          </p>
          <Diamond size={10} className="text-plum" />
        </div>

        <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-ink/40">
          © {new Date().getFullYear()} {site.fullName}
        </p>
      </div>
    </footer>
  );
}
