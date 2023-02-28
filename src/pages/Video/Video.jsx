import React, { useEffect, useState, lazy, Suspense } from "react";
import axios from "axios";
import { Get } from "../../components/common/FetchFuctions";
import "./Video.css";
import Player from "../../components/utils/VideoPlayer/VideoPlayer";
import {useSearchParams, useNavigate} from 'react-router-dom'
import dash from "../../components/utils/DashUtils";
// import VideoDetails from "./VideoDetails/VideoDetails";
// import VideoSidebar from "./VideoSidebar/VideoSidebar";
const VideoDetails = lazy(() => import("./VideoDetails/VideoDetails"));
const VideoSidebar = lazy(() => import("./VideoSidebar/VideoSidebar"));
const VideoComments = lazy(() => import("./VideoComments/VideoComments"));
import MetaHelmet from "../../components/common/MetaHelmet";
// import Dialog from "../../components/common/Dialog";
const Dialog = lazy(() => import("../../components/common/Dialog"));
import { useDispatch } from "react-redux";
import { switchLoaderState } from "../../redux/loader";

const Video = () => {
  const [fetchedData, setFetchedData] = React.useState(null);
  const [videoId , setVideoId] = useState(null);
  const [videoEnded, setVideoEnded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const [source, setSource] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const axiosCancelSource = axios.CancelToken.source();


  useEffect(() => {
    setLoading(true); 
    setFetchedData(null);
    dispatch(switchLoaderState(true));
    setVideoEnded(false);
    const video_id = searchParams.get('v');
    setVideoId(video_id);
    FetchVideoURL(video_id);
  }, [searchParams.get("v")]);

  useEffect(() => {
    if (videoEnded) {
      navigate(fetchedData?.relatedStreams[0].url);
    }
  }, [videoEnded]);
  
  const FetchVideoURL = async (video_id) => {
    if (videoId == video_id) {
      return; 
    } 
    const res = await Get(0,`streams/${video_id}`,{},axiosCancelSource.token)
    setFetchedData(res.data);
    const { videoStreams, audioStreams, duration  } = res.data;
    genrateDash([...videoStreams, ...audioStreams], duration);
  }
  const genrateDash = async (raw_streams,duration) => {
    const genratedFile =  dash.generate_dash_file_from_formats(raw_streams,duration);
    let data = "data:text/xml;charset=utf-8," + encodeURIComponent(genratedFile)
    setSource(data)
    dispatch(switchLoaderState(false));
    setLoading(false);
  };

  return (
    <>
    <MetaHelmet
      title={fetchedData?.title ? fetchedData.title : "Loading..."}
    />
          <Dialog />


      <div className="relative box-border">
        <div className="grid max-w-full  grid-flow-row xl:gap-4">
            <div className="player-container">
              {/* {loading && <Loader />} */}
              <Player
                src={source}
                captions={fetchedData?.subtitles}
                thumbnail={fetchedData?.thumbnailUrl}
                onVideoEnded={() => setVideoEnded(true)}
              />
            </div>
        <div className="flex  items-start gap-2  ">
           {/* <div className="flex flex-col flex- flex-grow "> */}
           <Suspense fallback={<div>Loading...</div>}>
              <VideoDetails fetchedData={fetchedData} />
            </Suspense>
            {/* <Suspense fallback={<div>Loading...</div>}>
              <VideoComments fetchedData={fetchedData} />
            </Suspense> */}
          {/* </div> */}
         <Suspense fallback={<div>Loading...</div>}>
          <VideoSidebar 
          loading={loading}
          streams={fetchedData?.relatedStreams} />
          </Suspense>
        </div>
        </div>
      </div>


    </>
  );
};

export default Video;
