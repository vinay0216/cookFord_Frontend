"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Happyclient = () => {
  const data = [
    {
      id: 1,
      imageUrl: "/images/logo.png",
      chefName: "Rahul Kumar",
      location: "Noida",
      reasons: "Best service in Noida",
      shortSentence:
        "Cook Ford made my house party a success! The chef was professional, prepared delicious dishes, and allowed us to enjoy the evening without stress. I highly recommend Cook Ford for anyone needing reliable and high-quality chef services.",
    },
    {
      id: 2,
      imageUrl: "/images/defaultchef.png",
      chefName: "Sandeep Kumar",
      location: "Delhi",
      reasons: "Best service in Delhi",
      shortSentence:
        "I used Cook Ford for a small gathering, and their service was excellent. The chef was punctual, cooked amazing food, and handled everything effortlessly. Cook Ford is my go-to for any chef needs in Delhi NCR.",
    },
    {
      id: 3,
      imageUrl: "/images/defaultchef.png",
      chefName: "Vimal Kumar",
      location: "Gurugram",
      reasons: "Best service in Gurugram",
      shortSentence:
        "Cook Ford provided a fantastic chef for my event. The food was delicious, and the service was seamless. I’ll definitely use them again for future events in Delhi NCR.",
    },
    {
      id: 4,
      imageUrl: "/images/defaultchef.png",
      chefName: "Tony",
      location: "Noida",
      reasons: "Best service in Gaziabad",
      shortSentence:
        "Hosting a party in Delhi NCR was stress-free thanks to Cook Ford. The chef was outstanding, and the entire process was smooth and professional. Highly recommended!",
    },
    {
      id: 5,
      imageUrl: "/images/defaultchef.png",
      chefName: "Tony",
      location: "Noida",
      reasons: "Best service in Noida",
      shortSentence:
        "Cook Ford delivered exactly what I needed for my event. The chef was skilled, the food was amazing, and the experience was hassle-free. Perfect service for anyone in Delhi NCR!",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" mx-auto">
      <div className="p-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Happy Coustomer Review </h2>
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="p-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6 text-center">
              <Image
                className="w-24 h-24 rounded-full mx-auto"
                width={100}
                height={100}
                src={"/images/page-1-img-1.png"}
                alt={item.chefName}
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {item.chefName}
              </h3>
              <p className="text-gray-600">{item.location}</p>
              <p className="mt-3 text-gray-600">{item.reasons}</p>
              <p className="mt-5 text-gray-600">{item.shortSentence}</p>
            </div>
          </div>
        ))}
      </Slider>
      </div>

    </div>
  );
};

export default Happyclient;
