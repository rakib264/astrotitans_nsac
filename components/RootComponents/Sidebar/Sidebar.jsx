import PerfectScrollbar from "react-perfect-scrollbar";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import AnimateHeight from "react-animate-height";
import React, { useState, useEffect, useCallback, lazy, Suspense } from "react";
import { usePathname, useRouter } from "next/navigation";
import { toggleSidebar } from "@/features/slices/themeConfigSlices";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";

import {
  BiCreditCardFront,
  BiLoader,
  BiSearch,
  BiSolidBarChartSquare,
  BiImage,
  BiCloudUpload,
  BiCopyAlt,
} from "react-icons/bi";

import {
  MdDashboard,
  MdViewList,
  MdCode,
  MdTableView,
  MdTab,
  MdOutlineSwapHoriz,
  MdChromeReaderMode,
  MdOutlineNotificationsActive,
} from "react-icons/md";

import { CgRowFirst } from "react-icons/cg";
import {
  RxButton,
  RxAvatar,
  RxDropdownMenu,
  RxSwitch,
  RxSlider,
} from "react-icons/rx";
import { RiNotificationBadgeFill, RiNodeTree } from "react-icons/ri";
import { GoRelFilePath, GoMultiSelect, GoCheckbox } from "react-icons/go";
import { FaPager, FaWpforms } from "react-icons/fa";
import { TfiLayoutAccordionList } from "react-icons/tfi";
import { PiClockCounterClockwise } from "react-icons/pi";
import { FiAlertTriangle } from "react-icons/fi";
import { LuFormInput } from "react-icons/lu";
import { VscRequestChanges } from "react-icons/vsc";
import { BsCalendar2Date } from "react-icons/bs";
import { TfiLayoutCtaCenter } from "react-icons/tfi";
import { PiSteps } from "react-icons/pi";
import { TbDeviceAnalytics } from "react-icons/tb";

const routes = [
  {
    label: "Dashboard",
    icon: MdDashboard,
    href: "/dashboard",
    component: lazy(() => import("@/app/dashboard/page.jsx")), // Lazy loading using dynamic import
    // subRoutes: [
    //   {
    //     label: "Dashboard One",
    //     icon: TbDeviceAnalytics,
    //     href: "/dashboard/one",
    //   },
    //   {
    //     label: "Dashboard Two",
    //     icon: MdCode,
    //     href: "/dashboard/two",
    //   },
    // ],
  },
  {
    label: "Components",
    icon: MdViewList,
    subRoutes: [
      {
        label: "Avatars",
        icon: RxAvatar,
        href: "/components/avatar",
      },
      {
        label: "Badge",
        icon: RiNotificationBadgeFill,
        href: "/components/badge",
      },
      {
        label: "Card",
        icon: BiCreditCardFront,
        href: "/components/card",
      },
      {
        label: "Breadcumbs",
        icon: GoRelFilePath,
        href: "/components/breadcumb",
      },
      {
        label: "Dropdown",
        icon: RxDropdownMenu,
        href: "/components/dropdown",
      },
      {
        label: "Buttons",
        icon: RxButton,
        href: "/components/button",
      },
      {
        label: "Spinners",
        icon: BiLoader,
        href: "/components/spinner",
      },
      {
        label: "Pagination",
        icon: FaPager,
        href: "/components/pagination",
      },
      {
        label: "Tree View",
        icon: RiNodeTree,
        href: "/components/treeview",
      },
      {
        label: "Progress Bar",
        icon: CgRowFirst,
        href: "/components/progress",
      },
      {
        label: "Accordions",
        icon: TfiLayoutAccordionList,
        href: "/components/accordion",
      },
      {
        label: "Sweet Alerts",
        icon: FiAlertTriangle,
        href: "/components/alert",
      },
      {
        label: "Notifications",
        icon: MdOutlineNotificationsActive,
        href: "/components/notification",
      },
      {
        label: "Counter & Timer",
        icon: PiClockCounterClockwise,
        href: "/components/counter",
      },
      {
        label: "Image Gallery",
        icon: BiImage,
        href: "/components/gallery",
      },
      {
        label: "Search",
        icon: BiSearch,
        href: "/components/search",
      },
      {
        label: "Tabs",
        icon: MdTab,
        href: "/components/tab",
      },
      {
        label: "Modals",
        icon: MdChromeReaderMode,
        href: "/components/modal",
      },
      {
        label: "Tables",
        icon: MdTableView,
        href: "/components/table",
      },
      {
        label: "Drag & Drop",
        icon: MdOutlineSwapHoriz,
        href: "/components/dragdrop",
      },
      {
        label: "Charts",
        icon: BiSolidBarChartSquare,
        href: "/components/chart",
      },
    ],
  },
  {
    label: "Forms",
    icon: FaWpforms,
    subRoutes: [
      {
        label: "Inputs",
        icon: LuFormInput,
        href: "/form/input",
      },
      {
        label: "Layout",
        icon: TfiLayoutCtaCenter,
        href: "/form/layout",
      },
      {
        label: "Select",
        icon: GoMultiSelect,
        href: "/form/select",
      },
      {
        label: "Checkbox",
        icon: GoCheckbox,
        href: "/form/checkbox",
      },
      {
        label: "Switches",
        icon: RxSwitch,
        href: "/form/switch",
      },
      {
        label: "Touchpin",
        icon: VscRequestChanges,
        href: "/form/touchspin",
      },
      {
        label: "File Upload",
        icon: BiCloudUpload,
        href: "/form/upload",
      },
      {
        label: "Date Picker",
        icon: BsCalendar2Date,
        href: "/form/date",
      },
      {
        label: "Range Slider",
        icon: RxSlider,
        href: "/form/range",
      },
      {
        label: "Clipboard",
        icon: BiCopyAlt,
        href: "/form/clipboard",
      },
      {
        label: "Wizards",
        icon: PiSteps,
        href: "/form/wizard",
      },
      // {
      //   label: "Quill Editors",
      //   icon: LuFileEdit,
      //   href: "/form/quilleditor",
      // },
    ],
  },
  {
    label: "Todo List",
    icon: MdCode,
    href: "/todo",
    component: lazy(() => import("@/app/todo/page.jsx")),
  },
  {
    label: "Notes",
    icon: MdCode,
    href: "/note",
    component: lazy(() => import("@/app/note/page.jsx")),
  },
  {
    label: "Products",
    icon: MdCode,
    href: "/product",
    component: lazy(() => import("@/app/product/page.jsx")),
  },
  {
    label: "Nothing",
    icon: MdCode,
    href: "/others",
    component: lazy(() => import("@/app/others/page.jsx")),
  },
];

