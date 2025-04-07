import Image from "next/image";
import React from "react";

const UniqueOmg = () => {
  return (
    <div className="text-white justify-center bg-gradient-to-b from-[#529bd0]/50  to-white/60 items-center self-center flex flex-col gap-y-24 w-full p-6 text-center max-w-[1280px] min-h-[804px] backdrop-blur-lg  rounded-4xl border-primary">
      <div className="text-center max-w-[700px] w-full">
        {" "}
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
          What Makes <span className="text-[#FF7A29]">OhMyGod</span> Token
          Unique?
        </h1>
        <p>
          OhMyGod is the only MemeCoin project that has the latest and most
          advanced and ground-breaking DeFi achievements
        </p>{" "}
      </div>
      {/* card section */}
      <div className="grid xl:grid-cols-3 text-black lg:grid-cols-2 grid-cols-1 gap-3 max-w-[900px] w-full self-center">
        <div className=" flex items-center relative min-h-[405px] bg-white rounded-3xl ">
          <Image
            src={"/assets/unique-1.svg"}
            height={200}
            width={200}
            alt=""
            className="absolute -translate-y-full bottom-24 right-13"
          />
          <div className=" text-black w-full mt-15 ">
            <h1 className="text-2xl font-bold ">Swap and Dex</h1>
            <p className="p-2 mt-7">
              A decentralized exchange (DEX) enabling seamless trading of
              cryptocurrencies, fostering liquidity within the OhMyGod
              ecosystem.
            </p>
          </div>
        </div>
        <div className=" flex items-center relative min-h-[405px] bg-white rounded-3xl ">
          <Image
            src={"/assets/unique-2.svg"}
            height={200}
            width={200}
            alt=""
            className="absolute -translate-y-full bottom-24 right-13"
          />
          <div className=" text-black w-full mt-15 ">
            <h1 className="text-2xl font-bold ">DAO Vote Platform</h1>
            <p className="p-2 mt-7">
              OhMyGod Vote Platform allows token holders to propose and vote on
              policies, ensuring democratic governance.
            </p>
          </div>
        </div>
        <div className=" flex items-center relative min-h-[405px] bg-white rounded-3xl ">
          <Image
            src={"/assets/unique-3.svg"}
            height={200}
            width={200}
            alt=""
            className="absolute -translate-y-full bottom-24 right-13"
          />
          <div className=" text-black w-full mt-15 ">
            <h1 className="text-2xl font-bold ">OMG Launchpad</h1>
            <p className="p-2 mt-7">
              The OhMyGod launchpad offers early access to innovative crypto
              projects for developers to raise funds and investors to get early
              token access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueOmg;
