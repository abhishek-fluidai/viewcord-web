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