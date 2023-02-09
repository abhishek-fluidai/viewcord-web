import React, { useEffect, useRef, useState } from "react";
import { getVideo } from "../../components/common/FetchFuctions";
import ShakaPlayer from "shaka-player-react";
import "shaka-player/dist/controls.css";
import "./Video.css";
// import { useLocation } from "react-router-dom";
import Player from "../../components/utils/VideoPlayer/VideoPlayer";
import {useSearchParams} from 'react-router-dom'
import Loader from "../../components/common/Loader/Loader";
import dash from "../../components/common/DashUtils";
import VideoDetails from "./VideoDetails/VideoDetails";
import VideoSidebar from "./VideoSidebar/VideoSidebar";

const Video = () => {
  const [fetchedData, setFetchedData] = React.useState(null);
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const [src, setSrc] = useState(null);

  useEffect(() => {
    setLoading(true);    
    const video_id = searchParams.get('v')
      //new URLSearchParams(window.location.search).get("v");
    const FetchVideoURL = async () => {
      const data = await getVideo(video_id);
      const player = videoRef?.current?.player;
      setFetchedData(data);
      const { videoStreams, audioStreams } = data;
      genrateDash([...videoStreams, ...audioStreams], player);
    };

    const genrateDash = async (raw, player) => {
      const genratedFile =  dash.generate_dash_file_from_formats(raw);
      let data = "data:text/xml;charset=utf-8," + encodeURIComponent(genratedFile)
      // player.load(data,0,');  
      setSrc(data)
      setLoading(false);
    };

    FetchVideoURL();
  }, [searchParams.get("v")]);

  // useEffect(() => {

  //   return () => {
  //     videoRef?.current?.player?.destroy();
  //   }
  // },[])

  return (
    <>
      <div className="m-2 md:ml-5 relative">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col grow ">
            <div className="player-container">
              <Player src={src} />
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
