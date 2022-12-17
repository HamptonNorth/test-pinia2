import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { useAdminStore } from "@/stores/admin.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import("../views/SignInView.vue"),
    },
    {
      path: "/signout",
      name: "signout",
      component: () => import("../views/SignOutView.vue"),
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("../views/SettingsView.vue"),
      beforeEnter: (to, from) => {
        const store = useAdminStore();
        if (!store.getIsAdmin && to.name !== "signin") {
          // redirect the user to the login page
          return { name: "signin" };
        }
      },
    },
    {
      path: "/adduser",
      name: "adduser",
      component: () => import("../views/AddUserView.vue"),
    },

    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import("../views/404View.vue"),
    },
  ],
});

export default router;
