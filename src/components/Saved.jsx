import React from "react";
import { useData } from "../ContextApi";
import { Link } from "react-router-dom";

function Saved() {
  const { saved,darkMode } = useData();
  console.log(saved);

  const savedData = saved.map((card) => (
    <Link to={`/videoplayer/${card.id.videoId ? card.id.videoId : card.id}`} className={` ${darkMode?"bg-gray-800":"bg-gray-200"} rounded-md px-2 py-3 xl:w-[30%] md:w-[45%] md:h-[40%] xl:h-[40%] `}>
      <div>
        <img
          className="w-[40%] h-full object-center object-cover"
          src={card?.snippet?.thumbnails?.high?.url}
          alt=""
        />
      </div>
      <h1 className="w-60%">{card?.snippet?.title}</h1>
    </Link>
  ));

  return (
    <div className={`xl:w-[85vw] ${darkMode ? "!bg-black text-white" : "bg-white text-black"} px-5 py-  xl:py-10  flex gap-3 flex-col justify-center flex-wrap  xl:px-10`}>
        <h1 className="text-xl text-center">Saved items</h1>
      {savedData.length?savedData:<h1 className="xl:text-3xl font-bold text-center h-screen">No Data...</h1>}
    </div>
  );
}

export default Saved;
