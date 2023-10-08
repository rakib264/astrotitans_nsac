"use client";
// import React from "react";

// const ModernTimeline = () => {
//   return (
//     <div className="grid grid-cols-1 gap-6 pt-5 xl:grid-cols-2">
//       {/* modern */}
//       <div className="panel">
//         <div className="mb-5 flex items-center justify-between">
//           <h5 className="text-lg font-semibold dark:text-white-light">
//             Modern
//           </h5>
          
//         </div>
//         <div className="mb-5 inline-block w-full">
//           <ul className="relative mx-auto table max-w-[900px] py-12 before:absolute before:bottom-0 before:left-1/2 before:top-0 before:-ml-[1.5px] before:w-[3px] before:bg-[#ebedf2] dark:before:bg-[#191e3a]">
//             <li className="relative mb-12 before:clear-both before:table after:clear-both after:table">
//               <div className="absolute left-1/2 top-[32px] z-[1] -ml-2.5 hidden h-5 w-5 rounded-full border-[3px] border-[#ebedf2] bg-info dark:border-[#191e3a] sm:block"></div>
//               <div className="relative mx-auto w-full max-w-[320px] rounded-md border border-[#ebedf2] bg-white shadow-[0_20px_20px_rgba(126,142,177,0.12)] before:absolute before:top-10 before:hidden before:h-[3px] before:w-[37px] before:rounded-full before:bg-[#ebedf2] ltr:before:-right-[37px] rtl:before:-left-[37px] dark:border-[#191e3a] dark:bg-[#191e3a] dark:before:bg-[#191e3a] sm:w-[46%] sm:max-w-full sm:before:block ltr:sm:float-left rtl:sm:float-right">
//                 <div>
//                   <img
//                     src="/assets/images/carousel1.jpeg"
//                     alt="timeline"
//                     className="w-full rounded-t-md"
//                   />
//                 </div>
//                 <div className="p-5">
//                   <h4 className="mb-3 text-lg font-semibold text-info">
//                     Front-End Framework
//                   </h4>
//                   <p className="mb-3 text-white-dark">
//                     Map where your photos were taken and discover local points
//                     of interest. Map where your photos. Map where your photos
//                     were taken and discover.
//                   </p>
//                   <p>
//                     <button type="button" className="btn btn-info">
//                       Read more
//                     </button>
//                   </p>
//                 </div>
//               </div>
//             </li>
//             <li className="relative mb-12 before:clear-both before:table after:clear-both after:table">
//               <div className="absolute left-1/2 top-[32px] z-[1] -ml-2.5 hidden h-5 w-5 rounded-full border-[3px] border-[#ebedf2] bg-primary dark:border-[#191e3a] sm:block"></div>
//               <div className="relative mx-auto w-full max-w-[320px] rounded-md border border-[#ebedf2] bg-white shadow-[0_20px_20px_rgba(126,142,177,0.12)] before:absolute before:top-10 before:hidden before:h-[3px] before:w-[37px] before:rounded-full before:bg-[#ebedf2] ltr:before:-left-[37px] rtl:before:-right-[37px] dark:border-[#191e3a] dark:bg-[#191e3a] dark:before:bg-[#191e3a]  sm:w-[46%] sm:max-w-full sm:before:block ltr:sm:float-right rtl:sm:float-left">
//                 <div>
//                   <img
//                     src="/assets/images/menu-heade.jpg"
//                     alt="timeline"
//                     className="w-full rounded-t-md"
//                   />
//                 </div>
//                 <div className="p-5">
//                   <h4 className="mb-3 text-lg font-semibold text-primary">
//                     Web Development
//                   </h4>
//                   <p className="mb-3 text-white-dark">
//                     Map where your photos were taken and discover local points
//                     of interest. Map where your photos. Map where your photos
//                     were taken and discover.
//                   </p>
//                   <p>
//                     <button type="button" className="btn btn-primary">
//                       Read more
//                     </button>
//                   </p>
//                 </div>
//               </div>
//             </li>
//             <li className="relative mb-12 before:clear-both before:table after:clear-both after:table">
//               <div className="absolute left-1/2 top-[32px] z-[1] -ml-2.5 hidden h-5 w-5 rounded-full border-[3px] border-[#ebedf2] bg-success dark:border-[#191e3a] sm:block"></div>
//               <div className="relative mx-auto w-full max-w-[320px] rounded-md border border-[#ebedf2] bg-white shadow-[0_20px_20px_rgba(126,142,177,0.12)] before:absolute before:top-10 before:hidden before:h-[3px] before:w-[37px] before:rounded-full before:bg-[#ebedf2] ltr:before:-right-[37px] rtl:before:-left-[37px] dark:border-[#191e3a] dark:bg-[#191e3a] dark:before:bg-[#191e3a] sm:w-[46%] sm:max-w-full sm:before:block ltr:sm:float-left rtl:sm:float-right">
//                 <div>
//                   <img
//                     src="/assets/images/carousel1.jpeg"
//                     alt="timeline"
//                     className="w-full rounded-t-md"
//                   />
//                 </div>
//                 <div className="p-5">
//                   <h4 className="mb-3 text-lg font-semibold text-success">
//                     Theme Development
//                   </h4>
//                   <p className="mb-3 text-white-dark">
//                     Map where your photos were taken and discover local points
//                     of interest. Map where your photos. Map where your photos
//                     were taken and discover.
//                   </p>
//                   <p>
//                     <button type="button" className="btn btn-success">
//                       Read more
//                     </button>
//                   </p>
//                 </div>
//               </div>
//             </li>
//             <li className="relative mb-12 before:clear-both before:table after:clear-both after:table">
//               <div className="absolute left-1/2 top-[32px] z-[1] -ml-2.5 hidden h-5 w-5 rounded-full border-[3px] border-[#ebedf2] bg-danger dark:border-[#191e3a] sm:block"></div>
//               <div className="relative mx-auto w-full max-w-[320px] rounded-md border border-[#ebedf2] bg-white shadow-[0_20px_20px_rgba(126,142,177,0.12)] before:absolute before:top-10 before:hidden before:h-[3px] before:w-[37px] before:rounded-full before:bg-[#ebedf2] ltr:before:-left-[37px] rtl:before:-right-[37px] dark:border-[#191e3a] dark:bg-[#191e3a] dark:before:bg-[#191e3a]  sm:w-[46%] sm:max-w-full sm:before:block ltr:sm:float-right rtl:sm:float-left">
//                 <div>
//                   <img
//                     src="/assets/images/menu-heade.jpg"
//                     alt="timeline"
//                     className="w-full rounded-t-md"
//                   />
//                 </div>
//                 <div className="p-5">
//                   <h4 className="mb-3 text-lg font-semibold text-danger">
//                     Plugin Development
//                   </h4>
//                   <p className="mb-3 text-white-dark">
//                     Map where your photos were taken and discover local points
//                     of interest. Map where your photos. Map where your photos
//                     were taken and discover.
//                   </p>
//                   <p>
//                     <button type="button" className="btn btn-danger">
//                       Read more
//                     </button>
//                   </p>
//                 </div>
//               </div>
//             </li>
//           </ul>
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default ModernTimeline;

