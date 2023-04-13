import { createSlice } from "@reduxjs/toolkit";

const content = {
  isActive: false,
  type: "",
  message: "",
};

export const NotifySlice = createSlice({
  name: "notify",
  initialState: {
    value: content,
  },
  reducers: {
    setNotify: (state, action) => {
      state.value = action.payload;
    },
    clearNotify: (state) => {
      state.value = content;
    },
  },
});

export const {setNotify, clearNotify} = NotifySlice.actions;
