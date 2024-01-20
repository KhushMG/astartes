"use client";
import supabase from "@/utils/supabaseConfig"
import { useEffect, useState } from "react";
import ChapterList from "@/components/ChapterList";
import SearchBar from "@/components/SearchBar";

export default function Home({ searchParams }) {
  const [chapterList, setChapterList] = useState([]);
  {
    /* Set query to detected searchParms or default to blank. */
  }
  const query = searchParams?.query || "";

  useEffect(() => {
    // Function to fetch data from Supabase
    const fetchData = async (query) => {
      let queryBuilder = supabase
        .from("chapters")
        .select()
      {
        /* Conditional to parameterize query if user inputs one in the SearchBar*/
      }
      if (query) {
        queryBuilder = queryBuilder.or(
          `chapter_name.ilike.%${query}%`
        );
      }

      const { data, error } = await queryBuilder;

      if (error) {
        console.log("error fetching data");
      } else {
        setChapterList(data);
      }
    };

    fetchData(query);
    {
      /* Dependency array to rerender when data changes */
    }
  }, [query]);

  return (
    <main>
      <div className="mt-[2rem]">
        {/* SearchBar component captures user input. */}
        <SearchBar query={query} id="search" placeholder={"a Chapter"} />
      </div>
      <div className="mt-[2rem] mx-[2rem] px-3">
        {/* Rendering all chapters from database. */}
        <ChapterList chapterList={chapterList} />
      </div>
    </main>
  );
}
