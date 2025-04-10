import Image from "next/image";
import React from "react";
import Hero from "./Hero";
import LootBoxSlider from "./lootboxSlider";
import Navbar from "./navbar";

const Header = () => {
  return (
    // <div
    //   className="flex flex-col max-w-[1280px] py-4 self-center w-full"
    //   style={{
    //     backgroundImage: "url(/assets/Border-bg.svg)",
    //     backgroundPosition: "fixed",
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-repeat",
    //   }}
    // >
    <div className="relative flex flex-col max-w-[1280px] py-4 self-center w-full">
      <div
        className="min-h-screen hidden xl:flex justify-items-center py-4 flex-col gap-6 w-full"
        style={{
          backgroundImage: "url(/assets/Border-bg.svg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        <Hero />
        <LootBoxSlider />
      </div>
      <div
        className="min-h-screen xl:hidden bg-center flex justify-items-center py-4 flex-col gap-6 w-full"
        style={{
          backgroundImage: "url(/assets/mob-hero-bg.svg)",
          backgroundSize: "cover", // This keeps it responsive on mobile
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        <Hero />
        {/* <LootBoxSlider /> */}
      </div>
    </div>
  );
};

export default Header;
