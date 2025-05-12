import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import { BentoGridItem } from "./ui/bento-grid";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const Experience = () => {
  return (
    <div className="py-20 w-full md:px-20">
      <h1 className="heading text-white text-center text-xl md:text-5xl font-semibold">
        My <span className="text-purple-400 font-poppins">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10 justify-center items-center px-4 ">
        {workExperience.map((card) => (
          <HoverBorderGradient
            duration={1.5}
            key={card.id}
            containerClassName="rounded-4xl w-full"
            className="bg-[linear-gradient(90deg,_rgba(4,7,29,1)_0%,_rgba(12,14,35,1)_100%)] bg-white text-black dark:text-white flex items-center space-x-2 "
            style={{
              background: "rgb(4,7,29)",
              backgroundImage:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            <div className="md:flex md:flex-row   md:p-5 lg:p-8 2xl:p-10 gap-2 hidden w-full">
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
            <div className="items-center justify-center md:hidden w-full px-1 py-4">
              <div className=" flex flex-row  justify-center items-center w-full mb-4">
                <img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className="lg:w-32 md:w-20 w-16"
                />
                <p className="font-poppins font-semibold text-xl text-start ml-6">
                  {card.title}
                </p>
              </div>
              <p className="font-poppins text-start w-full">{card.desc}</p>
            </div>
          </HoverBorderGradient>
        ))}
      </div>
    </div>
  );
};

export default Experience;
