import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "@/components/dashboard/Dashboard";
import Auth from "@/components/auth/Auth";
import Books from "@/components/books/BookList";
import BookForm from "@/components/books/BookForm";
import BookStats from "@/components/books/BookStats";
import TopBookWriters from "@/components/books/TopBookWriters";
import Comics from "@/components/comics/ComicList";
import ComicForm from "@/components/comics/ComicForm";
import ComicStats from "@/components/comics/ComicStats";
import TopComicArtists from "@/components/comics/TopComicArtists";
import TopComicWriters from "@/components/comics/TopComicWriters";
import Mangas from "@/components/mangas/MangaList";
import MangaForm from "@/components/mangas/MangaForm";
import MangaStats from "@/components/mangas/MangaStats";
import TopMangaWriters from "@/components/mangas/TopMangaWriters";

import { userKey } from "@/global";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Dashboard", component: Dashboard },
  { path: "/auth", name: "Auth", component: Auth },
  { path: "/comics", name: "Comics", component: Comics },
  { path: "/comic", name: "ComicForm", component: ComicForm },
  { path: "/comic-stats", name: "ComicStats", component: ComicStats },
  {
    path: "/top-comic-artists",
    name: "TopComicArtists",
    component: TopComicArtists
  },
  {
    path: "/top-comic-writers",
    name: "TopComicWriters",
    component: TopComicWriters
  },
  { path: "/books", name: "Books", component: Books },
  { path: "/book", name: "BookForm", component: BookForm },
  { path: "/book-stats", name: "BookStats", component: BookStats },
  {
    path: "/top-book-writers",
    name: "TopBookWriters",
    component: TopBookWriters
  },
  { path: "/mangas", name: "Mangas", component: Mangas },
  { path: "/manga", name: "MangaForm", component: MangaForm },
  { path: "/manga-stats", name: "MangaStats", component: MangaStats },
  {
    path: "/top-manga-writers",
    name: "TopMangaWriters",
    component: TopMangaWriters
  },
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
