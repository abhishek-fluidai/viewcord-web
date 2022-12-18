import React, { useEffect, useRef, useState } from "react";
import { Player } from "react-tuby";
import Loader from "../../common/Loader/Loader";
import "react-tuby/css/main.css";
import styles from "./VideoPlayer.module.css";
import { getVideo } from "../../common/FetchFuctions";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [vidSources, setVidSources] = useState([]);
  // const [captions, setCaptions] = useState([]);
  const [thumbnail, setThumbnail] = useState();

  useEffect(() => {
   const video_id = new URLSearchParams(window.location.search).get('v');
    setLoading(true);
    getVideo(video_id)
      .then((data) => {
        // console.log(data);
        setVidSources(
          data.videoStreams.filter((vid) => {
            if (vid.videoOnly == false && vid.mimeType == "video/mp4") {
              return vid;
            }
          })
        );
        // setCaptions(data.subtitles);
        setThumbnail(data.thumbnailUrl);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        alert("Error fetching video");
      });
  }, []);

  return (
    <>
    {loading && <Loader />}
      {vidSources.length > 0 &&  (
        <div className={styles.player__container}>
        <Player
          dimensions={{ width: "100%", height: "100%" }}
          autoplay={false}
          playerRef={videoRef}
          poster={thumbnail}
          // subtitles={captions}
          pictureInPicture={true}
          src={vidSources}
        />
        </div>
      )}
    </>
  );
};

export default VideoPlayer;
