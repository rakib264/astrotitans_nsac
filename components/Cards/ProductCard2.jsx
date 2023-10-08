import React from "react";

const ProductCard2 = () => {
  return (
    <div>
      {/* card 2 */}
      <div className="panel">
        <div className="mb-5 flex items-center justify-between">
          <h5 className="text-lg font-semibold text-black">
            Card 2
          </h5>
        </div>
        <div className="mb-5 flex items-center justify-center">
          <div className="w-full max-w-[19rem] rounded border border-white-light bg-white shadow-[4px_6px_10px_-3px_#bfc9d4]">
            <div className="py-7 px-6">
              <div className="-mx-6 -mt-7 mb-7 h-[215px] overflow-hidden rounded-tl rounded-tr">
                <img
                  src="/assets/images/profile-28.jpeg"
                  alt="cover"
                  className="h-full w-full object-cover"
                />
              </div>
              <h5 className="mb-4 text-xl font-semibold text-[#3b3f5c]">
                CLI Based
              </h5>
              <p className="text-white-dark">
                Etiam sed augue ac justo tincidunt posuere. Vivamus euismod
                eros, nec risus malesuada.
              </p>
              <button type="button" className="btn btn-primary mt-6">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard2;
