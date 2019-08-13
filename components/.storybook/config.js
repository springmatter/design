import { configure, addParameters, addDecorator } from "@storybook/vue";
import centered from "@storybook/addon-centered/vue";
import mytheme from "./theme.js";
import "../src/index.js";

addParameters({
  options: {
    theme: mytheme,
    showPanel: false,
    sortStoriesByKind: true
  }
});

addDecorator(centered);

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => {
    req(filename);
  });
}

configure(loadStories, module);
