import { configureStore } from '@reduxjs/toolkit';
import languagesReducer from './LanguageSlice';

const store = configureStore({
  reducer: {
    language: languagesReducer,
  },
});

export default store;