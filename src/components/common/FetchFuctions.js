export const getVideo = async (id) => {
    return  fetch(
          `https://pipedapi.kavin.rocks/streams/${id}`
        ).then((response) => response.json());  
     
} 

export const getTrending = async (region) => {
    return  fetch(
          `https://pipedapi.kavin.rocks/trending/?region=${region}`
        ).then((response) => response.json());  
}

export const getChannel = async (channel_id) => {
  return fetch(
    `https://pipedapi.kavin.rocks/channel/${channel_id}`
  ).then((response) => response.json());

}