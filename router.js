import { createRouter, createWebHashHistory } from "vue-router";
const Main = () => import("./app.vue");
const Father = () => import("./src/props/father.vue");
const routes = [
  {
    path: "/#/",
    component: Main,
  },
  {
    path: "/props",
    component: Father,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;