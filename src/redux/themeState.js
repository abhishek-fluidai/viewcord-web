import { createSlice } from '@reduxjs/toolkit';
import { getLocal } from '../components/utils/StorageUtils';

export const themeState = createSlice({
  name: 'theme',
  initialState: (getLocal("theme") || "dark"),
  reducers: {
    switchTheme: (state) => {
        if (state === "dark") {
            return "light";
        } else {
            return "dark";
        }
  }
}
});

export const { switchTheme } = themeState.actions;
export default themeState.reducer;
