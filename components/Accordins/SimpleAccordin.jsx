import AnimateHeight from "react-animate-height";
import { useState } from "react";

const SimpleAccordin = () => {
  const [active1, setActive1] = useState("1");
  const togglePara1 = (value) => {
    setActive1((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };

  return (
    <div>
      {/* Without Spacing */}
      <div className="panel">
        <div className="mb-5 flex items-center justify-between">
          <h5 className="text-lg font-semibold ">
            Without Spacing
          </h5>
        </div>
        <div className="mb-5">
          <div className="rounded border border-[#d3d3d3] font-semibold ">
            <div className="border-b border-[#d3d3d3] ">
              <button
                type="button"
                className={` ${
                  active1 === "1" ? "!text-primary" : ""
                } flex w-full items-center p-4 text-white-dark `}
                onClick={() => togglePara1("1")}
              >
                Collapsible Group Item #1
                <div
                  className={`${
                    active1 === "1" ? "rotate-180" : ""
                  } ml-auto`}
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 9L12 15L5 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
              <div>
                <AnimateHeight
                  duration={300}
                  height={active1 === "1" ? "auto" : 0}
                >
                  <div className="space-y-2 p-4 text-[13px] text-white-dark">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </AnimateHeight>
              </div>
            </div>

            <div className="border-b border-[#d3d3d3] ">
              <button
                type="button"
                className={` ${
                  active1 === "2" ? "!text-primary" : ""
                } flex w-full items-center p-4 text-white-dark `}
                onClick={() => togglePara1("2")}
              >
                Collapsible Group Item #2
                <div
                  className={`${
                    active1 === "2" ? "rotate-180" : ""
                  } ml-auto`}
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 9L12 15L5 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
              <div>
                <AnimateHeight
                  duration={300}
                  height={active1 === "2" ? "auto" : 0}
                >
                  <div className="p-4 text-[13px]">
                    <ul className="space-y-1">
                      <li>
                        <button type="button">Apple</button>
                      </li>
                      <li>
                        <button type="button">Orange</button>
                      </li>
                      <li>
                        <button type="button">Banana</button>
                      </li>
                      <li>
                        <button type="button">list</button>
                      </li>
                    </ul>
                  </div>
                </AnimateHeight>
              </div>
            </div>

            <div>
              <button
                type="button"
                className={` ${
                  active1 === "3" ? "!text-primary" : ""
                } flex w-full items-center p-4 text-white-dark `}
                onClick={() => togglePara1("3")}
              >
                Collapsible Group Item #3
                <div
                  className={`${
                    active1 === "3" ? "rotate-180" : ""
                  } ml-auto`}
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 9L12 15L5 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
              <div>
                <AnimateHeight
                  duration={300}
                  height={active1 === "3" ? "auto" : 0}
                >
                  <div className="p-4 text-[13px]">
                    <p>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven&apos;t
                      heard of them accusamus labore sustainable VHS.
                    </p>
                    <button type="button" className="btn btn-primary mt-4">
                      Accept
                    </button>
                  </div>
                </AnimateHeight>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleAccordin;
