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
      <div className=" bg-(--bg-element) flex items-center justify-center px-6 py-4 rounded-md w-full shadow-md transition-all duration-300 ease-in-out hover:scale-105">
        <button
          type="button"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-label="Filter by Region"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="cursor-pointer flex justify-between items-center w-full"
        >
          <span>{selectedRegion || "Filter by Region"}</span>
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
        </button>

        {selectedRegion && (
          <button
            type="button"
            aria-label="Clear Region Filter"
            onClick={(e) => handleClear(e)}
            className="cursor-pointer"
          >
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
          </button>
        )}
      </div>

      {isOpen && (
        <ul
          role="listbox"
          aria-label="Regions"
          className="absolute left-0 right-0 mt-2 z-10 flex flex-col gap-2 pl-6 py-4 shadow-md rounded-md bg-(--bg-element)"
        >
          {REGIONS.map((el) => {
            const isSelected = el === selectedRegion;
            return (
              <li role="option" aria-selected={isSelected} key={el}>
                <button
                  type="button"
                  onClick={() => {
                    onSelectRegion(el);
                    setIsOpen(false);
                  }}
                  className={`transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer ${isSelected && "font-extrabold"}`}
                >
                  {el}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
