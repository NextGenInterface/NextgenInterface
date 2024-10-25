"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import logoSymbol from "../../../public/SVG/logo-symbol.svg";
import logoText from "../../../public/SVG/logo-text.svg";
import { usePathname } from "next/navigation";
import SideMenu from "./sideMenu/SideMenu";
import { useTheme } from "next-themes";

const Header = () => {
  const [menuNav, setMenuNav] = useState(false);
  const [header, setHeader] = useState(false);

  const { resolvedTheme } = useTheme();

  const pathname = usePathname();

  const menu = [
    { title: "home", url: "/" },
    { title: "about", url: "/about" },
    { title: "projects", url: "/project" },
    { title: "contact", url: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`h-16 w-full flex fixed top-0 justify-between items-center px-6 z-50 ${
        header && "bg-[#171717] opacity-95 transition ease-in-out"
      }`}
    >
      <Link href={"/"}>
        <div className="flex gap-1 relative">
          <Image
            src={logoSymbol}
            alt="logo"
            priority
            className="object-contain object-center w-8 h-8"
          />
          <Image
            src={logoText}
            alt="logo"
            priority
            className="object-contain object-center w-32"
          />
        </div>
      </Link>
      <div className="h-full flex items-center justify-center gap-2">
        <ul className=" hidden md:flex gap-4">
          {menu.map((item, idx: number) => (
            <Link
              key={idx}
              href={item.url}
              className={`${
                pathname === item.url && "text-indigo-400"
              } active:scale-95 capitalize text-sm font-semibold hover:bg-neutral-800 hover:bg-opacity-40 hover:text-indigo-400 p-2 rounded-md`}
            >
              {item.title}
            </Link>
          ))}
        </ul>
      </div>
      <div className="md:hidden text-white text-3xl">
        <MdOutlineMenu
          onClick={() => setMenuNav(true)}
          className="md:hidden text-white text-4xl"
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
