import bed from "../assets/hero-bed.jpg";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <section className="bg-[#f4eadc] pt-40 pb-30 px-5 sm:px-8 md:px-10 lg:px-16">
      <div className="w-fit md:w-[600px] mx-auto text-center mb-20 ">
        <p className="text-sm  tracking-[3px] uppercase text-[#8d6a2b]">
          {t("about.heading")}
        </p>
        <h2 className="font-['Cormorant_Garamond'] font-bold my-5 text-5xl  text-[#8d6a2b] md:text-6xl ">
          {t("about.title")}
        </h2>
        <p className="text-lg text-gray-500">
          {t("about.description")}
        </p>
      </div>
      <div className=" flex flex-col  lg:flex-row lg:gap-17 lg:w-[87%] lg:mx-auto lg:items-center">
        <div className="relative lg:w-[50%]  rounded-[20px]">
          <img
            src={bed}
            alt="Bed"
            className="w-full h-[670px] rounded-[20px]"
          />
        </div>
        <div className="lg:w-[50%]  pt-20">
          <p className="text-xl text-gray-500">
            {t("about.p1")}
          </p>
          <p className="text-xl text-gray-500 my-10">
            {t("about.p2")}
          </p>
          <p className="text-xl text-gray-500">
            {t("about.p3")}
          </p>
        </div>
      </div>
    </section>
  );
}
