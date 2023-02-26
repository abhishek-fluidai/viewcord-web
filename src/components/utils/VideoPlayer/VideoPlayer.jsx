import React, { useEffect, useRef, useState } from "react";
import "./VideoPlayer.css";
import shaka from "shaka-player/dist/shaka-player.ui";
import { getLocal } from "../StorageUtils";

function Player({ src, captions, thumbnail, onVideoEnded }) {
  const uiContainerRef = useRef(null);
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0)
  const [player, setPlayer] = useState(null);
  const [ui, setUi] = useState(null);

  useEffect(() => {
    const player = new shaka.Player(videoRef.current);
    setPlayer(player);

    const ui = new shaka.ui.Overlay(
      player,
      uiContainerRef.current,
      videoRef.current
    );
    setUi(ui);

    shaka.polyfill.installAll();

    player.configure({
      abr: {
        enabled: false,
      },
    });

    return () => {
      player.destroy();
      if (ui) {
        ui.destroy();
      }
    };
  }, []);

  // Keep shaka.Player.configure in sync.
  // useEffect(() => {
  //   if (player && config) {
  //     player.configure(config);
  //   }
  // }, [player, config]);

  // Load the source url when we have one.
  const loadVideo = async (uri) => {
    try {
      videoRef?.current?.setAttribute("poster", thumbnail);
      // let storedTime = localStorage.getItem('currentTime');
      await player.load(uri,  0, "application/dash+xml");
      if (captions) {
        captions.forEach((caption) => {
          player.addTextTrackAsync(
            caption.url,
            caption.code,
            "subtitles",
            caption.mimeType,
          );
        });
      }

      const quality = getLocal("quality") || 360;
      for (const track of player.getVariantTracks()) {
        if (track.height === quality || track.height === quality + 1) {
          player.selectVariantTrack(track, true);
          break;
        }
      }

    } catch (error) {
      console.error(error);
      // window.location.reload();
    }
  };

  useEffect(() => {
    if (player && src) {
      loadVideo(src);
    }
  }, [player, src]);

  return (
    <div ref={uiContainerRef} className="youtube-theme">
      <div
        className="player-loading-overlay bg-slate-700"
        style={{ display: src && "none" }}
      >
        <div className=" pac-man"></div>
      </div>
      <video
        ref={videoRef}
        autoPlay
        // onPause={(e) => {
        //   let time = e.target.currentTime
        //   localStorage.setItem('currentTime', time);
        // }}
        onEnded={onVideoEnded}
        style={{
          maxWidth: "1080px",
          width: "100%",
          height: "100%",
          maxHeight: "548px",
        }}
      />
    </div>
  );
}

export default Player;
