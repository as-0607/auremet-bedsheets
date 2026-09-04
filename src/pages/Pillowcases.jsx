import { useTranslation } from "react-i18next";
import productImage from "../assets/product_pillows.jpg";

export default function Pillowcases() {
  const { t } = useTranslation();
  const products = t("pillowcases.items", { returnObjects: true });

  return (
    <main className="min-h-screen bg-[#f4eadc] px-5 pb-24 pt-32 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-[13px] uppercase tracking-[3px] text-[#b18a42]">{t("pillowcases.eyebrow")}</p>
        <h1 className="mb-5 font-['Cormorant_Garamond'] text-5xl font-semibold text-[#8d6a2b] sm:text-6xl">{t("pillowcases.title")}</h1>
        <p className="mb-12 max-w-2xl text-lg leading-relaxed text-gray-500">{t("pillowcases.description")}</p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <article key={product.name} className="overflow-hidden rounded-2xl border border-[#e1d3bb] bg-white/50">
              <div className="aspect-[4/5] overflow-hidden bg-[#e9dcc4]">
                <img src={productImage} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="p-6">
                <p className="mb-2 text-xs uppercase tracking-[2px] text-[#b18a42]">{product.material}</p>
                <h2 className="mb-2 font-['Cormorant_Garamond'] text-2xl font-semibold text-[#8d6a2b]">{product.name}</h2>
                <p className="text-sm leading-relaxed text-gray-500">{product.description}</p>
                <p className="mt-5 font-medium text-gray-700">${[59, 69, 65][index]}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
