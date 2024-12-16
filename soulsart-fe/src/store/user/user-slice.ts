import { createSlice } from "@reduxjs/toolkit";
import { getUser, loginUser } from "./user-actions.ts";
import { UserType } from "../../services/auth/api";
import { RootState } from "../store";

export type UserState = {
  data: UserType | null;
  loading: boolean;
};

const initialState: UserState = {
  data: null,
  loading: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.data = action.payload ?? null;
      state.loading = false;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.data = null;
      state.loading = false;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.data = action.payload ?? null;
      state.loading = false;
    });
    builder.addCase(getUser.rejected, (state) => {
      state.data = null;
      state.loading = false;
    });
    builder.addCase(getUser.pending, (state) => {
      state.loading = true;
    });
  },
});

export const isUserLoading = (state: RootState) => state.userReducer.loading;
export const isUserLoggedIn = (state: RootState) => !!state.userReducer.data;

export const userReducer = userSlice.reducer;
