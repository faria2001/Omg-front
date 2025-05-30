"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import NetworkSelection from "./networkselect";
import { Progress } from "./ui/progress";

const Hero = () => {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const percentage = (500 / 1000) * 100;

    setProgressValue(percentage <= 100 ? percentage : 100);
  }, []);

  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 mt-10 justify-center items-center p-2 ">
      <div className=" w-full h-full gap-10  justify-center flex flex-col">
        {/* image section */}
        <div className=" min-h-[400px] w-full items-center justify-center flex ">
          <Image src={"/assets/omg-7.svg"} height={400} width={400} alt="" />
        </div>
        {/* text */}
        <div className="flex gap-2 sm:text-base text-xs sm:ml-7 lg:mb-0 mb-3 font-bold  text-white ">
          <h1>AIRDROP</h1>
          <div className="w-0.5 bg-[#004F5D]" />
          <h1>PLAYVIDEO</h1>
          <div className="w-0.5 bg-[#004F5D]" />

          <h1>KYC+AUDIT</h1>
        </div>
      </div>

      <div className=" items-center w-full justify-center flex ">
        <div className="flex flex-col items-center justify-center w-full ">
          <div className="text-white flex flex-col gap-3 w-full p-6 text-center max-w-[457px] min-h-[379px] bg-gradient-to-b from-[#f9a531]/80 to-[#f9a531]/80 backdrop-blur-lg border-[#fedd2f] border-4 rounded-4xl border-primary">
            <h1 className=" text-xl sm:text-2xl font-bold text-white title">
              Buy & Stake OMG Token
            </h1>
            <p className=" sm:text-base text-sm font-semibold text-center text-primary increase">
              Last stage of pre-sale (Stage 20)
            </p>
            <div className="relative">
              <Image
                src="/assets/omg-7-slider-2.svg"
                alt="cat"
                width={58}
                height={58}
                className="absolute -translate-y-full top-3 right-2 z-10"
              />
              {/* <div className="h-4  overflow-hidden bg-gray-200 rounded-full">
                <div
                  className="h-full bg-gradient-to-r from-primary/50 to-primary"
                  style={{ width: "87.7769%" }}
                ></div>
              </div> */}
              <div className=" mb-[8px] ">
                <Progress
                  //  value={progressValue}
                  value={0}
                />
              </div>
            </div>
            <div className="flex items-center justify-center gap-2  text-primary">
              <span className="text-base sm:text-lg font-semibold lg:text-xl M">
                {/* 22.15B */}0
              </span>
              <span className="m2">/ 25.24B OMG</span>
            </div>
            <div className="flex items-center justify-center gap-2 my-3">
              {/* <Image src="/logo.svg" alt="cat" width={48} height={48} /> */}
              <p className=" text-xl sm:text-2xl font-semibold text-primary Raised">
                {/* Raised: $19,095,438.822 */}
                Raised: $0
              </p>
            </div>
            <div className="px-2 py-1 text-base sm:text-lg border-2 rounded-3xl border-[#9E6100] buy">
              <p className="">
                <span className="font-medium buy">Your Purchased OMG</span>{" "}
                <span className="=">=</span>{" "}
                <span className="font-medium text-primary buy">0</span>
              </p>
            </div>
            <div className="px-2 py-1 text-base sm:text-lg border-2 rounded-3xl border-[#9E6100] buy">
              <p className="">
                <span className="font-medium buy">Your rewards OMG</span>{" "}
                <span className="=">=</span>{" "}
                <span className="font-medium text-primary buy">0</span>
              </p>
            </div>
          </div>
          <div className="stage text-xl sm:text-2xl my-2 font-bold text-white network">
            OMG&apos;s last pre-sale stage
          </div>
          <NetworkSelection />
          <div className="flex sm:flex-row flex-col items-center text-white gap-2 mt-2">
            <h1>Listing Price</h1>
            <div className="flex gap-1">
              <Image
                src={"/icons/xbinance1.svg"}
                height={30}
                width={30}
                alt=""
              />
              <Image
                src={"/icons/xcoinbase.svg"}
                height={30}
                width={30}
                alt=""
              />
              <Image src={"/icons/xbybit.svg"} height={30} width={30} alt="" />
              <Image src={"/icons/xbitget.svg"} height={30} width={30} alt="" />
              <Image src={"/icons/xgate.svg"} height={30} width={30} alt="" />
              <Image src={"/icons/xmexc.svg"} height={30} width={30} alt="" />
            </div>
            <h1>$0.09 - $0.21</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
