import Image from "next/image";
import React from "react";
import NetworkSelection from "./networkselect";

const Hero = () => {
  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 mt-6 justify-center items-center p-2 ">
      <div className=" min-h-[400px] items-center justify-center flex ">
        <Image
          src={"/assets/Omg-hero-img.svg"}
          height={400}
          width={400}
          alt=""
        />
      </div>
      <div className=" items-center w-full justify-center flex ">
        <div className="flex flex-col items-center justify-center w-full ">
          {/* <div className="w-full p-6 text-center max-w-[457px] min-h-[379px] border-[#fabd35] bg-[#d39644]/80 border-4 rounded-4xl border-primary"> */}
          <div
            className="text-white flex flex-col gap-3 w-full p-6 text-center max-w-[457px] min-h-[379px] bg-gradient-to-b from-[#cf983d]/80 to-[#cf983d]/80 backdrop-blur-lg border-[#fabd35] border-4 rounded-4xl border-primary"
            // style={{
            //   background:
            //     "linear-gradient(180deg, rgba(255, 184, 76, 0.75) 0%, rgba(252, 191, 53, 0.75) 100%)",
            //   backdropFilter: "blur(25px)", // Note: Check browser compatibility
            //   borderRadius: "30px",
            // }}
          >
            <h1 className=" text-2xl font-bold text-white title">
              Buy & Stake OMG Token
            </h1>
            <p className=" font-semibold text-center text-primary increase">
              Last stage of pre-sale (Stage 20)
            </p>
            <div className="relative">
              <Image
                src="/assets/omg-cat.svg"
                alt="cat"
                width={58}
                height={58}
                className="absolute -translate-y-full top-1 right-2"
              />
              <div className="h-4  overflow-hidden bg-gray-200 rounded-full">
                <div
                  className="h-full bg-gradient-to-r from-primary/50 to-primary"
                  style={{ width: "87.7769%" }}
                ></div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2  text-primary">
              <span className="text-lg font-semibold lg:text-xl M">22.15B</span>
              <span className="m2">/ 25.24B OMG</span>
            </div>
            <div className="flex items-center justify-center gap-2 my-3">
              {/* <Image src="/logo.svg" alt="cat" width={48} height={48} /> */}
              <p className="text-2xl font-semibold text-primary Raised">
                Raised: $19,095,438.822
              </p>
            </div>
            <div className="px-2 py-1  text-lg border-2 rounded-3xl border-[#9E6100] buy">
              <p className="">
                <span className="font-medium buy">Your Purchased OMG</span>{" "}
                <span className="=">=</span>{" "}
                <span className="font-medium text-primary buy">0</span>
              </p>
            </div>
            <div className="px-2 py-1  text-lg border-2 rounded-3xl border-[#9E6100] buy">
              <p className="">
                <span className="font-medium buy">Your rewards OMG</span>{" "}
                <span className="=">=</span>{" "}
                <span className="font-medium text-primary buy">0</span>
              </p>
            </div>
          </div>
          <div className="stage text-2xl my-2 font-bold text-white network">
            OMG&apos;s last pre-sale stage
          </div>
          {/* <div className="relative w-full px-6 py-4 text-center bg-white border-4 rounded-lg border-primary Countdown2">
              <div className="network">
                <div className="text-sm text-black network">
                  Choose your preferred network:
                </div>
                <div className="chain flex flex-wrap justify-between gap-2 mb-4">
                  <button className="hover:opacity-80 buttom">
                    <Image
                      src="/images/chains/eth_hover.png"
                      alt="eth"
                      width={32}
                      height={32}
                    />
                  </button>
                  <button className="hover:opacity-80 buttom">
                    <Image
                      src="/images/chains/bsc.png"
                      alt="bsc"
                      width={32}
                      height={32}
                    />
                  </button>
                  <button className="hover:opacity-80 buttom">
                    <Image
                      src="/images/chains/polygon.png"
                      alt="polygon"
                      width={32}
                      height={32}
                    />
                  </button>
                  <button className="hover:opacity-80 buttom">
                    <Image
                      src="/images/chains/solana.png"
                      alt="sol"
                      width={32}
                      height={32}
                    />
                  </button>
                </div>
              </div>
              <form>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <button
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border bg-primary border-primary text-white"
                    type="button"
                  >
                    <Image
                      alt="ETH"
                      src="/images/tokens/eth.png"
                      width={20}
                      height={20}
                    />
                    ETH
                  </button>
                  <div className="relative group">
                    <button
                      className="w-full flex items-center gap-2 px-3 py-2 rounded-lg border border-[#787878] bg-white text-black"
                      type="button"
                    >
                      <div className="flex items-center gap-2">
                        <Image
                          alt="USDT"
                          src="/images/tokens/usdt.png"
                          width={20}
                          height={20}
                        />
                        USDT
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevron-down w-5 h-5 ml-auto"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                    <div className="absolute z-50 hidden w-full p-1 overflow-hidden bg-white border rounded-md shadow-md group-hover:block border-zinc-200 text-zinc-950">
                      <div className="flex items-center gap-2 cursor-pointer relative select-none rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-zinc-100 hover:text-zinc-900">
                        <Image
                          alt="USDT"
                          src="/images/tokens/usdt.png"
                          width={20}
                          height={20}
                        />
                        USDT
                      </div>
                      <div className="flex items-center gap-2 cursor-pointer relative select-none rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-zinc-100 hover:text-zinc-900">
                        <Image
                          alt="USDC"
                          src="/images/tokens/usdc.png"
                          width={20}
                          height={20}
                        />
                        USDC
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="relative w-1/2">
                    <div className="flex justify-between w-full mb-2">
                      <p className="text-sm text-black pay">Pay with ETH</p>
                      <button
                        type="button"
                        className="text-sm text-black transition-all hover:opacity-80 pay"
                      >
                        Max
                      </button>
                    </div>
                    <div className="relative">
                      <input
                        type="number"
                        step="any"
                        className="flex justify-between items-center bg-[#F6F6F6] border border-[#787878] pr-8 pl-3 py-3 rounded-lg w-full text-black relative pay"
                        placeholder="0"
                      />
                      <Image
                        alt="ETH"
                        src="/images/tokens/eth.png"
                        className="absolute object-contain -translate-y-1/2 w-7 h-7 right-2 top-1/2"
                        width={28}
                        height={28}
                      />
                    </div>
                  </div>
                  <div className="relative w-1/2">
                    <div className="flex justify-between w-full mb-2">
                      <p className="text-sm text-black pay">
                        <span className="text-[#787878]">Receive</span> CATICO
                      </p>
                    </div>
                    <div className="relative">
                      <input
                        type="number"
                        step="any"
                        className="flex justify-between items-center bg-[#F6F6F6] border border-[#787878] pr-8 pl-3 py-3 rounded-lg w-full text-black relative"
                        placeholder="0"
                      />
                      <Image
                        alt="CATICO"
                        src="/images/logo.svg"
                        className="absolute object-contain -translate-y-1/2 w-7 h-7 top-1/2 right-2"
                        width={28}
                        height={28}
                      />
                    </div>
                  </div>
                </div>
                <div className="grid items-center gap-2 lg:grid-cols-2">
                  <button className="btn-donate">Connect Wallet</button>
                  <button type="button" className="btn-donate">
                    Referral
                  </button>
                </div>
              </form>
            </div>
            <a
              href="https://catico.io"
              target="_blank"
              className="inline-flex items-center pt-2 space-x-1"
            >
              <span>Listing Price</span>
              <Image
                src="/images/chains/xbinance.png"
                alt="binance"
                width={16}
                height={16}
              />
              <Image
                src="/images/chains/xcoinbase.png"
                alt="coinbase"
                width={16}
                height={16}
              />
              <Image
                src="/images/chains/xbybit.jpg"
                alt="bybit"
                width={16}
                height={16}
              />
              <Image
                src="/images/chains/xbitget.png"
                alt="bitget"
                width={16}
                height={16}
              />
              <Image
                src="/images/chains/xgate.png"
                alt="gate"
                width={16}
                height={16}
              />
              <Image
                src="/images/chains/xmexc.png"
                alt="mexc"
                width={16}
                height={16}
              />
              <span>$0.09 ~ $0.21</span>
            </a> */}
          <NetworkSelection />
        </div>
      </div>
    </div>
  );
};

export default Hero;
