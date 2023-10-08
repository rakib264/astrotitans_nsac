

const Switch = () => {
  return (
    <div>
      
      <div className="space-y-8 pt-5">
        <div className="space-y-8" id="icons">
          <h4 className="badge inline-block bg-primary text-base hover:top-0">
            Icon
          </h4>
          {/* Icons */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="panel">
              <div className="mb-5">
                <h5 className="text-lg font-semibold dark:text-white-light">
                  Default
                </h5>
              </div>
              <div className="mb-5">
                <label className="relative h-6 w-12">
                  <input
                    type="checkbox"
                    className="custom_switch peer absolute z-10 h-full w-full cursor-pointer opacity-0"
                    id="custom_switch_checkbox1"
                  />

                  <span
                    className={`outline_checkbox bg-icon block h-full border-2 border-[#ebedf2] before:absolute before:left-1 before:bottom-1 before:h-4 before:w-4 before:bg-[#ebedf2] before:bg-[url(/assets/images/close.svg)] before:bg-center before:bg-no-repeat before:transition-all before:duration-300 peer-checked:border-primary peer-checked:before:left-7 peer-checked:before:bg-primary peer-checked:before:bg-[url(/assets/images/checked.svg)] dark:border-white-dark dark:before:bg-white-dark`}
                  ></span>
                </label>
              </div>
            </div>
            <div className="panel">
              <div className="mb-5">
                <h5 className="text-lg font-semibold dark:text-white-light">
                  Rounded
                </h5>
              </div>
              <div className="mb-5">
                <label className="relative h-6 w-12">
                  <input
                    type="checkbox"
                    className="custom_switch peer absolute z-10 h-full w-full cursor-pointer opacity-0"
                    id="custom_switch_checkbox1"
                  />
                  <span className="outline_checkbox bg-icon block h-full rounded-full border-2 border-[#ebedf2] before:absolute before:left-1 before:bottom-1 before:h-4 before:w-4 before:rounded-full before:bg-[#ebedf2] before:bg-[url(/assets/images/close.svg)] before:bg-center before:bg-no-repeat before:transition-all before:duration-300 peer-checked:border-primary peer-checked:before:left-7 peer-checked:before:bg-primary peer-checked:before:bg-[url(/assets/images/checked.svg)] dark:border-white-dark dark:before:bg-white-dark"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-8" id="solid">
          <h4 className="badge inline-block bg-primary text-base hover:top-0">
            Solid
          </h4>
          {/* Solid */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="panel">
              <div className="mb-5">
                <h5 className="text-lg font-semibold dark:text-white-light">
                  Default
                </h5>
              </div>
              <div className="mb-5">
                <label className="relative h-6 w-12">
                  <input
                    type="checkbox"
                    className="custom_switch peer absolute z-10 h-full w-full cursor-pointer opacity-0"
                    id="custom_switch_checkbox1"
                  />
                  <span className="block h-full bg-[#ebedf2] before:absolute before:left-1 before:bottom-1 before:h-4 before:w-4 before:bg-white before:transition-all before:duration-300 peer-checked:bg-primary peer-checked:before:left-7 dark:bg-dark dark:before:bg-white-dark dark:peer-checked:before:bg-white "></span>
                </label>
              </div>
            </div>
            <div className="panel">
              <div className="mb-5">
                <h5 className="text-lg font-semibold dark:text-white-light">
                  Rounded
                </h5>
              </div>
              <div className="mb-5">
                <label className="relative h-6 w-12">
                  <input
                    type="checkbox"
                    className="custom_switch peer absolute z-10 h-full w-full cursor-pointer opacity-0"
                    id="custom_switch_checkbox1"
                  />
                  <span className="block h-full rounded-full bg-[#ebedf2] before:absolute before:left-1 before:bottom-1 before:h-4 before:w-4 before:rounded-full before:bg-white before:transition-all before:duration-300 peer-checked:bg-primary peer-checked:before:left-7 dark:bg-dark dark:before:bg-white-dark dark:peer-checked:before:bg-white"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-8" id="outline">
          <h4 className="badge inline-block bg-primary text-base hover:top-0">
            Outline
          </h4>
          {/* Outline */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="panel">
              <div className="mb-5">
                <h5 className="text-lg font-semibold dark:text-white-light">
                  Default
                </h5>
              </div>
              <div className="mb-5">
                <label className="relative h-6 w-12">
                  <input
                    type="checkbox"
                    className="custom_switch peer absolute z-10 h-full w-full cursor-pointer opacity-0"
                    id="custom_switch_checkbox1"
                  />
                  <span className="outline_checkbox block h-full border-2 border-[#ebedf2] before:absolute before:left-1 before:bottom-1 before:h-4 before:w-4 before:bg-[#ebedf2] before:transition-all before:duration-300 peer-checked:border-primary peer-checked:before:left-7 peer-checked:before:bg-primary dark:border-white-dark dark:before:bg-white-dark"></span>
                </label>
              </div>
            </div>
            <div className="panel">
              <div className="mb-5">
                <h5 className="text-lg font-semibold dark:text-white-light">
                  Rounded
                </h5>
              </div>
              <div className="mb-5">
                <label className="relative h-6 w-12">
                  <input
                    type="checkbox"
                    className="custom_switch peer absolute z-10 h-full w-full cursor-pointer opacity-0"
                    id="custom_switch_checkbox1"
                  />
                  <span className="outline_checkbox block h-full rounded-full border-2 border-[#ebedf2] before:absolute before:left-1 before:bottom-1 before:h-4 before:w-4 before:rounded-full before:bg-[#ebedf2] before:transition-all before:duration-300 peer-checked:border-primary peer-checked:before:left-7 peer-checked:before:bg-primary dark:border-white-dark dark:before:bg-white-dark"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Switch;
