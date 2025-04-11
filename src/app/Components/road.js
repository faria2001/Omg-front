import Image from "next/image";
import React from "react";

const Road = () => {
  return (
    <div
      id="roadmap"
      className="max-w-[1280px] w-full min-h-[1836px] p-6 bg-gradient-to-b  rounded-[20px] flex gap-5 flex-col backdrop-blur-lg"
    >
      <div className="text-center max-w-[726px] self-center text-white text-4xl min-h-[156px] sm:text-5xl font-bold w-full">
        <span>R</span>
        <span className="text-[#ffdf20]">O</span>
        <span>A</span>
        <span className="text-[#ffdf20]">D</span>
        <span>M</span>
        <span className="text-[#ffdf20]">A</span>
        <span>P</span>
        <p className="mt-5 text-base">
          Launching website, community engagement, token utility integration,
          exchange listings, expanding partnerships, and global adoption.
        </p>
      </div>
      {/* 1st */}
      <div className="flex text-black justify-center items-center w-full lg:flex-row flex-col gap-5">
        <Image
          width={80}
          height={80}
          className=""
          src="/assets/omg-7-3.svg"
          alt="Phase 1"
        />{" "}
        <div className="mr-4 font-bold text-[#ffdf20] text-xl">Phase 1</div>
        <div className="max-w-[640px] relative p-2 items-center justify-center self-center flex rounded-3xl w-full bg-white min-h-[362px]">
          <div className="absolute lg:flex hidden -left-6">
            <Image
              width={30}
              height={30}
              className=""
              src="/icons/Polygon-1.svg"
              alt="Phase 1"
            />
          </div>
          <div className="max-w-[584px]  w-full flex self-center justify-center items-center">
            <ul className="list-disc ml-3 space-y-2">
              <li>
                <strong className="text-[#ff7a29]">
                  Completion of Smart Contract Audit:{" "}
                </strong>
                Secured the OhMyGod token and OhMyGod platform.
              </li>
              <li>
                <strong className="text-[#ff7a29]">Website Launch: </strong>
                Introduced the official OhMyGod site with project info, team
                details, and roadmap.
              </li>
              <li>
                <strong className="text-[#ff7a29]">Community Building: </strong>
                Started social media campaigns, AMA sessions, and contests to
                grow the OhMyGod community.
              </li>
              <li>
                <strong className="text-[#ff7a29]">Presale Launch: </strong>
                Began the OhMyGod token presale for early investors.
              </li>
              <li>
                <strong className="text-[#ff7a29]">Exchange Listings: </strong>
                Secured major exchange listings to boost OMG&apos;s liquidity
                and accessibility.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="flex  text-black justify-center items-center w-full flex-col lg:flex-row gap-5">
        <div className="mr-4 lg:hidden flex font-bold text-[#ffdf20] text-xl">
          Phase 2
        </div>
        <Image
          width={80}
          height={80}
          className="lg:hidden flex"
          src="/assets/omg-7-slider-2.svg"
          alt="Phase 1"
        />{" "}
        <div className="max-w-[640px] relative p-2 items-center justify-center self-center flex rounded-3xl w-full bg-white min-h-[362px]">
          <div className="absolute lg:flex hidden -right-6">
            <Image
              width={30}
              height={30}
              className=""
              src="/icons/Polygon-2.svg"
              alt="Phase 1"
            />
          </div>

          <div className="max-w-[584px]  w-full flex self-center justify-center items-center">
            <ul className="list-disc ml-3 space-y-2">
              <li>
                <strong className="text-[#ff7a29]">
                  OMGNFT Marketplace Launch: {""}
                </strong>
                Introduction of the OMGNFT marketplace, allowing users to
                create, buy, sell, and trade unique OH MY GOD-themed digital art
                and collectibles.
              </li>
              <li>
                <strong className="text-[#ff7a29]">
                  OhMyGod Chain Bridge Development:{" "}
                </strong>
                Initiation of the development of the OMGCross Chain Bridge.
              </li>
              <li>
                <strong className="text-[#ff7a29]">
                  Marketing and Partnerships:{" "}
                </strong>
                Expansion of marketing efforts and establishment of strategic
                partnerships with other projects and influencers in the DeFi
                space.
              </li>
              <li>
                <strong className="text-[#ff7a29]">
                  OMGStake Implementation:{" "}
                </strong>
                Launch of the OMGStake mechanism,allowing users to earn rewards
                by staking OMG tokens and contributing to network security.
              </li>
            </ul>
          </div>
        </div>
        <div className="ml-4 lg:flex hidden font-bold text-[#ffdf20] text-xl">
          Phase 2
        </div>
        <Image
          width={80}
          height={80}
          className="lg:flex hidden"
          src="/assets/omg-7-slider-2.svg"
          alt="Phase 1"
        />{" "}
      </div>
      {/* 3 */}
      <div className="flex text-black justify-center items-center w-full flex-col lg:flex-row gap-5">
        <Image
          width={80}
          height={80}
          className=""
          src="/assets/omg-7-3.svg"
          alt="Phase 1"
        />{" "}
        <div className="mr-4 font-bold text-[#ffdf20] text-xl">Phase 3</div>
        <div className="max-w-[640px] relative p-2 items-center justify-center self-center flex rounded-3xl w-full bg-white min-h-[362px]">
          <div className="absolute lg:flex hidden -left-6">
            <Image
              width={30}
              height={30}
              className=""
              src="/icons/Polygon-1.svg"
              alt="Phase 1"
            />
          </div>
          <div className="max-w-[584px]  w-full flex self-center justify-center items-center">
            <ul className="list-disc ml-3 space-y-2">
              <li>
                <strong className="text-[#ff7a29]">
                  OH MY GOD Game and Development play to earn:{" "}
                </strong>
                Begin research and development of the Game Component, exploring
                potential applications such as predictive analytics and
                personalized NFT recommendations.
              </li>
              <li>
                <strong className="text-[#ff7a29]">
                  OMGSwap Beta Launch: {""}{" "}
                </strong>
                Released a beta version of the OMGSwap DEX for community testing
                and feedback.
              </li>
              <li>
                <strong className="text-[#ff7a29]">
                  {" "}
                  Community Governance: {""}{" "}
                </strong>
                Introduction of community governance features, empowering OMG
                holders to vote on proposals and influence the future direction
                of the project
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* 4 */}
      <div className="flex text-black justify-center items-center w-full flex-col lg:flex-row gap-5">
        <div className="ml-4 lg:hidden flex font-bold text-[#ffdf20] text-xl">
          Phase 4
        </div>
        <Image
          width={80}
          height={80}
          className="lg:hidden flex"
          src="/assets/omg-7-slider-2.svg"
          alt="Phase 1"
        />{" "}
        <div className="max-w-[640px] relative p-2 items-center justify-center self-center flex rounded-3xl w-full bg-white min-h-[362px]">
          <div className="absolute lg:flex hidden -right-6">
            <Image
              width={30}
              height={30}
              className=""
              src="/icons/Polygon-2.svg"
              alt="Phase 1"
            />
          </div>
          <div className="max-w-[584px]  w-full flex self-center justify-center items-center">
            <ul className="list-disc ml-3 space-y-2">
              <li>
                <strong className="text-[#ff7a29]">OMGVerse Expansion: </strong>
                Continued development and expansion of the OH MY GOD ecosystem,
                introducing new features, functionalities, and partnerships.
              </li>
              <li>
                <strong className="text-[#ff7a29]">
                  OMG GAME Integration:{" "}
                </strong>
                Integration of OMG GAME into the OMG platform, enhancing user
                experience and providing innovative solutions.
              </li>
              <li>
                <strong className="text-[#ff7a29]">Global Adoption: </strong>
                Focus on achieving global recognition and adoption of OH MY GOD
                as a leading meme coin project with a thriving community and
                innovative ecosystem
              </li>
            </ul>
          </div>
        </div>
        <div className="ml-4 lg:flex hidden font-bold text-[#ffdf20] text-xl">
          Phase 4
        </div>
        <Image
          width={80}
          height={80}
          className="lg:flex hidden"
          src="/assets/omg-7-slider-2.svg"
          alt="Phase 1"
        />{" "}
      </div>
    </div>
  );
};

export default Road;
