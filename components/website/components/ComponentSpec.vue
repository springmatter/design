<template>
  <section>
    <h2 class="m-0">{{ comp.name }}</h2>
    <pre class="p-3 bg-gray-1">
<{{ comp.name + " " + compProps }}
>
</{{ comp.name }}></pre>
    <small>
      <ul class="list-disc ml-4 mt-2">
        <li>
          <code>!</code> before prop name denotes required prop
        </li>
        <li>
          <code>Type(value)</code> denotes default prop value
        </li>
        <li>
          <code>val1|val2|val3|val4</code> denotes enum
        </li>
      </ul>
    </small>
  </section>
</template>

<script>
export default {
  props: {
    comp: {
      type: Object,
      required: true
    }
  },
  computed: {
    compProps: function() {
      var ps = this.comp.props;
      var propStr = "";
      var allRequired = true;
      for(let p in ps) {
        var typeStr = ps[p].type.toString().replace(/function |\(\).*/g, "");

        if ("default" in ps[p]) {
          typeStr += `(${ps[p].default})`;
        }

        if ("validator" in ps[p]) {
          var enums = ps[p].validator
            .toString()
            .match(/\[.*\]/g)[0]
            .replace(/,/g, "|")
            .replace(/\[|\]| |"/g, "");
          typeStr = enums;
        }

        if (ps[p].required) {
          propStr = `\n  !${p}="${typeStr}"` + propStr;
        } else {
          propStr = propStr + `\n  ${p}="${typeStr}"`;
          allRequired = false;
        }

      }

      return propStr;
    }
  }
}
</script>

<style>
code {
  @apply p-1 rounded-sm bg-gray-1 text-xs;
}
</style>
