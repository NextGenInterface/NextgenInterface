import React from "react";

const Section = ({
  children,
  id,
  title,
}: {
  children: React.ReactNode;
  id?: string;
  title?: string;
}) => {
  return (
    <section className="relative mb-24" id={id}>
      <div className="flex flex-col gap-10 justify-center items-center">
        {title && (
          <h1 className="text-4xl font-extrabold text-center p-4">{title}</h1>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
