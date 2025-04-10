"use client";
import { useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";

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
        <Link
          to="lootbox"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-[#fedd2f]"
          onClick={handleMenuToggle}
        >
          LOOTBOX
        </Link>
        <a className="cursor-pointer hover:text-[#fedd2f]">AIRDROPS</a>
        <Link
          to="features"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-[#fedd2f]"
          onClick={handleMenuToggle}
        >
          FEATURES
        </Link>
        <Link
          to="roadmap"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-[#fedd2f]"
          onClick={handleMenuToggle}
        >
          ROADMAP
        </Link>
        <Link
          to="tokonomics"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-[#fedd2f]"
          onClick={handleMenuToggle}
        >
          TOKONOMICS
        </Link>

        <Link
          to="kyc-audit"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-[#fedd2f]"
          onClick={handleMenuToggle}
        >
          KYC-AUDIT
        </Link>
      </div>

      <div className="flex items-center space-x-5 mr-4">
        <div className="flex space-x-2">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/ohmygodtoken?igsh=d3JpZnZmbzY4NTM1&utm_source=qr"
            className="cursor-pointer w-8 h-8 p-1.5 border-1 border-white
           rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
          >
            <Image src="/assets/insta-2.svg" height={30} width={30} alt="" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://x.com/OhMyGodtoken"
            className="cursor-pointer w-8 h-8 p-1.5 border-1 border-white
           rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
          >
            {" "}
            <Image src="/assets/twitter.svg" height={30} width={30} alt="" />
          </a>
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
      {/* Side menu */}
      {isMenuOpen && (
        <div className="fixed xl:hidden flex top-0 right-0 max-w-[300px] w-full h-full bg-black bg-opacity-75 z-50 p-6">
          {/* Close button */}
          <button
            onClick={handleMenuToggle}
            className="absolute top-4 right-4 text-white text-3xl"
          >
            &times;
          </button>

          {/* Menu links */}
          <div className="flex flex-col items-start space-y-4 text-white">
            <button className="bg-gradient-to-r cursor-pointer from-yellow-400 to-orange-500 hover:shadow-amber-600 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg hover:scale-105 hover:opacity-90 transition-all duration-300">
              DISCUSS
            </button>
            <Link
              to="home" // ID of the target component
              smooth={true}
              duration={500}
              className="py-2 cursor-pointer hover:text-[#fedd2f]"
              onClick={handleMenuToggle}
            >
              HOME
            </Link>
            <Link
              to="lootbox"
              smooth={true}
              duration={500}
              className="py-2 cursor-pointer hover:text-[#fedd2f]"
              onClick={handleMenuToggle}
            >
              LOOTBOX
            </Link>
            <Link
              to="airdrops"
              smooth={true}
              duration={500}
              className="py-2 cursor-pointer hover:text-[#fedd2f]"
              onClick={handleMenuToggle}
            >
              AIRDROPS
            </Link>
            <Link
              to="features"
              smooth={true}
              duration={500}
              className="py-2 cursor-pointer hover:text-[#fedd2f]"
              onClick={handleMenuToggle}
            >
              FEATURES
            </Link>
            <Link
              to="roadmap"
              smooth={true}
              duration={500}
              className="py-2 cursor-pointer hover:text-[#fedd2f]"
              onClick={handleMenuToggle}
            >
              ROADMAP
            </Link>
            <Link
              to="tokonomics"
              smooth={true}
              duration={500}
              className="py-2 cursor-pointer hover:text-[#fedd2f]"
              onClick={handleMenuToggle}
            >
              TOKONOMICS
            </Link>
            <Link
              to="kyc-audit"
              smooth={true}
              duration={500}
              className="py-2 cursor-pointer hover:text-[#fedd2f]"
              onClick={handleMenuToggle}
            >
              KYC-AUDIT
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
