import Vue from "vue";
import App from "./App.vue";
import Router from "vue-router";

import components from "../src/index.js";

Vue.use(Router);

components.forEach(comp => {
  Vue.component(comp.name, comp);
});

Vue.config.productionTip = false;

new Vue({
  router: new Router(),
  render: h => h(App)
}).$mount("#app");
