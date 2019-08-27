import Vue from "vue";
import Router from "vue-router";

import Introduction from "./views/Introduction.vue";
import Usage from "./views/Usage.vue";

import Layout from "./views/Layout.vue";
import Typography from "./views/Typography.vue";
import Utilities from "./views/Utilities.vue";

import Buttons from "./views/Buttons.vue";
import Cards from "./views/Cards.vue";
import Forms from "./views/Forms.vue";
import Icons from "./views/Icons.vue";
import Loading from "./views/Loading.vue";
import Tags from "./views/Tags.vue";

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
      path: "/cards",
      name: "cards",
      component: Cards
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
      path: "/loading",
      name: "loading",
      component: Loading
    },
    {
      path: "/tags",
      name: "tags",
      component: Tags
    }
  ]
});
