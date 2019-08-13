import markdownIt from "markdown-it";

export default {
  md: new markdownIt(),

  template: "<div><slot></slot></div>",

  data() {
    return {
      sourceData: this.source
    };
  },

  props: {
    watches: {
      type: Array,
      default: () => ["source", "show"]
    },
    source: {
      type: String,
      default: ``
    },
    show: {
      type: Boolean,
      default: true
    },
    highlight: {
      type: Boolean,
      default: true
    },
    html: {
      type: Boolean,
      default: true
    },
    xhtmlOut: {
      type: Boolean,
      default: true
    },
    breaks: {
      type: Boolean,
      default: true
    },
    linkify: {
      type: Boolean,
      default: true
    },
    typographer: {
      type: Boolean,
      default: true
    },
    langPrefix: {
      type: String,
      default: "language-"
    },
    quotes: {
      type: String,
      default: "“”‘’"
    },
    tableClass: {
      type: String,
      default: "table"
    },
    taskLists: {
      type: Boolean,
      default: true
    },
    anchorAttributes: {
      type: Object,
      default: () => ({})
    },
    prerender: {
      type: Function,
      default: sourceData => {
        return sourceData;
      }
    },
    postrender: {
      type: Function,
      default: htmlData => {
        return htmlData;
      }
    }
  },

  render(createElement) {
    this.md = new markdownIt();

    this.md.set({
      html: this.html,
      xhtmlOut: this.xhtmlOut,
      breaks: this.breaks,
      linkify: this.linkify,
      typographer: this.typographer,
      langPrefix: this.langPrefix,
      quotes: this.quotes
    });
    this.md.renderer.rules.table_open = () =>
      `<table class="${this.tableClass}">\n`;
    let defaultLinkRenderer =
      this.md.renderer.rules.link_open ||
      function(tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options);
      };
    this.md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
      Object.keys(this.anchorAttributes).map(attribute => {
        let aIndex = tokens[idx].attrIndex(attribute);
        let value = this.anchorAttributes[attribute];
        if (aIndex < 0) {
          tokens[idx].attrPush([attribute, value]); // add new attribute
        } else {
          tokens[idx].attrs[aIndex][1] = value;
        }
      });
      return defaultLinkRenderer(tokens, idx, options, env, self);
    };

    let outHtml = this.show
      ? this.md.render(this.prerender(this.sourceData))
      : "";
    outHtml = this.postrender(outHtml);

    this.$emit("rendered", outHtml);
    return createElement("div", {
      domProps: {
        innerHTML: outHtml
      }
    });
  },

  beforeMount() {
    if (this.$slots.default) {
      this.sourceData = "";
      for (let slot of this.$slots.default) {
        this.sourceData += slot.text;
      }
    }

    this.$watch("source", () => {
      this.sourceData = this.prerender(this.source);
      this.$forceUpdate();
    });

    this.watches.forEach(v => {
      this.$watch(v, () => {
        this.$forceUpdate();
      });
    });
  }
};
