import React from "react";
import { GlareCard } from "./ui/glare-card";
import { myProjects } from "@/data";

function MyProject() {
  return (
    <div className="mt-12 md:mt-16 justify-center  mx-auto">
      <h2 className="text-white text-center text-2xl md:text-4xl font-semibold mb-10">
        My Project
      </h2>
      <div className="justify-center items-center md:flex md:flex-row gap-12 ">
        {myProjects.map((item) => (
          <div key={item.id} className="my-8">
            <GlareCard
              key={item.id}
              className="flex flex-col items-start justify-end py-8 px-6 "
            >
              <p className="font-bold text-white text-lg">{item.title}</p>
              <p className="font-normal text-base text-neutral-200 mt-4">
                {item.desc}
              </p>
            </GlareCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProject;
