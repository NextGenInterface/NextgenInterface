import Link from "next/link";
import React from "react";
import { IoMdClose } from "react-icons/io";
import ThemeToggle from "../../themeToggle/ThemeToggle";
import Image from "next/image";
// import LogoIcon from "../../../../../public/SVG/logo.svg";

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
        <div className="flex gap-2">
          <div className="w-6 relative">
            {/* <Image src={LogoIcon} alt="logo" fill={true} /> */}
          </div>
          <h1 className="text-2xl font-extrabold">
            <span className="font-normal">Pixel</span>Perfect
          </h1>
        </div>
        <IoMdClose
          onClick={() => setMenuNav(false)}
          className="text-3xl relative -top-1"
        />
      </div>
      <div className="w-8 z-50"></div>
      <div className="flex flex-col py-6 h-full">
        {menu.map((item: any) => (
          <Link
            key={item.name}
            onClick={() => setMenuNav(false)}
            href={item.url}
            className={`${
              pathname === item.url && "text-indigo-400"
            } capitalize text-md font-semibold hover:bg-neutral-200 dark:hover:bg-slate-800 hover:bg-opacity-20 hover:text-indigo-400 py-4`}>
            {item.title}
          </Link>
        ))}
        <div className="absolute bottom-5 flex justify-end border border-neutral-300 dark:border-neutral-800 w-fit self-end rounded-md ">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Menu;
