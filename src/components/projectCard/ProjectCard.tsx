"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { FadeUpAnimation } from "../../app/lib/aos/Animation";
import Link from "next/link";

const ProjectCard = ({
  name,
  description,
  stack,
  image,
  type,
}: {
  _id: string;
  name: string;
  description: string;
  stack: string[];
  image?: any | StaticImageData[];
  type?: string;
}) => {
  FadeUpAnimation();

  const renameUrl = name.split(" ").join("");

  return (
    <Link
      href={`/project/${renameUrl}`}
      data-aos="zoom-in-up"
      data-aos-duration="400"
      className="group w-full relative shadow-sm overflow-hidden rounded-xl cursor-pointer bg-neutral-900 h-72">
      <div className="w-full h-full absolute top-0 left-0 z-10 hover:bg-black hover:opacity-40 transition ease-in-out  "></div>
      {/* <article className="group:active:scale-95 group-hover:bg-[#1b1b1b] flex overflow-hidden "> */}
      <div className="w-full h-56 relative">
        {image?.slice(0, 1).map((pics: any, i: number) => (
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
      {/* <div className="flex flex-col flex-1 text-left p-8"> */}
      {/* <p className="text-sm font-light mt-1 mb-6">
            {description?.substring(0, 100)}...
          </p> */}
      {/* <div className="flex flex-wrap gap-1">
            {stack?.slice(0, 3).map((item: string, i: number) => (
              <span
                key={i}
                className="uppercase text-light-text dark:text-dark-text bg-neutral-300 dark:bg-dark-background text-xs p-1 rounded-full px-4">
                {item}
              </span>
            ))}
            <small> ... more</small>
          </div> */}
      {/* </div> */}
      {/* <div className=" w-full flex-1">
          <div className="w-full h-full relative top-8 rounded-tl-md overflow-hidden group-hover:-rotate-3 group-hover:scale-105 ease-in-out duration-200 shadow-xl shadow-neutral-600 dark:shadow-neutral-900">
            {image?.slice(0, 1).map((pics: any, i: number) => (
              <Image
                key={i}
                src={pics}
                alt="project"
                fill={true}
                className="w-full h-full object-cover object-center rounded-md "
                unoptimized
              />
            ))}
          </div>
        </div> */}
      {/* </article> */}
    </Link>
  );
};

export default ProjectCard;
