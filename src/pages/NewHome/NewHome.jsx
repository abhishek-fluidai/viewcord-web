import React, {useEffect, useState} from "react";
import styles from "./NewHome.module.css";
import {VideoCard} from "../../components/utils/ContentCards/VideoCard/VideoCard";
import {getFeed} from "../../components/common/FetchFuctions";
import { useNavigate } from "react-router-dom";
import { getLocal, setLocal } from "../../components/utils/StorageUtils";


const NewHome = () => {
  const [feed, setFeed] = useState([]);
  const navigate = useNavigate();
useEffect(() => {
    if (feed === undefined || feed.length === 0) {
      getFeedData();
    }
      // setFeed(res);
    }, []);
    const getFeedData = () => {
      const token = getLocal("token")
      if (token) {
        getFeed(token).then((res) => {
          console.log(res[0]);
          setFeed(res);
        });
      }
    };

  return (

    <div className=" w-fullbg-transparent relative flex overflow-hidden md:flex-row flex-col-reverse justify-between">      
      <main className="max-w-full h-full flex relative overflow-y-hidden  justify-center">
        <div className="h-full max-w-[1920px]  w-full mx-2 p-2 flex flex-wrap items-start justify-center rounded-tl grid-flow-col auto-cols-max gap-3 md:gap-4 overflow-y-scroll">
          {feed && feed.map((video,index) => {
            if (index < 30) {
              return <VideoCard
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
            } else {
              return 
            }
          })
         }
         {(feed == []) && feed.length === 0 && <div className="flex flex-col items-center justify-center w-full h-full">
           <h1 className="text-2xl font-bold text-gray-500">No videos found</h1>
           <button onClick={() => navigate("/preferences")} className="bg-gray-800 text-white px-4 py-2 rounded-md mt-4">Go to preferences</button>
          </div>}

          {(feed == []) && <div className="flex flex-col items-center justify-center w-full h-full">
            <div className={styles.loader}></div>
            </div>}
           
        </div>
      </main>
    </div>
  );
};
export default NewHome;

