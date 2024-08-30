"use client";
import React, { useState } from "react";

const Tab = ({
  tab1,
  tab2,
}: {
  tab1: React.ReactNode;
  tab2: React.ReactNode;
}) => {
  const [tab, setTab] = useState<number>(1);

  return (
    <div className="relative w-full h-full">
      <div className="flex gap-2 items-end md:absolute md:-top-14 md:right-0">
        <button
          onClick={() => setTab(1)}
          className={`${tab === 1 && "text-indigo-500 font-black text-2xl"} ${
            tab === 2 && "hover:text-neutral-400"
          }  cursor-pointer transition active:scale-95`}>
          Web Dev
        </button>
        <span className="text-2xl">/</span>
        <button
          onClick={() => setTab(2)}
          className={`${tab === 2 && "text-indigo-500 font-black text-2xl"} ${
            tab === 1 && "hover:text-neutral-400"
          } cursor-pointer transition active:scale-95`}>
          Design
        </button>
      </div>

      <div className="w-full h-full mt-6">
        {tab === 1 ? tab1 : tab === 2 ? tab2 : tab1}
      </div>
    </div>
  );
};

export default Tab;
