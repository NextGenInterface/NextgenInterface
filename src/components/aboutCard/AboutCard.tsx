"use client";
import React from "react";
import Image from "next/image";
import { LiaPlusSolid } from "react-icons/lia";
import { FadeUpAnimation } from "../../lib/aos/Animation";

interface AboutCardProps {
  id: string;
  area: string;
  title: string;
  description: string;
  image: string;
}

const AboutCard = ({
  item,
  direction = "ltr",
}: {
  item: AboutCardProps;
  direction?: "rtl" | "ltr";
}) => {
  FadeUpAnimation();
  const { area, title, description, image } = item;
  return (
    <div
      className={`md:flex gap-12 items-center w-full relative pb-20  md:even:flex-row-reverse`}
      dir={direction}
    >
      <div className="relative w-full h-80 md:h-[28rem] flex-auto">
        <Image
          src={image}
          alt="pic"
          className="w-full h-full object-cover object-center"
          fill={true}
          priority
          data-aos="zoom-in-up"
          data-aos-duration="600"
        />
      </div>
      <div className="mt-6 md:mt-0 space-y-3 w-full">
        <div className="flex gap-2">
          <LiaPlusSolid className="text-themeColor" />
          <h1 className="uppercase flex items-center gap-2 ">{area}</h1>
        </div>
        <h1 className="text-4xl font-medium">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AboutCard;
