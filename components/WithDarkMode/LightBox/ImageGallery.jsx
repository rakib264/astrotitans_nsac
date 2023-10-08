"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";

const getItems = [
  {
    id: "1",
    src: "/assets/images/lightbox1.jpg",
    title:
      "This is dummy caption. It has been placed here solely to demonstrate the look and feel of finished, typeset text.",
    description: "Photo: Samuel Rohl",
  },
  {
    id: "2",
    src: "/assets/images/lightbox2.jpeg",
    title:
      "This is dummy caption. It has been placed here solely to demonstrate the look and feel of finished, typeset text.",
    description: "Photo: Samuel Rohl",
  },
  {
    id: "3",
    src: "/assets/images/lightbox3.jpeg",
    title:
      "Dummy caption. It's Greek to you. Unless, of course, you're Greek, in which case, it really makes no sense.",
    description: "Photo: Michael Hull",
  },
  {
    id: "4",
    src: "/assets/images/lightbox4.jpeg",
    title: "This is dummy caption.",
    description: "Photo: Folkert Gorter",
  },
  {
    id: "5",
    src: "/assets/images/lightbox5.jpeg",
    title:
      "It's a dummy caption. He who searches for meaning here will be sorely disappointed.",
    description: "Photo: Thomas Lefebvre",
  },
  {
    id: "6",
    src: "/assets/images/lightbox6.jpeg",
    title:
      "It's a dummy caption. He who searches for meaning here will be sorely disappointed.",
    description: "Photo: Thomas Lefebvre",
  },
];

const LightBox = () => {
  const [value, setValue] = useState("all controls");
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleChange = (e) => setValue(e.target.value);
  const [tabs] = useState("All controls");
  const [tabs1] = useState("All controls");

  return (
    <div className="space-y-8 pt-5" x-data="lightbox">
      {/* Lightbox */}
      <div className="panel">
        <h5 className="mb-5 text-lg font-semibold dark:text-white-light">
          Lightbox
        </h5>
        <div className="mb-5">
          <div className="mb-5 flex">
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
          </div>
          <div className="flex">
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
          </div>
          {value === "all controls" ? (
            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
              {tabs === "All controls" && (
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

export default LightBox;
