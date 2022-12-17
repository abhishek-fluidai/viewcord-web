import React, {useEffect, useCallback} from 'react';
import { getTrending } from '../../utils/FetchFuctions';
import Loader from '../../utils/Loader/Loader';
import {useNavigate} from 'react-router-dom';





const VideoCard = () => {
    const [trending, setTrending] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        getTrending('IN')
            .then((data) => {
                console.log(data);
                setTrending(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                alert('Error fetching trending videos');
            });
    }, []);

    return (
        <>
            {loading && <Loader />}
            {trending.length > 0 && (
                trending.map((video, index) => {
                    return (
                        <div key={index} className="w-96 h-60 rounded-lg relative flex-shrink-0 flex-grow shadow-md cursor-pointer bg-gray-400" onClick={() =>  navigate(video.url)}>
                            <img
                                className="w-full h-full object-cover rounded-lg"
                                src={video.thumbnail}
                                alt="video thumbnail"
                            />
                            <span className="absolute bottom-2 left-2 bg-slate-600 p-2 rounded-md text-white ">
                                {video.title.length > 30
                                    ? video.title.substring(0, 36) + '...'
                                    : video.title
                                    }
                            </span>
                            <span className="absolute bottom-2 right-2 bg-slate-600 p-2 rounded-md text-white ">
                                {video.views> 1000000 ? (video.views/1000000).toFixed(1) + ' M' : video.views > 1000 ? (video.views/1000).toFixed(1) + ' K' : video.views}
                            </span>
                            <span>
                                <img
                                    className="absolute top-2 right-2 w-12 h-12 rounded-full shadow-sm"
                                    src={video.uploaderAvatar}
                                    alt="avatar"
                                />
                            </span>
                        </div>
                    );
                })
            )}
         
        </>
    );
    }

export default VideoCard;