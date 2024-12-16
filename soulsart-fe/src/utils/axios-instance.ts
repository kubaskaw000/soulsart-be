import axios, { AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
};
export const axiosInstance = axios.create(axiosConfig);
