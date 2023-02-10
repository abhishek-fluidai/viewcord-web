import React from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { HiShare } from "react-icons/hi";
import { RiPlayListAddFill, RiHeadphoneFill } from "react-icons/ri";

const VideoDetails = ({ fetchedData }) => {
  return (
    <div className="video-info xl:max-w-5xl w-full mx-4 lg:mx-8 ">
      <h1 className="font-bold text-md md:text-2xl mb-2 md:mb-4 text-gray-800 dark:text-white  w-full overflow-ellipsis overflow-hidden">
        {fetchedData?.title}
      </h1>

      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="flex items-center m-2">
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
              {fetchedData?.fetchedData?.uploaderSubscriberCount > 1000000
                ? (fetchedData?.uploaderSubscriberCount / 1000000).toFixed(1) +
                  " M"
                : fetchedData?.uploaderSubscriberCount > 1000
                ? (fetchedData?.uploaderSubscriberCount / 1000).toFixed(1) +
                  " K"
                : fetchedData?.uploaderSubscriberCount}{" "}
              subscribers
            </p>
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

        <div className="flex items-center  p-2 ">
          <p className="text-gray-600 dark:text-gray-200 text-sm md:text-lg flex  items-center gap-1">
            <AiFillLike className="text-grey-800 dark:text-gray-400" />
            {fetchedData?.likes}
          </p>
          <p className="text-gray-600 dark:text-white text-sm md:text-lg  ml-2">
            •
          </p>
          <p className="text-gray-600 dark:text-gray-200 text-sm md:text-lg  ml-2 flex  items-center gap-1">
            <AiFillDislike className="text-red-500" />

            {fetchedData?.dislikes}
          </p>
        </div>

        <div className="flex items-center flex-row gap-2  p-2 ">
          <div className="ml-4">
            <button
              className="text-grey-800 ring-1 hover:ring-2 transition-all   px-4 py-2 rounded-full text-sm md:text-lg font-medium flex gap-1 items-center"
              onClick={() => alert("Feature comming soon!")}
            >
              <HiShare className="text-grey-800 dark:text-gray-400" />
              Share
            </button>
          </div>
          <div className="ml-4">
            <button
              className="text-grey-800 ring-1 hover:ring-2 transition-all px-4 py-2 rounded-full text-sm md:text-lg font-semibold flex gap-1 items-center"
              onClick={() => alert("Feature comming soon!")}
            >
              <RiPlayListAddFill className="text-grey-800 dark:text-gray-400" />
              Save
            </button>
          </div>
          <div className="ml-4">
            <button
              className="text-grey-800 ring-1 hover:ring-2 transition-all  px-4 py-2 rounded-full text-sm md:text-lg font-medium flex gap-1 items-center"
              onClick={() => alert("Feature comming soon!")}
            >
              <RiHeadphoneFill className="text-grey-800 dark:text-gray-400" />
              Audio Mode
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-lg mb-2">
          {fetchedData?.views} views
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-lg mb-2 ml-2">
          •
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-lg mb-2 ml-2">
          {fetchedData?.uploadDate}
        </p>
      </div>
      <p className="text-grey-600 dark:text-white max-w-5xl whitespace-pre-wrap text-sm md:text-lg ">
        {fetchedData?.description}
      </p>
    </div>
  );
};

export default VideoDetails;
