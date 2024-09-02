"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Banner = () => {
  const images = [
    // { id: 1, src: "/images/istockphoto-1.jpg", alt: "Slide 1" },
    // { id: 2, src: "/images/istockphoto-2.jpg", alt: "Slide 2" },
    // { id: 3, src: "/images/istockphoto-3.jpg", alt: "Slide 3" },
    { id: 4, src: "/images/istockphoto-4.jpg", alt: "Slide 4" },
    { id: 5, src: "/images/istockphoto-5.jpg", alt: "Slide 5" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="carouselExampleCrossfade" className="relative w-full overflow-hidden">
      {/* Carousel items */}
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {images.map((item) => (
          <div key={item.id} className="flex-shrink-0 w-full h-[35rem]">
            <Image src={item.src} alt={item.alt} width={1600} height={800} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Carousel indicators */}
      <div className="absolute inset-x-0 bottom-0 mx-auto mb-4 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-8 rounded-full transition-opacity duration-300 ${activeIndex === index ? "bg-white opacity-100" : "bg-gray-500 opacity-50"}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {/* Carousel controls - prev item */}
      <button
        className="absolute inset-y-0 left-0 z-10 flex items-center justify-center p-4 text-white opacity-75 hover:opacity-100"
        onClick={handlePrev}
      >
        <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Carousel controls - next item */}
      <button
        className="absolute inset-y-0 right-0 z-10 flex items-center justify-center p-4 text-white opacity-75 hover:opacity-100"
        onClick={handleNext}
      >
        <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Banner;
