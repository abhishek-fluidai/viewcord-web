import { configureStore } from '@reduxjs/toolkit';
import themeStateReducer from './themeState';

export default configureStore({
  reducer: {
    theme: themeStateReducer,
  },
});
