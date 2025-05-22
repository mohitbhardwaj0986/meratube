import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { BiSolidSave } from "react-icons/bi";
import { FaHistory } from "react-icons/fa";
import { useData } from "../ContextApi";
import DarkModeButton from "./DarkModeButton";
function Navbar() {
  const { darkMode, setDarkMode } = useData();

  return (
    <div
      className={`xl:w-[15vw] w-full xl:h-screen h-[20vh] ${
        darkMode ? "bg-gray-900 text-white" : "xl:bg-gray-100 text-black"
      }    px-4  text-start`}
    >
      <div className="px-7 flex xl:flex-col gap-3 h-[50%] pt-6">
        <Link to={"/"} className="flex items-center gap-1 ">
          <FaHome />
          Home
        </Link>
        <Link to={"/trainding"} className="flex items-center gap-1">
          <GiNetworkBars />
          Trainding
        </Link>
        <Link to={"/popular"} className="flex items-center gap-1">
          <FaFire />
          Popular
        </Link>
      </div>
      <hr className="hidden xl:block" />
      <div className="px-7 flex xl:flex-col gap-3 pt-6 ">
       
       
        <Link to={"/saved"} className="flex items-center gap-1">
          <BiSolidSave />
          Saved
        </Link>

        <DarkModeButton />
      </div>
    </div>
  );
}

export default Navbar;
