import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Count from "./components/Count.vue";
import List from "./components/List.vue";
import Detailed from "./components/Detailed.vue";
import Stopwatch from "./components/Stopwatch.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/count",
    component: Count,
  },
  {
    path: "/list",
    name: "List",
    component: List,
  },
  {
    path: "/list/:name/",
    name: "Detailed",
    component: Detailed,
    props: (route) => ({
      name: route.params.name,
      id: Number(route.query.id),
      age: Number(route.query.age),
    }),
  },
  {
    path: "/stopwatch",
    name: "Stopwatch",
    component: Stopwatch,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
