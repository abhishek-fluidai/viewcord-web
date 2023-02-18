import React from "react";
import ShowMoreText from "../../../components/common/TextContainer/TextContainer";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { HiShare } from "react-icons/hi";
import { RiPlayListAddFill, RiHeadphoneFill } from "react-icons/ri";
import { formatDate, formatNumber } from "../../../components/utils/Formatters";

const VideoDetails = ({ fetchedData }) => {
  return (
    <div className="video-info xl:max-w-5xl w-full sm:mx-auto lg:mx-14 overflow-hidden mt-2">
      <h1 className="font-bold text-lg md:text-2xl  text-gray-800 dark:text-white  w-full overflow-ellipsis overflow-hidden mx-2">
        {fetchedData?.title}
      </h1>
      <div className="flex flex-col lg:flex-row justify-between items-start  lg:border-b-[1px]   lg:border-zinc-100/10  lg:pt-2 lg:pb-1 "
      >
        <div className="flex items-center flex-row gap-2 justify-between flex-shrink-1  w-full px-2 pr-4">
        <div className="flex items-center  justify-center flex-row gap-2  px-2 ">
        <p className="text-gray-600 dark:text-white/80 text-sm md:text-lg ">
          {formatDate(fetchedData?.uploadDate)}
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-lg ">
          •
        </p>
        <p className="text-gray-600 dark:text-white/80 text-sm md:text-lg">
          {formatNumber(fetchedData?.views)} views
        </p>
        </div>

        <div className="flex items-center  p-2 ">
          <p className="text-gray-600 dark:text-gray-200 text-sm md:text-lg flex  items-center gap-1">
            <AiFillLike className="text-grey-800 dark:text-white" />
            {fetchedData?.likes}
          </p>
          <p className="text-gray-600 dark:text-white text-sm md:text-lg  ml-2">
            •
          </p>
          <p className="text-gray-600 dark:text-gray-200 text-sm md:text-lg  ml-2 flex  items-center gap-1">
            <AiFillDislike className="text-white/80" />
            {fetchedData?.dislikes}
          </p>
        </div>
        </div>

        <div className="flex items-center flex-row gap-4 md:gap-8 flex-grow-1 w-full  p-2 justify-center lg:justify-end lg:pt-2 lg:pr-6">
          <ButtonConstructor icon={<HiShare className="text-grey-800 dark:text-white" />} text="Share" />
          <ButtonConstructor icon={<RiPlayListAddFill className="text-grey-800 dark:text-white" />} text="Save" />
          <ButtonConstructor icon={<RiHeadphoneFill className="text-grey-800 dark:text-white" />} text="Listen" />
        </div>
       
      </div>

      <div className="flex items-center justify-between flex-row w-full sm:px-4 p-4 ">
        <div className="flex items-center m-2 w-full ">
          <img
            className="w-[42px] h-[42px] rounded-full mr-4 "
            src={fetchedData?.uploaderAvatar}
            alt="avatar"
          />
          <div>
            <p className=" dark:text-white text-neutral-800 font-medium text-sm md:text-lg ">
              {fetchedData?.uploader}
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-xs md:text-[14px] ">
              {formatNumber(fetchedData?.uploaderSubscriberCount)}{" "}
              subscribers
            </p>
          </div>
          </div>
          <div className="ml-4">
            <button
              className="bg-slate-800 dark:bg-grey-200 text-white  px-4 py-2 rounded-full text-sm md:text-md font-medium"
              onClick={() => alert("Feature comming soon!")}
            >
              Subscribe
            </button>
          </div>
      </div>
    
      <p className="text-grey-600 dark:text-white max-w-5xl mx-auto whitespace-pre-wrap text-sm md:text-lg ">
        {fetchedData?.description && <ShowMoreText text={fetchedData?.description} limit={250} />}
      </p>
    </div>
  );
};

const ButtonConstructor = ({ icon, text }) => (
  <button
    className="flex items-center gap-2 text-gray-600 dark:text-white/60 text-lg ring-1 
    ring-gray-600 ring-white/100 ring-opacity-50  md:ring-0 group hover:ring-1 hover:ring-gray-600 dark:hover:ring-white/100 hover:ring-opacity-50 rounded-full px-4 py-1
    "
    onClick={() => alert("Feature comming soon!")}
  >
    {icon}
    <p className="text-gray-600 dark:text-white/90 text-sm md:text-lg group-hover:text-gray-800 dark:group-hover:text-white/100 transition duration-200 ease-in-out">
    {text}
    </p>
  </button>
)


export default VideoDetails;
