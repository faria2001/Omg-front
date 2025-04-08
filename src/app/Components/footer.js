import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black w-full flex flex-row ">
      <div className="text-[14px] justify-center w-full self-center flex flex-col sm:flex-row gap-2 p-4  text-white font-bold">
        <a className="cursor-pointer hover:text-[#fedd2f]">HOME</a>
        <a className="cursor-pointer hover:text-[#fedd2f]">LOOTBOX</a>
        <a className="cursor-pointer hover:text-[#fedd2f]">AIRDROPS</a>
        <a className="cursor-pointer hover:text-[#fedd2f]">FEATURES</a>
        <a className="cursor-pointer hover:text-[#fedd2f]">ROADMAP</a>
        <a className="cursor-pointer hover:text-[#fedd2f]">TOKONOMICS</a>
        <a className="cursor-pointer hover:text-[#fedd2f]">KYC-AUDIT</a>
      </div>
      <div className="flex flex-row gap-2 bg-pink-300 max-w-[200px] w-full ">
        <Image src={"/icons/insta.svg"} height={30} width={30} alt="" />
        <Image src={"/icons/tg-2.svg"} height={30} width={30} alt="" />
        <Image src={"/icons/twitter-2.svg"} height={30} width={30} alt="" />
        <Image src={"/icons/yt.svg"} height={30} width={30} alt="" />
      </div>
    </div>
  );
};

export default Footer;
