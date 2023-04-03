import { createSlice } from "@reduxjs/toolkit";

let blogsArray = [
  {
    id: "",
    title: "",
    content: "",
    image: "",
    blogsStatus: "",
    dateCreated: "",
    upVotes: "",
    downVotes: "",
  },
];

export const BlogsSlice = createSlice({
  name: "blogs",
  initialState: {
    value: blogsArray,
  },
  reducers: {
    setBlogs: (state, action) => {
      state.value = action.payload;
    },
    clearBlogs: (state) => {
      state.value = blogsArray;
    },
  },
});

export const { setBlogs, clearBlogs } = BlogsSlice.actions;
