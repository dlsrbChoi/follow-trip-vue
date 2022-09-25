// 로그인, 회원 가입, (ex) 회원 탈퇴
import { instance } from "./index";

// 회원가입 API
function registerUser(data) {
  return instance.post("/api/v1/join", data);
}

// 로그인 API
function loginUser(userData) {
  return instance.post("/login", userData);
}

// 유저 정보 API
function userInfo() {
  return instance.get("/api/v1/user");
}

export { registerUser, loginUser, userInfo };
