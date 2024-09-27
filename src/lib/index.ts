"use server";
import axios from "axios";
import envConfig from "../config/env.config";
import { cookies } from "next/headers";

const axiousInstance = axios.create({
  baseURL: envConfig.baseApi,
});

axiousInstance.interceptors.request.use(
  function (config) {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessToken")?.value;
    if(accessToken){
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
  function (error) {
    return Promise.reject(error);
  }
);

export default axiousInstance;
