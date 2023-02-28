import React, {  lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import NewHome from "./pages/NewHome/NewHome";
import Navbar from "./components/common/Navigation/Navbar";
import SideBar from "./components/common/Navigation/Sidebar";
import {SmallLoader,Loader} from "./components/common/Loader/Loader";
import { getLocal } from "./components/utils/StorageUtils";


const Home = lazy(() => import ("./pages/Home/Home"));
const Channel = lazy(() => import ("./pages/Channel/Channel"));
const Search = lazy(() => import ("./pages/Search/Search"));
const Video = lazy(() => import ("./pages/Video/Video"));
const Playlist = lazy(() => import ("./pages/Playlist/Playlist"));
const Preferences = lazy(() => import ("./pages/Preferences/Preferences"));
const Subscriptions = lazy(() => import ("./pages/Subscriptions/Subscriptions"));
const Library = lazy(() => import ("./pages/Library/Library"));


const App = () => {
  const theme = useSelector((state) => state.theme);
  return (
    <div className={theme == "light" ? "" : "dark"}>
      <div className="flex flex-col grow h-screen bg-grey-200 dark:bg-slate-600 items-center overflow-hidden">
      <Navbar className="flex-grow-0 " />
        <div className="flex flex-row m-0 p-0 min-w-full min-h-full ">
          <SideBar />
          <div className="flex flex-col w-full ">
          <SmallLoader />
          <div className="w-full max-w-[720px] sm:max-w-[1920px] h-[92vh] grow relative overflow-hidden overflow-y-scroll">
            <Suspense fallback={ <Loader />    }>
              <Routes>
                <Route exact path="/trending" element={<Home isTrending={true} />} />
                <Route exact path="/channel/:channelId" element={<Channel />} />
                <Route exact path="/results" element={<Search />} />
                <Route exact path="/playlist" element={<Playlist />} />
                <Route exact path="/watch" element={<Video />} />
                <Route exact path="/preferences" element={<Preferences />} />
                <Route exact path="/feed/subscriptions" element={<Subscriptions />} />
                <Route exact path="/feed/library" element={<Library />} />

                {getLocal("token") ? <Route path="/" element={<NewHome />} /> : <Route path="/" element={<Home />} />}
              </Routes>
            </Suspense>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
