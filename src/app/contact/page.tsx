"use client";
import React from "react";
import PageLayout from "../../components/utils/pageLayout/PageLayout";
import ContactForm from "@/components/contactForm/ContactForm";

const Page = () => {
  return (
    <PageLayout>
      <div className="w-full md:grid md:grid-cols-2 justify-center item-center my-32">
        <div className="bg-indigo-950 p-6 md:p-12 rounded-xl space-y-3">
          <p className="uppercase font-bold text-sm">contact </p>
          <h1 className="capitalize font-bold text-xl">
            Feel free to contact us with your enquiries
          </h1>
          <p className="font-light">
            Send a messge anytime, we endeavoour to answer all enquiries with 24
            hours on business days. We will be happy to answer your questions.
          </p>
        </div>
        <div className="p-4 md:p-8 space-y-3">
          <p className="uppercase font-bold text-sm">get in touch </p>
          <h1 className="capitalize font-bold text-4xl">
            Ready to get started?
          </h1>
          <ContactForm />
        </div>
      </div>
    </PageLayout>
  );
};

export default Page;
