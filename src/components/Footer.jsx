import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#1d1916] text-[#c8b9a5]">
      <div className="mx-auto max-w-[1300px] px-8 py-16 sm:px-10 lg:px-14 lg:py-[70px]">
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-[1.2fr_1.1fr_1.1fr_1.1fr] lg:gap-10">
          
          {/* Brand */}
          <div>
            <h2 className="font-['Cormorant_Garamond'] text-[24px] tracking-[0.22em] text-[#b58a3f]">
              {t("footer.brand")}
            </h2>

            <p className="mt-5 max-w-[330px] leading-[1.5] text-[#b9aa98]">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-['Cormorant_Garamond'] mb-5 text-sm tracking-[0.35em] text-[#b58a3f]">
              {t("footer.quick_links")}
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="transition-colors hover:text-[#b58a3f]"
                >
                  {t("footer.home")}
                </Link>
              </li>

              <li>
                <Link
                  to="/collections"
                  className="transition-colors hover:text-[#b58a3f]"
                >
                  {t("footer.collections")}
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="transition-colors hover:text-[#b58a3f]"
                >
                  {t("footer.about")}
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="transition-colors hover:text-[#b58a3f]"
                >
                  {t("footer.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-['Cormorant_Garamond'] mb-5 text-sm tracking-[0.35em] text-[#b58a3f]">
              {t("footer.customer_care")}
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-[#b58a3f]"
                >
                  {t("footer.shipping")}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-[#b58a3f]"
                >
                  {t("footer.returns")}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-[#b58a3f]"
                >
                  {t("footer.faq")}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-[#b58a3f]"
                >
                  {t("footer.care_guide")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-['Cormorant_Garamond'] mb-5 text-sm tracking-[0.35em] text-[#b58a3f]">
              {t("footer.contact_title")}
            </h3>

            <div className="space-y-3 text-sm">
              <a
                href="mailto:hello@auremet.com"
                className="flex items-center gap-4 transition-colors hover:text-[#b58a3f]"
              >
                <FaEnvelope className="text-[16px]" />
                <span>{t("footer.email")}</span>
              </a>

              <a
                href="tel:+12125550180"
                className="flex items-center gap-4 transition-colors hover:text-[#b58a3f]"
              >
                <FaPhone className="text-[15px]" />
                <span>{t("footer.phone")}</span>
              </a>

              <div className="flex items-start gap-4">
                <FaLocationDot className="mt-1 text-[16px]" />

                <span>{t("footer.address")}</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-5 flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#3c332b] text-[#c8b9a5] transition-all hover:border-[#b58a3f] hover:text-[#b58a3f]"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#3c332b] text-[#c8b9a5] transition-all hover:border-[#b58a3f] hover:text-[#b58a3f]"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="Pinterest"
                className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#3c332b] text-[#c8b9a5] transition-all hover:border-[#b58a3f] hover:text-[#b58a3f]"
              >
                <FaPinterestP />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#302a25]">
        <div className="mx-auto flex max-w-[1300px] flex-col gap-4 px-8 py-7 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-14">
          <p className="text-[12px] tracking-[0.25em] text-[#8e8377]">
            {t("footer.copyright")}
          </p>

          <p className="text-[12px] tracking-[0.25em] text-[#8e8377]">
            {t("footer.crafted")}
          </p>
        </div>
      </div>
    </footer>
  );
}