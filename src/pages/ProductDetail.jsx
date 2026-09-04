import { useState } from "react";
import { Check, Minus, Plus, ShieldCheck, Truck } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CATEGORY_PATHS, COLORS, getProductBySlug } from "../data/products";

const copy = {
  en: {
    back: "BACK TO PRODUCTS",
    selectSize: "Select size",
    selectColor: "Select color",
    quantity: "Quantity",
    add: "ADD TO BAG",
    added: "Added to your bag",
    selected: "Selected",
    shipping: "Complimentary delivery",
    shippingNote: "Free shipping on every Auremet order.",
    care: "60-night comfort promise",
    careNote: "Take time to feel the difference at home.",
    notFound: "Product not found",
    return: "Return to products",
    details: "Details",
    returns: "Return Policy",
  },
  ar: {
    back: "العودة إلى المنتجات",
    selectSize: "اختر المقاس",
    selectColor: "اختر اللون",
    quantity: "الكمية",
    add: "أضف إلى الحقيبة",
    added: "تمت الإضافة إلى حقيبتك",
    selected: "المحدد",
    shipping: "توصيل مجاني",
    shippingNote: "شحن مجاني على كل طلبات AUREMET.",
    care: "وعد الراحة لمدة 60 ليلة",
    careNote: "امنح نفسك الوقت لتشعر بالفرق في منزلك.",
    notFound: "المنتج غير موجود",
    return: "العودة إلى المنتجات",
    details: "التفاصيل",
    returns: "سياسة الاسترجاع",
  },
};

export default function ProductDetail() {
  const { slug } = useParams();
  const { i18n } = useTranslation();
  const labels = copy[i18n.language === "ar" ? "ar" : "en"];
  const product = getProductBySlug(slug);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f4eadc] px-6 pt-20 text-center">
        <div>
          <h1 className="font-['Cormorant_Garamond'] text-5xl text-[#8d6a2b]">{labels.notFound}</h1>
          <Link to="/products" className="mt-6 inline-block text-[#8d6a2b] underline underline-offset-4">{labels.return}</Link>
        </div>
      </main>
    );
  }

  const unitPrice = product.prices[selectedSize];
  const totalPrice = unitPrice * quantity;
  const selectedColorHex = COLORS.find((color) => color.name === selectedColor)?.hex;

  return (
    <main className="min-h-screen bg-[#f4eadc] px-5 pb-24 pt-28 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Link to={CATEGORY_PATHS[product.category]} className="mb-8 inline-flex text-xs font-semibold tracking-[1.6px] text-[#8d6a2b] hover:text-[#6f5425]">← {labels.back}</Link>

        <div className="grid gap-10 lg:grid-cols-[1.08fr_.92fr] lg:gap-16">
          <div className="overflow-hidden rounded-[26px] bg-[#e4d6be]">
            <img src={product.image} alt={product.name} className="aspect-[4/5] h-full w-full object-cover" />
          </div>

          <section className="self-center">
            <p className="mb-3 text-xs uppercase tracking-[2px] text-[#b18a42]">{product.material}</p>
            <h1 className="font-['Cormorant_Garamond'] text-5xl font-semibold leading-tight text-[#7d5b24] sm:text-6xl">{product.name}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-500">{product.description}</p>
            <p className="mt-7 font-['Cormorant_Garamond'] text-4xl font-semibold text-[#332b20]" aria-live="polite">{product.currency || "$"} {totalPrice}</p>

            <fieldset className="mt-9">
              <legend className="mb-4 flex w-full items-center justify-between text-sm font-semibold text-[#55452e]">
                <span>{labels.selectSize}</span>
                <span className="font-normal text-gray-500">{selectedSize}</span>
              </legend>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
                {product.sizes.map((size) => (
                  <button key={size} type="button" onClick={() => { setSelectedSize(size); setAdded(false); }} className={`rounded-lg border px-2 py-3 text-sm transition-colors ${selectedSize === size ? "border-[#8d6a2b] bg-[#8d6a2b] text-white" : "border-[#cfbea0] bg-white/35 text-gray-600 hover:border-[#8d6a2b]"}`} aria-pressed={selectedSize === size}>
                    {size}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="mt-8">
              <legend className="mb-4 flex w-full items-center justify-between text-sm font-semibold text-[#55452e]">
                <span>{labels.selectColor}</span>
                <span className="flex items-center gap-2 font-normal text-gray-500"><span className="h-3.5 w-3.5 rounded-full border border-black/15" style={{ backgroundColor: selectedColorHex }} />{selectedColor}</span>
              </legend>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((name) => {
                  const color = COLORS.find((item) => item.name === name);
                  const selected = selectedColor === name;
                  return (
                    <button key={name} type="button" title={name} aria-label={`${name}${selected ? `, ${labels.selected}` : ""}`} aria-pressed={selected} onClick={() => { setSelectedColor(name); setAdded(false); }} className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-transform hover:scale-110 ${selected ? "border-[#8d6a2b] ring-2 ring-[#8d6a2b]/25 ring-offset-2 ring-offset-[#f4eadc]" : "border-white/70"}`} style={{ backgroundColor: color?.hex }}>
                      {selected && <Check className={`h-4 w-4 ${["Navy", "Charcoal"].includes(name) ? "text-white" : "text-[#6f5425]"}`} />}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="mt-8">
              <p className="mb-3 text-sm font-semibold text-[#55452e]">{labels.quantity}</p>
              <div className="inline-flex items-center rounded-full border border-[#cfbea0] bg-white/35 p-1">
                <button type="button" onClick={() => { setQuantity((value) => Math.max(1, value - 1)); setAdded(false); }} className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/70" aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
                <span className="min-w-10 text-center text-sm font-semibold" aria-live="polite">{quantity}</span>
                <button type="button" onClick={() => { setQuantity((value) => Math.min(10, value + 1)); setAdded(false); }} className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/70" aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
              </div>
            </div>

            <button type="button" onClick={() => setAdded(true)} className={`mt-8 flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold tracking-[1.5px] text-white transition-colors ${added ? "bg-[#617054]" : "bg-[#8d6a2b] hover:bg-[#6f5425]"}`}>
              {added && <Check className="h-4 w-4" />}{added ? labels.added : labels.add}
            </button>

            <div className="mt-8 grid gap-4 border-t border-[#ddcfb7] pt-7 sm:grid-cols-2">
              <div className="flex gap-3"><Truck className="mt-0.5 h-5 w-5 shrink-0 text-[#9a7535]" /><div><h2 className="text-sm font-semibold text-[#55452e]">{labels.shipping}</h2><p className="mt-1 text-xs leading-relaxed text-gray-500">{labels.shippingNote}</p></div></div>
              <div className="flex gap-3"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#9a7535]" /><div><h2 className="text-sm font-semibold text-[#55452e]">{labels.care}</h2><p className="mt-1 text-xs leading-relaxed text-gray-500">{labels.careNote}</p></div></div>
            </div>

            <div className="mt-8 divide-y divide-[#ddcfb7] border-y border-[#ddcfb7]">
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold uppercase tracking-[1.3px] text-[#55452e]">
                  {labels.details}<Plus className="h-4 w-4 transition-transform group-open:rotate-45" />
                </summary>
                <div className="min-h-12" />
              </details>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold uppercase tracking-[1.3px] text-[#55452e]">
                  {labels.returns}<Plus className="h-4 w-4 transition-transform group-open:rotate-45" />
                </summary>
                <div className="min-h-12" />
              </details>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
