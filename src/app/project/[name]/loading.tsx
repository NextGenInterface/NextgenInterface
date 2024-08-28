import React from "react";
import Loading from "../../components/Loading/Loading";

const loading = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      <Loading />
    </div>
  );
};

export default loading;
