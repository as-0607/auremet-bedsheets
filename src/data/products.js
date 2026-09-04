import duvetImage from "../assets/product_comforter.jpg";
import quiltImage from "../assets/hero-bed.jpg";
import duvetCoverImage from "../assets/product_duvet.jpg";
import pillowImage from "../assets/product_pillows.jpg";
import sheetsImage from "../assets/product_sheets.jpg";

export const SIZES = ["Single", "Double", "Queen", "King", "Super King"];

export const COLORS = [
  { name: "Ivory", hex: "#eee8d9" },
  { name: "White", hex: "#ffffff" },
  { name: "Sand", hex: "#cfb890" },
  { name: "Blush", hex: "#d8aca5" },
  { name: "Sage", hex: "#9eaa91" },
  { name: "Sky", hex: "#9eb6c5" },
  { name: "Navy", hex: "#26394c" },
  { name: "Charcoal", hex: "#555655" },
];

const sizePrices = (base) => ({
  Single: base,
  Double: base + 20,
  Queen: base + 45,
  King: base + 75,
  "Super King": base + 105,
});

const flatSheetPrices = {
  Single: 340,
  Double: 470,
  Queen: 550,
  King: 720,
  "Super King": 820,
};

const fittedSheetPrices = {
  Single: 450,
  Double: 570,
  Queen: 640,
  King: 840,
  "Super King": 940,
};

const stripeSheetPrices = {
  Single: 650,
  Double: 730,
  Queen: 840,
  King: 960,
  "Super King": 1150,
};

export const CATEGORY_PATHS = {
  duvets: "/duvets",
  quilts: "/quilts",
  "duvet-covers": "/duvet-covers",
  pillowcases: "/pillowcases",
  "flat-sheets": "/flat-sheets",
  "fitted-sheets": "/fitted-sheets",
};

