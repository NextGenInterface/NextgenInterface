import React from "react";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return <section className="mx-20">{children}</section>;
};

export default PageLayout;
