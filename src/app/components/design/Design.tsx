"use client";
import React from "react";
import Image from "next/image";
import { pics } from "./pics";

const Design = () => {
  return (
    <div>
      <div className="columns-2 md:columns-3 w-full">
        {pics.map((pic: any) => (
          <Image
            src={pic}
            alt={pic}
            className="object-cover object-contains w-full h-full rounded-md shadow-mb overflow-hidden bg-white mb-4"
            unoptimized
          />
        ))}
      </div>
    </div>
  );
};

export default Design;
