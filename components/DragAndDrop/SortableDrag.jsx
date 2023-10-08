import Link from "next/link";
import { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";

const items1 = [
  {
    id: 1,
    text: "Need to be approved",
    name: "Kelly Young",
  },
  {
    id: 2,
    text: "Meeting with client",
    name: "Andy King",
  },
  {
    id: 3,
    text: "Project Detail",
    name: "Judy Holmes",
  },
  {
    id: 4,
    text: "Edited Post Apporval",
    name: "Vincent Carpenter",
  },
  {
    id: 5,
    text: "Project Lead Pickup",
    name: "Mary McDonald",
  },
];

const items2 = [
  {
    id: 6,
    text: "Need to be approved",
    name: "Kelly Young",
  },
  {
    id: 7,
    text: "Meeting with client",
    name: "Andy King",
  },
  {
    id: 8,
    text: "Project Detail",
    name: "Judy Holmes",
  },
  {
    id: 9,
    text: "Edited Post Apporval",
    name: "Vincent Carpenter",
  },
  {
    id: 10,
    text: "Project Lead Pickup",
    name: "Mary McDonald",
  },
];

const SortableDrag = () => {
  const [sortable1, setSortable1] = useState(items1);
  const [sortable2, setSortable2] = useState(items2);
  return (
    <div className="my-6">
      {/* Sortable */}
      <div className="panel">
        <div className="mb-5 text-lg font-semibold">Sortable</div>
        <div className="grProject DetailJudy Holmesid grid grid-cols-2 gap-6">
          <div className="col-span-2 sm:col-span-1">
            
            <ul id="example1">
              <ReactSortable
                list={sortable1}
                setList={setSortable1}
                animation={200}
                delay={2}
                ghostClass="gu-transit"
                group="shared"
              >
                {sortable1.map((item) => {
                  return (
                    <li key={item.id} className="mb-2.5 cursor-grab">
                      <div className="items-md-center flex flex-col rounded-md border border-white-light bg-white px-6 py-3.5 text-center dark:border-dark dark:bg-[#1b2e4b] md:flex-row md:text-left">
                        <div className="sm:mr-4">
                          <img
                            alt="avatar"
                            src={`/assets/images/profile-${item.id}.jpeg`}
                            className="mx-auto h-11 w-11 rounded-full"
                          />
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-between md:flex-row">
                          <div className="my-3 font-semibold md:my-0">
                            <div className="text-base text-dark dark:text-[#bfc9d4]">
                              {item.text}
                            </div>
                            <div className="text-xs text-white-dark">
                              {item.name}
                            </div>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm px-5 py-2"
                            >
                              View
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ReactSortable>
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            
            <ul id="example2">
              <ReactSortable
                list={sortable2}
                setList={setSortable2}
                animation={200}
                delay={2}
                ghostClass="gu-transit"
                group="shared"
              >
                {sortable2.map((item) => {
                  return (
                    <li key={item.id} className="mb-2.5 cursor-grab">
                      <div className="items-md-center flex flex-col rounded-md border border-white-light bg-white px-6 py-3.5 text-center dark:border-dark dark:bg-[#1b2e4b] md:flex-row md:text-left">
                        <div className="mr-4">
                          <img
                            alt="avatar"
                            src={`/assets/images/profile-${item.id}.jpeg`}
                            className="mx-auto h-11 w-11 rounded-full"
                          />
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-between md:flex-row">
                          <div className="my-3 font-semibold md:my-0">
                            <div className="text-base text-dark dark:text-[#bfc9d4]">
                              {item.text}
                            </div>
                            <div className="text-xs text-white-dark">
                              {item.name}
                            </div>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm px-5 py-2"
                            >
                              View
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ReactSortable>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortableDrag;
