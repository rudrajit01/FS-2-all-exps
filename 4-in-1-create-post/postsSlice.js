import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: 'All',
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = postsSlice.actions;
export default postsSlice.reducer;

