"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CustomSlider.css"; // Custom CSS for dots and navigation buttons

//import icons
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";

const CustomNextArrow = ({ onClick }) => (
  <button
    className="custom-arrow text-white custom-arrow-next absolute top-1/2 right-0 transform -translate-y-1/2"
    onClick={onClick}
    aria-label="Next"
  >
    <FaChevronCircleRight className="w-6 h-6" />
  </button>
);

const CustomPrevArrow = ({ onClick }) => (
  <button
    className="custom-arrow text-white custom-arrow-prev absolute top-1/2 left-0 transform -translate-y-1/2"
    onClick={onClick}
    aria-label="Previous"
  >
    <FaChevronCircleLeft className="w-6 h-6" />
  </button>
);

const CustomSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const items = [
    {
      id: 1,
      image: "carousel1.jpeg",
      title: "Slide 1",
    },
    {
      id: 2,
      image: "carousel2.jpeg",
      title: "Slide 2",
    },
    {
      id: 3,
      image: "carousel3.jpeg",
      title: "Slide 3",
    },
    {
      id: 4,
      image: "carousel3.jpeg",
      title: "Slide 3",
    },
    // Add more slides as needed
  ];
  const settings = {
    customPaging: function (i) {
      return (
        <div
          key={i}
          className={`${
            i === currentSlide ? "bg-info" : "bg-gray-400"
          } h-1 w-4 rounded-full mx-1 -mt-[10px]`}
        ></div>
      );
    },
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    afterChange: (current) => setCurrentSlide(current),
  };

  const renderSlides = () => {
    return items.map((item) => (
      <div key={item?.id}>
        <img src={`/assets/images/${item?.image}`} alt={item?.title} />
      </div>
    ));
  };

  return (
    <div className="container flex justify-center items-center">
      <Slider ref={sliderRef} {...settings}>
        {renderSlides()}
      </Slider>
      <CustomNextArrow onClick={() => sliderRef.current.slickNext()} />
      <CustomPrevArrow onClick={() => sliderRef.current.slickPrev()} />
    </div>
  );
};

export default CustomSlider;
