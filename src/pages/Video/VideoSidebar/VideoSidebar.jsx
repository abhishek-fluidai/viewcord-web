import React, {useEffect} from "react";
import styles from "./VideoSidebar.module.css";
import VideoCard from "../../../components/utils/VideoCard/VideoCard";


const VideoSidebar = ({streams}) => {
    useEffect(() => {
        console.log(streams);
}, [streams]);
  return (
    <div>
    <div className={styles.videoSidebar}> 
      <div className="flex flex-col">
        {streams && streams.map((stream) => (
          <VideoCard  {...stream}/>
          ))
          }
      </div>
    </div>
    </div>
  );
}

export default VideoSidebar;
