import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#1d1916] text-[#c8b9a5]">
      <div className="mx-auto max-w-[1300px] px-8 py-16 sm:px-10 lg:px-14 lg:py-[70px]">
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-[1.2fr_1.1fr_1.1fr_1.1fr] lg:gap-10">
          <div>
            <h2 className="font-['Cormorant_Garamond'] text-[24px] tracking-[0.22em] text-[#b58a3f]">
              AUREMET
            </h2>

            <p className="mt-5 max-w-[330px]  leading-[1.5] text-[#b9aa98]">
              Luxury bedding crafted from premium Egyptian cotton for homes that
              appreciate timeless comfort.
            </p>
          </div>

          <div>
            <h3 className="font-['Cormorant_Garamond'] mb-5 text-sm tracking-[0.35em] text-[#b58a3f]">
              QUICK LINKS
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="transition-colors hover:text-[#b58a3f]">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/collections"
                  className="transition-colors hover:text-[#b58a3f]"
                >
                  Collections
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="transition-colors hover:text-[#b58a3f]"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="transition-colors hover:text-[#b58a3f]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-['Cormorant_Garamond'] mb-5 text-sm tracking-[0.35em] text-[#b58a3f]">
              CUSTOMER CARE
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="transition-colors hover:text-[#b58a3f]">
                  Shipping
                </a>
              </li>

              <li>
                <a href="#" className="transition-colors hover:text-[#b58a3f]">
                  Returns
                </a>
              </li>

              <li>
                <a href="#" className="transition-colors hover:text-[#b58a3f]">
                  FAQ
                </a>
              </li>

              <li>
                <a href="#" className="transition-colors hover:text-[#b58a3f]">
                  Care Guide
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-['Cormorant_Garamond'] mb-5 text-sm tracking-[0.35em] text-[#b58a3f]">
              CONTACT
            </h3>

            <div className="space-y-3 text-sm">
              <a
                href="mailto:hello@auremet.com"
                className="flex items-center gap-4 transition-colors hover:text-[#b58a3f]"
              >
                <FaEnvelope className="text-[16px]" />
                <span>hello@auremet.com</span>
              </a>

              <a
                href="tel:+12125550180"
                className="flex items-center gap-4 transition-colors hover:text-[#b58a3f]"
              >
                <FaPhone className="text-[15px]" />
                <span>+1 (212) 555 0180</span>
              </a>

              <div className="flex items-start gap-4">
                <FaLocationDot className="mt-1 text-[16px]" />

                <span>24 Madison Ave, New York, NY</span>
              </div>
            </div>

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

      <div className="border-t border-[#302a25]">
        <div className="mx-auto flex max-w-[1300px] flex-col gap-4 px-8 py-7 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-14">
          <p className="text-[12px] tracking-[0.25em] text-[#8e8377]">
            © 2026 AUREMET LINEN. ALL RIGHTS RESERVED.
          </p>

          <p className="text-[12px] tracking-[0.25em] text-[#8e8377]">
            CRAFTED WITH QUIET LUXURY.
          </p>
        </div>
      </div>
    </footer>
  );
}
