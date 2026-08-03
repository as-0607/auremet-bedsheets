import bed from "../assets/hero-bed.jpg";

export default function About() {
  return (
    <section className="bg-[#f4eadc] pt-40 pb-30 px-5 sm:px-8 md:px-10 lg:px-16">
      <div className="w-fit md:w-[600px] mx-auto text-center mb-20 ">
        <p className="text-sm  tracking-[3px] uppercase text-[#8d6a2b]">
          Our Story
        </p>
        <h2 className="font-['Cormorant_Garamond'] font-bold my-5 text-5xl  text-[#8d6a2b] md:text-6xl ">
          Bedding as heirloom.
        </h2>
        <p className="text-lg text-gray-500">
          Auremet Linen was founded on a single idea — that the objects we sleep
          between should feel as considered as the rooms we build.
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
            We work with a small circle of family-run mills in the Nile Delta,
            where long-staple Egyptian cotton has been woven for generations.
          </p>
          <p className="text-xl text-gray-500 my-10">
            Every collection is designed in-house, tested in real bedrooms, and
            refined until nothing else can be removed.
          </p>
          <p className="text-xl text-gray-500">
            The result is a quiet kind of luxury — pieces that arrive
            beautifully, wear beautifully, and stay with you.
          </p>
        </div>
      </div>
    </section>
  );
}
