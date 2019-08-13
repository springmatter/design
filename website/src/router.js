import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import Usage from "./views/Usage.vue";

import Layout from "./views/Layout.vue";
import Colors from "./views/Colors.vue";
import Spacing from "./views/Spacing.vue";
import Typography from "./views/Typography.vue";

import Links from "./views/Links.vue";
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
      redirect: "/philosophy"
    },
    {
      path: "/philosophy",
      name: "philosophy",
      component: Home,
      children: [
        {
          path: "/philosophy/notes",
          component: Home
        }
      ]
    },
    {
      path: "/usage",
      name: "usage",
      component: Usage,
      children: [
        {
          path: "/usage/notes",
          component: Usage
        }
      ]
    },
    {
      path: "/layout",
      name: "layout",
      component: Layout,
      children: [
        {
          path: "/layout/notes",
          component: Layout
        }
      ]
    },
    {
      path: "/colors",
      name: "colors",
      component: Colors,
      children: [
        {
          path: "/colors/notes",
          component: Colors
        }
      ]

    },
    {
      path: "/spacing",
      name: "spacing",
      component: Spacing,
      children: [
        {
          path: "/spacing/notes",
          component: Spacing
        }
      ]

    },
    {
      path: "/typography",
      name: "typography",
      component: Typography,
      children: [
        {
          path: "/typography/notes",
          component: Typography
        }
      ]

    },
    {
      path: "/links",
      name: "links",
      component: Links,
      children: [
        {
          path: "/links/notes",
          component: Links
        }
      ]

    },
    {
      path: "/buttons",
      name: "buttons",
      component: Buttons,
      children: [
        {
          path: "/buttons/notes",
          component: Buttons
        }
      ]

    },
    {
      path: "/figures",
      name: "figures",
      component: Figures,
      children: [
        {
          path: "/figures/notes",
          component: Figures
        }
      ]

    },
    {
      path: "/forms",
      name: "forms",
      component: Forms,
      children: [
        {
          path: "/forms/notes",
          component: Forms
        }
      ]

    },
    {
      path: "/icons",
      name: "icons",
      component: Icons,
      children: [
        {
          path: "/icons/notes",
          component: Icons
        }
      ]

    },
    {
      path: "/list",
      name: "list",
      component: List,
      children: [
        {
          path: "/list/notes",
          component: List
        }
      ]

    },
    {
      path: "/loading",
      name: "loading",
      component: Loading,
      children: [
        {
          path: "/loading/notes",
          component: Loading
        }
      ]

    },
    {
      path: "/marks",
      name: "marks",
      component: Marks,
      children: [
        {
          path: "/marks/notes",
          component: Marks
        }
      ]

    },
    {
      path: "/modal",
      name: "modal",
      component: Modal,
      children: [
        {
          path: "/modal/notes",
          component: Modal
        }
      ]

    },
    {
      path: "/tabs",
      name: "tabs",
      component: Tabs,
      children: [
        {
          path: "/tabs/notes",
          component: Tabs
        }
      ]
    }
  ]
});
