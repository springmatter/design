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
  slotted: false,
  props: {
    name: {
      type: String,
      required: true,
      description:
        "Determines the icon to be used. Must correspond to the name of an icon from the feather icons set (See full list of available icons below)."
    },
    size: {
      type: String,
      default: "m",
      required: false,
      validator: function(value) {
        return ["s", "m", "l"].indexOf(value) !== -1;
      },
      description: "Determines the size of the icon."
    }
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
  display: inline;
}

.SmIcon.s {
}

.SmIcon.m {
}

.SmIcon.l {
}
</style>
