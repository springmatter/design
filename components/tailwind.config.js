module.exports = {
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      gray: {
        1: "#F8F9FA",
        2: "#DDE2E5",
        3: "#ACB5BD",
        4: "#495057"
      },
      primary: {
        default: "#0038FF",
        hover: "#0032E3"
      },
      secondary: {
        default: "#141618",
        hover: "#000"
      },
      error: "#DA1E28",
      success: "#1D833B",
      highlight: "#FFE55E"
    },
    spacing: {
      px: "1px",
      "0": "0",
      "1": "4px",
      "2": "8px",
      "3": "12px",
      "4": "16px",
      "5": "24px",
      "6": "32px",
      "7": "40px",
      "8": "48px",
      "9": "56px",
      "10": "64px"
    },
    backgroundColor: theme => theme("colors"),
    borderColor: theme => ({
      ...theme("colors"),
      default: theme("colors.secondary", "currentColor")
    }),
    borderWidth: {
      default: "1px",
      "0": "0",
      "2": "2px"
    },
    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
      wait: "wait",
      text: "text",
      move: "move",
      "not-allowed": "not-allowed"
    },
    flex: {
      "1": "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      none: "none"
    },
    flexGrow: {
      "0": "0",
      default: "1"
    },
    flexShrink: {
      "0": "0",
      default: "1"
    },
    height: theme => ({
      auto: "auto",
      ...theme("spacing"),
      full: "100%",
      screen: "100vh"
    }),
    inset: {
      "0": "0",
      auto: "auto"
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal"
    },
    margin: (theme, { negative }) => ({
      auto: "auto",
      ...theme("spacing"),
      ...negative(theme("spacing"))
    }),
    opacity: {
      "0": "0",
      "25": "0.25",
      "50": "0.5",
      "75": "0.75",
      "100": "1"
    },
    order: {
      first: "-9999",
      last: "9999",
      none: "0",
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
      "8": "8",
      "9": "9",
      "10": "10",
      "11": "11",
      "12": "12"
    },
    padding: theme => theme("spacing"),
    textColor: theme => theme("colors"),
    width: theme => ({
      auto: "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      full: "100%"
    }),
    zIndex: {
      auto: "auto",
      "0": "0",
      "10": "10",
      "20": "20",
      "30": "30",
      "40": "40",
      "50": "50"
    }
  },
  variants: {
    backgroundColor: ["hover", "active", "disabled"],
    borderColor: ["hover", "active", "disabled"],
    borderWidth: [],
    cursor: [],
    flex: [],
    flexGrow: [],
    flexShrink: [],
    height: [],
    inset: [],
    listStyleType: [],
    margin: [],
    opacity: [],
    order: [],
    padding: [],
    textColor: ["hover", "active", "visited", "disabled"],
    width: [],
    zIndex: []
  },
  corePlugins: {
    container: false,
    float: false,
    objectFit: false,
    objectPosition: false,
    visibility: false,
    fontFamily: false,
    fontSize: false,
    fontStyle: false,
    fontWeight: false,
    fontSmoothing: false,
    letterSpacing: false,
    lineHeight: false,
    listStylePosition: false,
    placeholderColor: false,
    verticalAlign: false,
    whitespace: false,
    wordBreak: false,
    backgroundAttachment: false,
    backgroundPosition: false,
    backgroundRepeat: false,
    backgroundSize: false,
    borderCollapse: false,
    tableLayout: false,
    boxShadow: false,
    appearance: false,
    outline: false,
    fill: false,
    stroke: false,
    borderStyle: false,
    borderRadius: false,
    negativeMargin: false,
    resize: false,
    maxHeight: false,
    maxWidth: false,
    minHeight: false,
    minWidth: false
  }
};
