import React from "react";
import "../../app/globals.css";

export const LoadingPlaceholder = () => {
  return (
    <div className="w-80 h-96 flex items-center justify-center bg-gray-200">
      <div className="loader"></div>
    </div>
  );
};
