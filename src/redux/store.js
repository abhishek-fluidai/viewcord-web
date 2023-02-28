import { configureStore } from '@reduxjs/toolkit';
import themeStateReducer from './themeState';
import preferenceReducer from './preference';
import loaderReducer from './loader';

export default configureStore({
  reducer: {
    theme: themeStateReducer,
    preference: preferenceReducer,
    loader: loaderReducer,
  },
});