// import React from "react";

// const ModernTimeline = () => {
//   const isRTL = document.documentElement.getAttribute("dir") === "rtl";

//   return (
//     <div className="grid grid-cols-1 gap-6 pt-5 xl:grid-cols-2">
//       {/* modern */}
//       <div className="panel">
//         <div className="mb-5 flex items-center justify-between">
//           <h5 className="text-lg font-semibold dark:text-white-light">
//             Modern
//           </h5>
//         </div>
//         <div className="mb-5 inline-block w-full">
//           <ul className="relative mx-auto table max-w-[900px] before:absolute before:bottom-[50%] before:left-1/2 before:top-1/2 before:-translate-y-1/2 before:-ml-[1.5px] before:w-[3px] before:bg-[#ebedf2] dark:before:bg-[#191e3a]">
//             <li
//               className="relative mb-12 before:clear-both before:table after:clear-both after:table"
//               style={{ float: "left" }}
//             >
//               <div className="absolute left-1/2 top-[32px] z-[1] -ml-2.5 hidden h-5 w-5 rounded-full border-[3px] border-[#ebedf2] bg-info dark:border-[#191e3a] sm:block"></div>
//               <div className="relative mx-auto w-full max-w-[320px] rounded-md border border-[#ebedf2] bg-white shadow-[0 20px 20px rgba(126,142,177,0.12)]">
//                 <div
//                   className="absolute top-10 hidden h-[3px] w-[37px] rounded-full bg-[#ebedf2] dark:bg-[#191e3a]"
//                   style={{ left: "-37px", right: "auto" }}
//                 ></div>
//                 <div>
//                   <img
//                     src="/assets/images/carousel1.jpeg"
//                     alt="timeline"
//                     className="w-full rounded-t-md"
//                   />
//                 </div>
//                 <div className="p-5">
//                   <h4 className="mb-3 text-lg font-semibold text-info">
//                     Front-End Framework
//                   </h4>
//                   <p className="mb-3 text-white-dark">
//                     Map where your photos were taken and discover local points
//                     of interest. Map where your photos. Map where your photos
//                     were taken and discover.
//                   </p>
//                   <p>
//                     <button type="button" className="btn btn-info">
//                       Read more
//                     </button>
//                   </p>
//                 </div>
//               </div>
//             </li>

