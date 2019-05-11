import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "@/components/dashboard/Dashboard";
import Auth from "@/components/auth/Auth";
import Books from "@/components/books/BookList";
import Comics from "@/components/comics/ComicList";
import Mangas from "@/components/mangas/MangaList";

import { userKey } from "@/global";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Dashboard", component: Dashboard },
  { path: "/auth", name: "Auth", component: Auth },
  { path: "/comics", name: "Comics", component: Comics },
  { path: "/books", name: "Books", component: Books },
  { path: "/mangas", name: "Mangas", component: Mangas },
  { path: "*", component: Dashboard }
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
