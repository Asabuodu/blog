"use client"
// pages/countries.tsx
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/navbar";

type Country = {
  Code: string;
  Title: string;
};

export default function CountryPage() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await axios.get("/api/countries");
        setCountries(res.data.value);
      } catch (err) {
        console.error("Failed to load countries:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return (
    <>
    <Navbar/>
    <main className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl text-black font-bold mb-4">WHO Countries</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {countries.map((country) => (
            <li
              key={country.Code}
              className="bg-white p-4 shadow rounded border"
            >
              <h2 className="text-lg text-black font-semibold">{country.Title}</h2>
              <p className="text-sm text-gray-500">Code: {country.Code}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
    </>
  );
}
