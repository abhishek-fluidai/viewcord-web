import { configureStore } from '@reduxjs/toolkit';
import themeStateReducer from './themeState';
import preferenceReducer from './preference';
export default configureStore({
  reducer: {
    theme: themeStateReducer,
    preference: preferenceReducer
  },
});
