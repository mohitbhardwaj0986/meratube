import React, { useEffect } from "react";
import Card from "./Card";
import { useData } from "../ContextApi";
import SomthingWentwrong from "./SomthingWentwrong";
import SearchBtn from "./SearchBtn";

function Trainding() {
  const { data } = useData();
  return (
    <div>
      <div className="pt-5 mb-5">
       <SearchBtn/>
      </div>
      <div className="w-full h-screen overflow-y-scroll flex flex-wrap gap-5 px-4">
        {Array.isArray(data?.data?.items) && data.data.items.length > 0 ? (
          data.data.items.map((card) => <Card key={card.id} card={card} />)
        ) : (
          <SomthingWentwrong />
        )}
      </div>
    </div>
  );
}

export default Trainding;
