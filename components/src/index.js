import "./styles.css";
import "./components/forms.css";

var components = [];

const requireComponent = require.context("./", true, /\.vue$/);
requireComponent.keys().forEach(fileName => {
  components.push(requireComponent(fileName).default);
});

export default components;
