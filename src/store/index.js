import Vue from "vue";
import Vuex from "vuex";
import {
  getAuthFromCookie,
  getUserFromCookie,
  saveAuthToCookie,
  saveUserToCookie,
  deleteCookie,
} from "@/utils/cookies";
import { loginUser } from "@/api/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: getUserFromCookie() || "",
    token: getAuthFromCookie() || "",
  },
  getters: {
    isLoggedIn(state) {
      return state.token || getUserFromCookie();
    },
    userToken(state) {
      return state.token;
    },
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
    LOGOUT(state) {
      state.user = null;
      state.token = null;
      deleteCookie("member_auth");
      deleteCookie("member_user");
    },
  },
  actions: {
    async LOGIN({ commit }, data) {
      const response = await loginUser(data);
      console.log(data);
      commit("SET_USER", response.data.user);
      commit("SET_TOKEN", response.data.token);
      saveUserToCookie(response.data.user.username);
      saveAuthToCookie(response.data.token);
      return response;
    },
  },
});
