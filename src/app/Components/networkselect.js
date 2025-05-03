// components/NetworkSelection.js

import Image from "next/image";
import React from "react";

const NetworkSelection = () => {
  return (
    <div
      id="airdrops"
      className="text-white flex flex-col gap-5 w-full p-6 text-center max-w-[457px] min-h-[379px] bg-gradient-to-b from-teal-500/50 to-transparent backdrop-blur-lg border-[#6BFFFF] border-4 rounded-4xl border-primary"
    >
      <h2 className="text-white font-bold  text-xl sm:text-2xl mt-2 leading-[30px] text-center">
        Choose Your Preferred Networks
      </h2>
      <div className="flex flex-row gap-2 justify-center">
        <Image src={"/assets/eth_.svg"} height={30} width={30} alt="" />
        <Image src={"/assets/bsc_.svg"} height={30} width={30} alt="" />
        <Image src={"/assets/polygon_.svg"} height={30} width={30} alt="" />
        <Image src={"/assets/solana_.svg"} height={30} width={30} alt="" />
      </div>

      <div className="grid grid-cols-2  justify-between gap-2">
        {/* ETH Section */}
        <div className="grid grid-rows gap-2.5">
          <div className="bg-gradient-to-r from-teal-500 shadow-glow to-[#6BFFFF] py-2 backdrop-blur-lg  rounded-[30px] flex items-center gap-1 px-4">
            <Image src={"/assets/eth1.svg"} height={30} width={30} alt="" />
            <span className="text-white font-bold text-sm sm:text-lg">ETH</span>
          </div>

          <div className="flex justify-between text-xs sm:text-base px-2 w-full">
            <label className="text-white">Pay with ETH</label>
            <button className="text-blue-400">Max</button>
          </div>
          <div className="py-2 flex-col bg-[#000342] relative border border-[#00A9A9] rounded-[30px] flex items-center justify-between px-4">
            <input
              type="number"
              defaultValue="0"
              className="bg-transparent text-white text-lg focus:outline-none w-full"
              placeholder="0"
            />
            <span className="absolute right-2">
              <Image
                src={"/assets/eth1.svg"}
                alt="Ethereum"
                width={30}
                height={30}
              />
            </span>
            {/* </div> */}
          </div>
          <button className="cursor-pointer py-2 text-[12px] sm:text-[20px]  text-white font-bold px-4 rounded-[30px] text-center items-center bg-gradient-to-r from-teal-500 shadow-glow to-[#6BFFFF] backdrop-blur-lg ">
            Connect Wallet
          </button>
        </div>

        {/* USDT Section */}
        <div className="grid grid-rows gap-2.5">
          <div className="bg-gradient-to-r from-teal-500 shadow-glow to-[#6BFFFF] py-2 backdrop-blur-lg  rounded-[30px] flex items-center gap-1 px-4">
            <Image src={"/assets/usdt1.svg"} height={30} width={30} alt="" />
            <span className="text-white font-bold  text-sm sm:text-lg">
              USDT
            </span>
          </div>

          <div className="flex justify-between text-xs sm:text-base px-2 w-full">
            <label className="text-white">Pay with OMG</label>
            <button className="text-blue-400">Max</button>
          </div>
          <div className="py-2 flex-col bg-[#000342] relative border border-[#00A9A9] rounded-[30px] flex items-center justify-between px-4">
            <input
              type="number"
              defaultValue="0"
              className="bg-transparent text-white text-lg focus:outline-none w-full"
              placeholder="0"
            />
            <span className="absolute right-2">
              <Image src={"/logo.svg"} alt="omg" width={30} height={30} />
            </span>
            {/* </div> */}
          </div>
          <button className="cursor-pointer py-2 text-[12px] sm:text-[20px]  text-white font-bold px-4 rounded-[30px] text-center items-center bg-gradient-to-r from-teal-500 shadow-glow to-[#6BFFFF] backdrop-blur-lg ">
            Reffereal
          </button>
        </div>
      </div>
    </div>
  );
};

export default NetworkSelection;
