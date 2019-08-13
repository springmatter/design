import { create } from "@storybook/theming";
import img from "./smlogo.png";

export default create({
  base: "light",

  colorPrimary: "#006CFF",
  colorSecondary: "#006CFF",

  // UI
  appBg: "white",
  appContentBg: "white",
  appBorderColor: "lightgray",
  appBorderRadius: 2,

  // Typography
  fontBase: "sans-serif",
  fontCode: "monospace",

  // Text colors
  textColor: "#171717",
  textInverseColor: "white",

  // Toolbar default and active colors
  barTextColor: "lightgray",
  barSelectedColor: "#006CFF",
  barBg: "white",

  // Form colors
  inputBg: "white",
  inputBorder: "lightgray",
  inputTextColor: "#171717",
  inputBorderRadius: 2,

  brandTitle: "Springmatter Design",
  brandUrl: "../index.html",
  brandImage: img
});
