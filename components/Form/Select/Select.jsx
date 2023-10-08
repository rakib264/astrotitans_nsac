import Link from "next/link";
import Select from "react-select";

const SelectElement = () => {
  const options = [
    { value: "orange", label: "Orange" },
    { value: "white", label: "White" },
    { value: "purple", label: "Purple" },
  ];

  const options1 = [
    { value: "group1", label: "Group 1", isDisabled: "option--is-disabled" },
    { value: "orange", label: "Orange" },
    { value: "white", label: "White" },
    { value: "purple", label: "Purple" },
    { value: "group2", label: "Group 2", isDisabled: "option--is-disabled" },
    { value: "yellow", label: "Yellow" },
    { value: "green", label: "Green" },
    { value: "red", label: "Red" },
    { value: "group3", label: "Group 3", isDisabled: "option--is-disabled" },
    { value: "aqua", label: "Aqua" },
    { value: "black", label: "Black" },
    { value: "blue", label: "Blue" },
  ];

  const options2 = [
    { value: "orange", label: "Orange" },
    { value: "white", label: "White", isDisabled: "option--is-disabled" },
    { value: "purple", label: "Purple" },
  ];

  const options3 = [
    { value: "orange", label: "Orange" },
    { value: "white", label: "White" },
    { value: "purple", label: "Purple" },
  ];

  const options4 = [
    { value: "orange", label: "Orange" },
    { value: "white", label: "White" },
    { value: "purple", label: "Purple" },
  ];

  const options5 = [
    { value: "orange", label: "Orange" },
    { value: "white", label: "White" },
    { value: "purple", label: "Purple" },
  ];

  return (
    <div>
      
      <div className="space-y-8 pt-5">
        <div className="custom-select grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* <!-- Basic --> */}
          <div className="panel" id="basic">
            <div className="mb-5">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Basic
              </h5>
            </div>
            <div className="mb-5">
              <Select
                defaultValue={options[0]}
                options={options}
                isSearchable={false}
              />
            </div>
          </div>

          {/*  Nested */}
          <div className="panel" id="nested">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Nested
              </h5>
            </div>
            <div className="mb-5">
              <Select
                defaultValue={options1[1]}
                options={options1}
                isSearchable={false}
              />
            </div>
          </div>

          {/* Disabling options */}
          <div className="panel" id="disabling_options">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Disabling options
              </h5>
            </div>
            <div className="mb-5">
              <Select
                defaultValue={options2[0]}
                options={options2}
                isSearchable={false}
              />
            </div>
          </div>

          {/* Searchable */}
          <div className="panel" id="tagging">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Searchable
              </h5>
            </div>
            <div className="mb-5">
              <Select placeholder="Select an option" options={options4} />
            </div>
          </div>

          {/*  Placeholder */}
          <div className="panel" id="placeholder">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Placeholder
              </h5>
            </div>
            <div className="mb-5">
              <Select
                placeholder="Choose..."
                options={options3}
                isSearchable={false}
              />
            </div>
          </div>

          {/* Multiple */}
          <div className="panel" id="limit_tagging">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Multiple select
              </h5>
            </div>
            <div className="mb-5">
              <Select
                placeholder="Select an option"
                options={options5}
                isMulti
                isSearchable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectElement;
