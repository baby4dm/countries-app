import data from "@/data.json";
import { notFound } from "next/navigation";

export default async function CountryDetailPage({ params }) {
  const { code } = await params;
  const country = data.find((cntr) => {
    cntr.alpha3Code.toLowerCase() === code.toLowerCase();
  });
  if (!country) {
    notFound();
  }
  return <main></main>;
}
