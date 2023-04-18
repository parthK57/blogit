import { createSlice } from "@reduxjs/toolkit";

export const ModalSlice = createSlice({
  name: "modalstate",
  initialState: {
    value: {
      userEditModalIsActiveState: false,
      createNewBlogModalState: false,
      followUserModalState: false,
      sidebarDispay: "hidden",
    },
  },
  reducers: {
    setUserEditModalIsActiveState: (state, action) => {
      state.value.userEditModalIsActiveState = action.payload;
    },
    setCreateNewBlogModalState: (state, action) => {
      state.value.createNewBlogModalState = action.payload;
    },
    setFollowUserModalState: (state, action) => {
      state.value.followUserModalState = action.payload;
    },
    setSidebarDisplay: (state, action) => {
      state.value.sidebarDispay = action.payload;
    },
  },
});

export const {
  setUserEditModalIsActiveState,
  setCreateNewBlogModalState,
  setFollowUserModalState,
  setSidebarDisplay,
} = ModalSlice.actions;
