import React from 'react';

const Roadmap = () => {
  return (
    <div className="w-[1112px] h-[1836px] relative mx-auto">
      {/* Main container with gradient background */}
      <div className="w-[1112px] h-[1836px] left-0 top-0 absolute">
        <div className="w-[1112px] h-[1836px] left-0 top-0 absolute bg-gradient-to-b from-white/10 to-white/5 rounded-[20px] outline outline-1 outline-amber-500 backdrop-blur-lg" />
        
        {/* Phase cards */}
        <div className="w-[640px] h-96 left-[401px] top-[270px] absolute bg-white rounded-[30px]" />
        <div className="w-[640px] h-96 left-[401px] top-[1047px] absolute bg-white rounded-[30px]" />
        <div className="w-[640px] h-96 left-[108px] top-[656px] absolute bg-white rounded-[30px]" />
        <div className="w-[640px] h-80 left-[108px] top-[1438px] absolute bg-white rounded-[30px]" />

        {/* Phase 1 content */}
        <div className="left-[454px] top-[302px] absolute justify-start">
          <span className="text-orange-500 text-lg font-bold font-poppins">Completion of Smart Contract Audit:</span>
          <span className="text-black text-base font-bold font-poppins block">Secured the PURRCOIN token and PURRCOIN platform.</span>
          <span className="text-orange-500 text-lg font-bold font-poppins block mt-4">Website Launch:</span>
          <span className="text-black text-lg font-bold font-poppins block">Introduced the official PURRCOIN site with project info, team details, and roadmap.</span>
          <span className="text-orange-500 text-lg font-bold font-poppins block mt-4">Community Building:</span>
          <span className="text-black text-lg font-bold font-poppins block">Started social media campaigns, AMA sessions, and contests to grow the PURRCOIN community.</span>
          <span className="text-orange-500 text-lg font-bold font-poppins block mt-4">Presale Launch:</span>
          <span className="text-black text-lg font-bold font-poppins block">Began the PURRCOIN token presale for early investors.</span>
          <span className="text-orange-500 text-lg font-bold font-poppins block mt-4">Exchange Listings:</span>
          <span className="text-black text-lg font-bold font-poppins block">Secured major exchange listings to boost PURR'S liquidity and accessibility.</span>
        </div>

        {/* Phase 2 content */}
        <div className="left-[144px] top-[704px] absolute justify-start">
          <span className="text-orange-500 text-lg font-bold font-poppins">PurrNFT Marketplace Launch:</span>
          <span className="text-black text-lg font-bold font-poppins block">Introduction of the PurrNFT marketplace, allowing users to create, buy, sell, and trade unique PurrCoin-themed digital art and collectibles.</span>
          <span className="text-orange-500 text-lg font-bold font-poppins block mt-4">PurrCoin Chain Bridge Development:</span>
          <span className="text-black text-lg font-bold font-poppins block">Initiation of the development of the PurrCoin Chain Bridge.</span>
          <span className="text-orange-500 text-lg font-bold font-poppins block mt-4">Marketing and Partnerships:</span>
          <span className="text-black text-lg font-bold font-poppins block">Expansion of marketing efforts and establishment of strategic partnerships with other projects and influencers in the DeFi space.</span>
          <span className="text-orange-500 text-lg font-bold font-poppins block mt-4">PurrSwap Beta Launch:</span>
          <span className="text-black text-lg font-bold font-poppins block">Released a beta version of the PurrSwap DEX for community testing and feedback</span>
        </div>

        {/* Phase 3 content */}
        <div className="left-[441px] top-[1083px] absolute justify-start">
          <span className="text-orange-500 text-lg font-bold font-poppins">PURRCOIN AI Research and Development:</span>
          <span className="text-black text-lg font-bold font-poppins block">Begin research and development of the PURRCOIN AI component, exploring potential applications such as predictive analytics and personalized NFT recommendations.</span>
          <span className="text-orange-500 text-lg font-bold font-poppins block mt-4">PurrStake Implementation:</span>
          <span className="text-black text-lg font-bold font-poppins block">Launch of the PurrStake mechanism, allowing users to earn rewards by staking PURRCOIN tokens and contributing to network security.</span>
          <span className="text-orange-500 text-lg font-bold font-poppins block mt-4">Community Governance:</span>
          <span className="text-black text-lg font-bold font-poppins block">Introduction of community governance features, empowering PURRCOIN holders to vote on proposals and influence the future direction of the project.</span>
        </div>

        {/* Phase 4 content */}
        <div className="w-[589px] left-[144px] top-[1474px] absolute justify-start">
          <span className="text-orange-500 text-lg font-bold font-poppins">PurrVerse Expansion:</span>
          <span className="text-black text-lg font-bold font-poppins block">Continued development and expansion of the PurrCoin ecosystem, introducing new features, functionalities, and partnerships.</span>
          <span className="text-orange-500 text-lg font-bold font-poppins block mt-4">PURRCOIN AI Integration:</span>
          <span className="text-black text-lg font-bold font-poppins block">Integration of PURRCOIN AI into the PURRCOIN platform, enhancing user experience and providing innovative solutions.</span>
          <span className="text-orange-500 text-lg font-bold font-poppins block mt-4">Global Adoption:</span>
          <span className="text-black text-lg font-bold font-poppins block">Focus on achieving global recognition and adoption of PurrCoin as a leading meme coin project with a thriving community and innovative ecosystem</span>
        </div>

        {/* Phase labels */}
        <div className="left-[267px] top-[431px] absolute justify-start text-white text-2xl font-bold font-poppins">Phase 1</div>
        <div className="left-[267px] top-[1208px] absolute justify-start text-white text-2xl font-bold font-poppins">Phase 3</div>
        <div className="left-[785px] top-[831px] absolute justify-start text-white text-2xl font-bold font-poppins">Phase 2</div>
        <div className="left-[785px] top-[1576px] absolute justify-start text-white text-2xl font-bold font-poppins">Phase 4</div>

        {/* Phase icons */}
        <img className="w-28 h-28 left-[108px] top-[395px] absolute rounded-full" src="https://placehold.co/108x108" alt="Phase 1" />
        <img className="w-28 h-28 left-[108px] top-[1174px] absolute rounded-full" src="https://placehold.co/108x108" alt="Phase 3" />
        <img className="w-28 h-28 left-[921px] top-[796px] absolute rounded-full" src="https://placehold.co/108x108" alt="Phase 2" />
        <img className="w-28 h-28 left-[921px] top-[1541px] absolute rounded-full" src="https://placehold.co/108x108" alt="Phase 4" />
      </div>

      {/* Title section */}
      <div className="left-[198px] top-[40px] absolute text-center justify-start">
        <h1 className="text-white text-5xl font-bold font-poppins">
          <span className="text-white">R</span>
          <span className="text-orange-500">O</span>
          <span className="text-white">A</span>
          <span className="text-orange-500">D</span>
          <span className="text-white"> M</span>
          <span className="text-orange-500">A</span>
          <span className="text-white">P</span>
        </h1>
        <p className="text-white text-xl font-bold font-poppins mt-4">
          Launching website, community engagement, token utility integration,<br />
          exchange listings, expanding partnerships, and global adoption.
        </p>
      </div>
    </div>
  );
};

export default Roadmap;
