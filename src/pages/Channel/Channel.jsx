import React, { useEffect, useState } from "react";
import Loader from "../../components/utils/Loader/Loader";
import { getChannel } from "../../components/common/FetchFuctions";
// import { VideoCard }from "../../components/utils/VideoCard/VideoCard";

const Channel = () => {
  const [channelData, setChannelData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const channel_id = window.location.pathname.split("/")[2];
    setLoading(true);
    getChannel(channel_id)
      .then((data) => {
        // console.log(data);
        setChannelData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        alert("Error Fetching channel");
      });
    // setChannelData(data);
    setLoading(false);
  }, []);
  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <main className="w-full md:my-4 overflow-hidden  justify-center items-center">
          <div
            className=" md:max-w-7xl md:w-[96%] flex items-center justify-center relative"
            style={{ margin: "0 auto" }}
          >
            <img
              src={channelData.bannerUrl}
              className="w-full h-fit min-h-full object-cover md:rounded-lg"
              alt="channel banner"
            />
          </div>

          <div className="channel__details w-full relative flex items-center justify-center my-[5px] lg:my-4">
            <div className="flex flex-row justify-between md:max-w-7xl w-full md:w-[96%] my-2 relative md:border-[2.8px] md:border-slate-400 transition-all md:hover:border-slate-600 rounded-lg md:p-4">
              <div className="channel-header__left flex flex-row gap-4 md:gap-6  py-2  justify-start items-center ml-4 md:ml-8">
                <img
                  src={channelData.avatarUrl}
                  className="md:w-24 md:h-24  rounded-full object-contain ring-2 md:ring-4 ring-slate-500 p-1 shadow-lg"
                  alt="channel avatar"
                />
                <div className="channel-header__left__details ">
                  <h1
                    className="md:text-[28px] text-lg  text-black"
                    style={{ fontWeight: "500" }}
                  >
                    {channelData.name}
                  </h1>
                  <p className="text-xs md:text-sm  text-slate-800">
                    {channelData.subscriberCount > 1000000000
                      ? (channelData.subscriberCount / 1000000000).toFixed(1) +
                        "B"
                      : channelData.subscriberCount > 1000000
                      ? (channelData.subscriberCount / 1000000).toFixed(1) + "M"
                      : channelData.subscriberCount > 1000
                      ? (channelData.subscriberCount / 1000).toFixed(1) + "K"
                      : channelData.subscriberCount}{" "}
                    subscribers
                  </p>
                  {/* <p className="text-sm text-slate-800 channel__description">
                    {channelData.description}
                  </p> */}
                </div>
              </div>
              <div className="channel-header__right flex items-center justify-center mr-4 md:mr-8">
                <button
                  type="button"
                  onClick={() => alert("Feature Coming soon!")}
                  className="text-white bg-gray-800 hover:bg-gray-900  font-medium rounded-full text-xs md:text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700  dark:border-gray-700"
                >
                  subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="channel__tabs w-full relative flex items-center justify-center px-32">
            <div className="flex flex-row justify-between w-full my-2 relative  p-4">
             
             </div>
          </div>
        </main>
      )}
    </>
  );
};

export default Channel;
