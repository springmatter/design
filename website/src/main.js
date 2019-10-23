import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import ComponentSpec from "./components/ComponentSpec.vue";
import components from "../../components/dist/index.js";

var comps = {};
components.forEach(comp => {
  Vue.component(comp.name, comp);
  comps[comp.name] = comp;
});

Vue.component("ComponentSpec", ComponentSpec);

Vue.config.productionTip = false;

new Vue({
  data: {
    comps: comps
  },
  router,
  render: h => h(App)
}).$mount("#app");
