import Header from "./Components/Header";
import NFTCollection from "./Components/NFTCollections";
// import LootBoxSlider from "./Components/lootboxSlider";
import Warrior from "./Components/OMGCoin";
import OmgProject from "./Components/omgProject";
import Symbolism from "./Components/symbolism";
import Roadmap from "./Components/Roadmap";
import UniqueOmg from "./Components/uniqueOmg";

export default function Home() {
  return (
    // <div className="relative min-h-screen">
    // {/* Background Image */}
    // <div
    //   className="min-h-screen bg-[#1C1136]"
    //   style={{
    //     backgroundImage: "url('/bg.png')",
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-repeat"
    //   }}
    // >
    // <div className="grid items-center justify-items-center
    //  h-full p-4 pb-4 gap-6 font-[family-name:var(--font-geist-sans)]">
    <div
      className="relative min-h-screen bg-fixed grid w-full self-center items-center justify-items-center"
      style={{
        // backgroundImage: "url('/assets/omg-bg_Masked.svg')",
        backgroundImage: "url('/assets/omg-3.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <div
        className="min-h-screen flex bg-fixed items-center justify-items-center flex-col gap-6 w-full"
        style={{
          // backgroundImage: "url('/assets/omg-bg_Masked.svg')",
          backgroundImage: "url('/assets/omg-3.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      > */}{" "}
      <Header />
      {/* <LootBoxSlider /> */}
      <Warrior />
      <NFTCollection />
      <OmgProject />
      <UniqueOmg />
      {/* <Roadmap/> */}
      {/* <Symbolism /> */}
      {/* </div> */}
    </div>
  );
}
