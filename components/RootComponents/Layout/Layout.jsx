"use client";

import ClientOnly from "@/components/Client.jsx/Clientonly";
import Header from "@/components/RootComponents/Navbar/Navbar";
import Sidebar from "@/components/RootComponents/Sidebar/Sidebar";
import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { useRouter } from 'next/navigation'
import { useSelector } from "react-redux";

const Layout = ({ children }) => {


  const router = useRouter();
  const [showLoader, setShowLoader] = useState(true);
  const [showTopButton, setShowTopButton] = useState(false);
  const themeConfig = useSelector((state) => state.themeConfig);
  const openSidebar = themeConfig.openSidebar;
  const [animation, setAnimation] = useState(themeConfig.animation);

  const goToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const onScrollHandler = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      setShowTopButton(true);
    } else {
      setShowTopButton(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', onScrollHandler);

    // Remove scroll event listener on component unmount
    return () => {
      window.removeEventListener('scroll', onScrollHandler);
    };
  }, []);

  useEffect(() => {
    // Set a timeout to hide the loader after 200ms
    const loaderTimeout = setTimeout(() => {
      setShowLoader(false);
    }, 200);

    // Remove the loader after the specified timeout
    return () => {
      clearTimeout(loaderTimeout);
    };
  }, []); // This effect runs only once when the component mounts

  useEffect(() => {
    setAnimation(themeConfig.animation);
  }, [themeConfig.animation]);

  useEffect(() => {
    setTimeout(() => {
      setAnimation('');
    }, 1100);
  }, [router.asPath]);


  return (
    <ClientOnly>
      {/* screen loader  */}
      {showLoader && (
        <div className="screen_loader animate__animated fixed inset-0 z-[60] grid place-content-center bg-[#fafafa] dark:bg-[#060818]">
          <svg
            width="64"
            height="64"
            viewBox="0 0 135 135"
            xmlns="http://www.w3.org/2000/svg"
            fill="#4361ee"
          >
            <path d="M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 67 67"
                to="-360 67 67"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </path>
            <path d="M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 67 67"
                to="360 67 67"
                dur="8s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>
      )}
      <div className="fixed bottom-3 z-50 right-6">
        {showTopButton && (
          <button
            type="button"
            className="btn btn-outline-primary animate-pulse rounded-full bg-[#fafafa] p-2 dark:bg-[#060818] dark:hover:bg-primary"
            onClick={goToTop}
          >
            <svg
              width="24"
              height="24"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 20.75C12.4142 20.75 12.75 20.4142 12.75 20L12.75 10.75L11.25 10.75L11.25 20C11.25 20.4142 11.5858 20.75 12 20.75Z"
                fill="currentColor"
              ></path>
              <path
                d="M6.00002 10.75C5.69667 10.75 5.4232 10.5673 5.30711 10.287C5.19103 10.0068 5.25519 9.68417 5.46969 9.46967L11.4697 3.46967C11.6103 3.32902 11.8011 3.25 12 3.25C12.1989 3.25 12.3897 3.32902 12.5304 3.46967L18.5304 9.46967C18.7449 9.68417 18.809 10.0068 18.6929 10.287C18.5768 10.5673 18.3034 10.75 18 10.75L6.00002 10.75Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        )}
      </div>
      <div className="min-w-screen min-h-screen relative">
      <Sidebar />
      <Header />
      <div className={`pl-[16px] pr-[16px] ${openSidebar ? 'lg:pl-[304px]' : 'lg:pl-[96px]'} pt-[10px] pb-[48px] w-full h-full dark:text-white transition duration-150`}>
        {children}
      </div>
      <div className="absolute bottom-0 left-0 right-0">
      <Footer />
      </div>
      </div>
    </ClientOnly>
  );
};

export default Layout;
