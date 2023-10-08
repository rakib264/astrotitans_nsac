import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Swal from "sweetalert2";

const Clipboard = () => {
  const [message1, setMessage1] =
    useState("http://www.admin-dashboard.com");
  const [message2, setMessage2] =
    useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit...");
  const message3 = "22991";
  const message4 = "http://www.admin-dashboard.com/code";

  const showMessage = (message = "") => {
    const toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 3000,
    });
    toast.fire({
      icon: "success",
      title: message || "Copied successfully.",
      padding: "10px 20px",
    });
  };

  return (
    <div>
      <div className="space-y-8 pt-5">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Copy from input */}
          <div className="panel" id="copy_from_input">
            <div className="mb-5">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Copy from input
              </h5>
            </div>

            <div className="mb-5">
              <div className="rounded bg-[#f1f2f3] p-5 dark:bg-[#060818]">
                <form>
                  <input
                    type="text"
                    value={message1}
                    className="form-input"
                    onChange={(e) => setMessage1(e.target.value)}
                  />
                  <div className="mt-5 space-y-2 rtl:space-x-reverse sm:flex sm:space-y-0 sm:space-x-2">
                    <CopyToClipboard
                      text={message1}
                      onCopy={(text, result) => {
                        if (result) {
                          showMessage();
                        }
                      }}
                    >
                      <button type="button" className="btn btn-primary">
                        <svg
                          className="ltr:mr-2 rtl:ml-2"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                          <path
                            opacity="0.5"
                            d="M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                        Copy from Input
                      </button>
                    </CopyToClipboard>
                    <CopyToClipboard
                      text={message1}
                      onCopy={(text, result) => {
                        if (result) {
                          showMessage("Cut successfully.");
                        }
                      }}
                    >
                      <button
                        type="button"
                        className="btn btn-dark"
                        value={message1}
                        onClick={() => setMessage1("")}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 ltr:mr-2 rtl:ml-2"
                        >
                          <path
                            d="M15.2869 3.15178L14.3601 4.07866L5.83882 12.5999L5.83881 12.5999C5.26166 13.1771 4.97308 13.4656 4.7249 13.7838C4.43213 14.1592 4.18114 14.5653 3.97634 14.995C3.80273 15.3593 3.67368 15.7465 3.41556 16.5208L2.32181 19.8021L2.05445 20.6042C1.92743 20.9852 2.0266 21.4053 2.31063 21.6894C2.59466 21.9734 3.01478 22.0726 3.39584 21.9456L4.19792 21.6782L7.47918 20.5844L7.47919 20.5844C8.25353 20.3263 8.6407 20.1973 9.00498 20.0237C9.43469 19.8189 9.84082 19.5679 10.2162 19.2751C10.5344 19.0269 10.8229 18.7383 11.4001 18.1612L11.4001 18.1612L19.9213 9.63993L20.8482 8.71306C22.3839 7.17735 22.3839 4.68748 20.8482 3.15178C19.3125 1.61607 16.8226 1.61607 15.2869 3.15178Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                          <path
                            opacity="0.5"
                            d="M14.36 4.07812C14.36 4.07812 14.4759 6.04774 16.2138 7.78564C17.9517 9.52354 19.9213 9.6394 19.9213 9.6394M4.19789 21.6777L2.32178 19.8015"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                        Cut from Input
                      </button>
                    </CopyToClipboard>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Copy form Textarea */}
          <div className="panel" id="copy_from_textarea">
            <div className="mb-5">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Copy form Textarea
              </h5>
            </div>
            <div className="mb-5">
              <div className="rounded bg-[#f1f2f3] p-5 dark:bg-[#060818]">
                <form>
                  <textarea
                    rows={3}
                    wrap="soft"
                    className="form-textarea"
                    value={message2}
                    id="message2"
                    onChange={(e) => setMessage2(e.target.value)}
                  ></textarea>
                  <div className="mt-5 space-y-2 rtl:space-x-reverse sm:flex sm:space-y-0 sm:space-x-2">
                    <CopyToClipboard
                      text={message2}
                      onCopy={(text, result) => {
                        if (result) {
                          showMessage();
                        }
                      }}
                    >
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-clipboard-target="#message2"
                      >
                        <svg
                          className="ltr:mr-2 rtl:ml-2"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                          <path
                            opacity="0.5"
                            d="M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                        Copy from Input
                      </button>
                    </CopyToClipboard>
                    <CopyToClipboard
                      text={message2}
                      onCopy={(text, result) => {
                        if (result) {
                          showMessage("Cut successfully.");
                        }
                      }}
                    >
                      <button
                        type="button"
                        className="btn btn-dark "
                        onClick={() => setMessage2("")}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 ltr:mr-2 rtl:ml-2"
                        >
                          <path
                            d="M15.2869 3.15178L14.3601 4.07866L5.83882 12.5999L5.83881 12.5999C5.26166 13.1771 4.97308 13.4656 4.7249 13.7838C4.43213 14.1592 4.18114 14.5653 3.97634 14.995C3.80273 15.3593 3.67368 15.7465 3.41556 16.5208L2.32181 19.8021L2.05445 20.6042C1.92743 20.9852 2.0266 21.4053 2.31063 21.6894C2.59466 21.9734 3.01478 22.0726 3.39584 21.9456L4.19792 21.6782L7.47918 20.5844L7.47919 20.5844C8.25353 20.3263 8.6407 20.1973 9.00498 20.0237C9.43469 19.8189 9.84082 19.5679 10.2162 19.2751C10.5344 19.0269 10.8229 18.7383 11.4001 18.1612L11.4001 18.1612L19.9213 9.63993L20.8482 8.71306C22.3839 7.17735 22.3839 4.68748 20.8482 3.15178C19.3125 1.61607 16.8226 1.61607 15.2869 3.15178Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                          <path
                            opacity="0.5"
                            d="M14.36 4.07812C14.36 4.07812 14.4759 6.04774 16.2138 7.78564C17.9517 9.52354 19.9213 9.6394 19.9213 9.6394M4.19789 21.6777L2.32178 19.8015"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                        Cut from Input
                      </button>
                    </CopyToClipboard>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* <!-- Copy Text from Paragraph --> */}
          <div className="panel" id="copy_from_paragraph">
            <div className="mb-5">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Copy Text from Paragraph
              </h5>
            </div>
            <div className="mb-5">
              <div className="rounded bg-[#f1f2f3] p-5 dark:bg-[#060818]">
                <form>
                  <p className="mb-3 font-semibold">
                    Here is your OTP
                    <span
                      className="text-2xl"
                      id="copyOTP"
                      defaultValue={message3}
                    >
                      22991
                    </span>
                    .
                  </p>
                  <p className="font-semibold">
                    Please do not share it to anyone
                  </p>
                  <div className="mt-5 space-y-2 rtl:space-x-reverse sm:flex sm:space-y-0 sm:space-x-2">
                    <CopyToClipboard
                      text={message3}
                      onCopy={(text, result) => {
                        if (result) {
                          showMessage();
                        }
                      }}
                    >
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-clipboard-target="#copyOTP"
                      >
                        <svg
                          className="ltr:mr-2 rtl:ml-2"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                          <path
                            opacity="0.5"
                            d="M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                        Copy from Paragraph
                      </button>
                    </CopyToClipboard>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Advanced */}
          <div className="panel" id="advanced">
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-semibold dark:text-white-light">
                Copy Hidden Text (Advanced)
              </h5>
            </div>
            <div className="mb-5">
              <div className="rounded bg-[#f1f2f3] p-5 dark:bg-[#060818]">
                <form>
                  <p className="mb-3 font-semibold">
                    <span> {"Link -> "} </span>
                    <span id="copyLink">
                      {" "}
                      http://www.admin-dashboard.com/code
                    </span>
                  </p>
                  <span className="absolute opacity-0" id="copyHiddenCode">
                    2291
                  </span>
                  <div className="mt-5 space-y-2 rtl:space-x-reverse sm:flex sm:space-y-0 sm:space-x-2">
                    <CopyToClipboard
                      text={message4}
                      onCopy={(text, result) => {
                        if (result) {
                          showMessage();
                        }
                      }}
                    >
                      <button type="button" className="btn btn-primary">
                        <svg
                          className="ltr:mr-2 rtl:ml-2"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                          <path
                            opacity="0.5"
                            d="M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                        Copy Link
                      </button>
                    </CopyToClipboard>
                    <CopyToClipboard
                      text={"2291"}
                      onCopy={(text, result) => {
                        if (result) {
                          showMessage();
                        }
                      }}
                    >
                      <button type="button" className="btn btn-dark ">
                        <svg
                          className="ltr:mr-2 rtl:ml-2"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                          <path
                            opacity="0.5"
                            d="M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                        Copy Hidden Code
                      </button>
                    </CopyToClipboard>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clipboard;
