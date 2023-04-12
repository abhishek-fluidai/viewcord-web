import React,{useState, useEffect} from 'react'
import { Get,Post } from '../../common/FetchFuctions'
import axios from 'axios'
import Dialog from '../Dialog'

const SaveToPlaylist = ({open, onClose}) => {
  const [userPlaylists, setUserPlaylists] = useState([])
  const [playlistId, setPlaylistId] = useState("")
  const [ loading, setLoading ] = useState(false)
  const axiosCancelSource = axios.CancelToken.source();
  const videoId = new URLSearchParams(window.location.search).get("v");

  useEffect(() => {
    setLoading(true)
    getUserPlaylists()
  }, [])

  const getUserPlaylists = () => {
    try {
      Get(1,"user/playlists",{},axiosCancelSource.token).then((res) => {
        setUserPlaylists(res.data);
        // console.log(res.data)
      });  
    } catch (error) { console.log(error)}
    finally{setLoading(false)}
  }

  const AddToPlaylist = () => {
    try {
      Post(1,"user/playlists/add",{
        playlistId: playlistId,
        videoId: videoId
      },axiosCancelSource.token).then((res) => {
        console.log(res.data)
      });
    } catch (error) { console.log(error)}
    finally{setLoading(false)}
  }
  return (
    <Dialog
    open={open}
    onClose={onClose}
    title="Save to playlist"
    >
     {userPlaylists?.length > 0 ? (
       <div className="flex flex-col gap-2 items-center">
       <select className="border w-full text-grey-200 dark:text-white/90 border-gray-300 dark:border-gray-700  p-2 dark:bg-slate-800 rounded-lg"
        onChange={(e) => setPlaylistId(e.target.value)}
        >
          {userPlaylists?.map((playlist) => (
            <option key={playlist.id} value={playlist.id}>{playlist.name}</option>
          ))}
        </select>
        <button className="bg-slate-800 dark:bg-grey-200 text-white align-center  px-4 py-2 rounded-full text-sm md:text-md font-medium"
        onClick={() => {
          AddToPlaylist()
          onClose()
        }}
        >Save</button>
        </div>
      ) : (
        <p className="text-gray-600 dark:text-white/90 text-sm md:text-lg">
          {loading ? "Loading...." :"You don't have any playlists yet."}
        </p>
      )
       }

    </Dialog>
  )

}

export default SaveToPlaylist