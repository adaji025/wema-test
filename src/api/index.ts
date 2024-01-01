import { showNotification } from "@mantine/notifications";
import axios from "axios";

function getToken() {
  let token = localStorage.getItem("xpress_token") ?? null;
  return token;
}

let AxoisApi = axios.create({
  baseURL: import.meta.env.VITE_APP_API,
});

AxoisApi.defaults.headers.common = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  Accept: "application/json",
};

AxoisApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      // window.location.href = "/";
      return showNotification({
        title: "Error",
        message: "Unathorized, Please login",
        color: "red",
      });
    }
  }
);

AxoisApi.interceptors.request.use(function (config) {
  if (getToken()) {
    config.headers.Authorization = `Bearer ${getToken()}`;
  }
  return config;
});

export default AxoisApi;
