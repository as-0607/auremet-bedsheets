import product_comforter from "../assets/product_comforter.jpg";
import product_duvet from "../assets/product_duvet.jpg";
import product_pillow from "../assets/product_pillows.jpg";
import product_sheet from "../assets/product_sheets.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Feature() {
  const { t } = useTranslation();

  const collectionDetails = [
    {
      image: product_sheet,
      name: t("feature.collectionDetails.0.name"),
      details: t("feature.collectionDetails.0.details"),
      price: t("feature.collectionDetails.0.price"),
    },
    {
      image: product_comforter,
      name: t("feature.collectionDetails.1.name"),
      details: t("feature.collectionDetails.1.details"),
      price: t("feature.collectionDetails.1.price"),
    },
    {
      image: product_duvet,
      name: t("feature.collectionDetails.2.name"),
      details: t("feature.collectionDetails.2.details"),
      price: t("feature.collectionDetails.2.price"),
    },
    {
      image: product_pillow,
      name: t("feature.collectionDetails.3.name"),
      details: t("feature.collectionDetails.3.details"),
      price: t("feature.collectionDetails.3.price"),
    },
  ];
  
  return (
    <div className="bg-[#f4eadc] py-30 px-5 sm:px-8 md:px-10 lg:px-16">
      <div className="h-fit mb-16 lg:w-[87%] mx-auto flex flex-col justify-between sm:items-end gap-5 sm:flex-row">
        <div>
          <p className="text-sm  tracking-[3px] uppercase text-[#8d6a2b]">
            {t("feature.heading")}
          </p>
          <h2 className="font-['Cormorant_Garamond'] font-bold mt-5 text-4xl  text-[#8d6a2b] sm:text-5xl ">
            {t("feature.title")}
          </h2>
        </div>
        <div>
          <Link
            to="/collections"
            className="uppercase tracking-wide cursor-pointer text-[#9a6b1f] px-8 py-3 rounded-full border border-[#d3b98a] hover:bg-[#b18a42] hover:text-white transition-colors duration-300"
          >
            {t("feature.button1")}
          </Link>
        </div>
      </div>
      <div className="lg:w-[87%] lg:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {collectionDetails.map((collection, index) => (
          <div
            key={index}
            className="group rounded-[20px] overflow-hidden bg-white shadow-md 
                  hover:shadow-lg hover:-translate-y-0.5 
                  transition-all duration-300 "
          >
            <div className="w-full h-90 overflow-hidden mb-6">
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-full object-cover 
                      group-hover:scale-110 
                      transition-transform duration-500"
              />
            </div>

            <div>
              <h3 className="mb-1 mx-6 font-serif text-xl text-[#9a6b1f] font-['Cormorant_Garamond']">
                {collection.name}
              </h3>

              <p className="text-sm text-[#718096] mx-6 mb-4">
                {collection.details}
              </p>

              <div className="mx-6 mb-6 flex justify-between items-center">
                <span className="font-['Cormorant_Garamond'] text-xl">
                  ${collection.price}
                </span>

                <button className=" cursor-pointer text-xs text-[#9a6b1f] [letter-spacing:2px] hover:text-[#d3b98a] transition-colors duration-300">
                  {t("feature.button2")} <span>{t("feature.arrow")}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
