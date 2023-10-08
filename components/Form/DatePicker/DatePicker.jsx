import { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";

const DatePicker = () => {
  const isRtl = false;

  const [date1, setDate1] = useState("2022-07-05");
  const [date2, setDate2] = useState("2022-07-05 12:00");
  const [date3, setDate3] = useState("2022-07-05 to 2022-07-10");
  const [date4, setDate4] = useState("13:45");

  return (
    <div>
      <div className="space-y-8 pt-5">
        <div className="space-y-8" id="date_time_picker">
          <div className="inline-block rounded dark:bg-black py-2 px-2 text-base dark:text-white">
            Date and Time Picker
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/*  Basic  */}
            <div className="panel">
              <div className="mb-5">
                <h5 className="text-lg font-semibold dark:text-white-light">
                  Basic Date Only
                </h5>
              </div>
              <div className="mb-5">
                <Flatpickr
                  value={date1}
                  options={{
                    dateFormat: "Y-m-d",
                    position: isRtl ? "auto right" : "auto left",
                  }}
                  className="form-input"
                  onChange={(date) => setDate1(date)}
                />
              </div>
            </div>

            {/* Date & time */}
            <div className="panel">
              <div className="mb-5 flex items-center justify-between">
                <h5 className="text-lg font-semibold dark:text-white-light">
                  Date Time
                </h5>
              </div>
              <div className="mb-2.5">
                Use
                <code className="text-danger">
                  {` {enableTime: true, dateFormat: 'Y-m-d H:i'}`}{" "}
                </code>
                option to enable time support
              </div>
              <div className="mb-5">
                <Flatpickr
                  data-enable-time
                  options={{
                    enableTime: true,
                    dateFormat: "Y-m-d H:i",
                    position: isRtl ? "auto right" : "auto left",
                  }}
                  defaultValue={date2}
                  className="form-input"
                  onChange={(date2) => setDate2(date2)}
                />
              </div>
            </div>

            {/*  range-calendar */}
            <div className="panel">
              <div className="mb-5 flex items-center justify-between">
                <h5 className="text-lg font-semibold dark:text-white-light">
                  Range Calendar
                </h5>
              </div>
              <div className="mb-2.5">
                Use <code className="text-danger">{`{mode: 'range'}`}</code>{" "}
                select the date with range.
              </div>
              <div className="mb-5">
                <Flatpickr
                  options={{
                    mode: "range",
                    dateFormat: "Y-m-d",
                    position: isRtl ? "auto right" : "auto left",
                  }}
                  defaultValue={date3}
                  className="form-input"
                  onChange={(date3) => setDate3(date3)}
                />
              </div>
            </div>

            {/* preloading time */}
            <div className="panel">
              <div className="mb-5 flex items-center justify-between">
                <h5 className="text-lg font-semibold dark:text-white-light">
                  Preloading Time
                </h5>
              </div>
              <div className="mb-2.5">
                Use
                <code className="text-danger">{` {noCalendar: true, enableTime: true, dateFormat: 'H:i'} `}</code>
                with Date Time options to disable calendar and show time picker
                only.
              </div>
              <div className="mb-5">
                <Flatpickr
                  options={{
                    noCalendar: true,
                    enableTime: true,
                    dateFormat: "H:i",
                    position: isRtl ? "auto right" : "auto left",
                  }}
                  defaultValue={date4}
                  className="form-input"
                  onChange={(date4) => setDate4(date4)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
