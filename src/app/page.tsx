import { IoIosArrowRoundForward } from "react-icons/io";
import Hero from "./components/hero/Hero";
import ListContainer from "./components/listContainer/ListContainer";
import Button from "./components/utils/button/Button";
import Section from "./components/utils/section/Section";
import TechStack from "./components/techStack/TechStack";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Section title="About us" id="about">
        <div className="w-full md:w-3/4">
          <p className="text-light text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            nobis exercitationem id neque ex distinctio et dignissimos dolores
            sed sint. Exercitationem qui laborum quod alias enim reprehenderit.
            Voluptate, fuga quos.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem est
            voluptatem, nemo illo aspernatur ex quas atque reprehenderit
            voluptatibus. Quis ab inventore a sunt totam, accusamus in labore
            nemo assumenda?
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore et
            veniam dolorum. Sunt illo molestias harum accusantium, adipisci
            delectus? Minus laudantium ratione fuga quibusdam est vero
            reiciendis eos, nam officiis.
          </p>
        </div>
      </Section>
      <Section title="Projects" id="project">
        <div className="w-full md:w-1/2">
          <ListContainer toShow={3} direction="col" />
        </div>
        <div className="flex justify-center my-12">
          <Button
            title="View more projects"
            link="/project"
            icon={<IoIosArrowRoundForward className="text-xl" />}
          />
        </div>
      </Section>
      <TechStack />
    </main>
  );
}
