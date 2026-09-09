/**
 * Site configuration — the brand layer of the template.
 *
 * Everything here is a placeholder. Change these values, swap the photos in
 * `public/images/`, redraw the wordmark in `public/logo.png`, and edit
 * `data/menu.ts` — that is the whole rebrand.
 */
export const site = {
  /** Wordmark text. Used for alt text, aria labels and the gallery tile. */
  name: "PIZZERIA",

  /** Full name, used in the footer and in the structured data. */
  fullName: "Your Pizzeria",

  /** One line, shown in the structured data and usable anywhere else. */
  tagline: "Your tagline goes here.",

  /** Meta description for search results and link previews. */
  description:
    "A one-page website template for a wood-fired pizzeria — editorial menu, scroll-pinned process animation and a photo wall.",

  /** City for the structured data. */
  location: "Your City",

  /** ISO 3166-1 alpha-2 country code for the structured data. */
  countryCode: "US",

  /** Set `url` to the real profile to activate the Instagram links. */
  instagram: {
    handle: "@yourpizzeria",
    url: "#",
  },

  /** Shown in the Contact section. Replace with the real details. */
  contact: {
    address: "Address coming soon",
    phone: "Phone coming soon",
    hours: "Hours coming soon",
  },

  /** Words cycling through the marquee band under the hero. */
  marqueeWords: [
    "Pizza",
    "People",
    "Good Times",
    "Wood-Fired",
    "Hand-Stretched",
    "Naturally Leavened",
  ],
} as const;
