import React from "react";
import { useNavigate } from "react-router-dom";

const ChannelCard = ({
  name,
  subscribers,
  thumbnail,
  verified,
  description,
  url,
}) => {
    const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-row items-center w-full max-w-[800px] max-h-[9rem] md:h-[9rem] justify-start p-4 gap-2"
      onClick={() => navigate(url)}
      >
        <div className="flex flex-row items-center justify-center w-18  h-18">
          <img
            className="rounded-full w-full h-full object-cover"
            src={thumbnail}
            alt="avatar"
          />
        </div>

        <div className="flex flex-col ml-2">
          <div className="flex flex-row items-center">
            <p className="text-sm md:text-[16px] my-1  text-neutral-800 dark:text-white font-medium">
              {name}
            </p>
            {verified && (
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

            <div className="ml-4 bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-2 text-xs text-gray-700 dark:text-gray-200 font-medium cursor-pointer">
              <p>Subscribe</p>
            </div>
          </div>
          <p className=" text-gray-700  dark:text-white/75 text-xs mb-3">
            {subscribers} subscribers
          </p>
          <p className="text-gray-700 dark:text-white/60 text-xs">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const SubscriptionCard = ({
  name,
  subscribers,
  thumbnail,
  verified,
  description,
  url,
  avatar,
  isSubscriptionPage,
}) => {
  return (
    <div>
      <div className="flex flex-row items-center w-full max-h-[9rem] justify-between md:justify-start p-4 py-6 gap-4">
        <div className="flex flex-row items-center ">
          <div className="flex flex-row items-center justify-between w-18  h-8 mr-2">
            <img
              className="rounded-full w-full h-full object-cover"
              src={isSubscriptionPage ? avatar : thumbnail}
              alt="avatar"
            />
          </div>

          {/* <div className="flex flex-col ml-2"> */}
          {/* <div className="flex flex-row items-center"> */}
          <p className="text-sm md:text-[16px] my-1  text-neutral-800 dark:text-white font-medium">
            {name}
          </p>
          {verified && (
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
        </div>

        <div className="ml-4 bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-2 text-xs text-gray-700 dark:text-gray-200 font-medium cursor-pointer">
          <p>{isSubscriptionPage ? "Unsubscribe" : "Subscribe"}</p>
        </div>
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};
export { ChannelCard, SubscriptionCard };
