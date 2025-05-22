import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../ContextApi";
import axios from "../axios/axios";
const api_key = import.meta.env.VITE_API_KEY;
import { FaSave } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import Card from "./Card";
import SomthingWentwrong from "./SomthingWentwrong";
import SearchBtn from "./SearchBtn";

function VideoPlayer() {
  const {saved,setSaved} = useData()
  const { id } = useParams();
  const { card, data, setCardData, channel, setChannel } = useData();

    const handleClick = () => {
    console.log("cala");
 
    setSaved([...saved,card])
  };
  
  
  const getChannel = async (channelId) => {
    try {
      const response = await axios.get("/channels", {
        params: {
          part: "snippet,statistics",
          id: channelId,
          key: api_key,
        },
      });
      setChannel(response.data.items[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
      console.log("Details:", error?.response?.data || error.message);
    }
  };

  useEffect(() => {
    const fetchVideoAndChannel = async () => {
      const vdoCard = data?.data?.items.find((item) => item.id === id);
      if (vdoCard) {
        setCardData(vdoCard);
        const chid = vdoCard?.snippet?.channelId;
        if (chid) {
          await getChannel(chid);
        }
      }
    };

    if (id && data) {
      fetchVideoAndChannel();
    }
  }, [id, data]);

  return (
    <div className=" w-full px-5 xl:w-[85vw] h-screen overflow-y-scroll">
      <SearchBtn />
      <div   className="">
        <iframe
          className="xl:w-[50vw] rounded-xl "
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
         
        ></iframe>
        <div>
          <h1 className="text-xl font-bold pt-5">{card?.snippet?.title}</h1>
          <div className="flex justify-between pt-5">
            <div className="flex gap-2 ">
              <img
                className="xl:w-[3vw] w-25px h-[50px]  rounded-full"
                src={channel?.snippet?.thumbnails?.high?.url}
                alt=""
              />
              <div>
                <h1>{channel?.snippet?.title}</h1>
                {
                  <h1 className="text-sm text-gray-500">
                    {Math.floor(channel?.statistics?.subscriberCount / 1000)}k:
                    subscribers
                  </h1>
                }
              </div>
            </div>
            <div className="flex gap-5">
              <button onClick={(e) => handleClick(e)} className="bg-gray-200 rounded-full items-center flex px-3 text-xl sm:text-2xl xl:text-3xl py-1 sm:px-6 xl:px-10">
                <FaSave  className="" />
                save
              </button>
              <button className="bg-gray-200 rounded-full px-3 py-1 sm:px-6 xl:px-10">
                <CiShare2  className="text-xl sm:text-2xl xl:text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pt-10 ">
        <div className="w-full h-screen flex flex-wrap gap-5">
          {Array.isArray(data?.data?.items) && data.data.items.length > 0 ? (
            data.data.items.map((card) => <Card key={card.id} card={card} />)
          ) : (
            <SomthingWentwrong />
          )}
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
