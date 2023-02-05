import React from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = ({
  title,
  thumbnail,
  views,
  duration,
  url,
  uploadedDate,
  uploaderName,
  uploaderUrl,
  uploaderAvatar,
}) => {
  const navigate = useNavigate();

  return (
    <div className="w-[348px] md:max-w-[348px] max-h-[18rem] md:h-[18rem] max-w-[18rem] rounded-lg md:m-2 relative flex flex-col flex-shrink-0 bg-white dark:bg-slate-800 flex-grow  cursor-pointer hover:scale-105 transition-all overflow-x-hidden">
      <div
        className="relative w-full h-[70%] aspect-video top-0 rounded-md"
        onClick={() => navigate(url)}
      >
        <img
          className="w-full h-full  rounded-lg"
          src={thumbnail}
          alt="video thumbnail"
        />

        <span className="absolute bottom-2 font-bold right-2 px-2 rounded-lg text-white bg-black bg-opacity-70">
          {duration > 3600
            ? new Date(duration * 1000)
                .toISOString()
                .split("T")[1]
                .substring(0, 8)
            : new Date(duration * 1000)
                .toISOString()
                .split("T")[1]
                .substring(3, 8)}
        </span>
        <span className="absolute bottom-2 font-bold left-2 px-2 rounded-lg text-white bg-black bg-opacity-75">
          {uploaderName}
        </span>
      </div>

      <div className=" flex flex-row w-full h-full ">
        <div className="basis-1/4  flex justify-center items-center">
          <img
            className=" w-12 h-12 rounded-full p-1 hover:ring-2 transition-all dark:hover:ring-neutral-400"
            src={uploaderAvatar}
            alt="avatar"
            onClick={() => navigate(uploaderUrl)}
          />
        </div>
        <div
          className="p-2 basis-9/12 text-natural-800 flex flex-col justify-center"
          onClick={() => navigate(url)}
        >
          <span className="text-natural-800 dark:text-white  rounded-md text-md video__card__title">
            {/* {video.title.length > 30
                    ? video.title.substring(0, 36) + "..." */}
            {title}
          </span>

          <span className="text-slate-800 dark:text-white dark:text-opacity-75">
            {views > 1000000
              ? (views / 1000000).toFixed(1) + " M"
              : views > 1000
              ? (views / 1000).toFixed(1) + " K"
              : views}{" "}
            views • {uploadedDate}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
