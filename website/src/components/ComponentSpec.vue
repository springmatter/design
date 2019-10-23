<template>
  <SmCard class="mb-7">
    <h2 class="m-0">{{ comp.name }}</h2>
    <code class="p-3 my-2 block">{{ compStr }}</code>
    <h4 v-if="'props' in comp" class="mb-4">Props</h4>
    <dl>
      <template v-for="(prop, key) in comp.props">
        <dt class="font-normal">
          <code>{{ key }}</code>
          <small v-if="prop.required" class="ml-1 text-red">Required</small>
          <small class="text-blue">
            {{ prop.type.toString().replace(/function |\(\).*/g, "") }}
            <span
              v-if="
                'validator' in prop &&
                  !prop.validator.toString().includes('IGNORE')
              "
            >
              {{
                prop.validator
                  .toString()
                  .match(/\[.*\]/g)[0]
                  .replace(/,/g, " |")
              }}
            </span>
          </small>
          <small v-if="'default' in prop" class="text-green">
            default:
            {{
              prop.type.toString().indexOf("String") !== -1
                ? `"${prop.default}"`
                : prop.default
            }}
          </small>
        </dt>
        <dd class="mb-5 ml-4 mt-2">
          {{ prop.description }}
        </dd>
      </template>
    </dl>
  </SmCard>
</template>

<script>
export default {
  props: {
    compName: {
      type: String,
      required: true
    }
  },
  computed: {
    comp: function() {
      return this.$root.$data.comps[this.compName];
    },
    compStr: function() {
      var ps = this.comp.props;
      var compStr = `<${this.comp.name}`;
      for (let p in ps) {
        if (ps[p].required) {
          var typeStr = ps[p].type.toString().replace(/function |\(\).*/g, "");

          var newProp = `${p}="${typeStr}"`;
          if (typeStr !== "String") {
            newProp = ":" + newProp;
          }
          compStr = `${compStr} ${newProp}`;
        }
      }

      if (this.comp.slotted) {
        compStr += `></${this.comp.name}>`;
      } else {
        compStr += " />";
      }

      return compStr;
    }
  }
};
</script>

<style>
code {
  border-radius: 2px;
  padding: 4px;
  background: var(--gray-1);
}
</style>
