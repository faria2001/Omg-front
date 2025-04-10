// components/Tokenomics.js
import Image from "next/image";

const Tokenomics = () => {
  return (
    // <div className="flex flex-col md:flex-row items-center justify-between p-10 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg shadow-lg">
    <div
      id="tokonomics"
      className="text-white bg-gradient-to-b from-[#529bd0]/90  to-white/60 items-center self-center lg:gap-0 gap-5 grid grid-cols-1 lg:grid-cols-2  w-full p-6 text-center max-w-[1280px] min-h-[546px] backdrop-blur-lg  rounded-4xl border-primary"
    >
      <div className="flex items-start gap-6 justify-center min-h-[370px] flex-col">
        <div className="text-start">
          <h1 className="text-3xl font-bold text-[#ffdf20] mb-2">
            OMG Tokenomics
          </h1>
          <p className="text-base mb-4 text-[#464646] font-semibold">
            Token Distribution
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <div className=" relative flex justify-start items-center text-black bg-white sm:max-w-[290px] min-h-[44px] w-full rounded-lg shadow-md">
            <div className="absolute top-0 left-0 bg-[#FE557F] rounded-l-lg h-full max-w-[8px] w-full" />
            <h1 className=" text-sm ml-4 font-semibold">
              <span className="text-[#FE557F]">35.00%</span> Presale
            </h1>
          </div>
          <div className=" relative flex justify-start items-center text-black bg-white sm:max-w-[290px] min-h-[44px] w-full rounded-lg shadow-md">
            <div className="absolute top-0 left-0 bg-[#640D6B] rounded-l-lg h-full max-w-[8px] w-full" />
            <h1 className=" text-sm ml-4 font-semibold">
              <span className="text-[#640D6B]"> 10.00%</span> Marketing
            </h1>
          </div>

          <div className=" relative flex justify-start items-center text-black bg-white sm:max-w-[290px] min-h-[44px] w-full rounded-lg shadow-md">
            <div className="absolute top-0 left-0 bg-[#6DC4D0] rounded-l-lg h-full max-w-[8px] w-full" />
            <h1 className=" text-sm ml-4 font-semibold">
              <span className="text-[#6DC4D0]"> 15.00%</span> Liquidity
            </h1>
          </div>

          <div className=" relative flex justify-start items-center text-black bg-white sm:max-w-[290px] min-h-[44px] w-full rounded-lg shadow-md">
            <div className="absolute top-0 left-0 bg-[#F17BBC] rounded-l-lg h-full max-w-[8px] w-full" />
            <h1 className=" text-sm ml-4 font-semibold">
              <span className="text-[#F17BBC]"> 10.00% </span> Team
            </h1>
          </div>

          <div className=" relative flex justify-start items-center text-black bg-white sm:max-w-[290px] min-h-[44px] w-full rounded-lg shadow-md">
            <div className="absolute top-0 left-0 bg-[#0A6847] rounded-l-lg h-full max-w-[8px] w-full" />
            <h1 className=" text-sm ml-4 font-semibold">
              <span className="text-[#0A6847]"> 10.00% </span> Community Rewards
            </h1>
          </div>

          <div className=" relative flex justify-start items-center text-black bg-white sm:max-w-[290px] min-h-[44px] w-full rounded-lg shadow-md">
            <div className="absolute top-0 left-0 bg-[#8261E4] rounded-l-lg h-full max-w-[8px] w-full" />
            <h1 className=" text-sm ml-4 font-semibold">
              <span className="text-[#8261E4]"> 10.00% </span> Dev and Ecosystem
            </h1>
          </div>

          <div className=" relative flex justify-start items-center text-black bg-white sm:max-w-[290px] min-h-[44px] w-full rounded-lg shadow-md">
            <div className="absolute top-0 left-0 bg-[#F17BBC] rounded-l-lg h-full max-w-[8px] w-full" />
            <h1 className=" text-sm ml-4 font-semibold">
              <span className="text-[#F17BBC]"> 5.00% </span> Stake Rewards
            </h1>
          </div>

          <div className=" relative flex justify-start items-center text-black bg-white sm:max-w-[290px] min-h-[44px] w-full rounded-lg shadow-md">
            <div className="absolute top-0 left-0 bg-[#FB8F3D] rounded-l-lg h-full max-w-[8px] w-full" />
            <h1 className=" text-sm ml-4 font-semibold">
              <span className="text-[#FB8F3D]"> 5.00% </span> AI Reserve
            </h1>
          </div>
        </div>
      </div>
      {/* <div className=" max-w-[320px] w-full bg-yellow-200 pt-10 md:pt-0">
        <Image
          src={"/assets/tokonomics.svg"}
          alt="Token Character"
          layout="fill"
          objectFit="contain"
        />
      </div> */}
      <div className="flex justify-center">
        <Image
          src={"/assets/tokonomics.svg"}
          alt="Token Character"
          height={400}
          width={400}
        />
      </div>
    </div>
  );
};

export default Tokenomics;