export const PRODUCTS = [
  {
    slug: "classic-satin-duvet",
    category: "duvets",
    name: "Classic Satin Duvet",
    description: "A smooth satin shell with cloud-soft microfiber warmth.",
    material: "Satin · Microfiber fill",
    image: duvetImage,
    colors: ["Ivory", "White", "Sand", "Blush", "Navy"],
    sizes: SIZES,
    prices: sizePrices(189),
  },
  {
    slug: "cloud-weight-duvet",
    category: "duvets",
    name: "Cloud Weight Duvet",
    description: "Hotel-weight comfort balanced for restful sleep all year.",
    material: "Cotton · Microfiber fill",
    image: duvetImage,
    colors: ["White", "Ivory", "Sage", "Sky"],
    sizes: SIZES,
    prices: sizePrices(209),
  },
  {
    slug: "cool-touch-duvet",
    category: "duvets",
    name: "Cool Touch Duvet",
    description: "A breathable lightweight layer made for warmer nights.",
    material: "Percale · Microfiber fill",
    image: duvetImage,
    colors: ["White", "Sand", "Sky", "Charcoal"],
    sizes: SIZES,
    prices: sizePrices(169),
  },
  {
    slug: "hand-stitched-quilt",
    category: "quilts",
    name: "Hand-Stitched Quilt",
    description: "Quiet geometric stitching with an airy, tactile finish.",
    material: "Washed cotton",
    image: quiltImage,
    colors: ["Ivory", "Sand", "Sage", "Navy"],
    sizes: SIZES,
    prices: sizePrices(179),
  },
  {
    slug: "sateen-channel-quilt",
    category: "quilts",
    name: "Sateen Channel Quilt",
    description: "Soft channel quilting with a subtle, luminous sheen.",
    material: "Cotton sateen",
    image: quiltImage,
    colors: ["White", "Blush", "Sky", "Charcoal"],
    sizes: SIZES,
    prices: sizePrices(189),
  },
  {
    slug: "everyday-cotton-quilt",
    category: "quilts",
    name: "Everyday Cotton Quilt",
    description: "A versatile mid-weight layer for effortless everyday use.",
    material: "Pure cotton",
    image: quiltImage,
    colors: ["Ivory", "White", "Sand", "Sage", "Navy"],
    sizes: SIZES,
    prices: sizePrices(159),
  },
  {
    slug: "sandwashed-duvet-cover",
    category: "duvet-covers",
    name: "Sandwashed Duvet Cover",
    description: "Relaxed softness with an elegant hidden-button closure.",
    material: "Sandwashed cotton",
    image: duvetCoverImage,
    colors: ["Ivory", "White", "Sand", "Sage", "Sky", "Charcoal"],
    sizes: SIZES,
    prices: sizePrices(149),
  },
  {
    slug: "signature-sateen-duvet-cover",
    category: "duvet-covers",
    name: "Signature Sateen Duvet Cover",
    description: "Silky Egyptian cotton with a refined hotel-inspired finish.",
    material: "Egyptian cotton sateen",
    image: duvetCoverImage,
    colors: ["White", "Ivory", "Blush", "Navy"],
    sizes: SIZES,
    prices: sizePrices(169),
  },
  {
    slug: "crisp-percale-duvet-cover",
    category: "duvet-covers",
    name: "Crisp Percale Duvet Cover",
    description: "Cool, breathable comfort with a clean matte finish.",
    material: "Cotton percale",
    image: duvetCoverImage,
    colors: ["White", "Sand", "Sky", "Sage"],
    sizes: SIZES,
    prices: sizePrices(159),
  },
  {
    slug: "sateen-pillowcase-pair",
    category: "pillowcases",
    name: "Sateen Pillowcase Pair",
    description: "Silky-soft pillowcases finished with a neat envelope closure.",
    material: "Egyptian cotton sateen",
    image: pillowImage,
    colors: ["Ivory", "White", "Sand", "Blush", "Sage", "Sky", "Navy"],
    sizes: SIZES,
    prices: sizePrices(49),
  },
  {
    slug: "percale-pillowcase-pair",
    category: "pillowcases",
    name: "Percale Pillowcase Pair",
    description: "Crisp, breathable pillowcases designed for warm sleepers.",
    material: "Cotton percale",
    image: pillowImage,
    colors: ["White", "Ivory", "Sky", "Charcoal"],
    sizes: SIZES,
    prices: sizePrices(45),
  },
  {
    slug: "oxford-pillowcase-pair",
    category: "pillowcases",
    name: "Oxford Pillowcase Pair",
    description: "A tailored flange edge for an elegant finishing layer.",
    material: "Bordered cotton",
    image: pillowImage,
    colors: ["White", "Sand", "Blush", "Sage", "Navy"],
    sizes: SIZES,
    prices: sizePrices(55),
  },
  {
    slug: "classic-flat-sheet",
    category: "flat-sheets",
    name: "Flat Sheet Set",
    description: "A flat sheet set with two pillowcases for Single and four pillowcases for larger sizes.",
    material: "Egyptian cotton sateen",
    image: sheetsImage,
    colors: ["Ivory", "White", "Sand", "Blush", "Sage", "Sky", "Navy"],
    sizes: SIZES,
    prices: flatSheetPrices,
    currency: "EGP",
  },
  {
    slug: "stripe-bed-sheet-set",
    category: "flat-sheets",
    name: "Stripe Bed Sheet Set",
    description: "A striped bed sheet set with two pillowcases for Single and four pillowcases for larger sizes.",
    material: "Striped cotton",
    image: sheetsImage,
    colors: ["White", "Ivory", "Sky", "Charcoal"],
    sizes: SIZES,
    prices: stripeSheetPrices,
    currency: "EGP",
  },
  {
    slug: "deep-pocket-fitted-sheet",
    category: "fitted-sheets",
    name: "Fitted Sheet Set",
    description: "A fitted sheet set with two pillowcases for Single and four pillowcases for larger sizes.",
    material: "Egyptian cotton sateen",
    image: sheetsImage,
    colors: ["Ivory", "White", "Sand", "Blush", "Sage", "Sky", "Navy"],
    sizes: SIZES,
    prices: fittedSheetPrices,
    currency: "EGP",
  },
];

export function getProductsByCategory(category) {
  return PRODUCTS.filter((product) => product.category === category);
}

export function getProductBySlug(slug) {
  return PRODUCTS.find((product) => product.slug === slug);
}
