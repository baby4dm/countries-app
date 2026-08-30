"use client";

export default function SearchInput({ value, onChange }) {
  return (
    <div
      className="group flex w-full  items-center h-12 rounded-md shadow-md px-8 gap-6
     md:max-w-120  bg-(--bg-element) transition-all duration-300 ease-in-out hover:scale-105 focus-within:scale-105"
    >
      <svg
        className="w-4 h-4 stroke-grey-250 md:w-5 md:h-5"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full text-preset-6-regular placeholder:text-preset-6-regular
         placeholder:text-grey-250 h-4 border-none outline-none md:placeholder:text-preset-5-regular
         "
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
}
