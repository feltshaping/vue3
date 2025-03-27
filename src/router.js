import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("./components/Home.vue") },
  { path: "/about", component: () => import("./components/About.vue") },
  { path: "/canvas", component: () => import("./components/Canvas.vue") },
  // 通配符路由，捕获所有未匹配的路径
  {
    path: "/:pathMatch(.*)*",
    component: () => import("./components/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
