import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index";
// import { getUserFromCookie } from "@/utils/cookies.js";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/main",
    },
    {
      path: "/login",
      component: () => import("@/views/auth/LoginPage"),
      beforeEnter(to, from, next) {
        store.getters["isLoggedIn"] ? next("/main") : next();
      },
    },
    {
      path: "/signup",
      component: () => import("@/views/auth/SignupPage"),
    },
    {
      path: "/main",
      component: () => import("@/views/MainPage"),
    },
    {
      path: "/schedule",
      component: () => import("@/views/SchedulePage"),
    },
  ],
});

// function beforeEnter(to, from, next) {
//   if (store.getters["isLoggedIn"] || getUserFromCookie()) {
//     next();
//   } else {
//     alert("로그인이 필요합니다.");
//     next("/login");
//   }
// }

export default router;
