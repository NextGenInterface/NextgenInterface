"use client";
import Image from "next/image";
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
import Nextjs from "../../Assets/icons/nextjs/nextjs-original.svg";
import Vite from "../../Assets/icons/vite/vite-original-wordmark.svg";
import Tailwind from "../../Assets/icons/tailwindcss/tailwindcss-original-wordmark.svg";
import Sass from "../../Assets/icons/sass/sass-original.svg";
import Photoshop from "../../Assets/icons/photoshop/photoshop-original.svg";
import Vercel from "../../Assets/icons/vercel/vercel-line-wordmark.svg";
import Nodejs from "../../Assets/icons/nodejs/nodejs-plain-wordmark.svg";
import Typescript from "../../Assets/icons/typescript/typescript-original.svg";
import Javascript from "../../Assets/icons/javascript/javascript-original.svg";
import boot from "../../Assets/icons/bootstrap/bootstrap-original-wordmark.svg";
import three from "../../Assets/icons/threejs/threejs-original-wordmark.svg";
import python from "../../Assets/icons/python/python-original-wordmark.svg";
import redux from "../../Assets/icons/redux/redux-original.svg";

import { FadeUpAnimation } from "../../app/lib/aos/Animation";

const TechStack = () => {
  FadeUpAnimation();

  return (
    <div className="w-3/4 m-auto" data-aos="zoom-in-up" data-aos-duration="600">
      <h1 className="text-3xl font-extrabold text-center p-4 mb-6">
        Tech Stack
      </h1>
      <div className="flex flex-wrap justify-center gap-4 w-full">
        <Image
          src={Css}
          alt="css"
          className="object-center object-contains w-16"
        />
        <Image
          src={Html5}
          alt="Html5"
          className="object-center object-contains w-16"
        />
        <Image
          src={Javascript}
          alt="Javascript"
          className="object-center object-contains w-16"
        />
        <Image
          src={ReactIcon}
          alt="ReactIcon"
          className="object-center object-contains w-16"
        />
        <Image
          src={Typescript}
          alt="Typescript"
          className="object-center object-contains w-16"
        />
        <Image
          src={Bootstrap}
          alt="Bootstrap"
          className="object-center object-contains w-16"
        />
        <Image
          src={python}
          alt="Bootstrap"
          className="object-center object-contains w-16"
        />
        <Image
          src={GitHub}
          alt="GitHub"
          className="object-center object-contains w-16"
        />
        <Image
          src={Graphql}
          alt="Graphql"
          className="object-center object-contains w-16"
        />
        <Image
          src={redux}
          alt="Graphql"
          className="object-center object-contains w-16"
        />
        <Image
          src={Java}
          alt="Java"
          className="object-center object-contains w-16"
        />
        <Image
          src={Mongo}
          alt="Mongo"
          className="object-center object-contains w-16"
        />
        <Image
          src={Aws}
          alt="Aws"
          className="object-center object-contains w-16"
        />
        <Image
          src={Vercel}
          alt="Vercel"
          className="object-center object-contains w-16"
        />
        <Image
          src={Nodejs}
          alt="Nodejs"
          className="object-center object-contains w-16"
        />
        <Image
          src={Nextjs}
          alt="Nextjs"
          className="object-center object-contains w-16"
        />
        <Image
          src={Sass}
          alt="Sass"
          className="object-center object-contains w-16"
        />
        <Image
          src={Tailwind}
          alt="Tailwind"
          className="object-center object-contains w-16"
        />
        <Image
          src={Vite}
          alt="Vite"
          className="object-center object-contains w-16"
        />
        <Image
          src={Firebase}
          alt="Firebase"
          className="object-center object-contains w-16"
        />
        <Image
          src={boot}
          alt="Firebase"
          className="object-center object-contains w-16"
        />
        <Image
          src={three}
          alt="Firebase"
          className="object-center object-contains w-16"
        />
      </div>
      <br />
      <h1 className="text-3xl font-extrabold text-center p-4 mb-6">Design</h1>
      <div className="flex justify-center flex-wrap items-center gap-3">
        <Image
          src={Figma}
          alt="Figma"
          className="object-center object-contains w-16"
        />
        <Image
          src={Photoshop}
          alt="Photoshop"
          className="object-center object-contains w-16"
        />
        <Image
          src={Illustrator}
          alt="Illustrator"
          className="object-center object-contains w-16"
        />
      </div>
    </div>
  );
};

export default TechStack;
