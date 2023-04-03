import { createSlice } from "@reduxjs/toolkit";

// TYPES
export type follower = {
  username: string;
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
