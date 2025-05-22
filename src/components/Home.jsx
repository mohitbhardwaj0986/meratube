import React, { useEffect } from "react";
import Card from "./Card";
import { useData } from "../ContextApi";
import axios from "../axios/axios";
import SomthingWentwrong from "./SomthingWentwrong";
const api_key = import.meta.env.VITE_API_KEY;

import SearchBtn from "./SearchBtn";

function Home() {
  const { data } = useData();
  const { setData } = useData();

  const getData = async () => {
    try {
      const response = await axios.get("/videos", {
        params: {
          part: "snippet, statistics",
          chart: "mostPopular",
          regionCode: "IN",
          maxResults: 70,
          key: api_key,
        },
      });
      setData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
      console.log("Details:", error?.response?.data || error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="pt-5 mb-5">
       <SearchBtn/>
      </div>
      <div className="w-full xl:h-screen  xl:overflow-y-scroll flex flex-wrap gap-5 px-4">
        {Array.isArray(data?.data?.items) && data.data.items.length > 0 ? (
          data.data.items.map((card) => <Card key={card.id} card={card} />)
        ) : (
          <SomthingWentwrong />
        )}
      </div>
    </>
  );
}

export default Home;
