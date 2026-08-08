import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    const newLanguage = i18n.language === "en" ? "ar" : "en";

    i18n.changeLanguage(newLanguage);

    document.documentElement.lang = newLanguage;
    document.documentElement.dir = newLanguage === "ar" ? "rtl" : "ltr";
  };

  return (
    <button
      onClick={changeLanguage}
      aria-label="Change language"
      className=" flex h-10 w-10 items-center justify-center rounded-full border border-[#d3b98a]/60 bg-[#f8f1e7] text-[#8d6a2b] transition-all duration-300 hover:bg-[#b18a42] hover:text-white"
    >
      <Globe
        size={18}
        strokeWidth={1.7}
        className="transition-transform duration-300 group-hover:rotate-12"
      />
    </button>
  );
}