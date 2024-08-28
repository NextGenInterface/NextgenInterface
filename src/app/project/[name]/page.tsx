"use client";
import React from "react";
import projectData from "../../../../projectData.json";
import Image from "next/image";

const page = ({ params }: { params: { name: string } }) => {
  const project = projectData.projects.find((item, i) => {
    const renameUrl = item.name.split(" ").join("");
    return renameUrl === params.name;
  });

  return (
    <div className="p-4 md:p-20">
      <div className="w-full bg-neutral-200 dark:bg-dark-foreground">
        <div className="text-center my-6 p-12">
          <h1 className="capitalize text-4xl font-bold">{project?.name}</h1>
          <p className="text-md font-light mt-1 mb-6">
            {project?.description}...
          </p>
          <div className="flex justify-center flex-wrap gap-1">
            {project?.stack?.slice(0, 3).map((item: string, i: number) => (
              <span
                key={i}
                className="uppercase text-light-text dark:text-dark-text bg-neutral-300 dark:bg-dark-background text-xs p-1 rounded-full px-4">
                {item}
              </span>
            ))}
            <small> ... more</small>
          </div>
        </div>
        <div className="flex flex-col gap-y-8">
          {project?.image?.map((pics: any, i: number) => (
            <div className=" w-full h-[100vh] relative overflow-hidden">
              <Image
                key={i}
                src={pics}
                alt="project"
                fill={true}
                className=" object-cover object-top w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
