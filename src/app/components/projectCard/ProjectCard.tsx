"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { FadeUpAnimation } from "../../lib/aos/Animation";
import Link from "next/link";

const ProjectCard = ({
  name,
  description,
  stack,
  image,
}: {
  _id: string;
  name: string;
  description: string;
  stack: string[];
  image?: any | StaticImageData[];
}) => {
  FadeUpAnimation();

  const renameUrl = name.split(" ").join("");

  return (
    <Link
      href={`/project/${renameUrl}`}
      data-aos="zoom-in-up"
      data-aos-duration="600"
      className="group w-full relative shadow-sm shadow-neutral-300 overflow-hidden dark:shadow-neutral-950 rounded-lg">
      <article className="bg-light-foreground group-hover:bg-neutral-200 dark:group-hover:bg-neutral-800 flex dark:bg-dark-foreground  overflow-hidden ">
        <div className="flex flex-col flex-1 text-left p-8">
          <h1 className="text-lg font-semibold capitalize">{name}</h1>
          <p className="text-sm font-light mt-1 mb-6">
            {description?.substring(0, 100)}...
          </p>
          <div className="flex flex-wrap gap-1">
            {stack?.slice(0, 3).map((item: string, i: number) => (
              <span
                key={i}
                className="uppercase text-light-text dark:text-dark-text bg-neutral-300 dark:bg-dark-background text-xs p-1 rounded-full px-4">
                {item}
              </span>
            ))}
            <small> ... more</small>
          </div>
        </div>
        <div className=" w-full flex-1">
          <div className="w-full h-full relative top-8 rounded-tl-md overflow-hidden group-hover:-rotate-3 group-hover:scale-105 ease-in-out duration-200 shadow-xl shadow-neutral-600 dark:shadow-neutral-900">
            {image?.map((pics: any, i: number) => (
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
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;
