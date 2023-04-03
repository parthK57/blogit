import { createSlice } from "@reduxjs/toolkit";

// TYPES
export type notification = {
  notification: string;
  type: string;
  timestamp: string;
};
export type notificationsArray = notification[];

export const NotificationSlice = createSlice({
  name: "notifications",
  initialState: {
    value: [] as notificationsArray,
  },
  reducers: {
    setNotifications: (state, action) => {
      state.value = action.payload as notificationsArray;
    },

    clearNotifications: (state) => {
      state.value = [] as notificationsArray;
    },
  },
});

export const { setNotifications, clearNotifications } =
  NotificationSlice.actions;
