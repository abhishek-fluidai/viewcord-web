import { createSlice } from '@reduxjs/toolkit';
import { getLocal, setLocal } from '../components/utils/StorageUtils';

export const preference = createSlice({
  name: 'quality',
  initialState: {
    quality: (getLocal("quality") || 360),
    instance: {
      url :(getLocal("instance") || "https://pipedapi.kavin.rocks"),
      name: (getLocal("instanceName") || "kavin.rocks"),
    }
  },
  reducers: {
    switchQuality: (state, action) => {
        setLocal("quality", action.payload);
        return {
            ...state,
            quality: action.payload
        }
      },
    switchInstance: (state, action) => {
        setLocal("instance", action.payload.url);
        setLocal("instanceName", action.payload.name);
        console.log(action.payload);
        return {  
            ...state,
            instance: {
                url: action.payload.url,
                name: action.payload.name
            }
      }
    }
}
});

export const { switchQuality, switchInstance } = preference.actions;
export default preference.reducer;
