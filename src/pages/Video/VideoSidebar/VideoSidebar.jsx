import React, { useEffect } from "react";
import { SideBarVideoCard} from "../../../components/utils/ContentCards/VideoCard/VideoCard";

const VideoSidebar = ({ streams, loading }) => {
  return (
    <div className="m-2 grow lg:max-w-[600px] w-[40%]">
      <div>
          <div className="flex flex-col">
            {streams && streams.map((stream) => <SideBarVideoCard {...stream} />)}
          </div>
      </div>
    </div>
  );
};

export default VideoSidebar;
