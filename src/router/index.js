import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/homepage.vue"),
    },
    {
      path: "/contacts",
      component: () => import("../views/contact-page.vue"),
    },
    {
      path: "/gallery",
      component: () => import("../views/gallery-page.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../views/404.vue"),
    },
  ],
});
