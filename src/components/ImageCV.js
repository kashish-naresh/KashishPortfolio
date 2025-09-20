import React from "react";
import data from "../data.json";

// Skills Component (unchanged but will be used in responsive layout)
const Skills = () => {
  return data.skills.map((cat, index) => (
    <div key={index} className="loop-slider">
      <div
        className="inner flex w-fit animate-loop"
        style={{
          "--duration": "15000ms",
          "--direction": index % 2 === 0 ? "normal" : "reverse",
        }}
      >
        {[...cat.items, ...cat.items].map((item, i) => (
          <div
            key={i}
            className="tag flex items-center bg-[#ededed] text-slate-950 text-sm font-medium opacity-70 rounded-md px-2 fit py-1 mr-1"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  ));
};

// Updated ImageCV Component with responsive classes
const ImageCV = () => {
  return (
    <div className="lg:absolute lg:right-36 mt-20 lg:top-36 flex flex-wrap flex-col place-self-center gap-3 px-4 sm:px-0 lg:mt-0 ">
      <div className="flex flex-row justify-center items-center gap-4 ">
        <img
          src="https://cdn.pixabay.com/photo/2025/08/07/20/52/lighthouse-9761567_1280.png"
          alt=""
          className=" objext-cover w-40 h-40  md:object-fill md:h-60 md:w-60  rounded-xl"
        />
        <img
          src="https://cdn.pixabay.com/photo/2025/08/25/19/36/arch-9796796_1280.jpg"
          alt=""
          className="  object-cover w-40 h-40 md:object-fill md:h-60 md:w-60   rounded-xl"
        />
      </div>
      <div className="row-span-1 col-span-1 sm:col-span-2 rounded-xl font-normal text-sm flex flex-col justify-center items-center mt-4">
        <b>Skills / Familiarity / Expertise</b>
        <div className="tag-list relative flex flex-col gap-3 py-3 overflow-hidden w-full max-w-[90vw] sm:w-[30rem]">
          <Skills />
          <div className="fade bg-[linear-gradient(90deg,#ffffff,transparent_20%,transparent_80%,#ffffff)] absolute inset-0 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default ImageCV;
