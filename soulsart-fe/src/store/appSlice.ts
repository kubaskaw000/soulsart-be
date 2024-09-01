import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
  isSidebarOpen: boolean;
}

const initialState: AppState = {
  isSidebarOpen: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;
    },
  },
});

export const { setSidebarOpen } = appSlice.actions;

export default appSlice.reducer;
