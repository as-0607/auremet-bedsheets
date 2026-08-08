import { useTranslation } from "react-i18next";

export default function Loved() {
  const { t } = useTranslation();
  const testimonials = [
    {
      text: t("loved.testimonials.0.text"),
      name: t("loved.testimonials.0.name"),
      location: t("loved.testimonials.0.location"),
      initial: t("loved.testimonials.0.initial"),
    },
    {
      text: t("loved.testimonials.1.text"),
      name: t("loved.testimonials.1.name"),
      location: t("loved.testimonials.1.location"),
      initial: t("loved.testimonials.1.initial"),
    },
    {
      text: t("loved.testimonials.2.text"),
      name: t("loved.testimonials.2.name"),
      location: t("loved.testimonials.2.location"),
      initial: t("loved.testimonials.2.initial"),
    },
  ];
  return (
    <div className="bg-[#f7f3ed] py-30 px-5 sm:px-8 md:px-10 lg:px-16">
      <div className="w-fit md:w-[600px] mx-auto text-center mb-15 ">
        <p className="text-sm  tracking-[3px] uppercase text-[#8d6a2b]">
          {t("loved.heading")}
        </p>
        <h2 className="font-['Cormorant_Garamond'] font-bold my-5 text-4xl  text-[#8d6a2b] md:text-5xl ">
          {t("loved.title")}
        </h2>
      </div>
      <div className="lg:min-w-[900px] lg:max-w-[1200px] mx-auto grid max-w-[1500px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {testimonials.map((testimonial, index) => (
          <article
            key={index}
            className="flex min-h-[280px] flex-col rounded-[30px] bg-white px-8 py-8 shadow-[0_20px_35px_rgba(120,90,50,0.08)] sm:px-10"
          >
            <div className="mb-5 flex gap-2 text-[19px] text-[#b58a3a]">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>

            <p className="max-w-[430px] font-serif  italic leading-[1.9] text-[#806b58] ">
              “{testimonial.text}”
            </p>

            <div className="mt-auto flex items-center gap-5 ">
              <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-[#f0e5d2] font-serif text-[18px] text-[#806b58]">
                {testimonial.initial}
              </div>

              <div>
                <h3 className="font-serif text-[18px] text-[#a67832]">
                  {testimonial.name}
                </h3>

                <p className=" text-[13px] tracking-[0.25em] text-[#a28e7b]">
                  {testimonial.location}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
