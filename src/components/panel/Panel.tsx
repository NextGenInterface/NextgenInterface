import React from "react";

const panelData = [
  {
    title: "Free Consultation",
    description:
      "Get a free consultation to understand how we can bring your vision to life.",
  },
  {
    title: "Committed to Quality",
    description:
      "Our team genuinely cares about delivering exceptional work and supporting each other.",
  },
  {
    title: "Tailored Solutions",
    description:
      "We craft custom solutions that meet your unique business needs and goals.",
  },
  {
    title: "Client-Centric Approach",
    description:
      "Your satisfaction is our priority. We work closely with you every step of the way.",
  },
];

const Panel = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4  gap-4">
      {panelData.map((item, idx) => (
        <article
          key={idx}
          className="space-y-2 rounded-md border border-neutral-800 p-4"
        >
          <h2 className="text-lg font-bold">{item.title}</h2>
          <p className="text-sm">{item.description}</p>
        </article>
      ))}
    </div>
  );
};

export default Panel;
