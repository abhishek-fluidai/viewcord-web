const baseDomain = localStorage.getItem("instance") || "https://pipedapi.kavin.rocks";
import axios from "axios";

export const Get = async (auth, url, params={}, cancelToken) => {
  let newData;
  try {
    if (params instanceof FormData) {
      newData = params;
    } else {
      newData = { ...params}
    }
  } catch (e) {
    newData = { ...params};
  }
  return new Promise((resolve, reject) => {
    axios({
      url: `${baseDomain}/${url}`,
      method: "GET",
      ...(auth
        ? {
            headers: {
              Authorization: `${localStorage.getItem("token")}`,
              Accept: "application/json;charset=UTF-8",
            },
          }
        : {}),
      params: newData,
      ...(cancelToken?{cancelToken}:{}),
    })
      .then((response) => {
        resolve(response);
      })
      .catch(async (e) => {
          console.error(e)
          reject(e);
      });
  });
};

export const Post = async (auth, url, data={}, cancelToken) => {
  let newData 
  try {
    if (data instanceof FormData) {
      newData = data;
    } else {
      newData = { ...data}
    }
  } catch (e) {
    newData = { ...data};
  }

  return new Promise((resolve, reject) => {
    axios({
      url: `${baseDomain}/${url}`,
      method: "POST",
      ...(auth
        ? {
            headers: {
              Authorization: `${localStorage.getItem("token")}`,
              Accept: "application/json;charset=UTF-8",
            },
          }
        : {
            headers: {
              Accept: "application/json",
            },
          }),
      data: newData,
      ...(cancelToken?{cancelToken}:{}),
    })
      .then((response) => {
        resolve(response);
      })
      .catch(async (e) => {
        console.log(e);
        alert(e.response.data.error);
        reject(e);
      });
  })
};


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
