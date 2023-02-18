import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/homepage.vue"),
    },
    {
      path: "/contact",
      component: () => import("../views/contact-page.vue"),
    },
  ],
});
