import React from "react";
import ListContainer from "../components/listContainer/ListContainer";
import Tab from "../components/utils/tab/Tab";
import PageLayout from "../components/utils/pageLayout/PageLayout";
import Design from "../components/design/Design";

const page = () => {
  return (
    <PageLayout>
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
        tab2={<Design />}
      />
    </PageLayout>
  );
};

export default page;
