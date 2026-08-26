import { useState } from "react";
import { useTranslation } from "react-i18next";

const COVER_MATERIALS = [
  {
    key: "all",
    style: {
      background:
        "conic-gradient(from 0deg, #DCC89E 0deg 120deg, #9AA3A8 120deg 240deg, #E9EAE6 240deg 360deg)",
    },
  },
  {
    key: "satin",
    style: {
      background:
        "linear-gradient(135deg, #F4ECD8 0%, #E8D9B8 30%, #FAF3E3 50%, #DCC89E 70%, #F4ECD8 100%)",
    },
  },
  {
    key: "stripe",
    style: {
      background:
        "repeating-linear-gradient(135deg, rgba(255,255,255,0.85) 0px 3px, rgba(255,255,255,0) 3px 8px), linear-gradient(135deg, #AEB6BB 0%, #DEE3E5 30%, #8E979C 50%, #DEE3E5 70%, #AEB6BB 100%)",
    },
  },
  {
    key: "cotton",
    style: {
      background:
        "radial-gradient(circle at 30% 30%, #FFFFFF 0%, #E9EAE6 45%, #D6D8D2 75%, #F1F2EE 100%)",
    },
  },
];

const FITTED_SHEETS = [
  {
    id: 1,
    coverMaterial: "satin",
    fillMaterial: "Cotton",
    price: 129,
    name: "Classic Satin Fitted Sheet",
    description: "Smooth satin finish with a secure deep-pocket fit.",
  },
  {
    id: 2,
    coverMaterial: "stripe",
    fillMaterial: "Cotton",
    price: 119,
    name: "Striped Weave Fitted Sheet",
    description: "Subtle woven stripe texture with a comfortable fit.",
  },
  {
    id: 3,
    coverMaterial: "cotton",
    fillMaterial: "Cotton",
    price: 139,
    name: "Pure Cotton Fitted Sheet",
    description: "Breathable cotton fabric, soft and durable.",
  },
];

export default function FittedSheets() {
  const { t } = useTranslation();
  const [selectedMaterial, setSelectedMaterial] = useState("all");

  const filteredSheets =
    selectedMaterial === "all"
      ? FITTED_SHEETS
      : FITTED_SHEETS.filter(
          (item) => item.coverMaterial === selectedMaterial
        );

  return (
    <section className="bg-[#f4eadc] min-h-screen pt-32 pb-20 px-8 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <p className="text-[13px] tracking-[3px] text-[#b18a42] mb-4">
          {t("fittedSheets.eyebrow")}
        </p>

        <h1 className="font-['Cormorant_Garamond'] font-bold text-5xl text-[#8d6a2b] mb-6">
          {t("fittedSheets.title")}
        </h1>

        <p className="text-gray-500 text-lg max-w-2xl leading-relaxed mb-10">
          {t("fittedSheets.description")}
        </p>

        {/* Material filters */}
        <div className="flex flex-wrap items-center gap-4 mb-2">
          {COVER_MATERIALS.map((material) => {
            const isActive = material.key === selectedMaterial;

            return (
              <button
                key={material.key}
                onClick={() => setSelectedMaterial(material.key)}
                className={`flex items-center gap-3 pl-2 pr-6 py-2 rounded-full transition-all duration-300 border ${
                  isActive
                    ? "border-[#b18a42] bg-[#b18a42]/10"
                    : "border-[#d3b98a] hover:border-[#b18a42]"
                }`}
              >
                <span
                  className={`w-9 h-9 rounded-full shrink-0 border ${
                    isActive
                      ? "border-[#8d6a2b]"
                      : "border-[#d3b98a]"
                  }`}
                  style={material.style}
                />

                <span
                  className={`text-[13px] tracking-[1.5px] ${
                    isActive ? "text-[#8d6a2b]" : "text-gray-500"
                  }`}
                >
                  {t(`fittedSheets.materials.${material.key}`)}
                </span>
              </button>
            );
          })}
        </div>

        <p className="text-[12px] tracking-[1px] text-gray-400 mb-10">
          {t("fittedSheets.filter_note")}
        </p>

        {/* Products */}
        {filteredSheets.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSheets.map((sheet) => (
              <div
                key={sheet.id}
                className="bg-white/40 rounded-2xl overflow-hidden border border-[#e7dfd1] hover:-translate-y-1 transition-transform duration-300"
              >
                {/* Image */}
                <div className="aspect-[4/5] bg-[#e9dcc4] flex items-center justify-center">
                  <span className="text-sm tracking-widest text-gray-400">
                    IMAGE
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] tracking-[2px] text-[#b18a42]">
                      {t(
                        `fittedSheets.materials.${sheet.coverMaterial}`
                      )}{" "}
                      {t("fittedSheets.cover_label")}
                    </span>

                    <span className="text-gray-300">•</span>

                    <span className="text-[11px] tracking-[2px] text-gray-400">
                      {sheet.fillMaterial.toUpperCase()}{" "}
                      {t("fittedSheets.fill_label")}
                    </span>
                  </div>

                  <h3 className="font-['Cormorant_Garamond'] font-bold text-2xl text-[#8d6a2b] mb-2">
                    {sheet.name}
                  </h3>

                  <p className="text-gray-500 text-sm mb-4">
                    {sheet.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">
                      ${sheet.price}
                    </span>

                    <button className="text-[13px] tracking-[1.5px] text-[#8d6a2b] hover:text-[#a46c19] transition-colors">
                      {t("fittedSheets.shop")} →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-24 border border-dashed border-[#d3b98a] rounded-2xl">
            <p className="font-['Cormorant_Garamond'] text-3xl text-[#8d6a2b] mb-3">
              {t("fittedSheets.sorry.heading")}
            </p>

            <p className="text-gray-500 max-w-md">
              {t("fittedSheets.sorry.message", {
                material: t(
                  `fittedSheets.materials.${selectedMaterial}`
                ),
              })}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}