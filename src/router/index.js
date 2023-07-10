// Composables
import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layouts";
import VueCookies from "vue-cookies";
import store from "@/store";
const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("@/views/dashboard/index"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    hidden: true,
    component: () => import("@/views/login/index"),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
