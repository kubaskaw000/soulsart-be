import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store.ts";

export interface AppState {
  isSidebarOpen: boolean;
}

const initialState: AppState = {
  isSidebarOpen: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;
    },
  },
});

export const { setSidebarOpen } = appSlice.actions;
export const isSidebarOpen = (state: RootState) =>
  state.appReducer.isSidebarOpen;
export const appReducer = appSlice.reducer;
