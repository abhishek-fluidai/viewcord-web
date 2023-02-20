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

export const getNextPageSearchResults = async (query,filter,nextPage) => {
  return fetch(
    `${baseDomain}/nextpage/search?nextpage=${nextPage}&q=${query}&filter=${filter}`
  ).then((response) => response.json());  
}

export const getPlaylist = async (playlist_id) => {
  return fetch(
    `${baseDomain}/playlists/${playlist_id}`
  ).then((response) => response.json());
}

export const login = async (username, password) => {
  return fetch(
    `${baseDomain}/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }
  ).then((response) => response.json());
}

export const register = async (username, password) => {
  return fetch(
    `${baseDomain}/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }
  ).then((response) => response.json());
}

export const getSubscriptions = async (token) => {
  return fetch(
    `${baseDomain}/subscriptions`,
  {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${token}`
    }
  }
  ).then((response) => response.json());
}

export const getSubscriptionsNextPage = async (token,nextPage) => {
  return fetch(
    `${baseDomain}/subscriptions?authToken=${token}&nextpage=${nextPage}`
  ).then((response) => response.json());
}

export const getFeed = async (token) => {
    return fetch(
      `${baseDomain}/feed?authToken=${token}`)
      .then((response) => response.json());
}

export const getUserPlaylists = async (token) => {
  return fetch(`${baseDomain}/user/playlists`,{
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${token}`
    }
  })

    .then((response) => response.json());
}
