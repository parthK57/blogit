import { createSlice } from "@reduxjs/toolkit";

let notificationsArray = [
  {
    notification: "",
    type: "",
    timestamp: "",
  },
];

export const NotificationSlice = createSlice({
  name: "notifications",
  initialState: {
    value: notificationsArray,
  },
  reducers: {
    setNotifications: (state, action) => {
      state.value = action.payload;
    },

    clearNotifications: (state) => {
      state.value = notificationsArray;
    },
  },
});

export const { setNotifications, clearNotifications } =
  NotificationSlice.actions;
