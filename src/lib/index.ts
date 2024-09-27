"use server";
import axios from "axios";
import envConfig from "../config/env.config";
import { cookies } from "next/headers";
import { getNewAccessToken } from "../services/AuthService";

const axiousInstance = axios.create({
  baseURL: envConfig.baseApi,
});

axiousInstance.interceptors.request.use(
  function (config) {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessToken")?.value;
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiousInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const config = error.config;
    if (error?.response?.status === 401 && !config?.sent) {
      config.sent = true;

      const res = await getNewAccessToken();
      const accessToken = res.data.accessToken;
      cookies().set("accessToken", accessToken);
      config.headers["Authorization"] = accessToken;
      return axiousInstance(config);
    } else {
      return Promise.reject(error);
    }
  }
);

export default axiousInstance;
