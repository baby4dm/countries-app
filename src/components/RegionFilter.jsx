"use client";

import { useState } from "react";

const REGIONS = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

export default function RegionFilter({ selectedRegion, onSelectRegion }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClear(e) {
    e.stopPropagation();
    onSelectRegion(undefined);
  }
  return (
    <div className="text-preset-6-regular h-12 w-50 relative md:text-preset-5-regular">
      <div
        className=" bg-(--bg-element) rounded-md w-full shadow-md flex justify-between px-6 py-4 items-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span>{selectedRegion || "Filter by Region"}</span>
        {selectedRegion && (
          <span onClick={(e) => handleClear(e)}>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        )}
        {!selectedRegion && (
          <svg
            className={`w-3 h-3 transition-transform ${isOpen ? "" : "rotate-180"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </div>

      {isOpen && (
        <ul className="absolute left-0 right-0 mt-2 z-10 flex flex-col gap-2 pl-6 py-4 shadow-md rounded-md bg-(--bg-element)">
          {REGIONS.map((el) => (
            <li
              onClick={() => {
                onSelectRegion(el);
                setIsOpen(false);
              }}
              className="transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
              key={el}
            >
              {el}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
