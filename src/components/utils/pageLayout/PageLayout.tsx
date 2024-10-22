import React from "react";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return <section className="mx-6 mt-24 relative">{children}</section>;
};

export default PageLayout;
