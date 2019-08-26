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

.SmIcon.s {
  width: 18px;
  height: 18px;
}

.SmIcon.m {
  width: 22px;
  height: 22px;
}

.SmIcon.l {
  width: 26px;
  height: 26px;
}
</style>
