import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index";
import { getAuthFromCookie } from "@/utils/cookies";

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
      path: "/signup/finish",
      name: "SignupFinishPage",
      component: () => import("@/views/auth/SignupFinishPage"),
    },
    {
      path: "/userInfo",
      name: "userInfoPage",
      component: () => import("@/views/userInfoPage"),
      beforeEnter,
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
      path: "/schedule/detail/:id",
      name: "ScheduleDetailPage",
      component: () => import("@/views/ScheduleDetailPage"),
    },
    {
      path: "/schedule/detail/purchase/:id",
      name: "AfterBuySchedulePage",
      component: () => import("@/views/AfterBuySchedulePage"),
      beforeEnter,
    },
    {
      path: "/schedule/create",
      name: "ScheduleCreatePage",
      component: () => import("@/views/ScheduleCreatePage"),
      beforeEnter,
    },
    {
      path: "/test",
      component: () => import("@/test/vforTest"),
    },
  ],
});

function beforeEnter(to, from, next) {
  if (store.getters["isLoggedIn"] || getAuthFromCookie()) {
    next();
  } else {
    alert("로그인이 필요합니다.");
    next("/login");
  }
}

export default router;
