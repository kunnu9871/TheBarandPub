import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import images from "../../store/imageData.js";

const Carousel = () => {
  const [bgImage, setBgImage] = useState(images);
  const [imgIndex, setImgIndex] = useState(0);
  const [incrementing, setIncrementing] = useState(true);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setImgIndex((prevIndex) => {
  //       if (incrementing) {
  //         if (prevIndex < bgImage.length - 1) {
  //           return prevIndex + 1;
  //         } else {
  //           setIncrementing(false);
  //           return prevIndex;
  //         }
  //       } else {
  //         if (prevIndex > 0) {
  //           return prevIndex - 1;
  //         } else {
  //           setIncrementing(true);
  //           return prevIndex;
  //         }
  //       }
  //     });
  //   }, 4000);

  //   return () => clearInterval(interval);
  // }, [bgImage.length, incrementing]);

  const bulletBtnClick = (e) => {
    setImgIndex(Number(e.target.name));
  };

  return (
    <div
      id="carousel"
      className="h-[450px] w-[100%] flex items-center justify-between relative top-16 mt-2 z-30"
    >
      <div
        id="images"
        className="flex h-full w-[100%] overflow-hidden absolute"
      >
        {bgImage.map((data) => (
          <img
            key={data.id}
            src={data.imageUrl}
            style={{ translate: `${-100 * imgIndex}%`}}
            className="w-full object-cover object-center flex-shrink-0 flex-grow-0 ease-in-out duration-1000 block"
          />
        ))}
      </div>

      <button
        id="leftBtn"
        className="border absolute left-5 top-30 border-cWhite h-32 w-10 font-bold rounded-xl bg-transparent opacity-75 hover:scale-105 ease-in-out duration-500"
        onClick={() =>
          setImgIndex(imgIndex > 0 ? imgIndex - 1 : bgImage.length - 1)
        }
      >
        <IoIosArrowBack className="text-4xl text-cWhite" />
      </button>

      {/* Radio Buttons */}
      <div
        id="radioBtn"
        className="h-10 sm:w-[20%] sm:right-[40%] absolute bottom-0 right-[40%] flex items-center shrink justify-center gap-2 "
        onClick={bulletBtnClick}
      >
        {bgImage.map((data, index) => (
          <button
            key={data.id}
            type="radio"
            name={index}
            className={`border border-cWhite sm:w-4 sm:h-4 h-3 w-3 rounded-full ${
              imgIndex === index
                ? "bg-cWhite ease-in duration-500"
                : "bg-transparent"
            }`}
          ></button>
        ))}
      </div>

      <button
        id="rightBtn"
        className="absolute right-5 top-30 border border-cWhite h-32 w-10 font-bold rounded-xl bg-transparent opacity-75 hover:scale-105 ease-in-out duration-300"
        onClick={() =>
          setImgIndex(imgIndex < bgImage.length - 1 ? imgIndex + 1 : 0)
        }
      >
        <IoIosArrowForward className="text-4xl text-cWhite" />
      </button>
    </div>
  );
};

export default Carousel;
