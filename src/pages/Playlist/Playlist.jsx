import React from 'react';
import { useEffect , useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import { getPlaylist } from '../../components/common/FetchFuctions';
import { SideBarVideoCard } from '../../components/utils/ContentCards/VideoCard/VideoCard';

let data = {
  "name": "React",
  "thumbnailUrl": "https://pipedproxy.kavin.rocks/vi/1wZoGFF_oi4/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLCRwXqkdoRgHO5607t0XDILdavimQ&host=i.ytimg.com",
  "bannerUrl": null,
  "nextpage": null,
  "uploader": "Web Dev Simplified",
  "uploaderUrl": "/channel/UCFbNIlppjAuEX4znoulh0Cw",
  "uploaderAvatar": "https://pipedproxy.kavin.rocks/ytc/AL5GRJXjrfspJ8wxKzvK-Q9qRfQGRPFGj1OfJGzDDDOp=s48-c-k-c0x00ffffff-no-rw?host=yt3.ggpht.com",
  "videos": 63,
  
}

const Playlist = () => {
  const [fetchedData, setFetchedData] = useState(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const playlistId = searchParams.get("list");
    if (!playlistId) {
      return;
    }
    getPlaylist(playlistId).then((res) => {
      setFetchedData(res);
      console.log(res);
    });
  }, [searchParams.get("list")]);

    return (
        <div>
            <div className="flex flex-col w-full  p-4">
              <div className=" flex px-8 py-2 flex-col">
              <h3
              className="text-2xl font-bold dark:text-white text-neutral-600"
              > {fetchedData?.name} - {fetchedData?.uploader}</h3>
                <p
                className="text-natural-500 dark:text-white/90">
                  {fetchedData?.videos} videos
                </p>
              </div>
            </div>
              
            {
              fetchedData && fetchedData?.relatedStreams?.map((item, index) => {
                return (  
                  <div className="flex flex-row items-center min-w-[200px] justify-start mx-4   p-2 rounded-lg" key={index}>
                       <p className="text-md dark:text-white">{index + 1}</p>
                    <SideBarVideoCard {...item} isPlaylist={true} />
                  </div>
                )}
              )
            }
        </div>
    )
}

export default Playlist
