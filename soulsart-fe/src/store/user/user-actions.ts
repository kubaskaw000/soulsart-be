import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserData, login } from "../../services/auth/api.ts";
import { setStoredUserId } from "../../utils/user-local-storage";

export type LoginCredentials = {
  email: string;
  password: string;
};

export const loginUser = createAsyncThunk(
  "user/login",
  async (loginCredentials: LoginCredentials) => {
    try {
      const user = await login(loginCredentials);

      if (user.id) {
        setStoredUserId(user.id);
      }

      return user;
    } catch (error) {
      console.log(error);
    }
  },
);

export const getUser = createAsyncThunk("user/me", async () => {
  try {
    return await getUserData();
  } catch (error) {
    console.log(error);
  }
});

// export const logoutUser = createAsyncThunk(
//   "user/logout",
//   async (args, { rejectWithValue }) => {
//     try {
//       removeStoredUserInfo();
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   },
// );
