import Image from "next/image";
import React from "react";

const OmgProject = () => {
  return (
    <div className="text-white self-center w-full max-w-[1280px] flex flex-col gap-5 items-center">
      <Image src={"/assets/omg-project.svg"} height={250} width={250} alt="" />
      <h1 className="font-bold text-3xl md:text-4xl text-white text-center mb-6">
        OMG Project
      </h1>
      <p className="max-w-[600px] w-full text-center self-center">
        This is a sample sentence to illustrate the description text area. It
        should provide a brief overview or description that is approximately 200
        characters long and relevant to the title and image above.
      </p>
    </div>
  );
};

export default OmgProject;
