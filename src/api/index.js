import axios from "axios";
import { setInterceptors } from "./common/interceptors";

function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  return setInterceptors(instance);
}

// 액시오스 초기화 함수
function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
  });
  return setInterceptors(instance);
}

function createMultiInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return setInterceptors(instance);
}

export const instance = createInstance();
export const schedules = createInstanceWithAuth("/api/v1/schedule");
export const scheduleCreate = createMultiInstanceWithAuth("/api/v1/schedule");
export const reviews = createInstanceWithAuth("/api/v1/review");
