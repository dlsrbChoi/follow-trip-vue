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
      name: "LoginPage",
      component: () => import("@/views/auth/LoginPage"),
      beforeEnter(to, from, next) {
        store.getters["isLoggedIn"] ? next("/main") : next();
      },
    },
    {
      path: "/signup",
      name: "SignupPage",
      component: () => import("@/views/auth/SignupPage"),
    },
    {
      path: "/main",
      name: "MainPage",
      component: () => import("@/views/MainPage"),
    },
    {
      path: "/schedule",
      name: "SchedulePage",
      component: () => import("@/views/SchedulePage"),
    },
    {
      path: "/schedule/detail/:no",
      name: "ScheduleDetailPage",
      component: () => import("@/views/ScheduleDetailPage"),
    },
    {
      path: "/schedule/create",
      name: "ScheduleCreatePage",
      component: () => import("@/views/ScheduleCreatePage"),
    },
    {
      path: "/test",
      component: () => import("@/test/Test"),
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
