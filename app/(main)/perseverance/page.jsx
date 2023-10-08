"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";

const roversData = [
  {
    id: 1,
    name: "Perseverence Rover",
    releasedDate: "July 30, 2020",
    landedDate: "February 18, 2021",
    responsibility:
      "To search for signs of ancient microbial life on Mars, collect samples of Martian rock and regolith, and cache them for future return to Earth.",
    imgSrc: "/assets/images/perseverence.png",
    srcLocation: "https://mars.nasa.gov/maps/location/?mission=M20&site=NOW",

    gallery: [
      {
        id: 1,
        src: "/assets/images/img1.png",
      },
      {
        id: 2,
        src: "/assets/images/img2.png",
      },
      {
        id: 3,
        src: "/assets/images/img3.png",
      },
      {
        id: 4,
        src: "/assets/images/img4.png",
      },
      {
        id: 5,
        src: "/assets/images/img5.png",
      },
      {
        id: 6,
        src: "/assets/images/img6.png",
      },
    ],
  },
  {
    id: 2,
    name: "Curiocity Rover",
    releasedDate: "November 26, 2011",
    landedDate: "August 6, 2012",
    responsibility:
      " To investigate whether Mars ever had an environment that could have supported microbial life, and to assess the planet's habitability potential.",
    imgSrc: "/assets/images/curiocity.png",

    srcLocation:
      "https://mars.nasa.gov/maps/location/?mission=MSL&amp;site=NOW",
    gallery: [
      {
        id: 7,
        src: "/assets/images/img7.png",
      },
      {
        id: 8,
        src: "/assets/images/img8.png",
      },
      {
        id: 9,
        src: "/assets/images/img9.png",
      },
      {
        id: 10,
        src: "/assets/images/img10.png",
      },
      {
        id: 11,
        src: "/assets/images/img11.png",
      },
      {
        id: 12,
        src: "/assets/images/img12.png",
      },
    ],
  },
  {
    id: 3,
    name: "Opportunity Rover",
    releasedDate: "July 7, 2003",
    landedDate: "January 24, 2004",
    responsibility:
      "To explore the Meridiani Planum region of Mars for evidence of past water activity.",
    imgSrc: "/assets/images/opportunity.png",
    srcLocation: "https://mars.nasa.gov/embed/22434/",
    gallery: [
      {
        id: 13,
        src: "/assets/images/img13.png",
      },
      {
        id: 14,
        src: "/assets/images/img14.png",
      },
      {
        id: 15,
        src: "/assets/images/img15.png",
      },
      {
        id: 16,
        src: "/assets/images/img16.png",
      },
      {
        id: 17,
        src: "/assets/images/img17.png",
      },
      {
        id: 18,
        src: "/assets/images/img18.png",
      },
    ],
  },
];

