import Dropdown from "@/components/Dropdown/Dropdown";
import React from "react";

const BasicDropdown = () => {
  const isRtl = false;
  return (
    <div>
      {/* Basic */}
      <div className="panel" id="basic">
        <div className="mb-5 flex items-center justify-between">
          <h5 className="text-lg font-semibold dark:text-white-light">Basic</h5>
        </div>
        <div className="my-5 flex items-center gap-8">
          <div>
            {/* Dropdown */}
            <h5 className="text-sm mb-3 font-semibold dark:text-white-light">
              Dropdown
            </h5>
            <div className="flex items-center justify-center">
              <div className="dropdown">
                <Dropdown
                  placement={`${isRtl ? "bottom-start" : "bottom-end"}`}
                  btnClassName="btn btn-primary dropdown-toggle"
                  button={
                    <>
                      Action
                      <span>
                        <svg
                          className="inline-block h-4 w-4 ml-4"
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
                      </span>
                    </>
                  }
                >
                  <ul className="!min-w-[170px] text-sm">
                    <li>
                      <button type="button">Action</button>
                    </li>
                    <li>
                      <button type="button">Another action</button>
                    </li>
                    <li>
                      <button type="button">Something else here</button>
                    </li>
                    <li>
                      <button type="button">Separated link</button>
                    </li>
                  </ul>
                </Dropdown>
              </div>
            </div>
          </div>
          <div>
            {/* DropUp */}
            <h5 className="text-sm mb-3 font-semibold dark:text-white-light">
              DropUp
            </h5>
            <div className="flex items-center justify-center">
              <div className="dropdown">
                <Dropdown
                  placement={`${isRtl ? "top-start" : "top-end"}`}
                  btnClassName="btn btn-primary dropdown-toggle"
                  button={
                    <>
                      Action
                      <span>
                        <svg
                          className="inline-block h-4 w-4 ml-4"
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
                      </span>
                    </>
                  }
                >
                  <ul className="!min-w-[170px] text-sm">
                    <li>
                      <button type="button">Action</button>
                    </li>
                    <li>
                      <button type="button">Another action</button>
                    </li>
                    <li>
                      <button type="button">Something else here</button>
                    </li>
                    <li>
                      <button type="button">Separated link</button>
                    </li>
                  </ul>
                </Dropdown>
              </div>
            </div>
          </div>
          <div>
            {/* DropLeft */}
            <h5 className="text-sm mb-3 font-semibold dark:text-white-light">
              DropLeft
            </h5>
            <div className="flex items-center justify-center">
              <div className="dropdown">
                <Dropdown
                  placement={`${isRtl ? 'left-end' : 'left-start'}`}
                  btnClassName="btn btn-primary dropdown-toggle"
                  button={
                    <>
                      Action
                      <span>
                        <svg
                          className="inline-block h-4 w-4 ml-4"
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
                      </span>
                    </>
                  }
                >
                  <ul className="!min-w-[170px] text-sm">
                    <li>
                      <button type="button">Action</button>
                    </li>
                    <li>
                      <button type="button">Another action</button>
                    </li>
                    <li>
                      <button type="button">Something else here</button>
                    </li>
                    <li>
                      <button type="button">Separated link</button>
                    </li>
                  </ul>
                </Dropdown>
              </div>
            </div>
          </div>
          <div>
            {/* DropRight */}
            <h5 className="text-sm mb-3 font-semibold dark:text-white-light">
              DropRight
            </h5>
            <div className="flex items-center justify-center">
              <div className="dropdown">
                <Dropdown
                  placement={`${isRtl ? 'right-end' : 'right-start'}`}
                  btnClassName="btn btn-primary dropdown-toggle"
                  button={
                    <>
                      Action
                      <span>
                        <svg
                          className="inline-block h-4 w-4 ml-4"
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
                      </span>
                    </>
                  }
                >
                  <ul className="!min-w-[170px] text-sm">
                    <li>
                      <button type="button">Action</button>
                    </li>
                    <li>
                      <button type="button">Another action</button>
                    </li>
                    <li>
                      <button type="button">Something else here</button>
                    </li>
                    <li>
                      <button type="button">Separated link</button>
                    </li>
                  </ul>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicDropdown;
