import Image from "next/image";
import React from "react";

const Community = () => {
  return (
    <div className="text-white justify-center bg-gradient-to-b from-[#529bd0]/30  to-white/30 items-center self-center flex flex-col gap-y-4 w-full p-6 text-center max-w-[1280px] min-h-[704px] backdrop-blur-lg  rounded-4xl border-primary">
      <div className="text-white self-center w-full max-w-[1280px] flex flex-col gap-5 items-center">
        <Image
          src={"/assets/omg-project-1.svg"}
          height={250}
          width={250}
          alt=""
        />
        <h2 className="text-[20px] font-semibold">Mission of OhMyGod Token</h2>
        <h1 className="font-bold text-3xl md:text-4xl text-white text-center mb-6">
          Join the <span className="text-[#ffdf20]">OhMyGod</span> Community{" "}
        </h1>
        <p className="max-w-[818px] w-full text-center self-center">
          Join the great OhMyGod community and benefit from its countless
          benefits. We have planned many prizes and facilities for our army.
        </p>
        <div className="flex flex-row gap-2 justify-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/ohmygodtoken?igsh=d3JpZnZmbzY4NTM1&utm_source=qr"
            className="cursor-pointer"
          >
            <Image src={"/icons/insta.svg"} height={30} width={30} alt="" />{" "}
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/profile.php?id=61574039830092"
            className="cursor-pointer"
          >
            <Image src={"/icons/fb.svg"} height={30} width={30} alt="" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://x.com/OhMyGodtoken"
            className="cursor-pointer"
          >
            <Image src={"/icons/twitter-2.svg"} height={30} width={30} alt="" />{" "}
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://youtube.com/@ohmygodtoken?si=2h7-A9VHBRkrPMDT"
            className="cursor-pointer"
          >
            <Image src={"/icons/yt.svg"} height={30} width={30} alt="" />{" "}
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.tiktok.com/@bozzevents?_t=ZP-8vD2H4QBZAV&_r=1"
            className="cursor-pointer"
          >
            <Image src={"/icons/tiktok.svg"} height={30} width={30} alt="" />{" "}
          </a>
        </div>
      </div>{" "}
      <div className="grid text-black grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1000px] gap-3 w-full px-4">
        <div className="rounded-2xl p-2 min-h-[323px] justify-center flex flex-col gap-2 bg-white text-center">
          <h1 className="text-xl font-bold mb-2">Claim your Free Airdrop</h1>
          <div className="text-sm min-h-[130px] text-center">
            The OhMyGod project airdrop aims to distribute $OMG tokens to the
            community, rewarding early supporters and increasing engagement.
            This initiative boosts awareness and participation in the OhMyGod
            ecosystem.
          </div>
          <button className="rounded-full text-white cursor-pointer max-w-[161px] p-1 w-full self-center bg-orange-400">
            <h1 className="border-2 rounded-full p-1 border-dashed border-white">
              CONTRIBUTE
            </h1>
          </button>
        </div>
        <div className="rounded-2xl p-2 min-h-[323px] justify-center flex flex-col gap-2 bg-white text-center">
          <h1 className="text-xl font-bold mb-2">
            Communities And Acquisition
          </h1>
          <div className="text-sm min-h-[130px] text-center">
            Membership in the OhMyGod community offers exclusive perks like
            early updates, special events, and token airdrops. Acquiring $OMG
            tokens allows members to participate in governance, earn rewards,
            and active ecosystem.
          </div>
          <button className="rounded-full cursor-pointer text-white max-w-[161px] p-1 w-full self-center bg-orange-400">
            <h1 className="border-2 rounded-full p-1 border-dashed border-white">
              JOIN IN SOCITIES
            </h1>
          </button>
        </div>
        <div className="rounded-2xl p-2 min-h-[323px] justify-center flex flex-col gap-2 bg-white text-center">
          <h1 className="text-xl font-bold mb-2"> Vote In Project Decisions</h1>
          <div className="text-sm min-h-[130px] text-center">
            Voting in OhMyGod project decisions allows $OMG token holders to
            directly influence the platform&apos;s future. This ensures that
            development aligns with community interests, fostering a democratic
            and engaged ecosystem.
          </div>
          <button className="rounded-full text-white cursor-pointer max-w-[161px] p-1 w-full self-center bg-orange-400">
            <h1 className="border-2 rounded-full p-1 border-dashed border-white">
              {" "}
              MAJORITY VOTE
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;
