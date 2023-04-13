import { configureStore } from "@reduxjs/toolkit";

// SLICES
import { UserSlice } from "./slices/UserSlice";
import { BlogsSlice } from "./slices/BlogsSlice";
import { NotificationSlice } from "./slices/NotificationSlice";
import { FollowersSlice } from "./slices/FollowersSlice";
import { FilterSlice } from "./slices/FiltersSlice";
import { ModalSlice } from "./slices/ModalSlice";

const store = configureStore({
  reducer: {
    user: UserSlice.reducer,
    blogs: BlogsSlice.reducer,
    notifications: NotificationSlice.reducer,
    followers: FollowersSlice.reducer,
    filters: FilterSlice.reducer,
    modals: ModalSlice.reducer,
  },
});

export default store;
