import Link from "next/link";

export default function CountryCard({ country }) {
  if (!country) return null;
  return (
    <li className="w-full h-84 max-w-66 rounded-md overflow-hidden shadow-md mx-auto bg-(--bg-element) transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer">
      <Link
        className="flex flex-col gap-4"
        href={`country/${country.alpha3Code.toLowerCase()}`}
      >
        {
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="h-40 w-full object-cover"
            src={country.flags.svg}
            alt={"Flag of " + country.name}
          />
        }
        <div className="pl-6 flex flex-col gap-4">
          <h3 className="text-preset-3">{country.name}</h3>
          <div className="text-preset-5-light flex flex-col gap-2">
            <p className="h-4">
              <span className="font-semibold">Population: </span>
              {country.population}
            </p>
            <p className="h-4">
              <span className="font-semibold">Region: </span>
              {country.region}
            </p>
            <p className="h-4">
              <span className="font-semibold">Capital: </span>
              {country.capital}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
}
