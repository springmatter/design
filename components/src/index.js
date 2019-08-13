import Vue from "vue";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import "normalize.css/normalize.css";

const requireCss = require.context(".", true, /\.css$/);
requireCss.keys().forEach(requireCss);

var components = [];

const requireComponent = require.context("./components", true, /\.vue$/);
requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName);
  components.push(componentConfig.default);

  // Get PascalCase name of component
  // const componentName = upperFirst(
  //   camelCase(
  //     // Strip the leading `'./` and extension from the filename
  //     fileName.replace(/^\.\/(.*)\.\w+$/, "$1")
  //   )
  // );

  // Register component globally
  // Vue.component(
  //   componentName,
  //   // Look for the component options on `.default`, which will
  //   // exist if the component was exported with `export default`,
  //   // otherwise fall back to module's root.
  //   componentConfig.default || componentConfig
  // );
});

export default components;
