import React from "react";
import VideoCard from "../../components/utils/VideoCard/VideoCard";

const Home = () => {
  return (
    <div className="dark h-screen w-full  dark:bg-[#000] relative flex overflow-hidden md:flex-col flex-col-reverse justify-between">
      
      <main className="max-w-full h-full flex relative overflow-y-hidden dark:bg-slate-600 justify-center">
        <div className="h-full max-w-[1920px]  w-full mx-2 p-2 flex flex-wrap items-start justify-center rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll">
            <VideoCard />
        </div>
      </main>
    </div>
  );
};
export default Home;
