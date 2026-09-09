/**
 * Menu — single source of truth for products and prices.
 * Edit names, descriptions and prices here; the site renders from this file.
 *
 * `price` is optional: leave it out and no price is shown for that item.
 * `image` is optional: items with an image get a hover photo reveal on desktop.
 */

export type MenuItemData = {
  id: string;
  name: string;
  description: string;
  price?: number;
  image?: string;
  imageAlt?: string;
};

export type MenuCategoryData = {
  id: string;
  label: string;
  /** small handwritten note shown next to the category heading */
  note?: string;
  items: MenuItemData[];
};

export const CURRENCY = "€";

export function formatPrice(price?: number): string | null {
  return typeof price === "number" ? `${price} ${CURRENCY}` : null;
}

export const menu: MenuCategoryData[] = [
  {
    id: "starters",
    label: "Starters",
    note: "to begin with",
    items: [
      {
        id: "bruschetta",
        name: "Bruschetta al Pomodoro",
        description:
          "Toasted sourdough, marinated tomatoes, garlic, basil, olive oil",
        price: 11,
        image: "/images/bruschetta.jpg",
        imageAlt: "Bruschetta with marinated tomatoes and basil on a board",
      },
      {
        id: "burrata",
        name: "Burrata & Tomatoes",
        description:
          "Whole burrata, heirloom tomatoes, basil oil, sea salt, black pepper",
        price: 14,
      },
      {
        id: "rocket-salad",
        name: "Rocket & Parmesan Salad",
        description:
          "Rocket, shaved parmesan, toasted hazelnuts, lemon dressing",
        price: 10,
      },
    ],
  },
  {
    id: "pizzas",
    label: "Pizzas",
    note: "fresh from the oven",
    items: [
      {
        id: "margherita",
        name: "Margherita",
        description: "Tomato sauce, fior di latte mozzarella, basil, parmesan",
        price: 13,
        image: "/images/pizza-margherita.jpg",
        imageAlt: "Wood-fired margherita pizza with a leopard-spotted crust",
      },
      {
        id: "four-cheese",
        name: "Four Cheese",
        description:
          "White sauce, fior di latte mozzarella, gouda, gorgonzola, parmesan, black pepper",
        price: 16,
      },
      {
        id: "mushroom",
        name: "Mushroom",
        description:
          "White sauce, fior di latte mozzarella, caramelised onion, seasonal mushrooms, ricotta, crispy onion",
        price: 17,
      },
      {
        id: "pepperoni",
        name: "Pepperoni",
        description:
          "Tomato sauce, fior di latte mozzarella, pepperoni, oregano",
        price: 15,
      },
      {
        id: "diavola",
        name: "Diavola",
        description:
          "Tomato sauce, fior di latte mozzarella, spicy salami, chilli, oregano",
        price: 16,
      },
    ],
  },
  /*
   * Add more categories the same way, e.g.:
   * {
   *   id: "drinks",
   *   label: "Drinks",
   *   items: [{ id: "lemonade", name: "Homemade Lemonade", description: "…", price: 5 }],
   * },
   */
];

/** Pizzas featured in the large editorial showcase after the menu. */
export const showcaseIds = ["margherita", "mushroom", "four-cheese"] as const;
