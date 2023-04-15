import { createSlice } from "@reduxjs/toolkit";

// TYPES
interface content {
  heading: string;
  subheading: string;
  body: string;
}

export type blog = {
  id: string;
  title: string;
  content: content;
  image: string;
  blogsStatus: string;
  dateCreated: string;
  upVotes: string;
  downVotes: string;
  tags: string[];
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