const Perseverence = () => {
  return (
    <div className="w-full px-40 py-16">
      <div className="w-full h-auto py-6">
        <Link href="/mars">
          <button className="btn btn-lg btn-info my-4">Back</button>
        </Link>
        <h2 className="text-3xl text-center text-white font-semibold pb-8">
          Explore Mars - With Perseverence Movement
        </h2>
        <div className="w-full h-auto">
          <iframe
            src="https://mars.nasa.gov/mars2020/surface-experience/"
            className="w-full h-[800px]"
            scrolling="no"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div py-16>
          {roversData.map((rover) => {
            if (rover.name === "Perseverence Rover") {
              return (
                <div className="py-12" key={rover?.id}>
                  <div>
                    <h2 className="text-3xl text-center text-white font-semibold pb-8">
                      Current LOcation: {rover.name}
                    </h2>
                    <iframe
                      src={rover?.srcLocation}
                      className="w-full h-[500px]"
                      scrolling="no"
                      frameborder="0"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="py-8 w-full">
                    <LightBox
                      getItems={rover?.gallery}
                      roverName={rover?.name}
                    />
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

const LightBox = ({ getItems, roverName }) => {
  const [value, setValue] = useState("all controls");
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleChange = (e) => setValue(e.target.value);
  const [tabs] = useState("All controls");
  const [tabs1] = useState("All controls");

  console.log("getItems", getItems);

  return (
    <div className="space-y-8 pt-5" x-data="lightbox">
      {/* Lightbox */}
      <div className="panel">
        <h5 className="mb-5 text-2xl font-semibold dark:text-white-light">
          Gallery - Captured By {roverName}
        </h5>
        <div className="mb-5">
          {/* <div className="mb-5 flex">
              <div className="mx-4">
                <input
                  type="radio"
                  value="all controls"
                  onChange={handleChange}
                  name="allcontrols"
                  className="form-radio mt-1.5"
                  checked={value === "all controls"}
                />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-primary">
                  All controls
                </h4>
                <p className="media-text">
                  Caption, slideshow, thumbnails and fullscreen buttons, tap to
                  toggle controls
                </p>
              </div>
            </div> */}
          {/* <div className="flex">
              <div className="mx-4">
                <input
                  type="radio"
                  value="minimal"
                  onChange={handleChange}
                  name="allcontrols"
                  className="form-radio mt-1.5"
                  checked={value === "minimal"}
                />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-primary">Minimal</h4>
                <p className="media-text">
                  No caption, no slideshow, no thumbnails, no fullscreen, tap to
                  close
                </p>
              </div>
            </div> */}
          {value === "all controls" ? (
            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
              {tabs === "All controls" && (
                <>
                  {getItems?.map((item, index) => {
                    return (
                      <Link
                        href="#"
                        key={index}
                        className={`${
                          index === 3 ? "md:col-span-2 md:row-span-2" : ""
                        }`}
                        onClick={() => {
                          setIsOpen(true);
                          setPhotoIndex(index);
                        }}
                      >
                        <img
                          src={item.src}
                          alt="gallery"
                          data-fancybox="gallery"
                          className="h-full w-full rounded-md object-cover"
                          data-caption={item.title}
                        />
                      </Link>
                    );
                  })}
                </>
              )}

              {isOpen && (
                <Lightbox
                  mainSrc={`${getItems[photoIndex]?.src}`}
                  nextSrc={`${
                    getItems[photoIndex + (1 % getItems.length)]?.src
                  }`}
                  prevSrc={
                    getItems[
                      (photoIndex + getItems.length - 1) % getItems.length
                    ]?.src
                  }
                  onCloseRequest={() => setIsOpen(false)}
                  onMoveNextRequest={() =>
                    setPhotoIndex((photoIndex + 1) % getItems.length)
                  }
                  onMovePrevRequest={() =>
                    setPhotoIndex(
                      (photoIndex + getItems.length - 1) % getItems.length
                    )
                  }
                  imageTitle={getItems[photoIndex]?.title}
                  imageCaption={getItems[photoIndex]?.description}
                  animationDuration={300}
                  keyRepeatLimit={180}
                />
              )}
            </div>
          ) : (
            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
              {tabs1 === "All controls" && (
                <>
                  {getItems.map((item, index) => {
                    return (
                      <Link
                        href="#"
                        key={item.id}
                        className={`${
                          index === 3 ? "md:col-span-2 md:row-span-2" : ""
                        }`}
                        onClick={() => {
                          setIsOpen(true);
                          setPhotoIndex(index);
                        }}
                      >
                        <img
                          src={item.src}
                          alt="gallery"
                          data-fancybox="gallery"
                          className="h-full w-full rounded-md object-cover"
                          data-caption={item.title}
                        />
                      </Link>
                    );
                  })}
                </>
              )}
              {isOpen && (
                <Lightbox
                  mainSrc={`${getItems[photoIndex]?.src}`}
                  nextSrc={`${
                    getItems[photoIndex + (1 % getItems.length)]?.src
                  }`}
                  prevSrc={
                    getItems[
                      (photoIndex + getItems.length - 1) % getItems.length
                    ]?.src
                  }
                  onCloseRequest={() => setIsOpen(false)}
                  onMoveNextRequest={() =>
                    setPhotoIndex((photoIndex + 1) % getItems.length)
                  }
                  onMovePrevRequest={() =>
                    setPhotoIndex(
                      (photoIndex + getItems.length - 1) % getItems.length
                    )
                  }
                  enableZoom={false}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Perseverence;
