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
      <Link
        href={link}
        className="active:scale-95 relative h-12 px-4 rounded-md bg-indigo-500 hover:bg-indigo-400 w-fit text-white flex items-center gap-1 cursor-pointer text-sm font-bold capita">
        {title} {icon && icon}
      </Link>
    </div>
  );
};

export default Button;
