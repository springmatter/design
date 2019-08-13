import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import components from "../../components/src/index.js";
components.forEach(comp => { Vue.component(comp.name, comp); });

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
