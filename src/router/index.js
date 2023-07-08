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
    component: () => import('@/views/login/index'),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach(async(to, from, next) => {
  if (to.name ==='Login') {
    console.log(to)
    return next()
  }
  if (VueCookies.get('accessToken') === null && VueCookies.get('refreshToken') !== null) {
    await store.dispatch('refreshToken')
  } else if (VueCookies.get('accessToken') === null && VueCookies.get('refreshToken') === null) {
    return next({name: 'Login'})
  }

  return next();
})
export default router;
