"use client";
import Header from "./Components/Header";
import NFTCollection from "./Components/NFTCollections";
import Warrior from "./Components/OMGCoin";
import OmgProject from "./Components/omgProject";
import Symbolism from "./Components/symbolism";
import UniqueOmg from "./Components/uniqueOmg";
import Tokenomics from "./Components/tokonomics";
import KycAudit from "./Components/kycAudit";
import Community from "./Components/community";
import Footer from "./Components/footer";
import Road from "./Components/road";
import { useEffect, useState } from "react";

// Optional: Add a loader component or use Tailwind spinner
const Loader = () => (
  <div className="w-screen h-screen flex items-center justify-center bg-[#6b9dca]">
    <div className="relative w-24 h-24">
      <div className="absolute inset-0 rounded-full border-4 border-t-[#fedc2f] border-b-transparent animate-spin"></div>
      <div className="absolute inset-2 rounded-full border-4 border-l-[#fedc2f] border-r-transparent animate-spin-slow"></div>
      <div className="absolute inset-4 bg-[#fedc2f] rounded-full shadow-xl shadow-yellow-300 animate-pulse" />
    </div>
  </div>
);

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/assets/omg-3.svg";
    img.onload = () => {
      setIsLoaded(true);
    };
  }, []);

  if (!isLoaded) return <Loader />;
  return (
    <div
      className="relative min-h-screen bg-fixed grid w-full gap-6 self-center items-center justify-items-center"
      style={{
        backgroundImage: "url('/assets/omg-3.svg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      {/* <LootBoxSlider /> */}
      <Warrior />
      <NFTCollection />
      <OmgProject />
      <UniqueOmg />
      <Symbolism />
      <Road />
      <Tokenomics />
      <KycAudit />
      <Community />
      <Footer />
      {/* </div> */}
    </div>
  );
}
