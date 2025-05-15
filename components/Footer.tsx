"use client";
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import { SparklesCore } from "./ui/sparkles";
import { FloatingContact } from "./Contact";

const Footer = () => {
  return (
    <div className=" relative w-full bg-black-100 flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="absolute w-full h-full z-10 bg-gradient-to-b from-black-100 via-transparent to-black"></div>

      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <footer className="w-full  md:pt-20 pb-5 z-20" id="contact">
        {/* background grid */}

        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw] text-sm md:text-3xl text-center text-gray-300 font-poppins">
            Ready to take{" "}
            <span className="text-blue-500 font-poppins">your</span> digital
            presence to the next level?
          </h1>
          <p className="text-white-200 md:mt-10 md:text-xl my-5 text-center px-2 text-gray-300 font-poppins">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>
          <a href="mailto:">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
        <div className="flex mt-16 md:flex-row flex-col-reverse justify-center md:justify-between items-center">
          <p className="md:text-base text-sm md:font-normal text-center font-light text-white md:ml-4 font-poppins">
            Copyright © 2025 Isuru kavinda
          </p>

          <FloatingContact />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
