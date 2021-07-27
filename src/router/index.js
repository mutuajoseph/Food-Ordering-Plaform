import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import(/* webpackChunkName: "auth" */ "../views/Auth.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import(/* webpackChunkName: "auth" */ "../views/Cart.vue"),
  },
  {
    path: "/meals/:id",
    name: "Product",
    component: () =>
      import(/* webpackChunkName: "auth" */ "../views/Product.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
