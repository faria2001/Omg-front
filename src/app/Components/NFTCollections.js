import Image from "next/image";
import React from "react";

const NFTCollection = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background layers */}

      {/* Content container */}
      <div className="w-full max-w-[1101px] relative z-10 bg-gradient-to-b from-black/30 to-orange/5 rounded-[20px] backdrop-blur-md p-6">
        {/* Title with blur effect */}
        <div className="relative mb-10">
          <h1 className="text-[#ffdf20] text-4xl sm:text-5xl font-bold font-poppins text-center blur-sm opacity-50">
            NFT Collection
          </h1>
          <h1 className="text-[#ffdf20] text-4xl sm:text-5xl font-bold font-poppins text-center absolute top-0 left-0 w-full">
            NFT Collection
          </h1>
        </div>

        {/* Description */}
        <p className="text-white text-base sm:text-lg lg:text-xl font-bold font-poppins text-center mb-10 leading-relaxed px-4 sm:px-8">
          $OMGNFT aims to be a leading NFT marketplace within the OhMyGod
          ecosystem,
          <br />
          leveraging the popularity of OhMyGod characters and community. It will
          connect
          <br />
          creators and collectors, showcasing work in a<br />
          vibrant digital economy.
        </p>

        {/* NFT Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First NFT Card */}
          <div className="w-full h-[467px] bg-gradient-to-b from-white/30 to-white/5 rounded-[20px] backdrop-blur-md p-6 flex flex-col items-center border border-white/10 hover:border-orange-400/30 transition-all">
            <Image
              width={150}
              height={100}
              className="w-full max-w-[256px] h-56 rounded-[20px] object-cover mb-8 hover:scale-105 transition-transform duration-300"
              src="/videos/Nft1.webp"
              alt="OhMyGod 3D NFT"
              unoptimized
            />

            <h3 className="text-white text-lg font-bold font-poppins mb-4">
              OhMyGod 3D NFT
            </h3>
            <p className="text-white text-sm font-normal font-poppins text-center mb-8 leading-relaxed">
              To see the collection, click on the link below and enter Clash Of
              OhMyGod 3D NFT Collection On Opensea Marketplace.
            </p>
            <button className="w-full max-w-[256px] h-9 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-[30px] flex items-center justify-center hover:from-orange-500 hover:to-yellow-500 transition-all shadow-lg hover:shadow-orange-400/20">
              <span className="text-white text-sm font-bold font-poppins">
                See on OpenSea
              </span>
            </button>
          </div>

          {/* Second NFT Card */}
          <div className="w-full h-[467px] bg-gradient-to-b from-white/30 to-white/5 rounded-[20px] backdrop-blur-md p-6 flex flex-col items-center relative border border-white/10 hover:border-orange-400/30 transition-all">
            <div className="absolute -z-10 w-full max-w-[256px] h-9 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-[30px] blur-md opacity-70 bottom-6"></div>

            <Image
              width={150}
              height={100}
              className="w-full max-w-[256px] h-56 rounded-[20px] object-cover mb-8 hover:scale-105 transition-transform duration-300"
              src="/videos/Nft2.webp"
              alt="OhMyGod 3D NFT"
              unoptimized
            />

            <h3 className="text-white text-lg font-bold font-poppins mb-4">
              OhMyGod 3D NFT
            </h3>
            <p className="text-white text-sm font-normal font-poppins text-center mb-8 leading-relaxed">
              To see the collection, click on the link below and enter Clash Of
              OhMyGod 3D NFT Collection On Opensea Marketplace.
            </p>
            <button className="w-full max-w-[256px] h-9 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-[30px] flex items-center justify-center hover:from-orange-500 hover:to-yellow-500 transition-all shadow-lg hover:shadow-orange-400/20">
              <span className="text-white text-sm font-bold font-poppins">
                See on OpenSea
              </span>
            </button>
          </div>

          {/* Third NFT Card */}
          <div className="w-full h-[467px] bg-gradient-to-b from-white/30 to-white/5 rounded-[20px] backdrop-blur-md p-6 flex flex-col items-center border border-white/10 hover:border-orange-400/30 transition-all">
            <Image
              width={150}
              height={100}
              className="w-full max-w-[256px] h-56 rounded-[20px] object-cover mb-8 hover:scale-105 transition-transform duration-300"
              src="/videos/Nft3.webp"
              alt="OhMyGod 3D NFT"
              unoptimized
            />

            <h3 className="text-white text-lg font-bold font-poppins mb-4">
              OhMyGod 3D NFT
            </h3>
            <p className="text-white text-sm font-normal font-poppins text-center mb-8 leading-relaxed">
              To see the collection, click on the link below and enter Clash Of
              OhMyGod 3D NFT Collection On Opensea Marketplace.
            </p>
            <button className="w-full max-w-[256px] h-9 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-[30px] flex items-center justify-center hover:from-orange-500 hover:to-yellow-500 transition-all shadow-lg hover:shadow-orange-400/20">
              <span className="text-white text-sm font-bold font-poppins">
                See on OpenSea
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCollection;
