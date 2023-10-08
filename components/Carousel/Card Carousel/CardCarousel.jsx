import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { AiOutlineStar } from "react-icons/ai";

const CarouselItems = ({ mouseOver, setMouseOver }) => {
  const carouselData = [
    "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",

    "https://images.unsplash.com/photo-1628592102751-ba83b0314276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2194&q=80",

    "https://images.unsplash.com/photo-1628592102751-ba83b0314276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2194&q=80",

    "https://images.unsplash.com/photo-1580041065738-e72023775cdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",

    "https://images.unsplash.com/photo-1613575831056-0acd5da8f085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  ];

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
      {carouselData.map((item, index) => (
        <div
          key={index}
          onMouseOver={() => setMouseOver(true)}
          onMouseOut={() => setMouseOver(false)}
          className="relative rounded-lg"
        >
          <img
            src={item}
            alt="Carousel Image"
            className="w-full h-64 object-cover rounded-tl-lg rounded-tr-lg"
          />
        </div>
      ))}
    </Carousel>
  );
};

const CarouselCard = () => {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <div
      onMouseOver={() => setMouseOver(true)}
      onMouseOut={() => setMouseOver(false)}
      className="shadow-primary shadow-sm 'w-full sm:w-[400px] h-[500px] bg-white dark:bg-black rounded-md"
    >
      <CarouselItems mouseOver={mouseOver} setMouseOver={setMouseOver} />
      <div className="pt-6 pb-4 px-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold text-black dark:text-gray-200">
            Forde, Norway
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <AiOutlineStar className="w-5 h-5 text-gray-700 dark:text-yellow-400" />
            <div className="text-sm text-gray-700 dark:text-gray-200">4.78</div>
          </div>
        </div>
        <div className="text-gray-400 text-sm font-light">
          Relax, rejuvenate and unplug in this unique contemporary Birdbox. Feel
          close to nature in ultimate comfort. Enjoy the view of the epic
          mountain range of Blegja and the Førdefjord and too good. You can come, visit and explore it.
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-0">
            <span className="text-black text-xl font-semibold dark:text-white">
              $397
            </span>
            <span className="text-gray-400 font-light dark:textgray-500 pl-1">
              / night
            </span>
          </div>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
