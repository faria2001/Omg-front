"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <div className="px-4 flex xl:flex-row flex-row justify-between items-center max-w-[1280px] w-full">
      <div className="flex items-center justify-center mt-[-5px] max-w-[200px] w-full">
        <Image
          src="/assets/omg-logo-2.svg"
          height={85}
          width={85}
          alt="Logo"
          className=""
        />
        {/* <h1 className="text-xl xl:flex hidden text-[#fedd2f] font-bold ml-4">
          OhMyGod
        </h1> */}
      </div>

      <div className="hidden xl:flex border-1 border-white text-[14px] justify-between p-4 max-w-[650px] w-full rounded-4xl text-white font-bold">
        <a className="cursor-pointer hover:text-[#fedd2f]">HOME</a>
        <a className="cursor-pointer hover:text-[#fedd2f]">LOOTBOX</a>
        <a className="cursor-pointer hover:text-[#fedd2f]">AIRDROPS</a>
        <a className="cursor-pointer hover:text-[#fedd2f]">FEATURES</a>
        <a className="cursor-pointer hover:text-[#fedd2f]">ROADMAP</a>
        <a className="cursor-pointer hover:text-[#fedd2f]">TOKONOMICS</a>
        <a className="cursor-pointer hover:text-[#fedd2f]">KYC-AUDIT</a>
      </div>

      <div className="flex items-center space-x-5 mr-4">
        <div className="flex space-x-2">
          <div className="w-8 h-8 p-1.5 border-1 border-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
            <Image src="/assets/tg.svg" height={30} width={30} alt="" />
          </div>
          <div className="w-8 h-8 p-1.5 border-1 border-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
            <Image src="/assets/twitter.svg" height={30} width={30} alt="" />
          </div>
        </div>

        <button className="xl:flex hidden bg-gradient-to-r cursor-pointer from-yellow-400 to-orange-500 hover:shadow-amber-600 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg hover:scale-105 hover:opacity-90 transition-all duration-300">
          DISCUSS
        </button>

        {/* Hamburger Menu Icon */}
        <button
          onClick={handleMenuToggle}
          className="xl:hidden focus:outline-none"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Responsive Menu */}
      {/* {isMenuOpen && (
        <div className="xl:hidden flex flex-col items-center w-full border-1 border-white mt-2 p-4 rounded-2xl">
        <button className="bg-gradient-to-r cursor-pointer from-yellow-400 to-orange-500 hover:shadow-amber-600 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg hover:scale-105 hover:opacity-90 transition-all duration-300">
          DISCUSS
        </button> 
        <a
            onClick={handleLinkClick}
            className="py-2 cursor-pointer hover:text-[#fedd2f]"
          >
            HOME
          </a>
          <a
            onClick={handleLinkClick}
            className="py-2 cursor-pointer hover:text-[#fedd2f]"
          >
            LOOTBOX
          </a>
          <a
            onClick={handleLinkClick}
            className="py-2 cursor-pointer hover:text-[#fedd2f]"
          >
            AIRDROPS
          </a>
          <a
            onClick={handleLinkClick}
            className="py-2 cursor-pointer hover:text-[#fedd2f]"
          >
            FEATURES
          </a>
          <a
            onClick={handleLinkClick}
            className="py-2 cursor-pointer hover:text-[#fedd2f]"
          >
            ROADMAP
          </a>
          <a
            onClick={handleLinkClick}
            className="py-2 cursor-pointer hover:text-[#fedd2f]"
          >
            TOKONOMICS
          </a>
          <a
            onClick={handleLinkClick}
            className="py-2 cursor-pointer hover:text-[#fedd2f]"
          >
            KYC-AUDIT
          </a>
        </div>
      )} */}
    </div>
  );
}
