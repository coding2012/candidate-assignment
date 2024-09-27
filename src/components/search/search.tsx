import React from "react";
import { SearchParams } from "../../app/search/types";
import SpecialtySelector from "../specialtySelector";
import CitySelector from "../citySelector";

interface SearchParamsProps {
  setParams: (params: SearchParams) => void;
  params: SearchParams;
  next: () => void;
}

export default function Search({ setParams, params, next }: SearchParamsProps) {
  return (
    <form>
      <div>
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            This data is confidential.
          </h3>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Primary Concern
            </dt>
            <SpecialtySelector
              value={params.specialty1}
              onChange={(value) => setParams({ ...params, specialty1: value })}
            />
          </div>
          {params.specialty1 && (
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Secondary Concern
              </dt>
              <SpecialtySelector
                value={params.optionalSpecialty!}
                additionalValue="None (no secondary concern)"
                strikeValue={params.specialty1}
                onChange={(value) =>
                  setParams({ ...params, optionalSpecialty: value })
                }
              />
            </div>
          )}
          {params.optionalSpecialty && (
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                City
              </dt>
              <CitySelector
                value={params.city!}
                onChange={(value) => {
                  setParams({ ...params, city: value });
                }}
              />
            </div>
          )}
          {params.city && (
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900"></dt>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={next}
              >
                Find my Advocate!
              </button>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
