import axios from "../axios/axios";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import SomthingWentwrong from "./SomthingWentwrong";
import Card from "./Card";
import { useData } from "../ContextApi";

const api_key = import.meta.env.VITE_API_KEY;

function Search() {
    const {darkMode,setDarkMode} = useData()
  const [search, setSearch] = useState("");
  const [searchData, setsearchData] = useState([]);

  const getSearch = async (query) => {
    try {
      const response = await axios.get("/search", {
        params: {
          part: "snippet",
          q: query,
          type: "video",
          key: api_key,
          maxResults: 10,
        },
      });
      setSearch("");
      setsearchData(response);
      
    } catch (error) {
      console.error("Search API error:", error);
    }
  };
  console.log();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      getSearch(search);
    }
  };

  return (
    <>
   
   
      <form
        onSubmit={handleSubmit}
        className={`xl:w-[85vw] mb-5 ${darkMode ? "!bg-black text-white" : "bg-white text-black"} flex items-start justify-center pt-4 ` }
      >
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          className="px-5  border rounded-l-full outline-none py-1 text-xl w-xl "
          placeholder="Search..."
        />
        <button
          type="submit"
          className="text-2xl  px-3  py-1.5 rounded-r-full border cursor-pointer"
        >
          <IoSearchOutline />
        </button>
      </form>
      
       {searchData?.data?.items?.length > 0 ?  (<div className="w-full h-screen overflow-y-scroll flex flex-wrap gap-5 px-4">
        {searchData?.data?.items.map((card) => (
          <Card key={card.id.videoId} card={card}  />
        
        ))}
      </div>):<h1 className="text-center text-3xl font-bold pt-10">No data...</h1>}
 
   
    </>
  );
}

export default Search;
