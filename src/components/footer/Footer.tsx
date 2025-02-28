import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="static w-full p-4 md:px-20 border-t border-neutral-300 dark:border-neutral-800 text-xs">
      &copy; {year} Next Gen Interface. All rights reserved
    </div>
  );
};

export default Footer;
