"use client";
import ReactIcon from "../../Assets/icons/react/react-original-wordmark.svg";
import Css from "../../Assets/icons/css3/css3-original-wordmark.svg";
import Illustrator from "../../Assets/icons/illustrator/illustrator-line.svg";
import Bootstrap from "../../Assets/icons/bootstrap/bootstrap-original-wordmark.svg";
import Figma from "../../Assets/icons/figma/figma-original.svg";
import Firebase from "../../Assets/icons/firebase/firebase-original-wordmark.svg";
import GitHub from "../../Assets/icons/github/github-original.svg";
import Graphql from "../../Assets/icons/graphql/graphql-plain-wordmark.svg";
import Html5 from "../../Assets/icons/html5/html5-original-wordmark.svg";
import Java from "../../Assets/icons/java/java-original-wordmark.svg";
import Mongo from "../../Assets/icons/mongodb/mongodb-original-wordmark.svg";
import Aws from "../../Assets/icons//amazonwebservices/amazonwebservices-original-wordmark.svg";
import Nextjs from "../../Assets/icons/nextjs/nextjs-original-wordmark.svg";
import Vite from "../../Assets/icons/vite/vite-original-wordmark.svg";
import Tailwind from "../../Assets/icons/tailwindcss/tailwindcss-original-wordmark.svg";
import Sass from "../../Assets/icons/sass/sass-original.svg";
import Photoshop from "../../Assets/icons/photoshop/photoshop-original.svg";
import Vercel from "../../Assets/icons/vercel/vercel-original-wordmark.svg";
import Nodejs from "../../Assets/icons/nodejs/nodejs-plain-wordmark.svg";
import Typescript from "../../Assets/icons/typescript/typescript-original.svg";
import Javascript from "../../Assets/icons/javascript/javascript-original.svg";
import { FadeUpAnimation } from "../../lib/aos/Animation";

const TechStack = () => {
  FadeUpAnimation();

  return (
    <div className="w-full" data-aos="zoom-in-up" data-aos-duration="600">
      <h1 className="text-3xl font-extrabold text-center p-4">Tech Stack</h1>
      <div className="flex justify-center flex-wrap items-center gap-3">
        {/* <Css className="w-14 md:w-24" />
        <Html5 className="w-14 md:w-24" />
        <Javascript className="w-14 md:w-24" />
        <ReactIcon className="w-14 md:w-24" />
        <Bootstrap className="w-14 md:w-24" />
        <GitHub className="w-14 md:w-24 bg-white" />
        <Graphql className="w-14 md:w-24" />
        <Java className="w-14 md:w-24" />
        <Mongo className="w-14 md:w-24" />
        <Aws className="w-14 md:w-24" />
        <Vercel className="w-14 md:w-24 bg-white" />
        <Typescript className="w-14 md:w-24" />
        <Nodejs className="w-14 md:w-24" />
        <Nextjs className="w-14 md:w-24 bg-white" />
        <Sass className="w-14 md:w-24" />
        <Tailwind className="w-14 md:w-24" />
        <Vite className="w-14 md:w-24" />
        <Firebase className="w-14 md:w-24" /> */}
      </div>
      <br />
      <h1 className="text-2xl font-extrabold text-center p-4">Design</h1>
      <div className="flex justify-center flex-wrap items-center gap-3">
        {/* <Figma className="w-14 md:w-24" />
        <Photoshop className="w-14 md:w-24" />
        <Illustrator className="w-14 md:w-24" /> */}
      </div>
    </div>
  );
};

export default TechStack;
