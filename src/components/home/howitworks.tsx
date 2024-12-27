import Image from 'next/image';
import React from 'react';

const Howitworks = () => {
  const Howitworks = [
    { id: 1, text: "Download the Cook Ford App", src: "/images/new-image/verify-kyc.png", alt: "Slide 1" },
    { id: 2, text: "Choose available services", src: "/images/new-image/verify-kyc.png", alt: "Slide 2" },
    { id: 3, text: "Share your preferences", src: "/images/new-image/verify-kyc.png", alt: "Slide 3" },
    { id: 4, text: "Get trained cook on time", src: "/images/new-image/verify-kyc.png", alt: "Slide 4" },
  ];

  return (
    <div className="bg-slate-50 mt-10">
      <div className="p-4">
        <h1 className="text-center text-xl sm:text-2xl font-semibold bg-slate-50 rounded-full w-full p-2 mb-8">
          How it works
        </h1>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 gap-y-6">
          {Howitworks.map((item, index) => (
            <div
              key={index}
              className="relative rounded-xl h-48 sm:h-60 md:h-72 lg:h-80 flex-1 flex items-center justify-center bg-cover bg-center text-white bg-neutral-400"
              style={{ backgroundImage: `url(${item.src})` }}
            >
              <div className="text-center bg-black bg-opacity-50 p-4 rounded-lg max-w-xs mx-auto">
                <h1 className="text-lg sm:text-xl font-semibold">Step {index + 1}</h1>
                <p className="text-sm sm:text-base">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Howitworks;
