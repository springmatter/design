import Vue from "vue";
import Router from "vue-router";

import Philosophy from "./views/Philosophy.vue";
import Usage from "./views/Usage.vue";
import Defaults from "./views/Defaults.vue";
import Utilities from "./views/Utilities.vue";

import SmAppDocs from "./views/SmAppDocs.vue";
import SmNavDocs from "./views/SmNavDocs.vue";
import SmGridLayoutDocs from "./views/SmGridLayoutDocs.vue";
import SmTabLayoutDocs from "./views/SmTabLayoutDocs.vue";
import SmTextLayoutDocs from "./views/SmTextLayoutDocs.vue";

import SmButtonDocs from "./views/SmButtonDocs.vue";
import SmCardDocs from "./views/SmCardDocs.vue";
import SmIconDocs from "./views/SmIconDocs.vue";
import SmLoadingDocs from "./views/SmLoadingDocs.vue";
import SmTagDocs from "./views/SmTagDocs.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Philosophy",
      component: Philosophy,
    },
    {
      path: "/usage",
      name: "Usage",
      component: Usage,
    },
    {
      path: "/defaults",
      name: "Defaults",
      component: Defaults
    },
    {
      path: "/utilities",
      name: "Utilities",
      component: Utilities
    },
    {
      path: "/SmApp",
      name: "SmApp",
      component: SmAppDocs
    },
    {
      path: "/SmNav",
      name: "SmNav",
      component: SmNavDocs
    },
    {
      path: "/SmGridLayout",
      name: "SmGridLayout",
      component: SmGridLayoutDocs
    },
    {
      path: "/SmTabLayout",
      name: "SmTabLayout",
      component: SmTabLayoutDocs
    },
    {
      path: "/SmTextLayout",
      name: "SmTextLayout",
      component: SmTextLayoutDocs
    },
    {
      path: "/SmButton",
      name: "SmButton",
      component: SmButtonDocs
    },
    {
      path: "/SmCard",
      name: "SmCard",
      component: SmCardDocs
    },
    {
      path: "/SmIcon",
      name: "SmIcon",
      component: SmIconDocs
    },
    {
      path: "/SmLoading",
      name: "SmLoading",
      component: SmLoadingDocs
    },
    {
      path: "/SmTag",
      name: "SmTag",
      component: SmTagDocs
    }
  ]
});
