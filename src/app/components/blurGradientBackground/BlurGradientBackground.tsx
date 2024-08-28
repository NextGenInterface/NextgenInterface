import React from "react";

const BlurGradientBackground = () => {
  return (
    <div className="relative flex justify-center">
      <div className="relative w-80 h-80 top-44 left-14 bg-gradient-to-r from-purple-600 to-blue-600  dark:from-purple-700 dark:to-blue-700 rounded-full mix-blend-multiply blur-2xl dark:mix-blend-screen dark:opacity-15 opacity-40 animate-blob"></div>
      <div className="relative w-80 h-80 top-24 bg-gradient-to-r bg-blue-400  to-teal-600 dark:from-blue-600 dark:to-teal-700 rounded-full mix-blend-multiply blur-2xl dark:mix-blend-screen dark:opacity-15 opacity-40 animate-blob"></div>
      <div className="relative w-72 h-72 top-36 right-14 bg-gradient-to-l bg-teal-400  to-blue-600 dark:from-teal-700 dark:to-blue-700 rounded-full mix-blend-multiply blur-2xl dark:mix-blend-screen dark:opacity-15 opacity-40 animate-blob"></div>
    </div>
  );
};

export default BlurGradientBackground;
