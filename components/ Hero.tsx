import React from "react";

import { cn } from "@/lib/utils";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import MagicButton from "./ui/MagicButton";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
  return (
    <BackgroundBeamsWithCollision>
      <div className="pb-40 pt-46  w-full ">
        <div className=" flex flex-col  h-full absolute  top-0 left-0 items-center justify-center bg-transparent w-full">
          <div
            className={cn(
              "absolute inset-3 top-0 h-full",
              "[background-size:90px_90px] ",
              "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
            )}
          />
          {/* Radial gradient for the container to give a faded look */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)] dark:bg-black-100"></div>
        
            
            <TextGenerateEffect
              duration={2}
              filter={false}
              className="text-4xl text-center z-10 mt-8 px-4"
              words={
                "Turn Ideas Into Experiences — Not Just Things You See, But Things You Feel And Enjoy Using."
              }
            />
            
        
          <p className="text-white md:text-2xl z-10 pt-8">
            Hi! I&apos;m Isuru Kavi , a Full stack mobile developer
          </p>
          <div className="my-8">
            <MagicButton />
          </div>
        </div>
      </div>
     </BackgroundBeamsWithCollision>
  );
};

export default Hero;
