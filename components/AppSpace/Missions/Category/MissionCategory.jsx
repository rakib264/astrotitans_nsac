import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { AiOutlineStar, AiOutlineFieldTime } from "react-icons/ai";
import { BsRocketTakeoff } from "react-icons/bs";
import Link from "next/link";

const missionData = [
  {
    id: 1,
    title: "Sub-Orbital Exploration",
    launchingIcon: "/assets/images/earthIcon.png",
    launchName: "Earth",
    destinationIcon: "/assets/images/space-station.png",
    destinationName: "Space Station",
    launchDate: "2015-04-12",
    destinationDate: "2015-04-16",
    duration: "2 days",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    gallery: [
      "assets/images/sub-earth.png",
      "assets/images/sub-earth2.png",
      "assets/images/sub-earth3.png",
    ],
  },
  {
    id: 2,
    title: "Orbital Exploration",
    launchingIcon: "/assets/images/earthIcon.png",
    launchName: "Earth",
    destinationIcon: "/assets/images/earthIcon.png",
    destinationName: "Earth Orbit",
    launchDate: "2015-04-12",
    destinationDate: "2015-04-16",
    duration: "3 days",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    gallery: [
      "assets/images/earth.png",
      "assets/images/earth2.png",
      "assets/images/earth3.png",
    ],
  },
  {
    id: 3,
    title: "Moon Exploration",
    launchingIcon: "/assets/images/earthIcon.png",
    launchName: "Earth",
    destinationIcon: "/assets/images/moonIcon.png",
    destinationName: "Moon",
    launchDate: "2015-04-12",
    destinationDate: "2015-04-16",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    duration: "1 months",
    gallery: [
      "assets/images/moon.png",
      "assets/images/moon2.png",
      "assets/images/moon3.png",
    ],
  },
  {
    id: 4,
    title: "Mars Exploration",
    launchingIcon: "/assets/images/earthIcon.png",
    launchName: "Earth",
    destinationIcon: "/assets/images/marsIcon.png",
    destinationName: "Mars",
    launchDate: "2015-04-12",
    destinationDate: "2015-04-16",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    duration: "11 months",
    gallery: [
      "assets/images/mars.png",
      "assets/images/mars2.png",
      "assets/images/mars3.png",
    ],
  },
];

const MissionCategory = () => {
  return (
    <div className=" px-4 sm:px-8 md:px-16 lg:px-20 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
      {missionData.map((mission) => (
        <div key={mission.id} className="w-full col-span-1">
          <CarouselCardWithCustomShadow data={mission} />
        </div>
      ))}
    </div>
  );
};

export default MissionCategory;

const CarouselItems = ({ mouseOver, setMouseOver, images }) => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      autoPlay
      interval={2000}
      stopOnHover
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            onClick={onClickHandler}
            title={label}
            className={`rounded-full 
            ${mouseOver === true ? "visible" : "invisible"}
            absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg z-10 focus:outline-none flex items-center justify-center w-8 h-8`}
          >
            <GoChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            onClick={onClickHandler}
            title={label}
            className={`rounded-full 
            ${mouseOver === true ? "visible" : "invisible"}
            absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg z-10 focus:outline-none flex items-center justify-center w-8 h-8`}
          >
            <GoChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        )
      }
      renderIndicator={(onClickHandler, isSelected, index, label) => (
        <li
          key={index}
          className={`inline-block mx-1 ${
            isSelected ? "w-4" : "w-1"
          } h-1 rounded-full cursor-pointer ${
            isSelected ? "bg-white" : "bg-gray-500"
          }`}
          onClick={onClickHandler}
          onKeyDown={onClickHandler}
          value={index}
          role="button"
          tabIndex="0"
          title={`${label} ${index + 1}`}
        />
      )}
    >
      {images.map((item, index) => (
        <div
          key={index}
          onMouseOver={() => setMouseOver(true)}
          onMouseOut={() => setMouseOver(false)}
          className="relative rounded-md"
        >
          <img
            src={item}
            alt="Carousel Image"
            className="w-full h-64 object-cover rounded-md"
          />
        </div>
      ))}
    </Carousel>
  );
};

const CarouselCardWithCustomShadow = ({ data }) => {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <div
      onMouseOver={() => setMouseOver(true)}
      onMouseOut={() => setMouseOver(false)}
      className="panel shadow-info w-full h-auto bg-white dark:bg-black rounded-md"
    >
      {/* shadow-primary shadow-danger shadow-warning */}
      <CarouselItems
        mouseOver={mouseOver}
        setMouseOver={setMouseOver}
        images={data?.gallery}
      />
      <div className="w-full pt-6 pb-4 px-4 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-3">
            <img
              src={data?.launchingIcon}
              className="w-8 h-8 shadow-lg shadow-cyan-500 rounded-md"
              alt="earthIcon"
            />
            <h3 className="text-gray-900 dark:text-white text-lg">
              {data?.launchName}
            </h3>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-20 h-1 text-gray-900 dark:text-gray-400">
              ------------------
            </div>
            <div className="px-3">
              <BsRocketTakeoff className="w-6 h-6 text-gray-900 dark:text-white" />
            </div>
            <div className="w-20 h-1 text-gray-900 dark:text-gray-400">
              -----------------
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <img
              src={data?.destinationIcon}
              className="w-8 h-8 shadow-lg shadow-orange-500 rounded-md"
              alt="earthIcon"
            />
            <h3 className="text-gray-900 dark:text-white text-lg">
              {data?.destinationName}
            </h3>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-2xl font-semibold text-black dark:text-gray-200">
            {data?.title}
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <AiOutlineFieldTime className="w-5 h-5 text-gray-700 dark:text-yellow-400" />
            <div className="text-sm text-gray-700 dark:text-gray-200">
              {data?.duration}
            </div>
          </div>
        </div>
        <div className="text-gray-400 text-sm font-light line-clamp-2">
          {data?.description}
        </div>
        <div className="w-full">
          <Link
            href={
              data?.destinationName === "Space Station"
                ? "/space"
                : data?.destinationName === "Earth Orbit"
                ? "/orbit"
                : data?.destinationName === "Moon"
                ? "/moon"
                : "/mars"
            }
          >
            <button className="btn btn-primary w-full">Explore</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
