import React, { useEffect, useRef, useState } from "react";
// import { Player } from "react-tuby";
import Loader from "../../common/Loader/Loader";
// import "react-tuby/css/main.css";
import ShakaPlayer from 'shaka-player-react';
import dash from '../../common/DashUtils'
import './VideoPlayer.css';
import 'shaka-player/dist/controls.css';
import styles from "./VideoPlayer.module.css";
import { getVideo } from "../../common/FetchFuctions";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [vidSources, setVidSources] = useState([]);
  // const [captions, setCaptions] = useState([]);
  const [thumbnail, setThumbnail] = useState();

  useEffect(() => {
    // setLoading(true);

   try {
    const video_id = new URLSearchParams(window.location.search).get('v');
    const FetchVideoURL = async () => {
      const response = await fetch('https://pipedapi.kavin.rocks/streams/' + video_id )
      const data = await response.json()
      const player = videoRef?.current?.player
  
      const {videoStreams, audioStreams, duration } = data
        // console.log(videoStreams, audioStreams, duration)
        // setRawData([...videoStreams, ...audioStreams])
  
        
       genrateDash([...videoStreams, ...audioStreams],player)
       
    }
  
  
    const genrateDash = async  (raw,player) => {
      const genratedFile = dash.generate_dash_file_from_formats(raw)
      player?.load('data:text/xml;charset=utf-8,' + encodeURIComponent(genratedFile), 0, 'application/dash+xml')
      // console.log(genratedFile)
      setLoading(false)
    }
    FetchVideoURL()
  
   } catch (error) {
      console.log(error);
    }

    return () => {
      // cleanup
      videoRef?.current?.player?.destroy();
    }

  }, []);

  return (
    <>
    {loading ? <Loader /> :<div className="player-container">
   <div className="youtube-theme">
      <ShakaPlayer
        // autoPlay
        crossOrigin="anonymous"
        ref={videoRef}
      />
    </div>
  </div>}
    
  </>
  );
     
};

export default VideoPlayer;
