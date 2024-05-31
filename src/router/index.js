import { createWebHashHistory, createRouter } from "vue-router";
import A1 from "../components/a1.vue";
import A2 from "../components/a2.vue";
import B1 from "../components/b1.vue";
import B2 from "../components/b2.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/a",
      name: "a",
      component: {
        default: A1,
        one: A1,
        two: A2,
      },
    },
    {
      path: "/b",
      name: "b",
      component: {
        default: B1,
        one: B1,
        two: B2,
      },
    },
  ],
});

export default router;
