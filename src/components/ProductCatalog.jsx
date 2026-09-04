import { useMemo, useState } from "react";
import { Check, ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { Link } from "react-router-dom";
import { COLORS, SIZES, getProductsByCategory } from "../data/products";

const copy = {
  en: {
    filters: "Filters",
    color: "Color",
    size: "Size",
    price: "Maximum price",
    clear: "Clear all",
    results: "products",
    from: "From",
    view: "VIEW PRODUCT",
    empty: "No products match these filters.",
    emptyHint: "Try another color, size, or price.",
  },
  ar: {
    filters: "التصفية",
    color: "اللون",
    size: "المقاس",
    price: "الحد الأقصى للسعر",
    clear: "مسح الكل",
    results: "منتجات",
    from: "يبدأ من",
    view: "عرض المنتج",
    empty: "لا توجد منتجات مطابقة لهذه الخيارات.",
    emptyHint: "جرّب لونًا أو مقاسًا أو سعرًا آخر.",
  },
};

function FilterContent({ selectedColors, setSelectedColors, selectedSizes, setSelectedSizes, maxPrice, setMaxPrice, clearFilters, labels }) {
  const toggle = (value, selected, setter) => {
    setter(selected.includes(value) ? selected.filter((item) => item !== value) : [...selected, value]);
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-[1.5px] text-[#6f5425]">{labels.color}</h3>
        <div className="space-y-3">
          {COLORS.map((color) => {
            const checked = selectedColors.includes(color.name);
            return (
              <label key={color.name} className="flex cursor-pointer items-center gap-3 text-sm text-gray-600">
                <input type="checkbox" checked={checked} onChange={() => toggle(color.name, selectedColors, setSelectedColors)} className="sr-only" />
                <span className={`flex h-5 w-5 items-center justify-center rounded border ${checked ? "border-[#8d6a2b]" : "border-[#cdbd9e]"}`} style={{ backgroundColor: color.hex }}>
                  {checked && <Check className={`h-3.5 w-3.5 ${["Navy", "Charcoal"].includes(color.name) ? "text-white" : "text-[#6f5425]"}`} />}
                </span>
                <span>{color.name}</span>
              </label>
            );
          })}
        </div>
      </div>

      <div className="border-t border-[#dfd2bd] pt-7">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-[1.5px] text-[#6f5425]">{labels.size}</h3>
        <div className="space-y-3">
          {SIZES.map((size) => (
            <label key={size} className="flex cursor-pointer items-center gap-3 text-sm text-gray-600">
              <input type="checkbox" checked={selectedSizes.includes(size)} onChange={() => toggle(size, selectedSizes, setSelectedSizes)} className="h-4 w-4 accent-[#8d6a2b]" />
              <span>{size}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="border-t border-[#dfd2bd] pt-7">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-[1.5px] text-[#6f5425]">{labels.price}</h3>
          <span className="text-sm font-medium text-[#8d6a2b]">${maxPrice}</span>
        </div>
        <input aria-label={labels.price} type="range" min="50" max="325" step="5" value={maxPrice} onChange={(event) => setMaxPrice(Number(event.target.value))} className="w-full accent-[#8d6a2b]" />
        <div className="mt-2 flex justify-between text-xs text-gray-400"><span>$50</span><span>$325</span></div>
      </div>

      <button onClick={clearFilters} className="flex items-center gap-2 text-sm font-medium text-[#8d6a2b] hover:text-[#6f5425]">
        <X className="h-4 w-4" /> {labels.clear}
      </button>
    </div>
  );
}

export default function ProductCatalog({ category, eyebrow, title, description, language = "en" }) {
  const labels = copy[language === "ar" ? "ar" : "en"];
  const products = getProductsByCategory(category);
  const highestPrice = Math.max(...products.flatMap((product) => Object.values(product.prices)));
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [maxPrice, setMaxPrice] = useState(Math.max(325, highestPrice));
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filteredProducts = useMemo(() => products.filter((product) => {
    const colorMatch = selectedColors.length === 0 || selectedColors.some((color) => product.colors.includes(color));
    const sizeMatch = selectedSizes.length === 0 || selectedSizes.some((size) => product.sizes.includes(size));
    const priceMatch = Math.min(...Object.values(product.prices)) <= maxPrice;
    return colorMatch && sizeMatch && priceMatch;
  }), [products, selectedColors, selectedSizes, maxPrice]);

  const clearFilters = () => {
    setSelectedColors([]);
    setSelectedSizes([]);
    setMaxPrice(Math.max(325, highestPrice));
  };

  const filterProps = { selectedColors, setSelectedColors, selectedSizes, setSelectedSizes, maxPrice, setMaxPrice, clearFilters, labels };

  return (
    <main className="min-h-screen bg-[#f4eadc] px-5 pb-24 pt-32 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1450px]">
        <header className="mb-10 max-w-3xl">
          <p className="mb-4 text-[13px] uppercase tracking-[3px] text-[#b18a42]">{eyebrow}</p>
          <h1 className="mb-5 font-['Cormorant_Garamond'] text-5xl font-semibold text-[#8d6a2b] sm:text-6xl">{title}</h1>
          <p className="text-lg leading-relaxed text-gray-500">{description}</p>
        </header>

        <button onClick={() => setFiltersOpen((open) => !open)} className="mb-6 flex w-full items-center justify-between rounded-xl border border-[#d8c7aa] bg-white/50 px-5 py-4 text-sm font-semibold text-[#6f5425] lg:hidden" aria-expanded={filtersOpen}>
          <span className="flex items-center gap-2"><SlidersHorizontal className="h-4 w-4" />{labels.filters}</span>
          <ChevronDown className={`h-4 w-4 transition-transform ${filtersOpen ? "rotate-180" : ""}`} />
        </button>

        {filtersOpen && <div className="mb-8 rounded-2xl border border-[#dfd2bd] bg-white/40 p-6 lg:hidden"><FilterContent {...filterProps} /></div>}

        <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[250px_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-2xl border border-[#dfd2bd] bg-white/35 p-6">
              <div className="mb-7 flex items-center gap-2 border-b border-[#dfd2bd] pb-5 text-[#6f5425]"><SlidersHorizontal className="h-4 w-4" /><h2 className="text-sm font-semibold uppercase tracking-[1.5px]">{labels.filters}</h2></div>
              <FilterContent {...filterProps} />
            </div>
          </aside>

          <section>
            <div className="mb-5 text-sm text-gray-500">{filteredProducts.length} {labels.results}</div>
            {filteredProducts.length ? (
              <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => {
                  const startingPrice = Math.min(...Object.values(product.prices));
                  return (
                    <article key={product.slug} className="group overflow-hidden rounded-2xl border border-[#dfd2bd] bg-white/45 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <Link to={`/products/${product.slug}`} className="block overflow-hidden bg-[#e9dcc4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8d6a2b]">
                        <img src={product.image} alt={product.name} className="aspect-[4/5] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      </Link>
                      <div className="p-6">
                        <p className="mb-2 text-xs uppercase tracking-[1.8px] text-[#b18a42]">{product.material}</p>
                        <h2 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#7d5b24]">{product.name}</h2>
                        <p className="mt-2 min-h-10 text-sm leading-relaxed text-gray-500">{product.description}</p>
                        <div className="mt-4 flex gap-1.5" aria-label={`${product.colors.length} colors`}>
                          {product.colors.slice(0, 6).map((name) => <span key={name} title={name} className="h-4 w-4 rounded-full border border-black/15" style={{ backgroundColor: COLORS.find((color) => color.name === name)?.hex }} />)}
                          {product.colors.length > 6 && <span className="text-xs text-gray-500">+{product.colors.length - 6}</span>}
                        </div>
                        <div className="mt-5 flex items-center justify-between gap-4 border-t border-[#e3d8c6] pt-5">
                          <span className="text-sm text-gray-700">{labels.from} <strong>${startingPrice}</strong></span>
                          <Link to={`/products/${product.slug}`} className="text-xs font-semibold tracking-[1.3px] text-[#8d6a2b] hover:text-[#6f5425]">{labels.view} →</Link>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-[#cdb88f] px-6 py-24 text-center">
                <h2 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#8d6a2b]">{labels.empty}</h2>
                <p className="mt-2 text-gray-500">{labels.emptyHint}</p>
                <button onClick={clearFilters} className="mt-6 rounded-full bg-[#8d6a2b] px-6 py-3 text-sm text-white">{labels.clear}</button>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
