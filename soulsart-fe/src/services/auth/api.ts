import { axiosInstance } from "../../utils/axios-instance.ts";
import { LoginCredentials } from "../../store/user/user-actions.ts";

export type UserType = {
  id: number;
  email: string;
  isActive: boolean;
};

export const login = async (loginCredentials: LoginCredentials) => {
  const { data } = await axiosInstance.post<UserType>(
    "/auth/login",
    loginCredentials,
  );

  return data;
};

export const getUserData = async () => {
  const { data } = await axiosInstance.get<UserType>("/auth/me");

  return data;
};
