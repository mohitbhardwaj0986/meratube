import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useData } from "../ContextApi";

function Card({ card }) {
const {darkMode} = useData()
  return (
    <>
      <Link
        to={`/videoplayer/${card.id.videoId ? card.id.videoId : card.id}`}
        
        className= {`xl:w-[32%] sm:w-[100] rounded-2xl ${darkMode?"bg-gray-800":"bg-gray-200"} flex flex-col gap-3 overflow-hidden `}
      >
        <div className="w-[100%] h-[45vh] overflow-hidden   rounded-2xl ">
          <img
            className="w-full h-full object-center object-cover hover:scale-120 transition duration-200"
            src={card.snippet.thumbnails.high.url}
            alt=""
          />
        </div>
        <div className="flex gap-3  w-full">
          <div className="w-[20%]">
            <div className="w-13 h-13  overflow-hidden rounded-full">
              <img
                className="object-center object-cover w-full h-full"
                src={card.snippet.thumbnails.medium.url}
                alt=""
               
              />
            </div>
          </div>
          <div className="w-[80%]">
            <h1 className="font-medium text-[1.1rem]">
              {card.snippet.title || card.snippet.title}
            </h1>
            <h1 className="text-gray-500">{card.snippet.channelTitle}</h1>
            <h1 className="text-gray-500 w-full">
              views:{" "}
              <span>
                {Math.floor(
                  card.statistics
                    ? card.statistics.viewCount / 1000
                    : Math.floor(Math.random() * 1000)
                )}
                k
              </span>
            </h1>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;
