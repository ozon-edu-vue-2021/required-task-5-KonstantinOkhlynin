import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "@/router/index.js";
import store from "@/store/index.js";
import "normalize.css";
import "./style/import-fonts.css";
Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
