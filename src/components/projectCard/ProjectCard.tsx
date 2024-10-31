"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { FadeUpAnimation } from "../../lib/aos/Animation";
import Link from "next/link";

const ProjectCard = ({
  name,
  image,
  type,
}: {
  _id: string;
  name: string;
  description: string;
  stack: string[];
  image?: StaticImageData[];
  type?: string;
}) => {
  FadeUpAnimation();

  const renameUrl = name.split(" ").join("");

  return (
    <Link
      href={`/project/${renameUrl}`}
      data-aos="zoom-in-up"
      data-aos-duration="400"
      className="group w-full relative shadow-sm overflow-hidden rounded-xl cursor-pointer bg-neutral-900 h-72"
    >
      <div className="w-full h-full absolute top-0 left-0 z-10 hover:bg-black hover:opacity-40 transition ease-in-out  "></div>
      <div className="w-full h-56 relative">
        {image?.slice(0, 1).map((pics, i: number) => (
          <Image
            key={i}
            src={pics}
            alt="project"
            fill={true}
            className="w-full h-full object-cover object-center"
          />
        ))}
      </div>
      <div className="px-4 pt-2 space-y-1">
        <h1 className="text-sm font-semibold capitalize">{name}</h1>
        <h1 className="text-xs font-semibold capitalize text-slate-400">
          {type}
        </h1>
      </div>
    </Link>
  );
};

export default ProjectCard;
