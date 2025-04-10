"use client";

import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="bg-black w-full flex justify-center">
      <div className="max-w-[1280px] w-full p-1 flex flex-col sm:flex-row justify-center sm:justify-between self-center items-center">
        <div>
          <Image
            src="/assets/omg-logo-2.svg"
            height={85}
            width={85}
            alt="Logo"
            className=""
          />{" "}
        </div>
        <div className="text-[8px] md:text-[14px] text-center sm:justify-between max-w-[500px] w-full self-center flex flex-col sm:flex-row p-4  text-white font-bold">
          <a className="cursor-pointer hover:text-[#fedd2f]">GROUP</a>
          <a className="cursor-pointer hover:text-[#fedd2f]">AIRDROPS</a>
          <Link
            to="roadmap"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[#fedd2f]"
          >
            ROADMAP
          </Link>
          <Link
            to="tokonomics"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[#fedd2f]"
          >
            TOKONOMICS
          </Link>
          <Link
            to="kyc-audit"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[#fedd2f]"
          >
            KYC-AUDIT
          </Link>
        </div>
        <div className="flex flex-row gap-2 justify-center max-w-[200px] w-full ">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/ohmygodtoken?igsh=d3JpZnZmbzY4NTM1&utm_source=qr"
            className="cursor-pointer"
          >
            <Image src={"/icons/insta.svg"} height={30} width={30} alt="" />{" "}
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/profile.php?id=61574039830092"
            className="cursor-pointer"
          >
            <Image src={"/icons/fb.svg"} height={30} width={30} alt="" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://x.com/OhMyGodtoken"
            className="cursor-pointer"
          >
            <Image src={"/icons/twitter-2.svg"} height={30} width={30} alt="" />{" "}
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://youtube.com/@ohmygodtoken?si=2h7-A9VHBRkrPMDT"
            className="cursor-pointer"
          >
            <Image src={"/icons/yt.svg"} height={30} width={30} alt="" />{" "}
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.tiktok.com/@bozzevents?_t=ZP-8vD2H4QBZAV&_r=1"
            className="cursor-pointer"
          >
            <Image src={"/icons/tiktok.svg"} height={30} width={30} alt="" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
