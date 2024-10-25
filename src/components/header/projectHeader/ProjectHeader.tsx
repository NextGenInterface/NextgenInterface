"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Project {
  id: string;
  name: string;
  description: string;
  stack: string[];
  image: string[];
  type?: string;
  url?: string;
}

interface ProjectProps {
  project: Project | undefined;
}

export const ProjectHeader = ({ project }: ProjectProps) => {
  const [projectHeader, setProjectHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setProjectHeader(true);
      } else {
        setProjectHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`${
        projectHeader &&
        "fixed top-0 right-0 z-50 w-full bg-background px-6 py-2 "
      }`}
    >
      <h1 className="capitalize text-xl font-bold">{project?.name}</h1>
      <div className="flex-wrap md:flex-nowrap flex  items-center gap-4">
        <h1 className="text-xs font-semibold capitalize text-slate-400">
          {project?.type}
        </h1>
        <div className="flex items-center gap-1">
          <span className="font-semibold capitalize text-xs">teck stack:</span>
          <span className="flex flex-wrap gap-1">
            {project?.stack?.map((item: string, i: number) => (
              <span key={i} className="text-xs font-regular capitalize">
                {item}
                {i === project.stack.length - 1 ? "" : ","}
              </span>
            ))}
          </span>
        </div>
      </div>

      {project?.url && (
        <Link
          href={project?.url}
          target="_blank"
          className="uppercase text-indigo-500 hover:text-indigo-300 underline font-semibold text-xs"
        >
          {`go to website  >`}
        </Link>
      )}
    </div>
  );
};
