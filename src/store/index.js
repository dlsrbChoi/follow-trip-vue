import Vue from "vue";
import Vuex from "vuex";
import {
  getAuthFromCookie,
  saveAuthToCookie,
  deleteCookie,
} from "@/utils/cookies";
import { loginUser } from "@/api/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: getAuthFromCookie() || "",
  },
  getters: {
    isLoggedIn(state) {
      return state.token;
    },
    userToken(state) {
      return state.token;
    },
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    LOGOUT(state) {
      state.token = null;
      deleteCookie("member_auth");
    },
  },
  actions: {
    async LOGIN({ commit }, userData) {
      await loginUser(userData).then((res) => {
        const token = res.headers.authorization;
        commit("SET_TOKEN", token);
        saveAuthToCookie(token);
        return token;
      });
    },
  },
});
