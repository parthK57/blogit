import { createSlice } from "@reduxjs/toolkit";

export const FilterSlice = createSlice({
  name: "filters",
  initialState: {
    value: [] as string[],
  },
  reducers: {
    setFilters: (state, action) => {
      state.value.push(action.payload.map((filter: string) => filter));
    },
    clearFilter: (state, action) => {
      state.value.forEach((filter: string, index: number) => {
        if (filter === action.payload) delete state.value[index];
      });
    },
    clearAllFilters: (state) => {
      state.value = [] as string[];
    },
  },
});

export const { setFilters, clearFilter, clearAllFilters } = FilterSlice.actions;
