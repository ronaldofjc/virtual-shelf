import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "@/components/dashboard/Dashboard";
import Auth from "@/components/auth/Auth";

import { userKey } from "@/global";

Vue.use(VueRouter);

const routes = [
  {
    name: "Dashboard",
    path: "/",
    component: Dashboard
  },
  {
    name: "auth",
    path: "/auth",
    component: Auth
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  const json = localStorage.getItem(userKey);

  if (to.matched.some(record => record.meta.requiresAdmin)) {
    const user = JSON.parse(json);
    user ? next() : next({ path: "/" });
  } else {
    next();
  }
});

export default router;
