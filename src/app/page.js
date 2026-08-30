"use client";

import data from "@/data.json";
import CountryCard from "@/components/CountryCard";
import SearchInput from "@/components/SearchInput";
import { useEffect, useState } from "react";
import RegionFilter from "@/components/RegionFilter";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchValue);
    }, 250);
    return () => clearTimeout(timer);
  }, [searchValue]);

  function handleSelectRegion(region) {
    setSelectedRegion(region);
  }

  return (
    <main className="flex flex-col gap-10 px-4 md:px-10 lg:px-20">
      <div className="flex flex-col gap-10 md:flex-row justify-between md:gap-2">
        <SearchInput onChange={setSearchValue} value={searchValue} />
        <RegionFilter
          selectedRegion={selectedRegion}
          onSelectRegion={handleSelectRegion}
        />
      </div>
      <ul className="grid grid-cols-1 gap-y-10 w-full mx-auto md:grid-cols-2 md:gap-18 md:max-w-150 xl:grid-cols-4 xl:max-w-318">
        {data
          .filter((country) => {
            const matchesSearch = country.name
              .toLowerCase()
              .includes(debouncedSearch.toLowerCase());

            const matchesRegion = selectedRegion
              ? country.region.toLowerCase() === selectedRegion.toLowerCase()
              : true;

            return matchesSearch && matchesRegion;
          })
          .map((country) => (
            <CountryCard key={country.alpha3Code} country={country} />
          ))}
      </ul>
    </main>
  );
}
