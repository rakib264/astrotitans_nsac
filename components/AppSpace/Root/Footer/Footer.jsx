import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { BiSolidChevronsUp } from "react-icons/bi";

const Footer = () => {
  const [showTopButton, setShowTopButton] = useState(false);

  const goToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const onScrollHandler = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      setShowTopButton(true);
    } else {
      setShowTopButton(false);
    }
  };

  if (typeof window !== "undefined") {
    useEffect(() => {
      // Add scroll event listener
      window.addEventListener("scroll", onScrollHandler);

      // Remove scroll event listener on component unmount
      return () => {
        window.removeEventListener("scroll", onScrollHandler);
      };
    }, []);
  }

  return (
    <div className="bg-[#070722] w-full">
      <div className="w-full px-20 py-20 grid grid-cols-3 gap-6">
        <div className="col-span-4 lg:col-span-1">
          <div className="">
            <div className="flex items-center gap-3">
              <img
                src="/assets/images/logo3.png"
                alt="our_farm"
                className="w-56 h-auto rounded-md text-white"
              />
              {/* <span className="text-2xl lg:text-5xl text-white font-bold">
                Astro Titans
              </span> */}
            </div>
          </div>
        </div>

        <div className="col-span-4 lg:col-span-1 flex flex-col gap-3">
          <Link
            href="/packages"
            className="text-white md:text-2xl lg:text-3xl hover:text-gray-300"
          >
            Packages
          </Link>
          <Link
            href="/solar"
            className="text-white md:text-2xl lg:text-3xl hover:text-gray-300"
          >
            Explore Solar System
          </Link>
          <Link
            href="/guide"
            className="text-white md:text-2xl lg:text-3xl hover:text-gray-300"
          >
            Guide
          </Link>
        </div>

        <div className="col-span-4 lg:col-span-1 flex flex-col gap-6">
          <div className="panel flex flex-col gap-6">
            <label className="text-2xl" htmlFor="fullname">
              Subscribe Now For Latest Updates.
            </label>
            <input
              type="email"
              placeholder="Type your email"
              className="form-input form-input-lg"
              required
            />
            <button type="button" className="btn btn-orange btn-lg">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="w-full px-8 flex items-center justify-between">
        <div className="pb-6">
          <p className="text-left text-white text-lg">
            © {new Date().getFullYear()}. AstroTitans - All rights reserved.
          </p>
        </div>
        <div className="fixed bottom-4 z-50 right-6">
          {showTopButton && (
            <button
              type="button"
              className="btn btn-outline-orange animate-pulse w-16 h-16 rounded-full bg-[#fafafa] text-gray-900 p-2 hover:bg-[#FF5800] hover:text-white"
              onClick={goToTop}
            >
              <BiSolidChevronsUp className="w-10 h-10" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
