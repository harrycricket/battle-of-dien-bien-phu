import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: 'vi',
};

const languageSlice = createSlice({
  name: 'languages',
  initialState,
  reducers: {
    switchToVietnamese: (state) => {
      state.language = 'vi';
    },
    switchToJapanese: (state) => {
      state.language = 'jp';
    },
  },
});

export const { switchToVietnamese, switchToJapanese } = languageSlice.actions;

export default languageSlice.reducer;
