import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Channel from "./pages/Channel/Channel";
import Navbar from "./components/common/Navigation/Navbar";
import SideBar from "./components/common/Navigation/Sidebar";
import Search from "./pages/Search/Search";
import Video from "./pages/Video/Video";

const App = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <div className={theme == "light" ? "" : "dark"}>
      <div className="flex flex-row">
        <SideBar />
        <div className="flex flex-col">
          <Navbar className="flex-grow-0 " />
          <div className=" w-[96vw] h-[92vh] relative bg-grey-200 dark:bg-slate-600 overflow-y-scroll ">
            <Routes>
              <Route exact path="/trending" element={<Home />} />
              <Route exact path="/subscriptions" element={<Home />} />
              <Route exact path="/watch" element={<Video />} />
              <Route exact path="/results" element={<Search />} />
              <Route exact path="/channel/:id" element={<Channel />} />
              <Route exact path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
