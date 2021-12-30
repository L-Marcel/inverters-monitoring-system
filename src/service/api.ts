import { rejects } from "assert";
import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.response.use(res => res, (error: AxiosError) => {
  if(error.response.status === 401) {
    const token = localStorage.getItem("ims@auth");

    if(token) {
      api.defaults.headers["authorization"] = "Bearer " + token;
      return new Promise((resolve, reject) => {
        error.request.headers["authorization"] = "Bearer " + token;
        return resolve(api(error.config));
      });
    };
  };

  return Promise.reject(error);
});

export { api };