import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postsSlice';
import languageReducer from './languageSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    language: languageReducer,
  },
});

export default store;

