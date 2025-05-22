import React, { useState } from "react";
import { useData } from "../ContextApi";

function DarkModeButton() {
     const [isOn, setIsOn] = useState(false);
       const {darkMode,setDarkMode} = useData()

  const toggle = () => {
    setIsOn(!isOn);
    setDarkMode(!darkMode)
  };
  return (
     <button
     
      onClick={toggle}
      className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
        isOn ? 'bg-white' : 'bg-gray-300'
      }`}
    >
      
      <div
        className={`bg-black w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
          isOn ? 'translate-x-6' : ''
        }`}
      ></div>
    </button>
  );
}

export default DarkModeButton;
