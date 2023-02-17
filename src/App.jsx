import React, { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import NewHome from "./pages/NewHome/NewHome";
import Navbar from "./components/common/Navigation/Navbar";
import SideBar from "./components/common/Navigation/Sidebar";
import { getLocal } from "./components/utils/StorageUtils";
const Home = lazy(() => import ("./pages/Home/Home"));
const Channel = lazy(() => import ("./pages/Channel/Channel"));
const Search = lazy(() => import ("./pages/Search/Search"));
const Video = lazy(() => import ("./pages/Video/Video"));
const Playlist = lazy(() => import ("./pages/Playlist/Playlist"));
const Preferences = lazy(() => import ("./pages/Preferences/Preferences"));
const Subscriptions = lazy(() => import ("./pages/Subscriptions/Subscriptions"));

const App = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : setTheme("dark");

  }, []);

  return (
    <div className={theme == "light" ? "" : "dark"}>
      <div className="flex flex-row m-0 p-0 min-w-full min-h-full overflow-hidden ">
        <SideBar />
        <div className="flex flex-col grow h-screen bg-grey-200 dark:bg-slate-600 items-center">
          <Navbar className="flex-grow-0 " />
          <div className="w-full max-w-[720px] sm:max-w-[1920px] h-[90vh] grow relative overflow-y-scroll ">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route exact path="/trending" element={<Home />} />
                <Route exact path="/channel/:channelId" element={<Channel />} />
                <Route exact path="/results" element={<Search />} />
                <Route exact path="/playlist" element={<Playlist />} />
                <Route exact path="/watch" element={<Video />} />
                <Route exact path="/preferences" element={<Preferences />} />
                <Route exact path="/subscriptions" element={<Subscriptions />} />
                {getLocal("token") ? <Route path="/" element={<NewHome />} /> : <Route path="/" element={<Home />} />}

              </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
