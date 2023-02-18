import React, { useEffect, useState, useRef } from "react";
import styles from "./NewHome.module.css";
import { VideoCard } from "../../components/utils/ContentCards/VideoCard/VideoCard";
import { getFeed } from "../../components/common/FetchFuctions";
import { useNavigate } from "react-router-dom";
import { getLocal } from "../../components/utils/StorageUtils";
import Loader from "../../components/utils/Loader/Loader";
import Filter from "./Filter/Filter";

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

  useEffect(() => {
    if (feed === undefined || feed.length === 0) {
      getFeedData();
    }

    function handleResize() {
      setContainerHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getFeedData = () => {
    const token = getLocal("token");
    if (token) {
      setIsLoading(true);
      getFeed(token).then((res) => {
        console.log(res[0]);
        setFeed(res);
        setIsLoading(false);
      });
    }
  };

  function handleScroll() {
    const container = containerRef.current;
    if (
      container.scrollTop + container.clientHeight >=
      container.scrollHeight
    ) {
      // console.log(container.scrollTop + container.clientHeight);
      setLimit((prev) => prev + 30);
    }
  }

  const changeFilter = (filter) => {
    setFilter(filter);
  };

  return (
    <div className=" w-fullbg-transparent relative flex overflow-hidden md:flex-row flex-col-reverse justify-between">
      <main
        className=" h-full max-w-[1920px] w-[95vw] flex flex-col   relative overflow-hidden  justify-center overflow-y-scroll"
        ref={containerRef}
        style={{ height: containerHeight }}
        onScroll={handleScroll}
      >
        <div className="flex flex-col items-start justify-center md:ml-24 mt-14">
          <Filter filter={filter} setFilter={changeFilter} />
        </div>
        <div className="h-full max-w-[1920px] w-[95vw]  p-2 px-4 flex flex-wrap items-start justify-center rounded-tl grid-flow-col auto-cols-max gap-3 md:gap-4 ">
          {feed &&
            feed.map((video, index) => {
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
    </div>
  );
};
export default NewHome;
