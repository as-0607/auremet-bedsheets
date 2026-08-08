import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [open, setOpen] = useState(false);
  const a_style =
    "text-sm tracking-[2px] text-gray-500 transition-colors duration-300 hover:text-[#a46c19]";
  const linkobj = [
    {
      destination: "/",
      title: t("nav.home"),
    },
    { destination: "/collections", title: t("nav.collections") },
    { destination: "/why_auremet", title: t("nav.why_auremet") },
    { destination: "/about", title: t("nav.about") },
    { destination: "/contact", title: t("nav.contact") },
  ];
  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#f4eadc]/80 backdrop-blur-md border-b border-[#d3b98a]/50"
          : "bg-[#f4eadc] border-transparent "
      }`}
    >
      <div className="mx-auto max-w-7xl px-8 sm:px-10 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <div className="flex  gap-3 items-end">
            <h1 className="font-['Cormorant_Garamond'] font-bold text-[26px] tracking-[8px] text-[#8d6a2b] leading-none">
              AUREMET
            </h1>
            <p className="mt-1 text-[12px] tracking-[3px] text-[#b18a42] hidden sm:inline">
              LINEN
            </p>
          </div>
          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-9">
            <ul className="flex gap-[35px]">
              {linkobj.map((item, index) => (
                <li key={index}>
                  <Link to={item.destination} className={a_style}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-5">
            <LanguageSwitcher />
            <Link
              to="/login"
              className="text-sm tracking-[2px] text-gray-500 transition-colors duration-300 hover:text-[#a46c19]"
            >
              {t("nav.login")}
            </Link>

            <Link
              to="/collections"
              className="cursor-pointer rounded-full border-0 bg-[#b18a42] px-[25px] py-[15px] text-[14px] tracking-[2px] text-gray-100 transition-all duration-300 hover:-translate-y-[1px] hover:bg-[#8d6a2b]"
            >
              {t("nav.buy_now")}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex gap-3 lg:hidden ">
            <LanguageSwitcher />
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden rounded-md p-2 text-[#8d6a2b] hover:bg-[#efe7d9] transition-colors"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden 
    ${open ? "max-h-[500px] " : "max-h-0"}`}
        >
          {/* Mobile menu */}
          {open && (
            <div className="lg:hidden border-t border-[#e7dfd1] py-5 ">
              {/* Navigation Links */}
              <nav>
                <ul className="flex flex-col gap-4">
                  {linkobj.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.destination}
                        onClick={() => setOpen(false)}
                        className={`${a_style} block py-2`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Actions */}
              <div className="mt-6 flex flex-col gap-4">
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="text-sm tracking-[2px] text-gray-500 transition-colors duration-300 hover:text-[#a46c19]"
                >
                  LOGIN
                </Link>

                <Link
                  to="/collections"
                  onClick={() => setOpen(false)}
                  className="cursor-pointer rounded-full border-0 bg-[#b18a42] px-[25px] py-[15px] text-[14px] tracking-[2px] text-gray-100 transition-all duration-300 hover:-translate-y-[1px] hover:bg-[#8d6a2b]"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
