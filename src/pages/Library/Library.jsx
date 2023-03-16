import React, { useEffect, useState } from "react";
import { getUserPlaylists } from "../../components/common/FetchFuctions";
import PlaylistCard from "../../components/utils/ContentCards/PlaylistCard/PlaylistCard";
import Loader from "../../components/utils/Loader/Loader";

const Library = () => {
    const [playlists, setPlaylists] = useState(null);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token && playlists == null ) {
            setLoading(true);
            getPlaylists(token);
    }
  }, []);

  const getPlaylists = async (token) => {
    const res = await getUserPlaylists(token);
    if (res.error) {
        alert(res.error);
        setLoading(false);
        return;
    }
    // console.log(res);
    setPlaylists(res);
    setLoading(false);
    };

  return (
    <div
      className="p-4"
    >
      <h3
        className="text-5xl font-bold text-gray-800 text-center w-full md:text-left py-2 pb-4 dark:text-white/80"
      >Library</h3>
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
