import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://flatly-brave-greenling.cloudpub.ru/api" : "/api",
  withCredentials: true,
});
