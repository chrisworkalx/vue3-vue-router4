import { createWebHistory, createRouter } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/a",
      name: "a",
      components: {
        default: () => import("../components/a1.vue"),
        one: () => import("../components/a2.vue"),
        two: () => import("../components/a2.vue"),
      },
    },
    {
      path: "/b",
      name: "b",
      components: {
        default: () => import("../components/b1.vue"),
        one: () => import("../components/b1.vue"),
        two: () => import("../components/b2.vue"),
      },
    },
  ],
});

export default router;
