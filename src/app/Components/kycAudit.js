import Image from "next/image";
import React from "react";

const KycAudit = () => {
  return (
    <div className="text-white justify-center bg-gradient-to-b from-[#529bd0]/90  to-white/60 items-center self-center flex flex-col border-2 border-[#529bd0] gap-y-10 w-full p-6 text-center max-w-[1280px] min-h-[805px] backdrop-blur-lg  rounded-4xl border-primary">
      <div className="text-center text-black text-4xl sm:text-5xl font-bold w-full">
        <span>K</span>
        <span className="text-[#ffdf20]">Y</span>
        <span>&</span>
        <span className="text-[#ffdf20]">C</span>
        <span>A</span>
        <span className="text-[#ffdf20]">U</span>
        <span>D</span>
        <span className="text-[#ffdf20]">I</span>
        <span>T</span>
      </div>
      {/* first section */}
      <div className="grid text-start justify-between w-full p-4 lg:grid-cols-2 gap-2 grid-cols-1 ">
        <div className=" flex flex-col flex-wrap ml-4 gap-8">
          <div>
            <h1 className="text-[#ffdf20] text-3xl md:text-4xl font-bold">
              OhMyGod Coin
            </h1>
            <h2 className="text-[20px] font-semibold">
              KYC Verification Process.
            </h2>
          </div>
          <div>
            <p>4 Steps to effective KYC Compliance</p>
          </div>
          <div className="flex flex-col flex-wrap gap-3">
            <strong className="text-[#ffdf20]">Contract Address:</strong>
            <h2 className="sm:flex hidden">
              {" "}
              CATqqKyPins4XxTvZhSJXqgbXa2egtAUbH7fRhS8JBgD
            </h2>
            <h2 className="sm:hidden flex">
              {" "}
              CATqqKyPins4XxTvZhSJX
              <br />
              qgbXa2egtAUbH7fRhS8JBgD
            </h2>
          </div>

          <div className="text-[#ffdf20] font-semibold">KYC & Audited By:</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 w-full text-black">
            <div className="bg-white font-semibold min-h-[62px] flex items-center justify-center gap-3 rounded-full text-center ">
              <Image
                src={"/icons/coinsult-logo.svg"}
                alt=""
                height={30}
                width={28}
              />
              CoinSult Stafu
            </div>
            <div className="bg-white font-semibold min-h-[62px] flex items-center justify-center gap-3 rounded-full text-center ">
              <Image
                className="mb-1"
                src={"/icons/coinscop-logo.svg"}
                alt=""
                height={28}
                width={30}
              />
              CoinScop{" "}
            </div>
            <div className="bg-white font-semibold min-h-[62px] flex items-center justify-center gap-3 rounded-full text-center ">
              <Image
                src={"/icons/cyberscop-logo.svg"}
                alt=""
                height={25}
                width={28}
              />
              CyberScop
            </div>
            <div className="bg-white font-semibold min-h-[62px] flex items-center justify-center gap-3 rounded-full text-center ">
              <Image
                src={"/icons/certic-logo.svg"}
                alt=""
                height={25}
                width={25}
              />
              CerticSkynet
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4">
          <div className="w-full flex justify-center sm:justify-end ">
            <div className="border-[#ffcb06] h-full min-h-[175px]  max-w-[237px] border-2 justify-center bg-[#feffd7] w-full rounded-2xl flex">
              <Image
                src={"/images/audit-1.svg"}
                alt=""
                height={100}
                width={100}
              />
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="border-[#ffcb06] h-full min-h-[175px]  max-w-[237px] border-2 bg-[#feffd7] w-full rounded-2xl justify-center flex">
              <Image
                src={"/images/audit-2.svg"}
                alt=""
                height={100}
                width={100}
              />{" "}
            </div>
          </div>{" "}
          <div className="w-full flex justify-center sm:justify-end ">
            <div className="border-[#ffcb06] h-full min-h-[175px] border-2 max-w-[237px] bg-[#feffd7] w-full rounded-2xl justify-center flex">
              <Image
                src={"/images/audit-3.svg"}
                alt=""
                height={100}
                width={100}
              />{" "}
            </div>
          </div>{" "}
          <div className="w-full flex justify-center ">
            <div className="border-[#ffcb06] h-full min-h-[175px] border-2 max-w-[237px] bg-[#feffd7] w-full rounded-2xl justify-center flex">
              <Image
                src={"/images/audit-4.svg"}
                alt=""
                height={100}
                width={100}
              />{" "}
            </div>
          </div>{" "}
        </div>
      </div>
      {/* second section */}
      <div className="grid text-black max-w-[1160px] gap-3 grid-cols-1 lg:grid-cols-2">
        <div className="rounded-xl p-2 items-center bg-[#feffd7] w-full flex gap-2">
          <Image
            width={80}
            height={80}
            className=""
            src="/assets/omg-7-slider-2.svg"
            alt="Phase 1"
          />{" "}
          <div className=" text-start">
            <h3 className="text-xl font-bold mb-2">
              OhMyGod Project Approved Team
            </h3>
            <p className="text-sm">
              The OhMyGod project team has passed a thorough KYC process,
              verifying each member&apos;s identity and credentials. This
              ensures transparency and trust, giving investors confidence in the
              team&apos;s integrity and capabilities.
            </p>
          </div>
        </div>
        <div className="rounded-xl p-2 items-center bg-[#feffd7] w-full flex gap-2">
          <Image
            width={80}
            height={80}
            className=""
            src="/assets/omg-7-slider-2.svg"
            alt="Phase 1"
          />{" "}
          <div className=" text-start">
            <h3 className="text-xl font-bold mb-2">
              OhMyGod Project Approved Team
            </h3>
            <p className="text-sm">
              The OhMyGod project team has passed a thorough KYC process,
              verifying each member&apos;s identity and credentials. This
              ensures transparency and trust, giving investors confidence in the
              team&apos;s integrity and capabilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KycAudit;
