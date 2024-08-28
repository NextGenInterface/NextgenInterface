"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9"></div>;
  }

  if (resolvedTheme === "dark") {
    return (
      <button
        onClick={() => setTheme("light")}
        className="hover:bg-dark-foreground p-2 rounded-md h-9 w-9">
        <LuSun className="text-black dark:text-dark-text text-md" />
      </button>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <button
        onClick={() => setTheme("dark")}
        className="hover:bg-neutral-300 hover:bg-opacity-10 p-2 rounded-md h-9 w-9">
        <LuMoon className="text-black dark:text-dark-text text-md" />
      </button>
    );
  }
};

export default ThemeToggle;
