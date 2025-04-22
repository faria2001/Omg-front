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

export default function Home() {
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
