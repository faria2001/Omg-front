import Header from "./Components/Header";
// import LootBoxSlider from "./Components/lootboxSlider";
import Warrior from "./Components/OMGCoin";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center h-full p-4 pb-4 gap-1 font-[family-name:var(--font-geist-sans)]">
      {" "}
      <Header />
      {/* <LootBoxSlider /> */}
      <Warrior />
    </div>
  );
}
