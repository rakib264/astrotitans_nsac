import React, { useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import ThemeChange from "@/components/theme/ThemeChange";
import MainModalComponent from "../../Booking/Modal/Modal";

BsLinkedin;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  if (typeof window !== "undefined") {
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  }

  return (
    <nav
      className={`${
        isSticky
          ? "sticky top-0 z-50 py-4 lg:py-8 bg-[#070722]"
          : "bg-[#070722] py-4 lg:py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 relative py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <img
                  className="w-56 h-auto"
                  src="/assets/images/logo3.png"
                  alt="Logo"
                />
              </div>
              {/* <div className="text-xl md:text-5xl lg:text-6xl text-white font-bold uppercase">
                Astro Titans
              </div> */}
            </div>
          </Link>
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <div
                className={`text-white md:text-xl lg:text-3xl hover:text-cyan-300 relative group uppercase`}
              >
                {/* Book Now
                <span
                  className={`absolute -bottom-2 left-0 w-full h-0.5 bg-mainSecondary mt-2 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 ${
                    pathname === "/about" ? "scale-x-100" : null
                  }`}
                ></span> */}
                <MainModalComponent />
              </div>
              <Link
                href="/solar"
                className="text-white md:text-xl lg:text-3xl hover:text-cyan-300 relative group uppercase"
              >
                Solar System
                <span
                  className={`absolute -bottom-2 left-0 w-full h-0.5 bg-mainSecondary mt-2 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 ${
                    pathname === "/solar" ? "scale-x-100" : null
                  }`}
                ></span>
              </Link>
              <Link
                href="/guide"
                className="text-white md:text-xl lg:text-3xl hover:text-cyan-300 relative group uppercase"
              >
                Guide
                <span
                  className={`absolute -bottom-2 left-0 w-full h-0.5 bg-mainSecondary mt-2 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 ${
                    pathname === "/guide" ? "scale-x-100" : null
                  }`}
                ></span>
              </Link>
              <div>
                <ThemeChange />
              </div>
            </div>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none"
            >
              {/* Hamburger icon */}
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-[76px] space-y-2">
            <Link
              href="/packages"
              className="text-white text-lg block hover:text-gray-300"
            >
              Packages
            </Link>
            <Link
              href="/solar"
              className="text-white text-lg block hover:text-gray-300"
            >
              Explore Solar Syatem
            </Link>
            <Link
              href="/guide"
              className="text-white text-lg block hover:text-gray-300"
            >
              Guide
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
