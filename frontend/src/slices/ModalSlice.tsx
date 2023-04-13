import { createSlice } from "@reduxjs/toolkit";

export const ModalSlice = createSlice({
  name: "modalstate",
  initialState: {
    value: {
      userEditModalIsActiveState: false,
    },
  },
  reducers: {
    setUserEditModalIsActiveState: (state, action) => {
      state.value.userEditModalIsActiveState = action.payload;
    },
  },
});

export const { setUserEditModalIsActiveState } = ModalSlice.actions;
