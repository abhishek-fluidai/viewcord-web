import { createSlice } from '@reduxjs/toolkit';

export const loaderState = createSlice({
  name: 'loader',
  initialState:  false,
  reducers: {
    switchLoaderState: (state,action) => {
        return action.payload;
    }
}
});

export const { switchLoaderState } = loaderState.actions;
export default loaderState.reducer;
