import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Users",
    component: () =>
      import("../views/Users.vue"),
  },
  {
    path: "/selected-users",
    name: "Selected Users",
    component: () =>
      import("../views/SelectedUsers.vue"),
  },
  {
    path: "/small-tasks",
    name: "Small Tasks",
    component: () =>
      import("../views/SmallTasks.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
