import { createSlice } from "@reduxjs/toolkit";

// TYPES
export type userObject = {
  userName: string;
  fullName: string;
  title: string;
  age: string;
  location: string;
  education: string;
  profilePicture: string;
  facebook: string;
  instagram: string;
  twitter: string;
  linkedIn: string;
  github: string;
  gitlab: string;
};

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    value: {} as userObject,
  },
  reducers: {
    setUserData: (state, action) => {
      state.value = action.payload as userObject;
    },
    clearUserData: (state) => {
      state.value = {} as userObject;
    },
  },
});

export const { setUserData, clearUserData } = UserSlice.actions;
