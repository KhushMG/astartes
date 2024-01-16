"use client"
import supabase from "../../utils/supabaseConfig";
import { useEffect, useState } from "react";
import AstarteList from "../components/AstarteList";
import SearchBar from "@/components/SearchBar";


export default function Home({ searchParams }) {
  const [astartesList, setAstartesList] = useState([]);
  {/* Set query to detected searchParms or default to blank. */}  
  const query = searchParams?.query || '';

  useEffect(() => {
    // Function to fetch data from Supabase
    const fetchData = async ( query ) => {
      let queryBuilder = supabase
        .from("astartes")
        .select()
        .order("name", { ascending: true });
      
      {/* Conditional to parameterize query if user inputs one in the SearchBar*/}  
      if (query) {
        queryBuilder = queryBuilder.or(
          `name.ilike.%${query}%,chapter.ilike.%${query}%,allegiance.ilike.%${query}, rank.ilike.%${query}`
        );
      }

      const { data, error } = await queryBuilder;

      if (error) {
        console.log("error fetching data");
      } else {
        setAstartesList(data);
      }
    };

    fetchData(query);
    {/* Dependency array to rerender when data changes */}  
  }, [query]);

  return (
    <main>
      <div className="mt-[2rem]">
        {/* SearchBar component captures user input. */}
        <SearchBar query={query} id="search" />
      </div>
      <div className="mt-[2rem] mx-[2rem] px-3">
        {/* Rendering all astartes from database. */}
        <AstarteList astartesList={astartesList} />
      </div>
    </main>
  );
}
