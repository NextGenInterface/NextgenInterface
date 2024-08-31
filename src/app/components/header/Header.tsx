"use client";
import React, { useState } from "react";
import ThemeToggle from "@/app/components/themeToggle/ThemeToggle";
import { MdOutlineMenu } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import LogoIcon from "../../../../public/SVG/logo.svg";
import { usePathname } from "next/navigation";
import SideMenu from "./sideMenu/SideMenu";

const Header = () => {
  const [menuNav, setMenuNav] = useState(false);

  const pathname = usePathname();

  const menu = [
    { title: "home", url: "/" },
    { title: "about", url: "/about" },
    { title: "projects", url: "/project" },
    { title: "contact", url: "/contact" },
  ];

  return (
    <nav
      className={`h-20 fixed top-0 w-full flex justify-between items-center px-4 md:px-20 bg-light-background bg-opacity-95 dark:bg-dark-background z-50 dark:bg-opacity-95`}>
      <div className="flex gap-2">
        <div className="w-6 relative top-1">
          <Image src={LogoIcon} alt="logo" fill={true} />
        </div>
        <h1 className="text-2xl font-extrabold">
          <span className="font-normal">Pixel</span>Perfect
        </h1>
      </div>
      <div className="h-full flex items-center justify-center gap-2">
        <ul className=" hidden md:flex gap-4">
          {menu.map((item: any) => (
            <Link
              key={item.name}
              href={item.url}
              className={`${
                pathname === item.url && "text-indigo-400"
              } active:scale-95 capitalize text-sm font-semibold hover:bg-neutral-200 dark:hover:bg-slate-800 hover:bg-opacity-20 hover:text-indigo-400 p-2 rounded-md`}>
              {item.title}
            </Link>
          ))}
          <div className="text-3xl font-light text-slate-800">|</div>
          <ThemeToggle />
        </ul>
      </div>
      <div className="md:hidden text-white text-3xl">
        <MdOutlineMenu
          onClick={() => setMenuNav(true)}
          className="md:hidden text-black text-3xl dark:text-white "
        />
      </div>
      <SideMenu
        menuNav={menuNav}
        setMenuNav={setMenuNav}
        menu={menu}
        pathname={pathname}
      />
    </nav>
  );
};

export default Header;
