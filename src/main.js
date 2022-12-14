import Vue from "vue";
import App from "./App.vue";
import router from "@/router/index";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/js/bootstrap.bundle";
import * as filters from "@/utils/filters";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

Object.keys(filters).forEach((key) => Vue.filter(key, filters[key]));

Vue.filter("makeComma", (val) => {
  return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});

window.Kakao.init("9fec04fa20baed0ee099cd83c9111472");

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

import "bootstrap/dist/js/bootstrap.js";
