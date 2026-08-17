import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [
    { id: '1', title: 'React Blog Post', date: '2026-08-17', time: '10:00' },
    { id: '2', title: 'Design Meeting', date: '2026-08-18', time: '14:30' },
    { id: '3', title: 'Project Deadline', date: '2026-08-20', time: '09:00' },
  ],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },
    updatePost: (state, action) => {
      const { id, updates } = action.payload;
      const existingPost = state.posts.find(post => post.id === id);
      if (existingPost) Object.assign(existingPost, updates);
    },
  },
});

export const { addPost, deletePost, updatePost } = postsSlice.actions;
export default postsSlice.reducer;