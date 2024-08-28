import React from "react";
import ListContainer from "../components/listContainer/ListContainer";
import Tab from "../components/utils/tab/Tab";

const page = () => {
  return (
    <div className="p-4 py-8 md:p-20 h-full">
      <h1 className="text-left self-start text-4xl md:text-5xl font-bold mb-6">
        Our Projects
      </h1>
      <Tab
        tab1={
          <div>
            <ListContainer />
            <div className="my-12">
              <p className="text-center">more projects in development!</p>
            </div>
          </div>
        }
        tab2="tab 2"
      />
    </div>
  );
};

export default page;
