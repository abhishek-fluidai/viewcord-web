import React, { useEffect, useRef, useState } from "react";
import { getVideo } from "../../components/common/FetchFuctions";
import ShakaPlayer from "shaka-player-react";
import "shaka-player/dist/controls.css";
import "./Video.css";
import Loader from "../../components/common/Loader/Loader";
import dash from "../../components/common/DashUtils";
import VideoDetails from "./VideoDetails/VideoDetails";
import VideoSidebar from "./VideoSidebar/VideoSidebar";

const Video = () => {
  const [fetchedData, setFetchedData] = React.useState(null);
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const video_id = new URLSearchParams(window.location.search).get("v");
    const FetchVideoURL = async () => {
      const data = await getVideo(video_id);
      const player = videoRef?.current?.player;
      setFetchedData(data);
      const { videoStreams, audioStreams } = data;
      genrateDash([...videoStreams, ...audioStreams], player);
    };

    const genrateDash = async (raw, player) => {
      const genratedFile = dash.generate_dash_file_from_formats(raw);
      player?.load(
        "data:text/xml;charset=utf-8," + encodeURIComponent(genratedFile),
        0,
        "application/dash+xml"
      );
      setLoading(false);
    };
    if (document.readyState === "complete") {
      FetchVideoURL();
    } else {
      window.addEventListener("load", FetchVideoURL);
      // Remove the event listener when component unmounts
      return () => {
        window.removeEventListener("load", FetchVideoURL);
        videoRef?.current?.player?.destroy();
      };
    }
  }, []);

  return (
    <>
      {loading && <Loader />}
      <div className="m-2 md:ml-5 relative">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col">
            <div className="player-container">
              <div className="youtube-theme">
                <ShakaPlayer
                  // autoPlay
                  crossOrigin="anonymous"
                  ref={videoRef}
                />
              </div>
            </div>
            <VideoDetails fetchedData={fetchedData} />

          </div>

          <VideoSidebar fetchedData={fetchedData} />
        </div>
      </div>
    </>
  );
};

export default Video;
