import Vue from "vue";
import VueRouter from "vue-router";

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

export default router;
