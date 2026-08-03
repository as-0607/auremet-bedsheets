import hero_img from "../assets/hero-bed.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="bg-[#f4eadc] py-30 overflow-visible">
      <div className="mt-10 lg:mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-8 sm:px-10 lg:flex-row lg:px-12">
        {/* Hero Content */}
        <div className="sm:w-[500px] sm:self-start lg:my-auto lg:w-[45%]">
          <p className="text-sm tracking-[3px] uppercase text-[#8d6a2b]">
            The Auremet Collection
          </p>

          <h1 className="font-['Cormorant_Garamond'] font-bold my-8 text-5xl  text-[#8d6a2b] md:text-6xl lg:text-7xl">
            Choose comfort
            <br />
            <span className="italic text-[#b18a42] block mt-3">
              that lasts.
            </span>
          </h1>

          <p className="text-lg text-gray-500">
            Luxury bedding crafted for beautiful homes — spun from premium
            Egyptian cotton and finished by hand for a lifetime of quiet,
            timeless comfort.
          </p>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row">
            <Link
              to="/collections"
              className="flex w-fit cursor-pointer items-center gap-3 rounded-full bg-[#B9903F] px-7 py-3 text-sm font-medium tracking-[3px] text-white uppercase transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#9f7d35]"
            >
              Shop Collection
              <span className="text-xl">→</span>
            </Link>

            <Link
              to="/why_auremet"
              className="w-fit cursor-pointer rounded-full border border-[#D8C4A2] bg-transparent px-7 py-3 text-sm font-medium tracking-[3px] text-[#8d6a2b] uppercase transition-all duration-300 hover:bg-[#B9903F] hover:text-white"
            >
              Explore Quality
            </Link>
          </div>
          <div className="text-sm flex [letter-spacing:1px] text-gray-400 gap-10 mt-10">
            <span>FREE SHIPPING</span>

            <span className="h-5 w-px bg-[#D8C4A2]"></span>

            <span>60-NIGHT TRIAL</span>

            <span className="h-5 w-px bg-[#D8C4A2] hidden sm:flex"></span>

            <span className="hidden sm:flex">LIFETIME CARE</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-[550px] relative">
          <img
            src={hero_img}
            alt="Luxury bedding"
            width="1200"
            height="1400"
            className="w-full rounded-[30px] shadow-[0_20px_50px_rgba(80,60,30,0.14)]"
          />
          <div className="hidden md:block absolute bottom-[-30px] left-[-40px] rounded-[28px] bg-white px-5 py-4 shadow-[0_15px_35px_rgba(80,60,30,0.15)]">
            <div className="flex gap-1 text-md text-[#B9903F]">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>

            <p className="text-sm text-base text-gray-500">
              Rated 4.9 by 12,400 sleepers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
