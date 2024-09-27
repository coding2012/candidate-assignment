"use client";

import { useAsyncEffect } from "@/hooks/useAsyncEffect";
import { useState } from "react";
import { Advocate, SearchParams } from "./types";
import SearchHero from "@/components/search/searchHero";
import Search from "@/components/search/search";
import SolaceAdvocatesList from "@/components/results";

export default function Home() {
  const [step, setStep] = useState(0);
  const [searchParams, setSearchParams] = useState({} as SearchParams);
  const [advocates, setAdvocates] = useState([] as Advocate[]);

  useAsyncEffect(
    async () => {
      if (step === 2) {
        console.log("fetching advocates...");
        const response = await fetch("/api/advocates", {
          method: "POST",
          body: JSON.stringify(searchParams),
        });
        const jsonResponse = await response.json();
        setAdvocates(jsonResponse.data);
      }
    },
    async () => {},
    [step]
  );

  return (
    <main style={{ margin: "24px" }}>
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Find Solace Advocates
      </h2>

      {step === 0 && <SearchHero next={() => setStep(1)} />}
      {step === 1 && (
        <Search
          setParams={setSearchParams}
          params={searchParams}
          next={() => setStep(2)}
        />
      )}
      {step === 2 && (
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Results</h2>
          <div
            className="bg-gray-100 p-4 rounded-md mb-4 cursor-pointer"
            onClick={() => setStep(1)}
          >
            <h3 className="text-lg font-medium text-gray-700">
              Search Criteria
            </h3>
            <pre className="text-sm text-gray-600">
              <input
                defaultValue={`Specialty: ${
                  searchParams.specialty1 || "XXX"
                }, City: ${searchParams.city || "XXX"}`}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ cursor: "pointer" }}
                onMouseOver={(e) => (e.currentTarget.style.cursor = "text")}
                readOnly
              />
            </pre>
          </div>
          <p>Here are the search results:</p>
          <ul>
            <SolaceAdvocatesList advocates={advocates} />
          </ul>
        </div>
      )}
    </main>
  );
}
