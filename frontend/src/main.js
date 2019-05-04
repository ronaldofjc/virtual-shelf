import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./lib/jquery";
import "bootstrap";
import "admin-lte";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "admin-lte/dist/css/AdminLTE.min.css";
import "admin-lte/dist/css/skins/_all-skins.min.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
