import React from "react";
import { useNavigate } from "react-router-dom";
import { RiPlayList2Fill } from "react-icons/ri";

let data = {
  url: "/playlist?list=PLZlA0Gpn_vH_NT5zPVp18nGe_W9LqBDQK",
  type: "playlist",
  name: "React",
  thumbnail:
    "https://pipedproxy.kavin.rocks/vi/1wZoGFF_oi4/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLCRwXqkdoRgHO5607t0XDILdavimQ&host=i.ytimg.com",
  uploaderName: "Web Dev Simplified",
  uploaderUrl: "/channel/UCFbNIlppjAuEX4znoulh0Cw",
  uploaderVerified: true,
  playlistType: "NORMAL",
  videos: 63,
};

const PlaylistCard = ({
  name,
  url,
  uploaderName,
  uploaderUrl,
  uploaderVerified,
  videos,
  thumbnail,
  isSearch,
}) => {
  const navigate = useNavigate();
  return (
    <div className="md:max-w-[720px] max-h-[8rem] md:h-[7rem]  h-[200px] rounded-lg md:m-2 relative flex flex-row 
    max-w-[600px]
    flex-shrink-0  flex-grow  cursor-pointer  overflow-hidden group ">
      <div
        className="relative w-full h-[98%] max-w-[190px] top-0 rounded-lg mr-2 i transition-all bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${thumbnail})` }}
        onClick={() => navigate(url)}
      >
        <div className="absolute bottom-0 right-0 h-full w   w-2/4 bg-slate-800/80 flex flex-col items-center justify-center   ">
          <RiPlayList2Fill className="h-6 w-6 text-white  m-2 mb-1" />
          <span className="text-white text-md font-[500]">
            {videos}
          </span>
        </div>
      </div>

      <div className=" flex flex-col w-full h-full pl-2 p-1">
        <div className="basis-1/4  flex ">
          <span
            className="text-natural-700 dark:text-white group-hover:text-natural-900 dark:group-hover:text-slate-300 rounded-md text-md md:text-lg"
            onClick={() => navigate(url)}
          >
            {isSearch
              ? name
              : name?.length > 30
              ? name?.substring(0, 60) + "..."
              : name}
          </span>
        </div>

        <div
          className="basis-1/4 mt-1 text-natural-800 flex flex-row justify-start group/sub"
          onClick={() => navigate(uploaderUrl)}
        >
          <div className="flex flex-col ">
            <div className="flex flex-row justify-between ">
              <span className="text-slate-800 text-xs hover:text-slate-900 dark:hover:text-white dark:text-white dark:text-opacity-75 font-medium flex flex-row gap-1 items-center">
                {uploaderName}
                {uploaderVerified && (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 ml-1 dark:text-white fil-gray-700 dark:fill-gray-200 "
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                  >
                    <g>
                      <path d="M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M9.8,17.3l-4.2-4.1L7,11.8l2.8,2.7L17,7.4 l1.4,1.4L9.8,17.3z"></path>
                    </g>
                  </svg>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
