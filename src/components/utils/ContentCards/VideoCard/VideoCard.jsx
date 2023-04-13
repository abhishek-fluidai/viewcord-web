import { useNavigate } from "react-router-dom";
import {
  formatNumber,
  formatReletiveDate,
  formatTime,
} from "../../../utils/Formatters";
import { BiAddToQueue, BiTimeFive } from "react-icons/bi";

export const VideoCard = ({
  title,
  thumbnail,
  views,
  duration,
  url,
  uploadedDate,
  uploaderName,
  uploaderUrl,
  uploaderAvatar,
  isFeed,
  isChannel,
}) => {
  const navigate = useNavigate();

  return (
    <div className=" w-full sm:max-w-[20rem] md:h-[260px] rounded-lg md:m-2 relative flex flex-col flex-shrink-0 bg-white dark:bg-slate-800 flex-grow  cursor-pointer hover:scale-105 transition-all overflow-x-hidden">
      <div
        className="relative w-full h-[65%] aspect-video top-0 rounded-md"
        onClick={() => navigate(url)}
      >
        <img
          className="w-full h-full  rounded-lg"
          src={thumbnail}
          alt="video thumbnail"
        />

        <span className="absolute bottom-2 font-bold right-2 px-2 rounded-lg text-white bg-black bg-opacity-70">
          {formatTime(duration)}
        </span>
        <span className="absolute bottom-2 font-bold left-2 px-2 rounded-lg text-white bg-black bg-opacity-75">
          {uploaderName}
        </span>
      </div>

      <div className=" flex flex-row w-full h-full ">
        <div className="basis-1/4  flex justify-center items-center"
             style={{display: (isChannel ? "none" : "flex")}}
                    >
          <img
            className=" w-12 h-12 rounded-full p-1 hover:ring-2 transition-all dark:hover:ring-neutral-400"
            src={uploaderAvatar}
            onClick={() => navigate(uploaderUrl)}
          />
        </div>
        <div
          className="p-2 basis-9/12 text-natural-800 flex flex-col justify-center"
          style={{flexBasis: (isChannel ? "90%" : "")}}
          onClick={() => navigate(url)}
        >
          <span className="text-natural-800 dark:text-white  rounded-md text-md video__card__title">
            {title}
          </span>

          <span className="text-slate-800 dark:text-white dark:text-opacity-75">
            {formatNumber(views)} views •{" "}
            { isFeed ? (
              <span className="capitalize">
                {formatReletiveDate(uploadedDate)}
              </span>
            ) : (
              uploadedDate
            )}
           
          </span>
        </div>
      </div>
    </div>
  );
};

export const SideBarVideoCard = ({
  title,
  thumbnail,
  views,
  duration,
  url,
  uploadedDate,
  uploaderName,
  uploaderUrl,
  uploaderAvatar,
  isSearch,
  isPlaylist,
}) => {
  const navigate = useNavigate();

  return (
    <div className="sm:max-w-[720px] h-[20rem] sm:max-h-[8rem] sm:h-[7rem] gap-1  sm:gap-4  max-w-[360px] rounded-lg md:m-2 relative flex flex-col sm:flex-row flex-shrink-0  flex-grow  cursor-pointer  transition-all overflow-hidden group  mx-auto sm:mx-0">
      <div
        className="relative md:w-[190px] h-[65%] sm:h-[100%] aspect-video top-0 rounded-md  "
        onClick={() => navigate(url)}
      >
        <img
          className="w-full h-full  rounded-lg object-cover 
          transition-all "
          src={thumbnail}
        />
        <div className="absolute bottom-0 left-0 w-full h-full ">
          <div className=" absolute flex-col justify-start gap-1 pt-1 right-1 top-1 hidden group-hover:flex">
            <button className="flex flex-row justify-center items-center bg-slate-900/60 p-1 rounded-md">
              <BiAddToQueue className="text-white text-lg w-fit " />
            </button>
            <button className="flex flex-row justify-center items-center bg-slate-900/60 p-1 rounded-md">
              <BiTimeFive className="text-white text-lg w-fit" />
            </button>
          </div>
          <span className="absolute bottom-2 font-bold text-sm right-2 px-1 rounded-lg text-white bg-black/60">
            {formatTime(duration)}
          </span>
        </div>
      </div>

      <div className=" flex flex-col w-full h-full pl-2 p-1">
        <div className="basis-1/4  flex ">
          <span
            className="text-natural-700 dark:text-white group-hover:text-natural-900 dark:group-hover:text-slate-200 rounded-md text-md overflow-hidden overflow-ellipsis "
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
            }}
            onClick={() => navigate(url)}
          >
            {title}
          </span>
        </div>

        <div
          className="basis-1/4 mt-2 text-natural-800 flex flex-row gap-2 justify-start group/sub"
          onClick={() => navigate(uploaderUrl)}
        >
          {!isPlaylist && uploaderAvatar && (
            <div className="flex flex-col items-center justify-center w-10 mr-2">
              <img
                className=" w-10 h-10 rounded-full p-1  transition-all dark:group-hover/sub:ring-neutral-400  dark:group-hover/sub:ring-2 group-hover/sub:ring-native-600 "
                src={uploaderAvatar}
              />
            </div>
          )}
          <div className="flex flex-col ">
            <div className="flex flex-row justify-between ">
              <span className="text-slate-800 text-xs hover:text-slate-900 dark:group-hover/sub:text-white  dark:text-white dark:text-opacity-75 font-medium ">
                {uploaderName}
              </span>
            </div>

            <div className="flex flex-row justify-between">
              <span className="text-slate-800 text-sm dark:text-white dark:text-opacity-75">
              {formatNumber(views)} views •{" "}{uploadedDate}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
