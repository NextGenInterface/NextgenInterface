import React from "react";
import "../globals.css";

const loading = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      <div className="loader"></div>
    </div>
  );
};

export default loading;
