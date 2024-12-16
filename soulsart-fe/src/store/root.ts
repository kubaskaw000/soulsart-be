import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user/user-slice.ts";
import { appReducer } from "./app-slice.ts";

export const rootReducer = combineReducers({
  userReducer,
  appReducer,
});
