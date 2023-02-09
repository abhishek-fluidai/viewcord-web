import React, { useEffect, useState } from "react";
import { getVideo } from "../../components/common/FetchFuctions";
import "./Video.css";
import Player from "../../components/utils/VideoPlayer/VideoPlayer";
import {useSearchParams} from 'react-router-dom'
import Loader from "../../components/common/Loader/Loader";
import dash from "../../components/common/DashUtils";
import VideoDetails from "./VideoDetails/VideoDetails";
import VideoSidebar from "./VideoSidebar/VideoSidebar";

const Video = () => {
  const [fetchedData, setFetchedData] = React.useState(null);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const [source, setSource] = useState(null);


  useEffect(() => {
    setLoading(true);    
    const video_id = searchParams.get('v')
    FetchVideoURL(video_id);
  }, [searchParams.get("v")]);
  
  const FetchVideoURL = async (video_id) => {
    const data = await getVideo(video_id);
    
    setFetchedData(data);
    const { videoStreams, audioStreams, duration  } = data;
    genrateDash([...videoStreams, ...audioStreams], duration);
    console.log(data);
  }
  const genrateDash = async (raw_streams,duration) => {
    const genratedFile =  dash.generate_dash_file_from_formats(raw_streams,duration);
    let data = "data:text/xml;charset=utf-8," + encodeURIComponent(genratedFile)
    setSource(data)
    setLoading(false);
  };

  return (
    <>
      <div className="m-2 md:ml-5 relative">
        <div className="flex flex-col grow lg:flex-row lg:gap-2">
          <div className="flex flex-col grow">
            <div className="player-container">
              {/* {loading && <Loader />} */}
              <Player src={source} captions={fetchedData?.subtitles} thumbnail={fetchedData?.thumbnailUrl} />
            </div>
            <VideoDetails fetchedData={fetchedData} />
          </div>
          <VideoSidebar loading={loading} streams={fetchedData?.relatedStreams} />
        </div>
      </div>
    </>
  );
};

export default Video;
