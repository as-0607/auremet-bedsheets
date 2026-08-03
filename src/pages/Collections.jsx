import product_comforter from "../assets/product_comforter.jpg";
import product_duvet from "../assets/product_duvet.jpg";
import product_pillow from "../assets/product_pillows.jpg";
import product_sheet from "../assets/product_sheets.jpg";
export default function Collections() {
  const collectionDetails = [
    {
      image: product_sheet,
      name: "Luxury Bed Sheets",
      details: "600TC sateen Egyptian cotton set.",
      price: "189",
    },
    {
      image: product_comforter,
      name: "Signature Comforter",
      details: "All-season down-alternative fill.",
      price: "249",
    },
    {
      image: product_duvet,
      name: "Sandwashed Duvet Cover",
      details: "Softer with every wash.",
      price: "169",
    },
    {
      image: product_pillow,
      name: "Sateen Pillow Covers",
      details: "Set of two, hidden closure.",
      price: "59",
    },
    {
      image: product_sheet,
      name: "Percale Sheet Set",
      details: "Crisp, breathable weave.",
      price: "179",
    },
    {
      image: product_duvet,
      name: "Cloud Weight Duvet",
      details: "Hotel-weight warmth.",
      price: "289",
    },
  ];
  return (
    <section className="bg-[#f4eadc] py-40 px-5 sm:px-8 md:px-10 lg:px-16">
      <div className="w-fit md:w-[600px] mx-auto text-center mb-15 ">
        <p className="text-sm  tracking-[3px] uppercase text-[#8d6a2b]">
          The Auremet Collection
        </p>
        <h2 className="font-['Cormorant_Garamond'] font-bold my-5 text-5xl  text-[#8d6a2b] md:text-6xl ">
          Collections
        </h2>
        <p className="text-lg text-gray-500">
          Bedding, comforters and covers — each piece designed to feel timeless,
          and made to be lived with for years.
        </p>
      </div>
      <div className="lg:w-[87%] lg:mx-auto flex flex-col gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
        {collectionDetails.map((collection, index) => (
          <div
            key={index}
            className="group rounded-[20px] overflow-hidden bg-white shadow-md 
                  hover:shadow-lg hover:-translate-y-0.5 
                  transition-all duration-300 "
          >
            {/* Image */}
            <div className="w-full h-120 overflow-hidden mb-6">
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-full object-cover 
                      group-hover:scale-110 
                      transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div>
              <h3 className="mb-1 ml-6 font-serif text-xl text-[#9a6b1f] font-['Cormorant_Garamond']">
                {collection.name}
              </h3>

              <p className="text-sm text-[#718096] ml-6 mb-4">
                {collection.details}
              </p>

              <div className="mx-6 mb-6 flex justify-between items-center">
                <span className="font-['Cormorant_Garamond'] text-xl">
                  ${collection.price}
                </span>

                <button className="ml-4 cursor-pointer text-sm text-[#9a6b1f] px-4 py-2 rounded-full border border-[#d3b98a] hover:bg-[#b18a42] hover:text-white transition-colors duration-300">
                  SHOP
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
