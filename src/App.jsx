import React, { useEffect } from "react";

import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Home from "./components/Home";
import { useData } from "./ContextApi";
import { Route, Routes } from "react-router-dom";
import Trainding from "./components/Trainding";
import Popular from "./components/Popular";
import VideoPlayer from "./components/VideoPlayer";
import Saved from "./components/Saved";



function App() {
  const {darkMode,setDarkMode} = useData()
  return (
    <>
      <div className={`xl:flex ${darkMode ? "!bg-black text-white" : "bg-white text-black"}`}>
        <Navbar />
        <div >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trainding" element={<Trainding />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/search" element={<Search/>} />
            <Route path="/videoplayer/:id" element={<VideoPlayer/>} />
            <Route path="/saved" element={<Saved/>} />
          </Routes>
          
        </div>
      </div>
    </>
  );
}

export default App;
