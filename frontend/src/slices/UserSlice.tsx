import { createSlice } from "@reduxjs/toolkit";

let userObject = {
  userName: "",
  fullName: "",
  title: "",
  age: "",
  location: "",
  education: "",
  profilePicture: "",
  facebook: "",
  instagram: "",
  twitter: "",
  linkedIn: "",
  github: "",
  gitlab: "",
};

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    value: userObject,
  },
  reducers: {
    setUserData: (state, action) => {
      state.value = action.payload;
    },
    clearUserData: (state) => {
      state.value = userObject;
    },
  },
});

export const { setUserData, clearUserData } = UserSlice.actions;
