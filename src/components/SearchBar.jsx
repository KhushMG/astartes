"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search({ query }) {
  const searchParams = useSearchParams();
  const pathname = usePathname(); 
  const { replace } = useRouter(); 


  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex flex-1 justify-center">
      <div className="relative ">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          id="search"
          className="block rounded-md border w-[20rem] border-gray-200 py-[9px] pl-10 text-sm text-black outline-2 placeholder:text-gray-500"
          placeholder="Search for an Astartes by name"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get("query")?.toString()}
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
        </div>
      </div>
    </div>
  );
}
