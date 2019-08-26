import Vue from "vue";
import Router from "vue-router";

import Introduction from "./views/Introduction.vue";
import Usage from "./views/Usage.vue";

import Layout from "./views/Layout.vue";
import Typography from "./views/Typography.vue";
import Utilities from "./views/Utilities.vue";

import Buttons from "./views/Buttons.vue";
import Figures from "./views/Figures.vue";
import Forms from "./views/Forms.vue";
import Icons from "./views/Icons.vue";
import List from "./views/List.vue";
import Loading from "./views/Loading.vue";
import Marks from "./views/Marks.vue";
import Modal from "./views/Modal.vue";
import Tabs from "./views/Tabs.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "introduction",
      component: Introduction,
    },
    {
      path: "/usage",
      name: "usage",
      component: Usage,
    },
    {
      path: "/layout",
      name: "layout",
      component: Layout
    },
    {
      path: "/typography",
      name: "typography",
      component: Typography
    },
    {
      path: "/utilities",
      name: "utilities",
      component: Utilities
    },
    {
      path: "/buttons",
      name: "buttons",
      component: Buttons
    },
    {
      path: "/figures",
      name: "figures",
      component: Figures
    },
    {
      path: "/forms",
      name: "forms",
      component: Forms
    },
    {
      path: "/icons",
      name: "icons",
      component: Icons
    },
    {
      path: "/list",
      name: "list",
      component: List
    },
    {
      path: "/loading",
      name: "loading",
      component: Loading
    },
    {
      path: "/marks",
      name: "marks",
      component: Marks
    },
    {
      path: "/modal",
      name: "modal",
      component: Modal
    },
    {
      path: "/tabs",
      name: "tabs",
      component: Tabs
    }
  ]
});
