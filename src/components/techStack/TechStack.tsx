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
import Mongo from "../../Assets/icons/mongodb/mongodb-original-wordmark.svg";
import Aws from "../../Assets/icons//amazonwebservices/amazonwebservices-original-wordmark.svg";
import Nextjs from "../../Assets/icons/nextjs/nextjs-original.svg";
import Vite from "../../Assets/icons/vite/vite-original-wordmark.svg";
import Tailwind from "../../Assets/icons/tailwindcss/tailwindcss-original-wordmark.svg";
import Sass from "../../Assets/icons/sass/sass-original.svg";
import Photoshop from "../../Assets/icons/photoshop/photoshop-original.svg";
import Vercel from "../../Assets/icons/vercel/vercel.svg";
import Nodejs from "../../Assets/icons/nodejs/nodejs-plain-wordmark.svg";
import Typescript from "../../Assets/icons/typescript/typescript-original.svg";
import Javascript from "../../Assets/icons/javascript/javascript-original.svg";
import ReactNative from "../../Assets/icons/reactnative/react-native.svg";
import Three from "../../Assets/icons/threejs/threejs-original-wordmark.svg";
import Python from "../../Assets/icons/python/python-original-wordmark.svg";
import Redux from "../../Assets/icons/redux/redux-original.svg";
import AntDesign from "../../Assets/icons/antdesign/ant-design.svg";
import BitBucket from "../../Assets/icons/bitbucket/bitbucket.svg";
import Blazor from "../../Assets/icons/blazor/blazor.svg";
import CSharp from "../../Assets/icons/csharp/csharp.svg";
import Cypress from "../../Assets/icons/cypress/cypress.svg";
import Docker from "../../Assets/icons/docker/docker.svg";
import Express from "../../Assets/icons/express/express-js.svg";
import Jest from "../../Assets/icons/jest/jest.svg";
import Jquery from "../../Assets/icons/jquery/jquery.svg";
import Less from "../../Assets/icons/less/less.svg";
import MaterialUI from "../../Assets/icons/materialui/material-ui.svg";
import MySQL from "../../Assets/icons/mysql/mysql.svg";
import PostGres from "../../Assets/icons/postgres/postgresql.svg";
import Prisma from "../../Assets/icons/prisma/prisma.svg";
import Redis from "../../Assets/icons/redis/redis.svg";
import SocketIO from "../../Assets/icons/socketio/socket-io.svg";
import Vitest from "../../Assets/icons/vitest/vitest.svg";
import Websocket from "../../Assets/icons/websocket/websocket.svg";

import { FadeUpAnimation } from "../../lib/aos/Animation";

const TechStack = () => {
  FadeUpAnimation();

  const stacks = [
    Css,
    Html5,
    Javascript,
    ReactIcon,
    Typescript,
    Bootstrap,
    Python,
    GitHub,
    Graphql,
    Redux,
    Mongo,
    Aws,
    Vercel,
    Nodejs,
    Nextjs,
    Sass,
    Tailwind,
    Vite,
    Firebase,
    Three,
    ReactNative,
    MaterialUI,
    AntDesign,
    CSharp,
    Blazor,
    Docker,
    Express,
    Jquery,
    BitBucket,
    MySQL,
    Cypress,
    Jest,
    Prisma,
    Redis,
    PostGres,
    Less,
    SocketIO,
    Vitest,
    Websocket,
  ];

  const designStack = [Figma, Photoshop, Illustrator];

  return (
    <div
      className="md:w-3/4 m-auto"
      data-aos="zoom-in-up"
      data-aos-duration="600"
    >
      <h1 className="text-3xl font-extrabold text-center p-4 mb-6">
        Tech Stack
      </h1>
      <div className="flex flex-wrap justify-center gap-4 w-full">
        {stacks.map((stack) => (
          <Image
            src={stack}
            alt={stack}
            className="object-center object-contains w-16"
            key={stack}
          />
        ))}
      </div>
      <br />
      <h1 className="text-3xl font-extrabold text-center p-4 mb-6">Design</h1>
      <div className="flex justify-center flex-wrap items-center gap-3">
        {designStack.map((stack) => (
          <Image
            src={stack}
            alt={stack}
            className="object-center object-contains w-16"
            key={stack}
          />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
