import React, { useEffect, useState } from "react";
// import { getUserPlaylists } from "../../components/common/FetchFuctions";
import { Get } from "../../components/common/FetchFuctions";
import PlaylistCard from "../../components/utils/ContentCards/PlaylistCard/PlaylistCard";
import Loader from "../../components/utils/Loader/Loader";
import {RiPlayListAddFill} from "react-icons/ri"

const Library = () => {
    const [playlists, setPlaylists] = useState(null);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (playlists == null ) {
            setLoading(true);
            getPlaylists();
    }
  }, []);

  const getPlaylists = async () => {
    const res = await Get(1,'user/playlists')
    if (res.error) {
        alert(res.error);
        setLoading(false);
        return;
    }
    setPlaylists(res.data);
    setLoading(false);
    };

  return (
    <div
      className="p-4"
    >
      <h3
        className="text-5xl font-bold text-gray-800 text-center w-full md:text-left py-2 pb-4 dark:text-white/80"
      >Library</h3>
      <div className="flex flex-col w-full  p-4">
        <button className="bg-gray-200 w-fit flex  dark:bg-gray-800 rounded-md px-4 py-3 text-xs text-gray-700 dark:text-gray-200 font-medium cursor-pointer text-md" >
          <RiPlayListAddFill className="w-4 h-4 mr-2" /> Create Playlist
        </button>
      </div>
        <div className="flex flex-col">
          <>
            {loading && <Loader /> }
            {playlists?.map((playlist) => (
                <PlaylistCard 
                    key={playlist.id}
                    name={playlist.name}
                    videos={playlist.videos}
                    thumbnail={playlist.thumbnail}
                    url={"/playlist?list="+playlist.id} />
            ))}
          </>
        </div>
                
    </div>
  );
};

export default Library;
