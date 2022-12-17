import React, { useEffect, useRef, useState } from "react";
import { Player } from "react-tuby";
import "react-tuby/css/main.css";

const VideoPlayer = ({ video_url, audio_url }) => {
  const videoRef = useRef(null);
  const [vidSources, setVidSources] = useState([]);
  const [thumbnail, setThumbnail] = useState();
  const [title, setTitle] = useState();
  const [descr, setDescr] = useState();

  const get = async () => {
    const response = await fetch(
      `https://pipedapi.kavin.rocks/streams/a4D_uNBebuA`
    );
    const data = await response.json();
    console.log(data);
    setVidSources(
      data.videoStreams.filter((vid) => {
        if (vid.videoOnly == false && vid.mimeType == "video/mp4") {
          return vid;
        }
      })
    );
    setThumbnail(data.thumbnailUrl);
    setDescr(data.description)
    setTitle(data.title);
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <div>
      {vidSources.length > 0 && (
        <>
          <Player
            dimensions={{ width: "960px", height: "580px" }}
            autoplay={false}
            playerRef={videoRef}
            poster={thumbnail}
            pictureInPicture={true}
            src={vidSources}
          />
          <h1>{title}</h1>
          <p>{descr}</p>
        </>
      )}
    </div>
  );
};

export default VideoPlayer;
