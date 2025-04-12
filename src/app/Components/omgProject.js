import Image from "next/image";
import React from "react";

const OmgProject = () => {
  return (
    <div
      id="about"
      className="text-white self-center w-full max-w-[1280px] flex flex-col gap-5 items-center"
    >
      <Image
        src={"/assets/omg-project-1.svg"}
        height={250}
        width={250}
        alt=""
      />
      <h1 className="font-bold text-3xl md:text-4xl text-white text-center mb-6">
        OMG Project
      </h1>
      <p className="max-w-[600px] font-bold  w-full text-center self-center">
        Oh My God is – a guy who accidentally wins everything possible. Buys a
        token as a joke – gets a Lamborghini. Opens a mystery box on a stream –
        finds a million dollars inside. Permanently in shock from his own luck,
        screaming “OH MY GOD” and having no idea what&apos;s going on.
      </p>
    </div>
  );
};

export default OmgProject;
