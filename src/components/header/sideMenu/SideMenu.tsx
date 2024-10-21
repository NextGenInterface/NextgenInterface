import Link from "next/link";
import React from "react";
import { IoMdClose } from "react-icons/io";
import logoSymbol from "../../../../public/SVG/logo-symbol.svg";
import logoText from "../../../../public/SVG/logo-text.svg";
import Image from "next/image";

const Menu = ({
  menuNav,
  setMenuNav,
  menu,
  pathname,
}: {
  menuNav: boolean;
  setMenuNav: any;
  menu: {}[];
  pathname: string;
}) => {
  return (
    <div
      className={`${
        !menuNav ? "hidden" : "visible"
      } w-full h-full px-4 fixed top-0 left-0 bg-light-background dark:bg-dark-background z-40 dark:bg-opacity-100 shadow-md`}>
      <div className="flex justify-between items-center pt-6">
        <div className="flex gap-4 relative">
          <Image
            src={logoSymbol}
            alt="logo"
            priority
            className="object-contain object-center w-10 h-10 text-yellow-400"
          />
          <Image
            src={logoText}
            alt="logo"
            priority
            className="object-contain object-center w-32"
          />
        </div>
        <IoMdClose
          onClick={() => setMenuNav(false)}
          className="text-3xl relative -top-1"
        />
      </div>
      <div className="w-8 z-50"></div>
      <div className="flex flex-col py-6 h-full">
        {menu.map((item: any, idx: number) => (
          <Link
            key={idx}
            onClick={() => setMenuNav(false)}
            href={item.url}
            className={`${
              pathname === item.url && "text-indigo-400"
            } capitalize text-md font-semibold hover:bg-neutral-200 dark:hover:bg-slate-800 hover:bg-opacity-20 hover:text-indigo-400 py-4`}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
