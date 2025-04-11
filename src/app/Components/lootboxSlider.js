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
      price: "$197 Get 8M $OMG",
      image: "/goldbox.png",
    },
    {
      title: "Glitter Glow",
      discount: "12% OFF",
      price: "$197 Get 8M $OMG",
      image: "/goldbox.png",
    },
    {
      title: "Glitter Glow",
      discount: "12% OFF",
      price: "$197 Get 8M $OMG",
      image: "/goldbox.png",
    },
  ];

  return (
    <div
      id="lootbox"
      className="flex justify-center items-center sm:py-10  px-4 overflow-hidden"
    >
      <div
        className="w-full max-w-[260px] sm:max-w-[590px] md:max-w-[708px] lg:max-w-[970px] xl:max-w-[1190px] rounded-[20px] border-[2px] border-yellow-400 backdrop-blur-[15px] p-2 sm:p-6 md:p-10 flex flex-col items-center"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 79, 93, 0.75) 0%, rgba(26, 26, 26, 0.30) 100%)",
        }}
      >
        <h2 className=" text-xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-2 sm:mb-6">
          PreSale Loot Box
        </h2>
        <Slider {...settings} className="w-full">
          {goldboxes.map((box, index) => {
            const centerSlide = (activeSlide + 1) % goldboxes.length; // Correct center slide index

            return (
              <div key={index} className="px-2 flex justify-center">
                <div
                  className={`relative w-full max-w-[475px] sm:max-w-[952px] md:max-w-[316px] min-h-[274px] sm:min-h-[474.89px] rounded-2xl sm:rounded-[26.78px] bg-gradient-to-b from-orange-400 to-orange-700 shadow-lg p-3 sm:p-6 transition-all duration-300 ease-in-out ${
                    index === centerSlide
                      ? "scale-95 opacity-100 z-10" // Center card: Larger, fully visible, top layer
                      : "scale-90 opacity-100 z-10 md:scale-90 md:opacity-60 md:z-0" // Side cards: Smaller, blurry, lower layer
                  }`}
                >
                  <h3 className="text-white text-xl sm:text-2xl font-bold text-center">
                    {box.title}
                  </h3>
                  <p className="text-yellow-300 text-[20px] sm:text-[35.71px] font-bold text-center mt-2">
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
                      className="absolute bottom-[-15] w-full mx-auto max-w-[380px] sm:max-w-[762px] md:max-w-[252px] min-h-[35px] bg-gradient-to-r from-orange-500 via-yellow-300 to-orange-500 rounded-full flex items-center justify-center"
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
                    className="max-w-[90%] py-1 px-2 mt-7 mx-auto min-h-[20px] sm:min-h-[40px] bg-gradient-to-b from-orange-300 to-orange-500 shadow-md rounded-full text-white font-bold text-sm sm:text-lg border-[1px] border-yellow-400"
                  >
                    Buy With Crypto
                  </button>
                  <p className="text-white text-center text-sm sm:text-lg font-bold mt-4">
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
