"use client"
import supabase from "../../utils/supabaseConfig";
import { useEffect, useState } from "react";
import AstarteList from "../components/AstarteList";
import SearchBar from "@/components/SearchBar";


export default function Home({ searchParams }) {
  const [astartesList, setAstartesList] = useState([]);
  const query = searchParams?.query || '';

  useEffect(() => {
    // Function to fetch data from Supabase
    const fetchData = async ( query ) => {
      let queryBuilder = supabase
        .from("astartes")
        .select()
        .order("allegiance", { ascending: true });

      if (query) {
        queryBuilder = queryBuilder.ilike("name", `%${query}%`); 
      }

      const { data, error } = await queryBuilder;

      if (error) {
        console.log("error fetching data");
      } else {
        setAstartesList(data);
      }
    };

    fetchData(query);
  }, [query]);

  return (
    <main>
      <div className="mt-[2rem]">
        <SearchBar query={query}/>
      </div>
      <div className="mt-[2rem] mx-[2rem]">
        <AstarteList astartesList={astartesList} />
      </div>
    </main>
  );
}