const Sidebar = React.memo(() => {
  const pathname = usePathname();
  const [currentMenu, setCurrentMenu] = useState("");
  //const [openSidebar, setOpenSidebar] = useState(true);
  const themeConfig = useSelector((state) => state.themeConfig);
  const openSidebar = themeConfig.openSidebar;

  const toggleMenu = useCallback((value) => {
    setCurrentMenu((oldValue) => {
      return oldValue === value ? "" : value;
    });
  }, []);

  // ... (rest of the component code)
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <div className="dark:bg-[#0E1726]">
      <nav
        className={`sidebar hidden lg:block fixed top-0 bottom-0
        z-50 h-full min-h-screen ${
          openSidebar ? "animate-w-72" : "animate-w-20"
        }
        duration-500 transition-all`}
      >
        <div className="h-full relative bg-white dark:bg-[#0E1726]">
          <div className="flex items-center justify-between px-4 py-3">
            <Link href="/" className="main-logo flex shrink-0 items-center">
              <img
                className="ml-[5px] mr-3 w-8 flex-none"
                src="/assets/images/logo_icon.png"
                alt="logo"
              />
              {openSidebar ? (
                <span
                  className={`align-middle text-xl font-semibold mr-3 whitespace-pre duration-300
              ${!openSidebar && "opacity-0 translate-x-28 overflow-hidden"}
               dark:text-white-light lg:inline
              `}
                >
                  {t("FarmEx Delivers")}
                </span>
              ) : null}
            </Link>
            <button
              type="button"
              className={`flex h-8 w-8 items-center justify-center p-2 rounded-full
              ${openSidebar ? "rotate-0" : "rotate-180"}
              transition duration-300 hover:bg-gray-500/10 dark:text-white-light dark:hover:bg-dark-light/10`}
              onClick={() => dispatch(toggleSidebar())}
            >
              <HiOutlineChevronDoubleLeft className="h-5 w-5" />
            </button>
          </div>
          <PerfectScrollbar
            className={`relative h-[calc(100vh-80px)] overflow-hidden transition-max-h duration-300`}
          >
            <ul className="relative space-y-3 p-4 py-6 font-semibold">
              {routes.map((route, index) => {
                if (route.href !== undefined) {
                  return (
                    <li
                      key={index}
                      className={`flex items-center ${
                        !openSidebar && "!justify-center"
                      } rounded-md px-2.5 py-2 text-[#506690] hover:bg-[#000]/[0.08] hover:text-black dark:hover:bg-[#181f32] dark:hover:text-white-dark transition ${
                        pathname === route.href
                          ? "dark:bg-[#181f32] dark:text-primary"
                          : ""
                      }`}
                    >
                      <Link
                        href={route.href}
                        className={`group`}
                        onClick={() => toggleMenu(route.href)}
                      >
                        <div className={`flex items-center `}>
                          <div>
                            <route.icon className="group-hover:!text-primary w-6 h-6 shrink-0" />
                          </div>
                          <span
                            className={`text-black pl-2.5 dark:text-[#506690]
                          ${
                            !openSidebar &&
                            "hidden opacity-0 translate-x-28 overflow-hidden"
                          }
                          dark:group-hover:!text-primary`}
                          >
                            {t(`${route.label}`)}
                          </span>
                        </div>
                      </Link>
                    </li>
                  );
                } else {
                  return (
                    <li key={index} className={`menu nav-item`}>
                      <button
                        type="button"
                        className={`${
                          currentMenu === route.label ? "active" : ""
                        } group w-full flex items-center justify-center`}
                        onClick={() => toggleMenu(route.label)}
                      >
                        <div className="group">
                          <div className="flex items-center justify-center">
                            <div>
                              <route.icon className="group-hover:!text-primary w-6 h-6 shrink-0" />
                            </div>

                            <span
                              className={`text-black pl-3 dark:text-[#506690]
                          
                          ${
                            !openSidebar &&
                            "hidden opacity-0 translate-x-28 overflow-hidden"
                          }
                          dark:group-hover:!text-primary`}
                            >
                              {t(`${route.label}`)}
                            </span>
                          </div>
                        </div>

                        <div
                          className={`
                            ${
                              currentMenu === route.label
                                ? "rotate-90"
                                : "rtl:rotate-180"
                            }
                              whitespace-pre duration-300
                              ${
                                !openSidebar &&
                                "opacity-0 translate-x-28 overflow-hidden"
                              }
                            `}
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 5L15 12L9 19"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </button>

                      <AnimateHeight
                        duration={300}
                        height={currentMenu === route.label ? "auto" : 0}
                      >
                        <ul className={`${openSidebar && "px-9"} py-2.5`}>
                          {route?.subRoutes?.map(
                            ({ label, icon: Icon, href }, index) => (
                              <li
                                className={`px-2.5 py-2 my-2 hover:bg-gray-100 text-gray-500
                              ${
                                pathname === href
                                  ? "text-info bg-gray-100 dark:text-primary dark:bg-gray-800"
                                  : ""
                              }
                              text-sm dark:hover:bg-gray-800 dark:hover:text-primary rounded-md transition`}
                                key={index}
                              >
                                <Link href={href}>
                                  <div
                                    className={`flex items-center group ${
                                      !openSidebar && "justify-center"
                                    } 
                                     `}
                                  >
                                    <div>
                                      <Icon
                                        className={`w-6 h-6 shrink-0 dark:group-hover:!text-primary
                                        ${
                                          pathname === href
                                            ? "!text-info dark:!text-primary"
                                            : ""
                                        }
                                        `}
                                      />
                                    </div>

                                    <span
                                      // style={{
                                      //   transitionDelay: `${index + 1}00ms`,
                                      // }}
                                      className={`
                                        pl-3 dark:group-hover:!text-primary
                                        ${
                                          !openSidebar &&
                                          "hidden opacity-0 translate-x-28 overflow-hidden"
                                        }
                                        `}
                                    >
                                      {t(label)}
                                    </span>
                                  </div>
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      </AnimateHeight>
                    </li>
                  );
                }
              })}
            </ul>
          </PerfectScrollbar>
        </div>
      </nav>
    </div>
  );
});

export default Sidebar;
