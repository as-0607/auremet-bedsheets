import promise from "../assets/promise.jpg";
import { Link } from "react-router-dom";
const promiseDetails = [
  "Premium Egyptian cotton",
  "Softer after every wash",
  "Durable double stitching",
  "Timeless, minimal aesthetic",
];
export default function Promise({
  standalone = false,
  small_header = "Our Promise",
  big_header = "Comfort meets craftsmanship.",
  promise_details = promiseDetails,
}) {
  return (
    <div
      className={
        standalone
          ? "bg-[#f4eadc] pb-30 px-5 sm:px-8 md:px-10 lg:px-16"
          : "bg-[#f7f3ed] py-30 px-5 sm:px-8 md:px-10 lg:px-16"
      }
    >
      <div
        className={
          standalone
            ? " flex flex-col  lg:flex-row lg:gap-17 lg:w-[87%] lg:mx-auto lg:items-center"
            : " flex flex-col  lg:flex-row lg:gap-17 lg:w-[87%] lg:mx-auto"
        }
      >
        <div
          className={
            standalone
              ? "relative lg:w-[50%]  rounded-[20px]"
              : "relative lg:w-[50%] lg:h-[700px] rounded-[20px]"
          }
        >
          <div
            className={
              standalone
                ? "hidden"
                : "absolute left-[80%] top-[78%] hidden lg:flex flex-col rounded-[30px] bg-[#b58d42] w-[150px] h-[150px] p-4 text-white shadow-lg"
            }
          >
            <span className="font-['Cormorant_Garamond'] text-[46px] leading-none font-normal mb-2">
              15
            </span>
            <div className="flex flex-col gap-[5px] text-[13px] font-medium tracking-[3px]">
              <span>YEARS OF</span>
              <span>CRAFT</span>
            </div>
          </div>
          <img
            src={promise}
            alt="Promise"
            className="w-full h-[670px] rounded-[20px]"
          />
        </div>
        <div className="lg:w-[50%]  pt-20">
          <p className="text-sm  tracking-[3px] uppercase text-[#8d6a2b]">
            {small_header}
          </p>
          <h2 className="font-['Cormorant_Garamond'] font-bold mt-5 mb-10 text-4xl  text-[#8d6a2b] sm:text-5xl ">
            {big_header}
          </h2>
          <p className={standalone ? "hidden" : "text-xl text-gray-500"}>
            Every piece begins with the world's finest long-staple Egyptian
            cotton, woven by artisans who understand that true luxury lives in
            the smallest details — a softer finish, a stronger stitch, a fabric
            that only grows more beautiful with time.
          </p>
          <div className="my-10 flex flex-col gap-5 text-gray-500 sm:gap-3">
            {promise_details.map((detail, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-[#f4eadc] text-center">
                  <span className="text-[#8d6a2b] text-sm">✓</span>
                </div>
                <p className="text-lg">{detail}</p>
              </div>
            ))}
          </div>
          <Link
            to={ standalone ? "/collections" : "/why_auremet"}
            className="flex w-fit cursor-pointer items-center gap-3 rounded-full bg-[#B9903F] px-7 py-4 text-sm font-medium tracking-[3px] text-white uppercase transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#9f7d35]"
          >
            {standalone ? "Shop the Collection" : "Learn More"}
          </Link>
        </div>
      </div>
    </div>
  );
}
