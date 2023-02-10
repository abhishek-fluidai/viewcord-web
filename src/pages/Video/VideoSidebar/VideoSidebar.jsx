import React, { useEffect } from "react";
import { SideBarVideoCard} from "../../../components/utils/ContentCards/VideoCard/VideoCard";

const VideoSidebar = ({ streams, loading }) => {
  return (
    <div className="m-2 grow xl:max-w-[600px] xl:w-[40%] w-full">
      {/* <div> */}
          <div className="flex flex-col grow">
            {streams && streams.map((stream) => <SideBarVideoCard {...stream} />)}
          </div>
      {/* </div> */}
    </div>
  );
};

export default VideoSidebar;
