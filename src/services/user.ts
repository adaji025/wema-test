import axios from "axios";
import { APIS } from "../api/api";
import { LoginType } from "../types/user";
import AxoisApi from "../api";

export const loginUser = (data: LoginType) => {
  return new Promise((resolve, reject) => {
    axios
      .post(APIS.USER.LOGIN, data)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const registerUser = (data: any) => {
  return new Promise((resolve, reject) => {
    axios
      .post(APIS.USER.REGISTER, data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getVerifiers = () => {
  return new Promise((resolve, reject) => {
    AxoisApi.get(APIS.USER.REGISTER)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
