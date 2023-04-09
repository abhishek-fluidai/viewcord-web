import React, { useEffect, useState, useRef } from "react";
import { VideoCard } from "../../components/utils/ContentCards/VideoCard/VideoCard";
import { Get } from "../../components/common/FetchFuctions";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getLocal } from "../../components/utils/StorageUtils";
import Loader from "../../components/utils/Loader/Loader";
import Filter from "./Filter/Filter";
import MetaHelmet from "../../components/common/MetaHelmet";

const NewHome = () => {
  const [feed, setFeed] = useState([]);
  const [limit, setLimit] = useState(30);
  const [containerHeight, setContainerHeight] = useState(
    window.innerHeight - 66
  );
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const axiosCancelSource = axios.CancelToken.source()


 
  useEffect(() => {
    if (feed === undefined || feed.length === 0) {
      setIsLoading(true);
      Get(0,"feed",{
        authToken: getLocal("token"),
      }, 
      axiosCancelSource.token
      ).then((res) => {
        setFeed(res.data);
        setIsLoading(false);
      });
    }

    function handleResize() {
      setContainerHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleScroll() {
    const container = containerRef.current;
    if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
      setLimit((prev) => prev + 30);
    }
  }

  const changeFilter = (filter) => {
    setFilter(filter);
  };

  return (
    <>
    <MetaHelmet title="Feed" />
    {/* <div className=" w-full bg-transparent relative flex overflow-hidden md:flex-row flex-col-reverse justify-between"> */}
      <main
        className=" h-full max-w-[1920px] w-full flex flex-col relative overflow-hidden  justify-center overflow-y-scroll"
        ref={containerRef}
        // style={{ height: containerHeight }}
        onScroll={handleScroll}
      >
        <div className="flex mt-16 items-center justify-center">
          <Filter filter={filter} setFilter={changeFilter} />
        </div>
        <div className="max-h-full max-w-[1920px] w-full p-2 px-4 flex flex-wrap items-start justify-center rounded-tl gap-6 sm:gap-4 ">
          {feed &&
            feed?.map((video, index) => {
              if (
                index < limit &&
                (filter == "all"
                  ? true
                  : filter == "shorts"
                  ? video.isShort
                  : !video.isShort)
              ) {
                return (
                  <VideoCard
                    key={video.id}
                    id={video.id}
                    title={video.title}
                    uploaderAvatar={video.uploaderAvatar}
                    uploaderUrl={video.uploaderUrl}
                    uploaderName={video.uploaderName}
                    thumbnail={video.thumbnail}
                    views={video.views}
                    url={video.url}
                    duration={video.duration}
                    uploadedDate={video.uploaded}
                    isFeed={true}
                  />
                );
              } else {
                return;
              }
            })}
          {feed == [] && feed.length === 0 && (
            <div className="flex flex-col items-center justify-center w-full h-full">
              <h1 className="text-2xl font-bold text-gray-500">
                No videos found
              </h1>
              <button
                onClick={() => navigate("/preferences")}
                className="bg-gray-800 text-white px-4 py-2 rounded-md mt-4"
              >
                Go to preferences
              </button>
            </div>
          )}
          {isLoading && <Loader />}
        </div>
      </main>
    {/* </div> */}
    </>
  );
};
export default NewHome;
