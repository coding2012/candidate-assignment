import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import ChevronUpDownIcon from "@heroicons/react/24/outline/ChevronUpDownIcon";
import { specialties } from "@/db/seed/advocates";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction } from "react";

interface SpecialtySelectorProps {
  value: string;
  additionalValue?: string;
  strikeValue?: string;
  onChange: (value: string) => void;
}
export default function SpecialtySelector({
  onChange,
  value,
  additionalValue,
  strikeValue,
}: SpecialtySelectorProps) {
  return (
    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
      <Listbox value={value} onChange={(newValue) => onChange(newValue)}>
        <div className="relative mt-2">
          <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
            <span className="flex items-center">
              {/* <img
              alt=""
              src={selected.avatar}
              className="h-5 w-5 flex-shrink-0 rounded-full"
            /> */}
              <span className="ml-3 block truncate">
                {value ? value : "Choose One"}
              </span>
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
              <ChevronUpDownIcon
                aria-hidden="true"
                className="h-5 w-5 text-gray-400"
              />
            </span>
          </ListboxButton>

          <ListboxOptions
            transition
            className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
          >
            {(additionalValue ? [additionalValue, ...specialties] : specialties)
              .filter((v) => v != strikeValue)
              .map((specialty) => (
                <ListboxOption
                  key={specialty}
                  value={specialty}
                  className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                >
                  <div className="flex items-center">
                    <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                      {specialty}
                    </span>
                  </div>

                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                    <CheckIcon aria-hidden="true" className="h-5 w-5" />
                  </span>
                </ListboxOption>
              ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </dd>
  );
}
