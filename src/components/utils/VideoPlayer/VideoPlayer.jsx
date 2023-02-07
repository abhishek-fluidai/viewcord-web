import React, { useEffect, useRef } from "react";
import ShakaPlayer from "shaka-player-react";
import dash from "../../common/DashUtils";
import "./VideoPlayer.css";
import "shaka-player/dist/controls.css";

const VideoPlayer = ({ videoSources, audioSources, thumbnail }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const LoadVideo = async () => {
      const genratedFile = dash.generate_dash_file_from_formats([
        ...videoSources,
        ...audioSources,
      ]);
      console.log("genratedFile", genratedFile);
      const player = videoRef?.current?.player;
      const timer = setInterval(() => {
       if (player) {
          clearInterval(timer);
       }
      }, 300);


      player?.load(
        "data:text/xml;charset=utf-8," + encodeURIComponent(genratedFile),
        0,
        "application/dash+xml"
      );
    };
    if (document.readyState === "complete") {
      LoadVideo();
    } else {
        window.addEventListener("load", LoadVideo);
      return () => {
        window.removeEventListener("load", LoadVideo);
        videoRef?.current?.player?.destroy();
        clearInterval(timer);
      };
    }
  }, [videoRef.current]);

  return (
    <>
      <div className="player-container">
        <div className="youtube-theme">
          <ShakaPlayer crossOrigin="anonymous" ref={videoRef} />
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
