// 로그인, 회원 가입, (ex) 회원 탈퇴
import { instance } from "./index";

// 회원가입 API
function registerUser(data) {
  return instance.post("signup", data);
}

// 로그인 API
function loginUser(data) {
  return instance.post("login", data);
}

export { registerUser, loginUser };
