import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import brandLogo from "../assets/auremet-linen-logo.png";

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
    "whitespace-nowrap text-[13px] tracking-[1.5px] text-gray-500 transition-colors duration-300 hover:text-[#a46c19]";
  const linkobj = [
    { destination: "/", title: t("nav.home") },
    { destination: "/products", title: t("nav.products") },
    { destination: "/collections", title: t("nav.collections") },
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
      <div className="mx-auto max-w-[1600px] px-6 xl:px-10">
        <div className="flex h-20 items-center justify-between gap-6">
          {/* Logo — pinned to the far left, never shrinks */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex shrink-0 items-center rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8d6a2b]"
          >
            <img src={brandLogo} alt="Auremet Linen — Home" width="1536" height="1024" className="block h-[72px] w-[108px] object-contain mix-blend-multiply" fetchPriority="high" />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center flex-1 justify-center min-w-0">
            <ul className="flex items-center gap-6 xl:gap-8">
              {linkobj.map((item, index) => (
                <li key={index} className="shrink-0">
                  <NavLink
                    to={item.destination}
                    className={({ isActive }) =>
                      `${a_style} ${isActive ? "text-[#8d6a2b]" : ""}`
                    }
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <LanguageSwitcher />
            <Link
              to="/login"
              className="whitespace-nowrap text-[13px] tracking-[1.5px] text-gray-500 transition-colors duration-300 hover:text-[#a46c19]"
            >
              {t("nav.login")}
            </Link>

            <Link
              to="/collections"
              className="cursor-pointer whitespace-nowrap rounded-full border-0 bg-[#b18a42] px-6 py-3 text-[13px] tracking-[1.5px] text-gray-100 transition-all duration-300 hover:-translate-y-[1px] hover:bg-[#8d6a2b]"
            >
              {t("nav.buy_now")}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex gap-3 lg:hidden shrink-0">
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
              <nav>
                <ul className="flex flex-col gap-4">
                  {linkobj.map((item, index) => (
                    <li key={index}>
                      <NavLink
                        to={item.destination}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          `${a_style} block py-2 ${isActive ? "text-[#8d6a2b]" : ""}`
                        }
                      >
                        {item.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>

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
