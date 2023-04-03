import { createSlice } from "@reduxjs/toolkit";

// TYPES
export type follower = {
  user_name: string;
  full_name: string;
};
export type followersArray = follower[];

export const FollowersSlice = createSlice({
  name: "followers",
  initialState: {
    value: [] as followersArray,
  },
  reducers: {
    setFollowers: (state, action) => {
      state.value = action.payload as followersArray;
    },
    clearFollowers: (state) => {
      state.value = [] as followersArray;
    },
  },
});

export const { setFollowers, clearFollowers } = FollowersSlice.actions;
