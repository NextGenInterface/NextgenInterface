import { IoIosArrowRoundForward } from "react-icons/io";
import Hero from "./components/hero/Hero";
import ListContainer from "./components/listContainer/ListContainer";
import Button from "./components/utils/button/Button";
import Section from "./components/utils/section/Section";
import TechStack from "./components/techStack/TechStack";
import PageLayout from "./components/utils/pageLayout/PageLayout";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <PageLayout>
        <Section title="About us" id="about">
          {/* <div className="w-full md:w-3/4"> */}
          <p className="text-light text-center text-xl">
            Welcome to Pixel Perfect, where creativity meets technology. We are
            a full-service digital agency specializing in web development,
            graphic design, and UI/UX design. Our mission is to bring your ideas
            to life through innovative design and cutting-edge technology.
            <br />
            <br />
            Who We Are: At Pixel Perfect, we are a team of passionate designers,
            developers, and strategists with a shared goal: to create
            exceptional digital experiences. We believe that a well-designed
            website or application is more than just a digital
            presence—it&apos;s a powerful tool for engaging customers, telling
            your story, and driving business growth.
          </p>
          {/* </div> */}
          <Button
            title="Read more about us"
            link="/about"
            icon={<IoIosArrowRoundForward className="text-xl" />}
          />
        </Section>
        <Section title="Projects" id="project">
          {/* <div className="w-full md:w-1/2"> */}
          <ListContainer toShow={3} direction="col" />
          {/* </div> */}
          <div className="flex justify-center my-12">
            <Button
              title="View more projects"
              link="/project"
              icon={<IoIosArrowRoundForward className="text-xl" />}
            />
          </div>
        </Section>
        <TechStack />
      </PageLayout>
    </main>
  );
}
