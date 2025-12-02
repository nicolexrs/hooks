"use client";
import { useEffect, useRef } from "react";

export default function Slider() {
  const slideRef = useRef(null);

  function slideLeft() {
    slideRef.current.scrollBy({
      left: -1920,
      behaviour: "smooth",
    });
  }
  function slideRight() {
    slideRef.current.scrollBy({
      left: 1920,
      behaviour: "smooth",
    });
  }

  useEffect(() => {
    setInterval(() => {
      slideRef.current.scrollBy({
        left: 1500,
        behaviour: "smooth",
      });
    },4000);
  },[]);
  return (
    <div ref={slideRef} className="h-[80vh]  flex overflow-x-scroll  ">
      <div className="h-[100%] w-[100vw] bg-black">
        <div className="w-[100vw]" />
      </div>
      <div className="h-[100%] w-[100vw] bg-blue-600">
        <div className="w-[100vw]" />
      </div>
      <div className="h-[100%] w-[100vw] bg-red-600">
        <div className="w-[100vw]" />
      </div>
      <div className="h-[100%] w-[100vw] bg-yellow-400">
        <div className="w-[100vw]" />
      </div>
      <div className="w-[100vw] flex justify-between items-center px-8 absolute left-0 top-1/2">
        <button
          onClick={slideLeft}
          className="py-2 px-4 pt-1 bg-white text-4xl text-black rounded-full"
        >
          -
        </button>
        <button
          onClick={slideRight}
          className="py-2 px-4 pt-1 bg-white text-4xl text-black rounded-full"
        >
          +
        </button>
      </div>
    </div>
  );
}
