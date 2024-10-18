import React from "react";
import BlurGradientBackground from "../blurGradientBackground/BlurGradientBackground";
import { IoIosArrowRoundForward } from "react-icons/io";
import Button from "../utils/button/Button";

const Hero = () => {
  return (
    <div className="w-full px-4 md:px-0 h-[100vh] md:h-[100vh] flex flex-col justify-center items-center relative">
      <div className="relative flex flex-col items-center justify-center text-center w-2/3">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          Creativity
          <span className="bg-gradient-to-tl from-purple-800 via-purple-400 to-blue-700 inline-block text-transparent bg-clip-text">
            &
          </span>
          Functionality.
        </h1>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          Transforming Ideas into Digital Masterpieces
        </h1>
        <br />
        <p className="text-center w-full  text-md md:text-xl text-neutral-700 dark:text-slate-400  ">
          Web Developer & Designer dedicated to bringing your ideas to life.
          With a keen eye for design and a knack for coding, creating stunning
          websites and graphics that not only look good but also perform
          exceptionally.
        </p>
        <div className="mt-6 z-10">
          <Button
            title=" Contact us"
            link="/contact"
            icon={<IoIosArrowRoundForward className="text-xl" />}
          />
        </div>
      </div>
      <div className="absolute -bottom-60 w-full h-[80vh] bg-[url('/images/codeing.webp')] bg-cover bg-center -z-20 mix-blend-exclusion opacity-20 dark:mix-blend-color-dodge dark:opacity-100">
        <div className="absolute w-full h-full bg-gradient-to-b from-black via-transparent to-black dark:from-dark-background dark:via-transparent dark:to-dark-background"></div>
      </div>
    </div>
  );
};

export default Hero;
