import React from "react";
import "../globals.css";

import LoadingAnimate from "../../components/utils/LoadingAnimate/LoadingAnimate";

const loading = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      {/* <LoadingAnimate /> */}
      <div className="loader"></div>
    </div>
  );
};

export default loading;
