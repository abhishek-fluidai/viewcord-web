import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { getPlaylist } from '../../components/common/FetchFuctions';

let data = {
    "url": "/playlist?list=PLZlA0Gpn_vH_NT5zPVp18nGe_W9LqBDQK",
    "type": "playlist",
    "name": "React",
    "thumbnail": "https://pipedproxy.kavin.rocks/vi/1wZoGFF_oi4/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLCRwXqkdoRgHO5607t0XDILdavimQ&host=i.ytimg.com",
    "uploaderName": "Web Dev Simplified",
    "uploaderUrl": "/channel/UCFbNIlppjAuEX4znoulh0Cw",
    "uploaderVerified": true,
    "playlistType": "NORMAL",
    "videos": 63

  }

const Playlist = () => {
    


