import React from "react";
import projectData from "../../../../projectData.json";
import ProjectCard from "../projectCard/ProjectCard";

const arrayLength = projectData.projects.length;

const ListContainer = async ({
  toShow = arrayLength,
  direction = "grid",
}: {
  toShow?: number;
  direction?: "col" | "grid";
}) => {
  return (
    <div
      className={`${
        direction === "col"
          ? "flex flex-col"
          : direction === "grid"
          ? "grid grid-cols-1 sm:grid-cols-2"
          : "block"
      } gap-6 items-start h-full relative`}>
      {projectData?.projects?.slice(0, toShow).map((item: any) => (
        <ProjectCard key={item.name} {...item} />
      ))}
    </div>
  );
};

export default ListContainer;
