import React from "react";
import ShowMoreText from "../../../components/common/TextContainer/TextContainer";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { HiShare } from "react-icons/hi";
import { RiPlayListAddFill, RiHeadphoneFill } from "react-icons/ri";

const VideoDetails = ({ fetchedData }) => {
  return (
    <div className="video-info xl:max-w-5xl w-full sm:mx-auto lg:mx-14 overflow-hidden mt-2">
      <h1 className="font-bold text-lg md:text-2xl  text-gray-800 dark:text-white  w-full overflow-ellipsis overflow-hidden mx-2">
        {fetchedData?.title}
      </h1>
      <div className="flex flex-col lg:flex-row justify-between items-start">
        <div className="flex items-center flex-row gap-2 justify-between flex-shrink-1  w-full px-2 pr-4">
        <div className="flex items-center  justify-center flex-row gap-2  px-2 ">
        <p className="text-gray-600 dark:text-white/80 text-sm md:text-lg ">
          {fetchedData?.uploadDate}
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-lg ">
          •
        </p>
        <p className="text-gray-600 dark:text-white/80 text-sm md:text-lg">
          {fetchedData?.views} views
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

        <div className="flex items-center flex-row gap-2 flex-grow-1 w-full  p-2 justify-center lg:justify-end lg:pt-2 lg:pr-6">
            <button
              className="text-grey-800 dark:text-white/90 border bottom-1 border-slate-800 dark:border-white/80 transition-all px-4 py-2 rounded-full text-sm md:text-lg font-medium flex gap-1 items-center"
              onClick={() => alert("Feature comming soon!")}
            >
              <HiShare className="text-grey-800 dark:text-white" />
              Share
            </button>
            <button
              className="text-grey-800 dark:text-white/90 border bottom-1 hover:text-slate-600 group border-slate-800 dark:border-white/80 transition-all px-4 py-2 rounded-full text-sm md:text-lg font-semibold flex gap-1 items-center"
              onClick={() => alert("Feature comming soon!")}
            >
              <RiPlayListAddFill className="text-grey-800 dark:text-white" />
              Save
            </button>
          {/* </div> */}
          {/* <div> */}
            <button
              className="text-grey-800 border bottom-1 dark:text-white/90 border-slate-800 dark:border-white/80 transition-all  px-4 py-2 rounded-full text-sm md:text-lg font-medium flex gap-1 items-center"
              onClick={() => alert("Feature comming soon!")}
            >
              <RiHeadphoneFill className="text-grey-800 dark:text-white" />
              Audio Mode
            </button>
          {/* </div> */}
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

export default VideoDetails;
