import { Leaf, Sparkles, Shield, Feather } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Quality({
  standalone = false,
  small_header,
  big_header,
  description,
  quality_details,
}) {
  const { t } = useTranslation();
  const header = small_header || t("quality.small_header");
  const title = big_header || t("quality.big_header");
  const descriptions = description || t("quality.description");
  const default_quality_details = quality_details || [
    {
      icon: Leaf,
      name: t("quality.cotton.name"),
      description: t("quality.cotton.description"),
    },
    {
      icon: Sparkles,
      name: t("quality.comfort.name"),
      description: t("quality.comfort.description"),
    },
    {
      icon: Shield,
      name: t("quality.lasting.name"),
      description: t("quality.lasting.description"),
    },
    {
      icon: Feather,
      name: t("quality.design.name"),
      description: t("quality.design.description"),
    },
  ];
  return (
    <div
      className={
        standalone
          ? "bg-[#f4eadc] pt-40 pb-30 px-5 sm:px-8 md:px-10 lg:px-16"
          : "bg-[#f7f3ed] py-30 px-5 sm:px-8 md:px-10 lg:px-16"
      }
    >
      <div className="w-fit md:w-[600px] mx-auto text-center mb-15 ">
        <p className="text-sm  tracking-[3px] uppercase text-[#8d6a2b]">
          {header}
        </p>
        <h2
          className={
            standalone
              ? "font-['Cormorant_Garamond'] font-bold my-5 text-5xl  text-[#8d6a2b] md:text-6xl "
              : "font-['Cormorant_Garamond'] font-bold my-5 text-4xl  text-[#8d6a2b] md:text-5xl "
          }
        >
          {title}
        </h2>
        <p className="text-lg text-gray-500">{descriptions}</p>
      </div>

      {/* quality cards */}
      <div
        className={
          standalone
            ? "mt-20 lg:w-[87%] lg:mx-auto flex flex-col gap-6 sm:grid sm:grid-cols-2  lg:gap-7"
            : "lg:w-[87%] lg:mx-auto flex flex-col gap-6 sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:gap-7 "
        }
      >
        {default_quality_details.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.name}
              className="flex-1 rounded-[32px] border border-[#eadcc7] bg-white p-8 shadow-[0_20px_40px_rgba(120,90,50,0.08)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#f3ede4]">
                <Icon className="h-5 w-5 text-[#9a6b1f]" strokeWidth={1.5} />
              </div>

              <h3 className="mb-4 font-serif text-xl text-[#9a6b1f] font-['Cormorant_Garamond']">
                {feature.name}
              </h3>

              <p
                className={
                  standalone
                    ? "text-lg  text-[#718096]"
                    : "text-sm  text-[#718096]"
                }
              >
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
