import React, { useEffect, useState } from "react";
// import { getUserPlaylists } from "../../components/common/FetchFuctions";
import { Get } from "../../components/common/FetchFuctions";
import PlaylistCard from "../../components/utils/ContentCards/PlaylistCard/PlaylistCard";
import Loader from "../../components/utils/Loader/Loader";

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
        <button className="flex flex-row items-center justify-center w-fit h-12 px-4 py-2 text-base font-medium text-white bg-gray-800 border border-transparent rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        ll</button>
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
