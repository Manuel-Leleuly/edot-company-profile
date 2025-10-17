import { globalVars } from "@/constants/env";
import axios, { AxiosRequestConfig } from "axios";

export class NetworkUtils {
  static create = (config?: AxiosRequestConfig) => {
    return axios.create({
      baseURL: globalVars.API_URL,
      ...config,
    });
  };
}
