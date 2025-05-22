import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function SearchBtn() {
    const navigate = useNavigate()
  return (
     <button
            onClick={()=>navigate("/search")}
              to={"/search"}
              className="px-2 py-1 my-5 cursor-pointer  hover:bg-gray-200 border flex rounded-full gap-1 active:scale-90 transition-all justify-center items-center mx-auto"
            >
              
              <h1 className="text-xl">Search</h1>
              <IoSearchOutline className="text-xl" />
            </button>
  )
}

export default SearchBtn