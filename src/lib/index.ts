import axios from "axios";
import envConfig from "../config/env.config";

const axiousInstance = axios.create({
  baseURL: envConfig.baseApi,
});
export default axiousInstance;
