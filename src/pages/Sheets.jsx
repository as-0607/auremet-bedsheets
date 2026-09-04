import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import productImage from "../assets/product_sheets.jpg";

export default function Sheets() {
  const { t } = useTranslation();
  const types = [
    { key: "flat", to: "/flat-sheets" },
    { key: "fitted", to: "/fitted-sheets" },
  ];

  return (
    <main className="min-h-screen bg-[#f4eadc] px-5 pb-24 pt-32 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-[13px] uppercase tracking-[3px] text-[#b18a42]">{t("sheets.eyebrow")}</p>
        <h1 className="mb-5 font-['Cormorant_Garamond'] text-5xl font-semibold text-[#8d6a2b] sm:text-6xl">{t("sheets.title")}</h1>
        <p className="mb-12 max-w-2xl text-lg leading-relaxed text-gray-500">{t("sheets.description")}</p>
        <div className="grid gap-7 md:grid-cols-2">
          {types.map((type, index) => (
            <Link key={type.key} to={type.to} className="group overflow-hidden rounded-[24px] border border-[#e1d3bb] bg-white/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8d6a2b]">
              <div className="aspect-[16/10] overflow-hidden bg-[#e9dcc4]">
                <img src={productImage} alt="" className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${index === 1 ? "object-right" : "object-left"}`} />
              </div>
              <div className="flex items-center justify-between gap-5 p-7">
                <div>
                  <h2 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#8d6a2b]">{t(`sheets.types.${type.key}.name`)}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{t(`sheets.types.${type.key}.description`)}</p>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-[#8d6a2b] transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
