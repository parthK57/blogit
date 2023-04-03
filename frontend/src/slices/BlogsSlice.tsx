import { createSlice } from "@reduxjs/toolkit";

// TYPES
export type blog = {
  id: string;
  title: string;
  content: string;
  image: string;
  blogsStatus: string;
  dateCreated: string;
  upVotes: string;
  downVotes: string;
};
export type blogsArray = blog[];

export const BlogsSlice = createSlice({
  name: "blogs",
  initialState: {
    value: [] as blogsArray,
  },
  reducers: {
    setBlogs: (state, action) => {
      state.value = action.payload as blogsArray;
    },
    clearBlogs: (state) => {
      state.value = [] as blogsArray;
    },
  },
});

export const { setBlogs, clearBlogs } = BlogsSlice.actions;
