"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css"; // Custom CSS for dots and navigation buttons

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
          } `}
          
        ></div>
      );
    },
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true, // Enable vertical sliding
    verticalSwiping: true, // Enable vertical swiping
    lazyLoad: true,
    pauseOnHover: true,
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
    <div className="container">
      <Slider ref={sliderRef} {...settings}>
        {renderSlides()}
      </Slider>
      <div className="custom-paging">
        <Slider ref={sliderRef} {...settings} />
      </div>
    </div>
  );
};

export default CustomSlider;
