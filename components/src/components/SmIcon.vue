<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    class="SmIcon"
    :class="size"
    v-html="iconCode"
  ></svg>
</template>

<script>
import feather from "feather-icons";

export default {
  name: "SmIcon",
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: "medium",
      required: false,
      validator: function(value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      }
    },
  },
  computed: {
    iconCode: function() {
      return feather.icons[this.name].toString();
    }
  }
};
</script>

<style scoped>
.SmIcon {
  stroke: currentColor;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}

.SmIcon.small {
  width: calc(var(--sp1) * 4);
  height: calc(var(--sp1) * 4);
}

.SmIcon.medium {
  width: calc(var(--sp1) * 5);
  height: calc(var(--sp1) * 5);
}

.SmIcon.large {
  width: calc(var(--sp1) * 6);
  height: calc(var(--sp1) * 6);
}
</style>
