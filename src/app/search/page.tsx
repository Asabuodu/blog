"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import AppNavbar from "../components/navbar";

type Country = {
  Code: string;
  Title: string;
};

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const [results, setResults] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndFilter = async () => {
      try {
        const res = await axios.get("/api/countries");
        const all: Country[] = res.data.value;

        const filtered = all.filter(
          (c) =>
            c.Title.toLowerCase().includes(query.toLowerCase()) ||
            c.Code.toLowerCase().includes(query.toLowerCase())
        );

        setResults(filtered);
      } catch (err) {
        console.error("Search error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAndFilter();
  }, [query]);

  return (

    <>
    <AppNavbar/>
    <main className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">
        Search Results for: <span className="text-blue-600">{query}</span>
      </h1>

      {loading ? (
        <p>Loading...</p>
      ) : results.length === 0 ? (
        <p className="text-gray-900">No countries found.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((country) => (
            <li key={country.Code} className="bg-white p-4 shadow rounded border">
              <h2 className="text-lg font-semibold">{country.Title}</h2>
              <p className="text-sm text-gray-500">Code: {country.Code}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
    </>
  );
}