//             {/* Second li aligned to the opposite side */}
//             <li
//               className="relative mb-12 before:clear-both before:table after:clear-both after:table"
//               style={{ float: "right" }}
//             >
//               <div className="absolute left-1/2 top-[32px] z-[1] -ml-2.5 hidden h-5 w-5 rounded-full border-[3px] border-[#ebedf2] bg-info dark:border-[#191e3a] sm:block"></div>
//               <div className="relative mx-auto w-full max-w-[320px] rounded-md border border-[#ebedf2] bg-white shadow-[0 20px 20px rgba(126,142,177,0.12)]">
//                 <div
//                   className="absolute top-10 hidden h-[3px] w-[37px] rounded-full bg-[#ebedf2] dark:bg-[#191e3a]"
//                   style={{ right: "-37px", left: "auto" }}
//                 ></div>
//                 <div>
//                   <img
//                     src="/assets/images/carousel2.jpeg"
//                     alt="timeline"
//                     className="w-full rounded-t-md"
//                   />
//                 </div>
//                 <div className="p-5">
//                   <h4 className="mb-3 text-lg font-semibold text-info">
//                     Second Timeline Item
//                   </h4>
//                   <p className="mb-3 text-white-dark">
//                     This is the second timeline item. It will be aligned to
//                     the opposite side of the first item.
//                   </p>
//                   <p>
//                     <button type="button" className="btn btn-info">
//                       Read more
//                     </button>
//                   </p>
//                 </div>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModernTimeline;


import React from "react";

const ModernTimeline = () => {
  // const isRTL = document.documentElement.getAttribute("dir") === "rtl";

  return (
    <div className="grid grid-cols-1 gap-6 pt-5 xl:grid-cols-2">
      {/* modern */}
      <div className="panel">
        <div className="mb-5 flex items-center justify-between">
          <h5 className="text-lg font-semibold dark:text-white-light">
            Modern
          </h5>
        </div>
        <div className="mb-5 inline-block w-full">
          <ul className="relative mx-auto table max-w-[900px] before:absolute before:bottom-[50%] before:left-1/2 before:top-1/2 before:-translate-y-1/2 before:-ml-[1.5px] before:w-[3px] before:bg-[#ebedf2] dark:before:bg-[#191e3a]">
            <li
              className="relative mb-12 before:clear-both before:table after:clear-both after:table"
              style={{ float: "left" }}
            >
              <div className="absolute left-1/2 top-[32px] z-[1] -ml-2.5 hidden h-5 w-5 rounded-full border-[3px] border-[#ebedf2] bg-info dark:border-[#191e3a] sm:block"></div>
              <div className="relative mx-auto w-full max-w-[320px] rounded-md border border-[#ebedf2] bg-white shadow-[0 20px 20px rgba(126,142,177,0.12)]">
                <div
                  className="absolute top-10 hidden h-[3px] w-[37px] rounded-full bg-[#ebedf2] dark:bg-[#191e3a]"
                  style={{ left: "-37px", right: "auto" }}
                ></div>
                <div>
                  <img
                    src="/assets/images/carousel1.jpeg"
                    alt="timeline"
                    className="w-full rounded-t-md"
                  />
                </div>
                <div className="p-5">
                  <h4 className="mb-3 text-lg font-semibold text-info">
                    Front-End Framework
                  </h4>
                  <p className="mb-3 text-white-dark">
                    Map where your photos were taken and discover local points
                    of interest. Map where your photos. Map where your photos
                    were taken and discover.
                  </p>
                  <p>
                    <button type="button" className="btn btn-info">
                      Read more
                    </button>
                  </p>
                </div>
              </div>
            </li>

            {/* Vertical line container */}
            <li
              className="relative mb-12 before:clear-both before:table after:clear-both after:table"
              style={{ float: "left", width: "40px" }} // Adjust the width of the line as needed
            >
              <div
                className="absolute left-1/2 top-0 -mt-px h-full w-0.5 bg-[#ebedf2] dark:bg-[#191e3a]"
                style={{ transform: "translateX(-50%)" }}
              ></div>
            </li>

            {/* Second li aligned to the opposite side */}
            <li
              className="relative mb-12 before:clear-both before:table after:clear-both after:table"
              style={{ float: "right" }}
            >
              <div className="absolute left-1/2 top-[32px] z-[1] -ml-2.5 hidden h-5 w-5 rounded-full border-[3px] border-[#ebedf2] bg-info dark:border-[#191e3a] sm:block"></div>
              <div className="relative mx-auto w-full max-w-[320px] rounded-md border border-[#ebedf2] bg-white shadow-[0 20px 20px rgba(126,142,177,0.12)]">
                <div
                  className="absolute top-10 hidden h-[3px] w-[37px] rounded-full bg-[#ebedf2] dark:bg-[#191e3a]"
                  style={{ right: "-37px", left: "auto" }}
                ></div>
                <div>
                  <img
                    src="/assets/images/carousel2.jpeg"
                    alt="timeline"
                    className="w-full rounded-t-md"
                  />
                </div>
                <div className="p-5">
                  <h4 className="mb-3 text-lg font-semibold text-info">
                    Second Timeline Item
                  </h4>
                  <p className="mb-3 text-white-dark">
                    This is the second timeline item. It will be aligned to
                    the opposite side of the first item.
                  </p>
                  <p>
                    <button type="button" className="btn btn-info">
                      Read more
                    </button>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ModernTimeline;






