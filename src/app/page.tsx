import { IoIosArrowRoundForward } from "react-icons/io";
import Hero from "../components/hero/Hero";
import ListContainer from "../components/listContainer/ListContainer";
import Button from "../components/utils/button/Button";
import TechStack from "../components/techStack/TechStack";
import PageLayout from "../components/utils/pageLayout/PageLayout";
import "./globals.css";
import Image from "next/image";
import background from "../../public/images/about.webp";
import Panel from "@/components/panel/Panel";

export default function Home() {
  return (
    <main className="">
      <div className="absolute w-full h-[120vh] -top-10 bg-[url('/images/background.webp')] bg-cover bg-no-repeat bg-center -z-20 mix-blend-color-dodge grayscale">
        <div className="absolute w-full h-full bg-gradient-to-b from-background via-transparent to-background mix-blend-darken"></div>
        <div className="absolute w-full h-full bg-background opacity-10 "></div>
      </div>
      <Hero />
      <PageLayout>
        <Panel />
        <div className="flex flex-col lg:flex-row items-center gap-4 my-36">
          <Image
            src={background}
            width={400}
            height={100}
            alt="about-us"
            className="object-contain object-center"
          />
          <div className="space-y-3">
            <h1 className="font-bold">ABOUT US</h1>
            <p className="font-light ">
              Welcome to Pixel Perfect, where creativity meets technology. We
              are a full-service digital agency specializing in web and mobile
              development, graphics design, and UI/UX design. Our mission is to
              bring your ideas to life through innovative design and
              cutting-edge technology.
            </p>
            <p>
              Who We Are: At Pixel Perfect, we are a team of passionate
              designers, developers, and strategists with a shared goal: to
              create exceptional digital experiences. We believe that a
              well-developed website or application is more than just a digital
              presence—it&apos;s a powerful tool for engaging customers, telling
              your story, and driving business growth.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col my-20">
          <h1 className="text-4xl font-extrabold text-center p-4 my-12">
            Projects
          </h1>
          <ListContainer toShow={3} direction="grid" />
          <div className="w-fit m-auto my-8">
            <Button
              title="View more projects"
              link="/project"
              icon={<IoIosArrowRoundForward className="text-xl" />}
            />
          </div>
        </div>
      </PageLayout>
      <div className="bg-neutral-800 py-12">
        <TechStack />
      </div>
    </main>
  );
}
