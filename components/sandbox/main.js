import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";

import components from "../src/index.js";

components.forEach(comp => {
  Vue.component(comp.name, comp);
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
