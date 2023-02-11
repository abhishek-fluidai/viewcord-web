import { useEffect } from "react";

const baseDomain = localStorage.getItem("baseDomain") || "https://pipedapi.kavin.rocks";

export const getVideo = async (id) => {
    return  fetch(
          `${baseDomain}/streams/${id}`
        ).then((response) => response.json());  
     
} 

export const getTrending = async (region) => {
    return  fetch(
          `${baseDomain}/trending/?region=${region}`
        ).then((response) => response.json());  
}

export const getChannel = async (channel_id) => {
  return fetch(
    `${baseDomain}/channel/${channel_id}`
  ).then((response) => response.json());

}

export const getSearchResults = async (query,filter) => {
  return fetch(
    `${baseDomain}/search?q=${query}&filter=${filter}`
  ).then((response) => response.json());
}

export const getPlaylist = async (playlist_id) => {
  return fetch(
    `${baseDomain}/playlists/${playlist_id}`
  ).then((response) => response.json());
}