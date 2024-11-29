import Link from "next/link";
import React from "react";
import { IoMdClose } from "react-icons/io";
import logoSymbol from "../../../../public/SVG/logo.svg";
import logoText from "../../../../public/SVG/name.svg";
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
      className={`${!menuNav ? "hidden" : "visible"
        } w-full h-full fixed top-0 left-0 z-40 bg-background `}>
      <div className="h-16 w-full flex fixed top-0 justify-between items-center px-6 z-50">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 relative">
            <Image
              src={logoSymbol}
              alt="logo"
              priority
              className="object-contain object-center w-12 h-12"
            />
            <Image
              src={logoText}
              alt="logo"
              priority
              className="object-contain object-center w-32"
            />
          </div>
        </div>
        <IoMdClose
          onClick={() => setMenuNav(false)}
          className="text-3xl relative "
        />
      </div>

      <div className="p-6 mt-12">
        <div className="flex flex-col py-6 h-full">
          {menu.map((item: any, idx: number) => (
            <Link
              key={idx}
              onClick={() => setMenuNav(false)}
              href={item.url}
              className={`${pathname === item.url && "text-indigo-400"
                } capitalize text-md font-semibold hover:bg-neutral-200 dark:hover:bg-slate-800 hover:bg-opacity-20 hover:text-indigo-400 py-4`}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
