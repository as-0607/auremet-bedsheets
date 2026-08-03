import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Contact() {
  return (
    <section className="bg-[#f4eadc] py-30 px-5 sm:px-8 md:px-10 lg:px-16">
      <div className="w-fit md:w-[600px] mx-auto text-center mb-15 ">
        <p className="text-sm  tracking-[3px] uppercase text-[#8d6a2b]">
          Concierge
        </p>
        <h2 className="font-['Cormorant_Garamond'] font-bold my-5 text-5xl  text-[#8d6a2b] md:text-6xl ">
          Get in touch.
        </h2>
        <p className="text-lg text-gray-500">
          We reply within one business day.
        </p>
      </div>
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-10">
        <div className="h-fit bg-white rounded-[35px] border border-[#E6D8BF] p-10 flex flex-col justify-center gap-8">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-full bg-[#F8F4EE] flex items-center justify-center">
              <FiMail className="text-[#A77724] text-xl" />
            </div>

            <div>
              <p className="uppercase [letter-spacing:2px] text-sm text-[#A77724] font-medium">
                Email
              </p>
              <p className="mt-1 text-lg font-bold text-[#8B5E16] font-[Cormorant_Garamond]">
                hello@auremet.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-full bg-[#F8F4EE] flex items-center justify-center">
              <FiPhone className="text-[#A77724] text-xl" />
            </div>

            <div>
              <p className="uppercase [letter-spacing:2px] text-sm text-[#A77724] font-medium">
                Phone
              </p>
              <p className="mt-1 text-lg font-bold text-[#8B5E16] font-[Cormorant_Garamond]">
                +1 (212) 555 0180
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-full bg-[#F8F4EE] flex items-center justify-center">
              <FiMapPin className="text-[#A77724] text-xl" />
            </div>

            <div>
              <p className="uppercase [letter-spacing:2px] text-sm text-[#A77724] font-medium">
                Atelier
              </p>
              <p className="mt-1 text-lg font-bold text-[#8B5E16] font-[Cormorant_Garamond]">
                24 Madison Ave, New York, NY
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[35px] border border-[#E6D8BF] p-10">
          <form className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="First name"
                className="placeholder:text-gray-400 bg-[#F8F4EE] w-full rounded-full border border-[#E6D8BF] px-4 py-3 outline-none focus:ring-1 focus:ring-[#B68B3A]"
              />

              <input
                type="text"
                placeholder="Last name"
                className="placeholder:text-gray-400 bg-[#F8F4EE] w-full rounded-full border border-[#E6D8BF] px-4 py-3 outline-none focus:ring-1 focus:ring-[#B68B3A]"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="placeholder:text-gray-400 bg-[#F8F4EE] w-full rounded-full border border-[#E6D8BF] px-4 py-3 outline-none focus:ring-1 focus:ring-[#B68B3A]"
            />

            <textarea
              rows="5"
              placeholder="How can we help?"
              className="placeholder:text-gray-400 bg-[#F8F4EE] w-full resize-none rounded-[30px] border border-[#E6D8BF] px-5 py-3 outline-none focus:ring-2 focus:ring-[#B68B3A]"
            ></textarea>

            <button className="w-full rounded-full bg-[#B68B3A] py-4 text-white tracking-[2px] text-sm uppercase font-semibold shadow-xl shadow-[#B68B3A]/30 transition hover:bg-[#A67A2A]">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
