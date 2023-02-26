import React, { useEffect, useState } from "react";
import { VideoCard } from "../../components/utils/ContentCards/VideoCard/VideoCard";
import { getTrending } from "../../components/common/FetchFuctions";
import { getLocal } from "../../components/utils/StorageUtils";
import MetaHelmet from "../../components/common/MetaHelmet";

const Home = ({isTrending}) => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const country =  getLocal("country" ) || "IN";
    getTrending(country).then((data) => {
      setTrending(data);
    });
  }, []);

  return (
    <>
  <MetaHelmet title={isTrending ? "Trending" : "Home"} />
    <div className=" w-fullbg-transparent relative flex overflow-hidden md:flex-row flex-col-reverse justify-between">
      <main className="max-w-full h-full flex relative overflow-y-hidden  justify-center">
        <div className="h-full max-w-[1920px]  w-full mx-2 p-2 flex flex-wrap items-start justify-center rounded-tl grid-flow-col auto-cols-max gap-3 md:gap-4 overflow-y-scroll">
          {trending.map((video) => (
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
              uploadedDate={video.uploadedDate}
            />
          ))}
        </div>
      </main>
    </div>
    </>
  );
};
export default Home;
