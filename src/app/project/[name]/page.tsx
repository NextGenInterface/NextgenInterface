// "use client";
import React, { useEffect, useState } from "react";
import projectData from "../../../projectData.json";
import Image from "next/image";
import PageLayout from "@/components/utils/pageLayout/PageLayout";
import { ProjectHeader } from "@/components/header/projectHeader/ProjectHeader";

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
    <PageLayout>
      <ProjectHeader item={project} />
      <div className="flex flex-col items-center my-12">
        {project?.image?.map((pics: any, i: number) => (
          <>
            <Image
              src={pics}
              alt="project"
              width={1000}
              height={1000}
              className="object-cover object-center w-full h-[50vh] lg:h-[100vh] "
            />
          </>
        ))}
        <p className="text-md my-12 font-light">{project?.description}</p>
      </div>
    </PageLayout>
  );
};

export default page;
