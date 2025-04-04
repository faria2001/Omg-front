import Image from "next/image";
import React from "react";
import Hero from "./Hero";
import LootBoxSlider from "./lootboxSlider";

const Header = () => {
  return (
    <div
      className="flex flex-col max-w-[1280px] py-4 self-center w-full"
      style={{
        backgroundImage: "url(/assets/Border-bg.svg)",
        backgroundPosition: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="px-4 flex justify-between self-center w-full">
        <div className="flex flex-row items-center self-center">
          <Image
            src={"/logo.svg"}
            height={60}
            width={60}
            alt=""
            className="bg-[#e9ad31] rounded-full p-1 ml-6"
          />
          <h1 className="text-xl  text-[#fadbb1] font-bold ml-4">OhMyGod</h1>
        </div>
        {/* <div className="flex text-center justify-between rounded-md border-2 border-b-0 border-amber-600"> */}
        <div className="border-1 border-white text-[14px] flex justify-between p-4 max-w-[650px] w-full rounded-4xl text-white font-bold">
          <a>HOME</a>
          <a>LOOTBOX</a>
          <a>AIRDROPS</a>
          <a>FEATURES</a>
          <a>ROADMAP</a>
          <a>TOKONOMICS</a>
          <a>KYC-AUDIT</a>
        </div>
        {/* </div> */}
        {/* <div className="flex gap-2 items-center">
        <div>
          {" "}
          <button className="rounded-2xl bg-[#e9ad31]">Discuss</button>
        </div>{" "}
      </div> */}
        <div className="flex items-center space-x-5 mr-4">
          {/* Social Media Icons */}
          <div className="flex space-x-2">
            <div className="w-8 h-8 p-1.5 border-1 border-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
              {/* Replace with actual Telegram Icon */}
              {/* <span className="text-blue-500 text-lg">📩</span> */}
              <Image src={"/assets/tg.svg"} height={30} width={30} alt="" />
            </div>
            <div className="w-8 h-8 p-1.5 border-1 border-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
              {/* Replace with actual X Icon */}
              {/* <span className="text-black text-lg">🅧</span> */}
              <Image
                src={"/assets/twitter.svg"}
                height={30}
                width={30}
                alt=""
              />
            </div>
          </div>

          {/* Discuss Button */}
          <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-shadow">
            DISCUSS
          </button>
        </div>
      </div>
      <Hero />
      <LootBoxSlider />
    </div>
  );
};

export default Header;
