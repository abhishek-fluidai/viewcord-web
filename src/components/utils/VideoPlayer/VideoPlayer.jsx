import React, { useEffect, useRef, useState } from "react";
import "./VideoPlayer.css";
import shaka from "shaka-player/dist/shaka-player.ui";

function Player({ src, captions, thumbnail}) {
  const uiContainerRef = useRef(null);
  const videoRef = useRef(null);
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


    // install polyfills
    shaka.polyfill.installAll();

    player.configure({
      abr: {
        enabled: false,
      },
    });

    videoRef?.current?.addEventListener("ended", (event) => {
      console.log("ended");
      // window.location.reload();
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
      await player.load(uri, 0, "application/dash+xml");
      if (captions) {
        captions.forEach((caption) => {
          player.addTextTrackAsync(caption.url, caption.code, "subtitles", caption.mimeType);
        });
      }
      player.getVariantTracks()?.forEach((track) => {
        if (track.height === 360) {
          player.selectVariantTrack(track, true);
        }
      });
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
        className="player-loading-overlay"
        style={{ display: src && "none" }}
      >
        {" "}
      </div>
      <video
        ref={videoRef}
        // autoPlay
        onCanPlay={(e) => {
          videoRef.current.play();
          console.log("can play");
        }}
        onFullscreenChange={() => {
          console.log("fullscreen change");
        }}
        style={{
          maxWidth: "1080px",
          width: "100%",
          height: "100%",
          maxHeight: "548px"
        }}
        // {...rest}
      />
    </div>
  );
}

export default Player;
