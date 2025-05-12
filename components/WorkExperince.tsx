import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import { BentoGridItem } from "./ui/bento-grid";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const Experience = () => {
  return (
    <div className="py-20 w-full px-20">
      <h1 className="heading text-white text-center text-xl md:text-5xl font-semibold">
        My <span className="text-purple-400 font-poppins">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <HoverBorderGradient
            duration={1.5}
            key={card.id}
            containerClassName="rounded-4xl "
            className="bg-[linear-gradient(90deg,_rgba(4,7,29,1)_0%,_rgba(12,14,35,1)_100%)] bg-white text-black dark:text-white flex items-center space-x-2"
            style={{
              background: "rgb(4,7,29)",
              backgroundImage:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            <div className="flex lg:flex-row flex-col p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />

              <BentoGridItem
                className="md:col-span-2"
                title={card.title}
                description={card.desc}
              />
            </div>
          </HoverBorderGradient>
        ))}
      </div>
    </div>
  );
};

export default Experience;
