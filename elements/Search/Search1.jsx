"use client";

import { useState, useEffect } from "react";

const items = [
  {
    thumb: "profile-5.jpeg",
    name: "Alan Green",
    email: "alan@mail.com",
    status: "Active",
  },
  {
    thumb: "profile-11.jpeg",
    name: "Linda Nelson",
    email: "Linda@mail.com",
    status: "Busy",
  },
  {
    thumb: "profile-12.jpeg",
    name: "Lila Perry",
    email: "Lila@mail.com",
    status: "Closed",
  },
  {
    thumb: "profile-3.jpeg",
    name: "Andy King",
    email: "Andy@mail.com",
    status: "Active",
  },
  {
    thumb: "profile-15.jpeg",
    name: "Jesse Cory",
    email: "Jesse@mail.com",
    status: "Busy",

  },
];

const SearchOne = () => {
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    setFilteredItems(() => {
      return items.filter((item) => {
        return (
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.email.toLowerCase().includes(search.toLowerCase()) ||
          item.status.toLowerCase().includes(search.toLowerCase())
        );
      });
    });
  }, [search]);

  return (
    <div>
      {/* Live Search */}
      <div className="panel lg:row-span-2" id="live">
        <div className="mb-5 flex items-center justify-between">
          <h5 className="text-lg font-semibold dark:text-white-light">
            Live Search
          </h5>
        </div>
        <div className="mb-5 space-y-5">
          <div>
            <form className="mx-auto mb-5 w-full sm:w-1/2">
              <div className="relative border ">
                <input
                  type="text"
                  value={search}
                  placeholder="Search Attendees..."
                  className="form-input h-11 rounded-md bg-white shadow-gray-400 placeholder:tracking-wider px-11"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  type="button"
                  className="btn btn-primary rounded-2xl h-11 w-11 absolute top-0 right-0 inset-y-0 m-auto flex items-center justify-center p-0"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="11.5"
                      cy="11.5"
                      r="9.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      opacity="0.5"
                    ></circle>
                    <path
                      d="M18.5 18.5L22 22"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
            <div className="block w-full space-y-4 overflow-x-auto rounded-lg border border-white-dark/20 p-4">
              {filteredItems.map((item) => {
                return (
                  <div
                    key={item.email}
                    className="flex min-w-[625px] items-center justify-between rounded-xl bg-white p-3 font-semibold
                                         text-gray-500 shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)] transition-all duration-300 hover:scale-[1.01] hover:text-primary dark:bg-[#060818]"
                  >
                    <div className="user-profile w-1/5">
                      <img
                        src={`/assets/images/${item.thumb}`}
                        alt="img"
                        className="h-8 w-8 rounded-md object-cover"
                      />
                    </div>
                    <div className="w-1/5 text-center border-2 dark:border-white">{item.name}</div>
                    <div className="w-1/5">{item.email}</div>
                    <div
                    className="w-1/5"
                    >
                      {item.status}
                    </div>
                    <div className="cursor-pointer w-1/5">
                      <svg
                        className="w-6 h-6 opacity-70"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="5"
                          cy="12"
                          r="2"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <circle
                          opacity="0.5"
                          cx="12"
                          cy="12"
                          r="2"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <circle
                          cx="19"
                          cy="12"
                          r="2"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchOne;
