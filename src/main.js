import Vue from "vue";
import App from "./App.vue";
import router from "@/router/index";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import * as filters from "@/utils/filters";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

Object.keys(filters).forEach((key) => Vue.filter(key, filters[key]));

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
