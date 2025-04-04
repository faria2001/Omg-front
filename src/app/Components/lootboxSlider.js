"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    beforeChange: (current, next) => setActiveSlide(next), // Track active slide index
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  const goldboxes = [
    {
      title: "Glitter Glow",
      discount: "12% OFF",
      price: "$197 Get 8M CATICO",
      image: "/goldbox.png",
    },
    {
      title: "Glitter Glow",
      discount: "12% OFF",
      price: "$197 Get 8M CATICO",
      image: "/goldbox.png",
    },
    {
      title: "Glitter Glow",
      discount: "12% OFF",
      price: "$197 Get 8M CATICO",
      image: "/goldbox.png",
    },
  ];

  return (
    <div className="flex justify-center items-center py-10  px-4 overflow-hidden">
      <div
        className="w-full max-w-[500px] md:max-w-[1190px] rounded-[20px] border-[2px] border-yellow-400 backdrop-blur-[15px] p-6 md:p-10 flex flex-col items-center"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 79, 93, 0.75) 0%, rgba(26, 26, 26, 0.30) 100%)",
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
          PreSale Loot Box
        </h2>
        <Slider {...settings} className="w-full">
          {goldboxes.map((box, index) => {
            const centerSlide = (activeSlide + 1) % goldboxes.length; // Correct center slide index

            return (
              <div key={index} className="px-2 flex justify-center">
                <div
                  className={`relative w-[95%] sm:w-[80%] md:w-[316px] h-[474.89px] rounded-[26.78px] bg-gradient-to-b from-orange-400 to-orange-700 shadow-lg p-6 transition-all duration-300 ease-in-out ${
                    index === centerSlide
                      ? "scale-95 opacity-100 z-10" // Center card: Larger, fully visible, top layer
                      : "scale-90 opacity-60 z-0" // Side cards: Smaller, blurry, lower layer
                  }`}
                >
                  <h3 className="text-white text-2xl font-bold text-center">
                    {box.title}
                  </h3>
                  <p className="text-yellow-300 text-[35.71px] font-bold text-center mt-2">
                    {box.discount}
                  </p>
                  <div className="flex justify-center mt-4 relative">
                    <Image
                      src={box.image}
                      alt="Loot Box"
                      width={250}
                      height={193}
                      className="rounded-lg max-w-full h-auto"
                    />
                    <div
                      style={{ zIndex: 2 }}
                      className="absolute bottom-[-15] mx-auto w-[80%] h-[35px] bg-gradient-to-r from-orange-500 via-yellow-300 to-orange-500 rounded-full flex items-center justify-center"
                    >
                      <p className="text-black font-bold text-sm">
                        {box.price}
                      </p>
                    </div>
                  </div>
                  <button
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    className="w-[90%] mt-7 mx-auto h-[40px] bg-gradient-to-b from-orange-300 to-orange-500 shadow-md rounded-full text-white font-bold text-lg border-[1px] border-yellow-400"
                  >
                    Buy With Crypto
                  </button>
                  <p className="text-white text-center text-lg font-bold mt-4">
                    +Chance to win Rare NFT
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default SliderComponent;
