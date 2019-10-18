import Vue from "vue";
import Router from "vue-router";

import gridtest from "./gridtest.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "gridtest",
      component: gridtest
    }
  ]
});
