import React from "react";
import { GlareCard } from "./ui/glare-card";
import { myProjects } from "@/data";
import { BackgroundGradient } from "./ui/background-gradient";

function MyProject() {
  return (
    <div className="mt-12 md:mt-16 justify-center  mx-auto ">
      <h2 className="text-white text-center text-2xl md:text-4xl font-semibold mb-10 font-poppins">
        My Project
      </h2>
      <div className="sm:grid hidden sm:grid-cols-2  lg:grid-cols-3 gap-12 justify-center items-center">
        {myProjects.map((item) => (
          <div key={item.id} className=" ">
            <GlareCard
              key={item.id}
              className="flex flex-col items-start justify-end py-8 px-6 "
            >
              <p className="font-bold text-white text-lg font-poppins">
                {item.title}
              </p>
              <p className="font-normal text-base text-neutral-200 mt-4 font-poppins">
                {item.desc}
              </p>
            </GlareCard>
          </div>
        ))}
      </div>
      <div className="justify-center items-center   gap-12 sm:hidden">
        {myProjects.map((item) => (
          <div key={item.id} className="my-8 px-4">
            <BackgroundGradient
              key={item.id}
              className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900"
            >
              <p className="font-bold text-white text-lg font-poppins">
                {item.title}
              </p>
              <p className="font-normal text-base text-neutral-200 mt-4 font-poppins ">
                {item.desc}
              </p>
            </BackgroundGradient>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProject;
