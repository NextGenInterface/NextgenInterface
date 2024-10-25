"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { pics } from "./pics";

const Design = () => {
  return (
    <div className="columns-2 md:columns-3 w-full">
      {pics.map((pic: any, i: number) => (
        <Image
          key={i}
          src={pic}
          alt={pic}
          className="object-center object-contain w-full h-full rounded-md shadow-mb overflow-hidden bg-white mb-4"
        />
      ))}
    </div>
  );
};

export default Design;
