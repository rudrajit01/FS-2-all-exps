import { createSlice } from '@reduxjs/toolkit';

const initialState = 'bn';

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      return state === 'bn' ? 'en' : 'bn';
    },
  },
});

export const { toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;

