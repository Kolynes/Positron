import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from "../views/home/Home.vue";
import HowItWorks from "../views/how-it-works/HowItWorks.vue";
// import SignUp from "../views/signup/SignUp.vue";
// import SignIn from "../views/signin/SignIn.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {path: "/", redirect: "/home", props: route => route.query},
  {path: "/home", component: Home, props: route => route.query},
  {path: "/howItWorks", component: HowItWorks, props: route => route.query},
  {path: "/admin/sign-in", component: () => import("../views/admin/sign-in/SignIn.vue"), props: route => route.query},
  {path: "/admin/", redirect: "/admin/auth", component: () => import("../views/admin/Admin.vue"), props: route => route.query, children: [
    {path: "/admin/auth", component: () => import("../views/admin/auth/Auth.vue"), props: route => route.query}
  ]},
  {path: "*", component: () => import("@/views/error404/Error404.vue"), props: route => route.query},
]

const router = new VueRouter({
  mode: 'history',
  base: "",
  routes
})

export default router
