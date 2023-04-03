import { configureStore } from "@reduxjs/toolkit";

// SLICES
import { UserSlice } from "./slices/UserSlice";
import { BlogsSlice } from "./slices/BlogsSlice";
import { NotificationSlice } from "./slices/NotificationSlice";
import { FollowersSlice } from "./slices/FollowersSlice";

const store = configureStore({
  reducer: {
    user: UserSlice.reducer,
    blogs: BlogsSlice.reducer,
    notifications: NotificationSlice.reducer,
    followers: FollowersSlice.reducer,
  },
});

export default store;
