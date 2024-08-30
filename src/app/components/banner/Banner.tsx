import React from "react";

const Banner = () => {
  return (
    <div className="bg-violet-600 w-full p-6 md:p-12 text-center space-y-6 flex flex-col items-center justify-center">
      <p className="text-2xl font-semibold uppercase text-white">
        take your digital presence to the next level?
      </p>
      <p className="text-4xl md:text-6xl lg:text-7xl font-black uppercase text-white lg:text-justify md:w-2/3 ">
        Let’s start your digital business
      </p>
      <form className="flex md:w-2/3 my-12">
        <input
          type="email"
          className="p-2 border border-white bg-transparent text-md outline-none w-full focus:bg-violet-800"
        />
        <button
          type="submit"
          className="bg-white text-black text-sm capitalize font-semibold text-center w-36">
          <p className="w-full"> get started</p>
        </button>
      </form>
    </div>
  );
};

export default Banner;
