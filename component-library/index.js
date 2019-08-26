import Vue from "vue";

import "./styles.css";

var components = [];

const requireComponent = require.context("./", true, /\.vue$/);
requireComponent.keys().forEach(fileName => {
  components.push(requireComponent(fileName).default);
});

export default components;
