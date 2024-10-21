import React from "react";
import projectData from "../../../projectData.json";
import Image from "next/image";

export function generateStaticParams() {
  return projectData?.projects.map((item) => {
    const renameUrl = item.name.split(" ").join("");
    return { name: renameUrl };
  });
}

const page = ({ params }: { params: { name: string } }) => {
  const project = projectData.projects.find((item) => {
    const renameUrl = item.name.split(" ").join("");
    return renameUrl === params.name;
  });

  return (
    <div className="w-[64rem] p-4 m-auto">
      <div className="">
        <h1 className="capitalize text-xl font-bold">{project?.name}</h1>
        <p className="text-sm font-light mt-1 mb-6">
          {project?.description}...
        </p>
        <div className="flex flex-wrap gap-1">
          {project?.stack?.slice(0, 3).map((item: string, i: number) => (
            <span
              key={i}
              // className="uppercase text-light-text dark:text-dark-text bg-neutral-300 dark:bg-dark-background text-xs p-1 rounded-full px-4"
            >
              {item}
            </span>
          ))}
        </div>
        <br />
        <a
          href={project?.link}
          className="uppercase text-indigo-500 hover:text-indigo-300 underline font-semibold text-xs">
          {`go to website  >`}
        </a>
      </div>
      <div className="bg-neutral-100 dark:bg-neutral-900 flex items-center my-6 w-full relative">
        <div className="space-y-16 flex flex-col items-center w-full">
          {project?.image?.map((pics: any, i: number) => (
            <div key={i} className="w-full h-[100vh] relative overflow-hidden">
              <Image
                src={pics}
                alt="project"
                fill={true}
                // unoptimized
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
