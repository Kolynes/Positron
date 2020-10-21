import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from "../views/home/Home.vue";
import SignUp from "../views/signup/SignUp.vue";
import SignIn from "../views/signin/SignIn.vue";
import About from "../views/about/About.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {path: "/", redirect: "/home", props: route => route.query},
  {path: "/home", component: Home, props: route => route.query},
  {path: "/signUp", component: SignUp, props: route => route.query},
  {path: "/signIn", component: SignIn, props: route => route.query},
  {path: "/account", redirect: "/account/home", component: () => import("@/views/account/Account.vue"), children: [
    {path: "/account/home", component: () => import("@/views/account/home/Home.vue")},
    {path: "/account/levels", component: () => import("@/views/account/levels/Levels.vue")},
    {path: "/account/spillovers", component: () => import("@/views/account/spillovers/Spillovers.vue")},
  ]},
]

const router = new VueRouter({
  // mode: 'history',
  base: "",
  routes
})

export default router
