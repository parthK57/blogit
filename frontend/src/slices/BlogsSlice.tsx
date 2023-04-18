import { createSlice } from "@reduxjs/toolkit";

export type blog = {
  id: string;
  title: string;
  content: string;
  image: string;
  blog_status: string;
  date_created: string;
  up_votes: string;
  down_votes: string;
  tags: string;
  createdBy: string;
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
