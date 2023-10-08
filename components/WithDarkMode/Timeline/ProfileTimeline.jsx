"use client"
import React from "react";

const ProfileTimeline = () => {
  return (
    <div className="grid grid-cols-1 gap-6 pt-5 xl:grid-cols-2">
      {/* profile */}
      <div className="panel">
        <div className="mb-5 flex items-center justify-between">
          <h5 className="text-lg font-semibold dark:text-white-light">
            Profile
          </h5>
          
        </div>
        <div className="mb-5">
          <p className="mb-5 text-base font-bold text-white-dark">Today</p>
          <div className="sm:flex">
            <div className="relative z-[2] mx-auto mb-5 before:absolute before:top-12 before:left-1/2 before:-bottom-[15px] before:-z-[1] before:hidden before:h-auto before:w-0 before:-translate-x-1/2 before:border-l-2 before:border-[#ebedf2] dark:before:border-[#191e3a] sm:mb-0 sm:before:block sm:mx-8">
              <img
                src="/assets/images/profile-16.jpeg"
                alt="img"
                className="mx-auto h-12 w-12 rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)]"
              />
            </div>
            <div className="flex-1">
              <h4 className="px-2.5 text-center text-xl font-bold text-primary sm:text-left">
                Laurie Fox
              </h4>
              <p className="px-2.5 text-center sm:text-left">
                5 sec
              </p>
              <div className="mt-4 mb-16 sm:mt-7">
                <svg
                  className="inline-block align-text-bottom text-white-dark mx-2.5"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M2 12H22M16 12C16 13.3132 15.8965 14.6136 15.6955 15.8268C15.4945 17.0401 15.1999 18.1425 14.8284 19.0711C14.457 19.9997 14.016 20.7362 13.5307 21.2388C13.0454 21.7413 12.5253 22 12 22C11.4747 22 10.9546 21.7413 10.4693 21.2388C9.98396 20.7362 9.54301 19.9997 9.17157 19.0711C8.80014 18.1425 8.5055 17.0401 8.30448 15.8268C8.10346 14.6136 8 13.3132 8 12C8 10.6868 8.10346 9.38642 8.30448 8.17316C8.5055 6.95991 8.80014 5.85752 9.17157 4.92893C9.54301 4.00035 9.98396 3.26375 10.4693 2.7612C10.9546 2.25866 11.4747 2 12 2C12.5253 2 13.0454 2.25866 13.5307 2.76121C14.016 3.26375 14.457 4.00035 14.8284 4.92893C15.1999 5.85752 15.4945 6.95991 15.6955 8.17317C15.8965 9.38642 16 10.6868 16 12Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M22 12C22 13.3132 21.7413 14.6136 21.2388 15.8268C20.7362 17.0401 19.9997 18.1425 19.0711 19.0711C18.1425 19.9997 17.0401 20.7362 15.8268 21.2388C14.6136 21.7413 13.3132 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C4.00035 18.1425 3.26375 17.0401 2.7612 15.8268C2.25866 14.6136 2 13.3132 2 12C2 10.6868 2.25866 9.38642 2.76121 8.17316C3.26375 6.95991 4.00035 5.85752 4.92893 4.92893C5.85752 4.00035 6.95991 3.26375 8.17317 2.7612C9.38642 2.25866 10.6868 2 12 2C13.3132 2 14.6136 2.25866 15.8268 2.76121C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12L22 12Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
                <h6 className="mb-2 inline-block text-lg font-bold">
                  Trending Style
                </h6>
                <p className="font-semibold text-white-dark px-8">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="mt-6 flex space-x-1 px-8 rtl:space-x-reverse">
                  <img
                    src="/assets/images/profile-16.jpeg"
                    alt="img"
                    className="relative top-0 h-10 w-10 rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                  />
                  <img
                    src="/assets/images/drag-1.jpeg"
                    alt="img"
                    className="relative top-0 h-10 w-10 rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                  />
                  <img
                    src="/assets/images/drag-2.jpeg"
                    alt="img"
                    className="relative top-0 h-10 w-10 rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                  />
                  <img
                    src="/assets/images/profile-16.jpeg"
                    alt="img"
                    className="relative top-0 h-10 w-10 rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                  />
                  <img
                    src="/assets/images/drag-4.jpg"
                    alt="img"
                    className="relative top-0 h-10 w-10 rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="sm:flex">
            <div className="relative z-[2] mx-auto mb-5 before:absolute before:top-12 before:left-1/2 before:-bottom-[15px] before:-z-[1] before:hidden before:h-auto before:w-0 before:-translate-x-1/2 before:border-l-2 before:border-[#ebedf2] dark:before:border-[#191e3a] sm:mb-0 sm:before:block sm:mx-8">
              <img
                src="/assets/images/profile-7.jpeg"
                alt="img"
                className="mx-auto h-12 w-12 rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)]"
              />
            </div>
            <div className="flex-1">
              <h4 className="px-2.5 text-center text-xl font-bold text-primary sm:text-left">
                Justin Cross
              </h4>
              <p className="px-2.5 text-center sm:text-left">
                45 min
              </p>
              <div className="mt-4 mb-16 sm:mt-7">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block h-5 w-5 align-text-bottom text-white-dark mx-2.5"
                >
                  <path
                    d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle
                    opacity="0.5"
                    cx="16"
                    cy="8"
                    r="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    opacity="0.5"
                    d="M2 12.5001L3.75159 10.9675C4.66286 10.1702 6.03628 10.2159 6.89249 11.0721L11.1822 15.3618C11.8694 16.0491 12.9512 16.1428 13.7464 15.5839L14.0446 15.3744C15.1888 14.5702 16.7369 14.6634 17.7765 15.599L21 18.5001"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <h6 className="mb-2 inline-block text-lg font-bold">
                  Nature Photography
                </h6>
                <p className="font-semibold text-white-dark px-8">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="mt-6 grid grid-cols-3 gap-3 px-8 sm:grid-cols-5 lg:grid-cols-8">
                  <img
                    src="/assets/images/drag-1.jpeg"
                    alt="img"
                    className="relative top-0 w-full rounded-md shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                  />
                  <img
                    src="/assets/images/profile-16.jpeg"
                    alt="img"
                    className="relative top-0 w-full rounded-md shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                  />
                  <img
                    src="/assets/images/drag-4.jpg"
                    alt="img"
                    className="relative top-0 w-full rounded-md shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="sm:flex">
            <div className="relative z-[2] mx-auto mb-5 before:absolute before:top-12 before:left-1/2 before:-bottom-[15px] before:-z-[1] before:hidden before:h-auto before:w-0 before:-translate-x-1/2 before:border-l-2 before:border-[#ebedf2] dark:before:border-[#191e3a] sm:mb-0 sm:before:block sm:mx-8">
              <img
                src="/assets/images/profile-16.jpeg"
                alt="img"
                className="mx-auto h-12 w-12 rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)]"
              />
            </div>
            <div className="flex-1">
              <h4 className="px-2.5 text-center text-xl font-bold text-primary sm:text-left">
                Laurie Fox
              </h4>
              <p className="px-2.5 text-center sm:text-left">
                5 sec
              </p>
              <div className="mt-4 mb-16 sm:mt-7">
                <svg
                  className="inline-block align-text-bottom text-white-dark mx-2.5"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M2 12H22M16 12C16 13.3132 15.8965 14.6136 15.6955 15.8268C15.4945 17.0401 15.1999 18.1425 14.8284 19.0711C14.457 19.9997 14.016 20.7362 13.5307 21.2388C13.0454 21.7413 12.5253 22 12 22C11.4747 22 10.9546 21.7413 10.4693 21.2388C9.98396 20.7362 9.54301 19.9997 9.17157 19.0711C8.80014 18.1425 8.5055 17.0401 8.30448 15.8268C8.10346 14.6136 8 13.3132 8 12C8 10.6868 8.10346 9.38642 8.30448 8.17316C8.5055 6.95991 8.80014 5.85752 9.17157 4.92893C9.54301 4.00035 9.98396 3.26375 10.4693 2.7612C10.9546 2.25866 11.4747 2 12 2C12.5253 2 13.0454 2.25866 13.5307 2.76121C14.016 3.26375 14.457 4.00035 14.8284 4.92893C15.1999 5.85752 15.4945 6.95991 15.6955 8.17317C15.8965 9.38642 16 10.6868 16 12Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M22 12C22 13.3132 21.7413 14.6136 21.2388 15.8268C20.7362 17.0401 19.9997 18.1425 19.0711 19.0711C18.1425 19.9997 17.0401 20.7362 15.8268 21.2388C14.6136 21.7413 13.3132 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C4.00035 18.1425 3.26375 17.0401 2.7612 15.8268C2.25866 14.6136 2 13.3132 2 12C2 10.6868 2.25866 9.38642 2.76121 8.17316C3.26375 6.95991 4.00035 5.85752 4.92893 4.92893C5.85752 4.00035 6.95991 3.26375 8.17317 2.7612C9.38642 2.25866 10.6868 2 12 2C13.3132 2 14.6136 2.25866 15.8268 2.76121C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12L22 12Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
                <h6 className="mb-2 inline-block text-lg font-bold">
                  Create New Project
                </h6>
                <p className="font-semibold text-white-dark px-8">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="mt-6 flex space-x-1 px-8 rtl:space-x-reverse">
                  <img
                    src="/assets/images/profile-16.jpeg"
                    alt="img"
                    className="relative top-0 h-10 w-10 rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                  />
                  <img
                    src="/assets/images/drag-1.jpeg"
                    alt="img"
                    className="relative top-0 h-10 w-10 rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                  />
                  <img
                    src="/assets/images/drag-2.jpeg"
                    alt="img"
                    className="relative top-0 h-10 w-10 rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                  />
                  <img
                    src="/assets/images/profile-16.jpeg"
                    alt="img"
                    className="relative top-0 h-10 w-10 rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                  />
                  <img
                    src="/assets/images/drag-4.jpg"
                    alt="img"
                    className="relative top-0 h-10 w-10 rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTimeline;
