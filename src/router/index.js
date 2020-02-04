import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CreateServer from "../views/CreateServer.vue";
import ViewServer from "../views/ViewServer.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/Servers/CreateServer",
    name: "CreateServer",
    component: CreateServer
  },
  {
    path: "/Servers/:name",
    name: "ViewServer",
    component: ViewServer
  }
];

const router = new VueRouter({
  routes
});

export default router;
