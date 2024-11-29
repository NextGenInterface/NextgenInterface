"use client";
import React, { useState } from "react";
import ListContainer from "../../components/listContainer/ListContainer";
import Tab from "../../components/design/DesignList";
import PageLayout from "../../components/utils/pageLayout/PageLayout";
import Design from "../../components/design/Design";

const page = () => {
  return (
    <PageLayout>
      <h1 className="text-center self-start mt-24 text-4xl md:text-3xl font-bold mb-6">
        Our Projects
      </h1>
      <ListContainer />
    </PageLayout>
  );
};

export default page;
