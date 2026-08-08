import { useTranslation } from "react-i18next";

export default function Journal() {
  const { t } = useTranslation();
  return (
    <div className="bg-[#f7f3ed] pt-30 pb-50 px-5 sm:px-8 md:px-10 lg:px-16">
      <div className="relative mx-auto flex min-h-[400px] max-w-[1200px] items-center justify-center overflow-hidden rounded-[38px] border border-[#e6d7bd] bg-[#f4eadc] px-6 py-16 shadow-[0_30px_50px_rgba(120,90,40,0.10)] sm:px-10 lg:min-h-[400px]">
        <div className="absolute -left-[105px] -top-[115px] h-[280px] w-[280px] rounded-full border-[5px] border-[#eadfcf]" />

        <div className="absolute -bottom-[135px] -right-[90px] h-[260px] w-[260px] rounded-full border-[5px] border-[#eadfcf]" />

        <div className="absolute left-0 top-[75px] h-[65px] w-[100px] rounded-br-full border-b-[5px] border-r-[5px] border-[#eadfcf] rotate-[-25deg]" />

        <div className="absolute bottom-[55px] right-0 h-[65px] w-[100px] rounded-tl-full border-t-[5px] border-l-[5px] border-[#eadfcf] rotate-[-25deg]" />

        <div className="relative z-10 w-full max-w-[850px] text-center">
          <p className="mb-6 text-[12px] font-medium tracking-[0.45em] text-[#9b6e25] sm:text-[13px]">
            {t("journal.heading")}
          </p>

          <h2 className="font-['Cormorant_Garamond'] font-bold my-5 text-4xl  text-[#8d6a2b] md:text-5xl ">
            {t("journal.title")}
          </h2>

          <p className="mx-auto mt-5 max-w-[700px]  leading-[1.7] text-[#7d7b78] text-[18px]">
            {t("journal.description1")}
            <br className="hidden sm:block" />
            {t("journal.description2")}
          </p>

          <form className="mx-auto mt-5 p-2 flex w-full max-w-[550px] items-center rounded-full border border-[#e5d8c5] bg-white shadow-[0_8px_15px_rgba(100,75,40,0.12)] sm:h-[75px]">
            <input
              type="email"
              placeholder={t("journal.placeholder")}
              className="min-w-0 flex-1 bg-transparent px-5 text-[16px] text-[#555] outline-none placeholder:text-[#b7b3af] sm:text-[17px]"
            />

            <button
              type="submit"
              className="shrink-0 rounded-full bg-[#b58a3f] px-8 py-4 text-[14px] font-semibold tracking-[0.15em] text-white transition duration-300 hover:bg-[#9e7734] sm:px-10"
            >
              {t("journal.button")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
