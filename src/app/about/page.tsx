import React from "react";
import PageLayout from "../../components/utils/pageLayout/PageLayout";
import whyChoose from "./data.json";
import cardData from "./data.json";
import Banner from "../../components/banner/Banner";
import AboutCard from "../../components/aboutCard/AboutCard";

interface WhyChooseProps {
  header: string;
  description: string;
}

const page = () => {
  return (
    <PageLayout>
      <div className="md:text-center mt-24 md:mb-20">
        <p className="uppercase text-themeColor font-medium">about us</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Nextgen Interface Agency
        </h1>
      </div>
      <div className="">
        <p className="text-light md:text-center text-xl">
          Welcome to Nextgen Interface, where creativity meets technology. We
          are a full-service digital agency specializing in web and mobile
          development, graphics design, and UI/UX design. Our mission is to
          bring your ideas to life through innovative design and cutting-edge
          technology.
          <br />
          <br />
          Who We Are: At Nextgen Interface, we are a team of passionate
          designers, developers, and strategists with a shared goal: to create
          exceptional digital experiences. We believe that a well-designed
          website or application is more than just a digital presence—it&apos;s
          a powerful tool for engaging customers, telling your story, and
          driving business growth.
        </p>
      </div>

      <div className="my-12 space-y-2">
        <div className="md:text-center md:mt-32 md:mb-20">
          <p className="uppercase text-themeColor font-medium">services</p>
          <h1 className="self-start text-4xl md:text-5xl font-bold mb-6">
            What We Do
          </h1>
        </div>
        <div className="my-20">
          {cardData?.serviceCard?.map((ser, i: number) => (
            <AboutCard key={i} item={ser} />
          ))}
        </div>
      </div>
      <div className="my-12 space-y-2">
        <div className="md:text-center md:mt-32 md:mb-20">
          <p className="uppercase text-themeColor font-medium">
            Why Choose Us?
          </p>
          <h1 className="self-start text-4xl md:text-5xl font-bold mb-6">
            Our Approach
          </h1>
        </div>
        <div className="my-20 md:text-center">
          <p>
            Our Approach We believe in a collaborative approach to every
            project. From the initial concept to the final product, we work
            closely with you to understand your goals, your audience, and your
            vision. Our team combines creative expertise with technical know-how
            to deliver solutions that are both innovative and effective.
          </p>
        </div>
        <div className="my-20">
          <div className="my-12 space-y-2 lg:grid lg:grid-cols-4">
            {whyChoose?.whyChoose.map((item: WhyChooseProps, i: number) => (
              <article key={i} className="p-4">
                <h1 className="font-bold">{item.header}</h1>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
      <div className="my-20 md:my-32">
        <Banner />
      </div>
    </PageLayout>
  );
};

export default page;
