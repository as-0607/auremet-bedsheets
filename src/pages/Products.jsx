import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import duvetImage from "../assets/product_comforter.jpg";
import quiltImage from "../assets/hero-bed.jpg";
import duvetCoverImage from "../assets/product_duvet.jpg";
import pillowImage from "../assets/product_pillows.jpg";
import sheetsImage from "../assets/product_sheets.jpg";

const categories = [
  { key: "duvets", to: "/duvets", image: duvetImage },
  { key: "quilts", to: "/quilts", image: quiltImage },
  { key: "duvetCovers", to: "/duvet-covers", image: duvetCoverImage },
  { key: "pillowcases", to: "/pillowcases", image: pillowImage },
  { key: "sheets", to: "/sheets", image: sheetsImage },
];

export default function Products() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-[#f4eadc] px-5 pb-24 pt-32 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 max-w-3xl">
          <p className="mb-4 text-[13px] uppercase tracking-[3px] text-[#b18a42]">
            {t("products.eyebrow")}
          </p>
          <h1 className="mb-5 font-['Cormorant_Garamond'] text-5xl font-semibold text-[#8d6a2b] sm:text-6xl">
            {t("products.title")}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-500">
            {t("products.description")}
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {categories.map((category, index) => (
            <Link
              key={category.key}
              to={category.to}
              className={`group relative min-h-[390px] overflow-hidden rounded-[24px] bg-[#d9c7aa] shadow-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8d6a2b] ${
                index < 2 ? "lg:col-span-3" : "lg:col-span-2"
              }`}
            >
              <img
                src={category.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-7 text-white sm:p-8">
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[2.5px] text-white/75">
                    {t("products.explore")}
                  </p>
                  <h2 className="font-['Cormorant_Garamond'] text-3xl font-semibold sm:text-4xl">
                    {t(`products.categories.${category.key}.name`)}
                  </h2>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80">
                    {t(`products.categories.${category.key}.description`)}
                  </p>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/50 bg-white/10 transition-colors group-hover:bg-white group-hover:text-[#8d6a2b]">
                  <ArrowRight className="h-5 w-5 rtl:rotate-180" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
