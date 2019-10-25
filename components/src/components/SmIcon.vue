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
      default: "m",
      required: false,
      validator: function(value) {
        return ["s", "m", "l"].indexOf(value) !== -1;
      }
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
  width: 16px;
  height: 16px;
}

.SmIcon.m {
  width: 20px;
  height: 20px;
}

.SmIcon.l {
  width: 24px;
  height: 24px;
}
</style>
