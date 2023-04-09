import React, { useEffect, useState } from "react";
import Loader from "../../components/utils/Loader/Loader";
import { getChannel, Get } from "../../components/common/FetchFuctions";
import { useNavigate } from "react-router-dom";
import { formatNumber } from "../../components/utils/Formatters";
import MetaHelmet from "../../components/common/MetaHelmet";
import {VideoCard} from "../../components/utils/ContentCards/VideoCard/VideoCard";
const Channel = () => {
  const [channelData, setChannelData] = useState([]);
  const [activeTab, setActiveTab] = useState("home");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const channel_id = window.location.pathname.split("/")[2];
    setLoading(true);
    Get(0, `channel/${channel_id}`)
      .then((data) => {
        setChannelData(data.data);
        //console.log(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        alert("Error Fetching channel");
      });
    setLoading(false);
  }, []);

  const getNextPage = () => {
    setLoading(true);
    Get(0, `nextpage/channel/${channelData?.id}`,{nextpage:channelData?.nextpage})
      .then((data) => {
        setChannelData(data.data);
        console.log(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        alert("Error Fetching channel");
        setLoading(false);
      });
  };


  return (
    <>
      <MetaHelmet title={channelData?.name ?? "Loading..."} />
      {!loading && (
        <main className="w-full md:my-4 overflow-hidden  justify-center items-center">
          <div
            className=" md:max-w-7xl md:w-[96%] flex items-center justify-center relative"
            style={{ margin: "0 auto", height: "236px" }}
          >
            <img
              src={channelData?.bannerUrl}
              className="w-full  min-h-full h-full object-cover md:rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-70"></div>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
              <img
                src={channelData?.avatarUrl}
                className="w-32 h-32 rounded-full border-4 border-white"
                alt="channel avatar"
              />
              <h1 className="text-2xl text-white font-bold mt-2">
                {channelData?.name}
              </h1>
              <p className="text-white text-sm mt-1">
                {formatNumber(channelData?.subscriberCount)} subscribers
              </p>
            </div>
          </div>

          <div className=" md:max-w-7xl md:w-[96%] mx-auto w-full flex flex-col md:flex-row justify-center items-center relative p-4 bg-gray-200 dark:bg-slate-800">
            <div className="flex overflow-x-auto overflow-y-hidden  whitespace-nowrap ">
              <ChannelTabs name="home"  active={activeTab} setActive={(e) => setActiveTab(e)} />
              {channelData?.tabs?.map((tab) => (
                <ChannelTabs name={tab.name} active={activeTab} setActive={(e) => setActiveTab(e)}/>
              ))}
              <ChannelTabs name="about" active={activeTab} setActive={(e) => setActiveTab(e)} />
            </div>
          </div>

          <div className=" md:max-w-7xl md:w-[96%] mx-auto w-full flex flex-col md:flex-row justify-center items-center relative p-4 ">
            {activeTab == "home" && (
              <div className="flex flex-col gap-4">
              <div className="flex mx-auto gap-2 flex-wrap">
                {channelData?.relatedStreams?.map((video,index) => (
                    <VideoCard
                    key={index}
                    title={video.title}
                    url={video.url}
                    thumbnail={video.thumbnail}
                    uploaderName={video.uploaderName}
                    uploaderAvatar={video.uploaderAvatar}
                    views={video.views}
                    duration={video.duration}
                    uploadedDate={video.uploadedDate}
                    isChannel={true}
                    />
                ))}
              </div>
              {channelData?.nextpage && (
                <button
                  className="bg-gray-800 text-white p-2 mb-14 items-center justify-center rounded-md mt-4 w-fit mx-auto px-6"
                  onClick={getNextPage}
                >
                  Load More
                </button>
              )}
              
              </div>
            )}
            {activeTab == "about" && (
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <h1 className="text-xl font-medium text-gray-500 dark:text-white">
                  Description :</h1>
                  <p className="text-md text-gray-500 dark:text-white
                  ">{channelData.description}</p>
                </div>
          </div>
          )}
        </div>
               
        </main>
      )}
    </>
  );
};

const ChannelTabs = ({ name, active, setActive }) => {
  return (
    <button className={["inline-flex items-center h-10 px-6 -mb-px text-sm text-center text-slate-700  border-0 bg-transparent hover:border-b-2 hover:border-slate-800 sm:text-base dark:hover:border-white/80 transition-all outline-none dark:text-white whitespace-nowrap focus:outline-none capitalize ", (active == name ? "border-b-2 border-white " : "")].join(" ")}
    onClick={() => setActive(name)}
    >
      {name}
    </button>
  );
};

export default Channel;
