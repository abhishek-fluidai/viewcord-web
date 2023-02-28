import React, { useEffect } from "react";
import { SideBarVideoCard } from "../../../components/utils/ContentCards/VideoCard/VideoCard";
import PlaylistCard from "../../../components/utils/ContentCards/PlaylistCard/PlaylistCard";

const VideoSidebar = ({ streams, loading }) => {
  return (
    <div className="m-2 grow ">
      {/* <div> */}
      <div className="flex flex-col grow gap-2   items-center justify-center " >
        {streams &&
          streams.map((stream, index) => {
            switch (stream.type) {
              case "stream":
                return (
                  <div className="flex flex-col w-full result" key={index}>
                    <SideBarVideoCard {...stream} />
                  </div>
                );
              case "playlist":
                return (
                  <div className="flex flex-col w-full result" key={index}>
                    <PlaylistCard {...stream} />
                  </div>
                );
            }
          })}
      </div>
      {/* </div> */}
    </div>
  );
};

export default VideoSidebar;
