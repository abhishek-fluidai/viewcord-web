import React, {useEffect} from "react";
import styles from "./VideoSidebar.module.css";
import VideoCard from "../../../components/utils/VideoCard/VideoCard";


const VideoSidebar = (props) => {
    useEffect(() => {
        console.log(props);
    }, [props]);
  return (
    <div>
      <h1>Video Sidebar</h1>
      
    </div>
  );
}

export default VideoSidebar;