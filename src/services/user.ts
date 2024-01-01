import { APIS } from "../api/api";
import { LoginType } from "../types/user";
import AxoisApi from "../api";

export const loginUser = (data: LoginType) => {
  return new Promise((resolve, reject) => {
    AxoisApi
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
    AxoisApi
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
    AxoisApi.get(APIS.VERIFIERS.GET)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
