import data from "@/data.json";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  return data.map((country) => ({
    code: country.alpha3Code.toLowerCase(),
  }));
}

export async function generateMetadata({ params }) {
  const { code } = await params;

  const country = data.find(
    (item) => item.alpha3Code.toLowerCase() === code.toLowerCase(),
  );

  return {
    title: country ? country.name : "Country Details",
  };
}

export default async function CountryDetailPage({ params }) {
  const { code } = await params;
  const country = data.find((cntr) => {
    return cntr.alpha3Code.toLowerCase() === code.toLowerCase();
  });
  if (!country) {
    notFound();
  }
  return (
    <main className="py-10 px-7 flex flex-col gap-16 items-center w-full md:px-25 lg:px-20 md:gap-14 lg:max-w-319.5 lg:mx-auto">
      <Link
        href={"/"}
        className="flex self-start w-26 h-8 items-center gap-2 justify-center bg-(--bg-element)
         rounded-md cursor-pointer shadow-md md:w-34 md:h-10 md:text-preset-4-light transition-all duration-300 ease-in-out hover:scale-105"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        <span className="text-preset-5-light">Back</span>
      </Link>

      <div className="flex flex-col gap-12 w-full md:gap-16 lg:flex-row lg:gap-auto lg:justify-between">
        <img
          className="w-full rounded-md shadow-md lg:max-w-140 lg:flex-1"
          src={country.flags.png}
          alt={country.name}
        />
        <div className="flex flex-col gap-4 w-full md:gap-6 lg:flex-1">
          <h1 className="text-preset-2 md:text-preset-1">{country.name}</h1>
          <div className="flex flex-col gap-8 text-preset-5-light md:flex-row md:justify-between md:text-preset-4-light">
            <div>
              <p>
                <span className="font-semibold">Native Name: </span>
                {country.nativeName || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Population: </span>
                {country.population || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Region: </span>
                {country.region || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Sub Region: </span>
                {country.subregion || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Capital: </span>
                {country.capital || "N/A"}
              </p>
            </div>
            <div>
              <p>
                <span className="font-semibold">Top Level Domain: </span>
                {country.topLevelDomain || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Currencies: </span>
                {country.currencies?.map((curr) => curr.name).join(", ")}
              </p>
              <p>
                <span className="font-semibold">Languages: </span>
                {country.languages?.map((lang) => lang.name).join(", ")}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full md:flex-row">
            <h2 className="text-preset-4-semibold whitespace-nowrap">
              Border Countries:
            </h2>
            <div className="flex gap-4 w-full flex-wrap">
              {country.borders?.map((borderCode) => {
                const borderCountry = data.find(
                  (item) =>
                    item.alpha3Code.toLowerCase() === borderCode.toLowerCase(),
                );

                return (
                  <Link
                    key={borderCode}
                    href={`/country/${borderCountry.alpha3Code.toLowerCase()}`}
                    className="text-preset-6-light h-7 flex-1 bg-(--bg-element) px-4 py-1.5 rounded-sm shadow-md 
                    flex items-center justify-center cursor-pointer whitespace-nowrap transition-all duration-300 ease-in-out hover:scale-105"
                  >
                    {borderCountry ? borderCountry.name : borderCode}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
