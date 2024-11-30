"use client";
import React, { useState, Suspense } from "react";
import { StaticImageData } from "next/image";
import { LoadingPlaceholder } from "../utils/loader";

const DesignList = ({ item }: { item: { pic: StaticImageData, type: string }[] }) => {
  const [tab, setTab] = useState<number>(0);
  const [images, setImages] = useState(item);

  const tabTitle = item.map((items: any) => items.type).flat().reduce((accumulator: any, currentValue: any) => {
    if (!accumulator.includes(currentValue)) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);

  const cat = ['all', ...tabTitle]

  const filterList = (value: string) => {
    if (value === "all") {
      setImages(item);
    } else {
      const list = item.filter((list: any) => list.type === value);
      setImages(list);
    }
  };

  const ImageWithSuspense = React.lazy(() =>
    import("next/image").then((module) => ({ default: module.default }))
  );

  return (
    <div className="flex flex-col items-center">
      <div className="w-full my-10">
        <div className="flex justify-center gap-3 sm:gap-6 ">
          {cat.map((title: string, idx: number) => (
            <button
              key={title}
              onClick={() => {
                setTab(idx);
                filterList(title);
              }}
              className={`${tab === idx ? "text-indigo-300" : ""} text-sm hover:text-neutral-400 cursor-pointer transition active:scale-95 uppercase`}
            >
              {title}
            </button>
          ))}
        </div>
      </div>
      <div className=" w-full sm:w-4/5">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 justify-between items-center relative mb-24">
          {images.map((pics, idx) => (
            <Suspense key={idx} fallback={<LoadingPlaceholder />}>
              <ImageWithSuspense
                src={pics.pic}
                alt={`Image ${idx}`}
                width={320}
                height={384}
                className="object-center object-cover w-full h-48 sm:h-96 overflow-hidden bg-white"
              />
            </Suspense>
          ))}
        </div>
      </div>

    </div>

  );
};

export default DesignList;
