import { createSlice } from "@reduxjs/toolkit";

export const ModalSlice = createSlice({
  name: "modalstate",
  initialState: {
    value: {
      userEditModalIsActiveState: false,
      sidebarDispay: "hidden",
    },
  },
  reducers: {
    setUserEditModalIsActiveState: (state, action) => {
      state.value.userEditModalIsActiveState = action.payload;
    },
    setSidebarDisplay: (state, action) => {
      state.value.sidebarDispay = action.payload;
    },
  },
});

export const { setUserEditModalIsActiveState, setSidebarDisplay } =
  ModalSlice.actions;
