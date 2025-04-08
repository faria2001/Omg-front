import Image from "next/image";
import React from "react";

const Symbolism = () => {
  return (
    <div className="text-black justify-center items-center  self-center grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-24 w-full p-6 text-center max-w-[1280px] min-h-[573px] bg-gradient-to-b from-[#529bd0]/60  to-white/60 shadow-lg backdrop-blur-lg rounded-4xl">
      <div className="flex flex-col gap-2 justify-center items-center">
        <div
          className="max-w-[584px] flex flex-col lg:flex-row items-center gap-4 justify-center text-start w-full rounded-2xl bg-white p-4 shadow-lg"
          style={{
            // backgroundImage: "url('/assets/omg-bg_Masked.svg')",
            backgroundImage: "url('/assets/omg-bg-blur.svg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="max-w-[100px] w-full">
            <Image
              width={110}
              height={110}
              className="rounded-full"
              src="/assets/symbol-1.svg"
              alt="Phase 1"
            />
          </div>
          <div className="">
            <h3 className="text-xl font-bold mb-2">Transaction Fees</h3>
            <p>
              OhMyGod will be used to pay for transactions on the CatiSwap DEX,
              driving demand for the token.
            </p>
          </div>
        </div>
        <div
          className="max-w-[584px] flex flex-col lg:flex-row items-center gap-4 justify-center text-start w-full rounded-2xl bg-white p-4 shadow-lg"
          style={{
            // backgroundImage: "url('/assets/omg-bg_Masked.svg')",
            backgroundImage: "url('/assets/omg-bg-blur.svg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="max-w-[100px] w-full">
            <Image
              width={110}
              height={110}
              className="rounded-full"
              src="/assets/symbol-2.svg"
              alt="Phase 1"
            />
          </div>
          <div className="">
            <h3 className="text-xl font-bold mb-2">Staking Rewards</h3>
            <p>
              Users can earn OhMyGod rewards by staking their tokens,
              incentivizing long-term holding and network security.
            </p>
          </div>
        </div>
        <div
          className="max-w-[584px] flex flex-col lg:flex-row items-center gap-4 justify-center text-start w-full rounded-2xl bg-white p-4 shadow-lg"
          style={{
            // backgroundImage: "url('/assets/omg-bg_Masked.svg')",
            backgroundImage: "url('/assets/omg-bg-blur.svg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="max-w-[100px] w-full">
            <Image
              width={110}
              height={110}
              className="rounded-full"
              src="/assets/symbol-3.svg"
              alt="Phase 1"
            />
          </div>
          <div className="col-span-2">
            <h3 className="text-xl font-bold mb-2">Governance</h3>
            <p>
              OhMyGod holders will have the power to vote on proposals and
              influence the future direction of the project.
            </p>
          </div>
        </div>
      </div>
      <div className="flex max-w-[570px] w-full flex-col justify-center gap-3 items-start text-start">
        <h2 className="text-3xl text-white font-bold mb-4">
          The Symbolism Behind <span className="text-[#ffdf20]">OhMyGod</span>
        </h2>
        <p className="mb-4 text-[16px] font-semibold">
          OhMyGod is more than just a meme coin; it&apos;s a symbol of
          imagination, joy, and the boundless potential of blockchain
          technology. The horned cat, or &quot;OhMyGod&quot;, represents a
          fusion of two beloved creatures: the graceful cat and the mythical
          unicorn. This whimsical combination embodies the project&apos;s core
          values:
        </p>
        <ul className="list-disc list-inside">
          <li className="mb-1">
            <strong className="text-[#ffdf20]">Creativity:</strong> OhMyGod
            encourages creative expression through NFTs, fostering a community
            where artists and collectors can thrive.
          </li>
          <li className="mb-1">
            <strong className="text-[#ffdf20]">Optimism:</strong> The
            unicorn&apos;s association with dreams and positivity aligns with
            OhMyGod&apos;s vision for a brighter, decentralized future.
          </li>
          <li className="mb-1">
            <strong className="text-[#ffdf20]">Uniqueness:</strong> Just as each
            OhMyGod is one-of-a-kind, OhMyGod aims to stand out in the crowded
            DeFi landscape with innovative features and a dedicated community.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Symbolism;
