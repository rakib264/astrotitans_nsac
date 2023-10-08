import { useState } from "react";

const RangeSlider = () => {
  const [range1, setRange1] = useState("0");
  const [range2, setRange2] = useState("0");
  const [range3, setRange3] = useState("0");
  const [range4, setRange4] = useState("0");

  return (
    <div>
      <div className="space-y-8 pt-5">
        <div className="space-y-8" id="js_range_slider">
          {/*  range picker */}
          <div className="inline-block rounded dark:bg-black font-semibold py-2 px-2 text-md dark:text-cyan-200">
           Javascript Range Slider
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Top-Left */}
            <div className="panel">
              <div className="mb-5">
                <h5 className="text-lg font-semibold dark:text-white-light">
                  Postion : Top-Left
                </h5>
              </div>
              <div className="mb-5 pt-5">
                <div className="font-bold">
                  <span className="inline-block rounded border border-white-light py-1 px-2 text-primary dark:border-dark">
                    {range1}
                  </span>
                  <span>%</span>
                </div>
                <input
                  type="range"
                  className="w-full py-2.5"
                  value={range1}
                  min={0}
                  max={100}
                  onChange={(e) => setRange1(e.target.value)}
                />
              </div>
            </div>

            {/* Top-right */}
            <div className="panel">
              <div className="mb-5">
                <h5 className="text-lg font-semibold dark:text-white-light">
                  Postion : Top-right
                </h5>
              </div>
              <div className="mb-5">
                <div className="font-bold ltr:text-right rtl:text-left">
                  <span className="inline-block rounded border border-white-light py-1 px-2 text-primary dark:border-dark">
                    {range2}
                  </span>
                  <span>%</span>
                </div>
                <input
                  type="range"
                  className="w-full py-2.5"
                  min="0"
                  max="100"
                  value={range2}
                  onChange={(e) => setRange2(e.target.value)}
                />
              </div>
            </div>

            {/* bottom-left */}
            <div className="panel">
              <div className="mb-5 flex items-center justify-between">
                <h5 className="text-lg font-semibold dark:text-white-light">
                  Postion : Bottom-Left
                </h5>
              </div>
              <div className="mb-5">
                <input
                  type="range"
                  className="w-full py-2.5"
                  min="0"
                  max="100"
                  value={range3}
                  onChange={(e) => setRange3(e.target.value)}
                />
                <div className="font-bold">
                  <span className="inline-block rounded border border-white-light py-1 px-2 text-primary dark:border-dark">
                    {range3}
                  </span>
                  <span>%</span>
                </div>
              </div>
            </div>

            {/* Bottom-right */}
            <div className="panel">
              <div className="mb-5 flex items-center justify-between">
                <h5 className="text-lg font-semibold dark:text-white-light">
                  Postion : Bottom-right
                </h5>
              </div>
              <div className="mb-5">
                <input
                  type="range"
                  className="w-full py-2.5"
                  min="0"
                  max="100"
                  value={range4}
                  onChange={(e) => setRange4(e.target.value)}
                />
                <div className="font-bold ltr:text-right rtl:text-left">
                  <span className="inline-block rounded border border-white-light py-1 px-2 text-primary dark:border-dark">
                    {range4}
                  </span>
                  <span>%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
