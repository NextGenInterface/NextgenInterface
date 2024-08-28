import Link from "next/link";
import React from "react";

const Button = ({
  title,
  icon,
  link,
}: {
  title: string;
  icon?: React.ReactNode;
  link: string;
}) => {
  return (
    <div className="relative w-fit group">
      {/* <div className="absolute -inset-1.5 bg-gradient-to-r from-violet-600 to-blue-500 rounded-lg blur opacity-75 group-hover:blur-lg group-hover:opacity-100 transition duration-200"></div> */}
      <Link
        href={link}
        className="relative h-12 px-4 rounded-md bg-indigo-500 hover:bg-indigo-400 w-fit text-white flex items-center gap-1 cursor-pointer text-sm font-bold capita">
        {title} {icon && icon}
      </Link>
    </div>
  );
};

export default Button;
