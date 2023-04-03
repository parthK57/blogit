import { configureStore } from "@reduxjs/toolkit";

// SLICES
import { UserSlice } from "./slices/UserSlice";
import { BlogsSlice } from "./slices/BlogsSlice";
import { NotificationSlice } from "./slices/NotificationSlice";

const store = configureStore({
  reducer: {
    user: UserSlice.reducer,
    blogs: BlogsSlice.reducer,
    notifications: NotificationSlice.reducer,
    followers: NotificationSlice.reducer,
  },
});

export default store;
