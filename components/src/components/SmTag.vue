<template>
  <small class="SmTag" :style="{ background: rgbaColor }">
    <span class="dot" :style=" { background: hexColor }"></span>
    <slot></slot>
  </small>
</template>

<script>
export default {
  name: "SmTag",
  props: {
    color: {
      type: String,
      required: true,
      validator: function(value) {
        return /(^#?[0-9A-Fa-f]{6}$)|(^#?[0-9A-Fa-f]{3}$)/i.test(value);
      }
    }
  },
  computed: {
    rgbaColor: function() {
      // I copied this from the internet
      var hex   = this.color.replace('#', '');
      var r = parseInt(hex.length == 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2), 16);
      var g = parseInt(hex.length == 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4), 16);
      var b = parseInt(hex.length == 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6), 16);
      return 'rgba(' + r + ', ' + g + ', ' + b + ', 0.15)';
    },
    hexColor: function() {
      return this.color.charAt(0) === "#" ? this.color : "#" + this.color;
    }
  }
}
</script>

<style scoped>
.SmTag {
  @apply rounded-full;
  @apply whitespace-no-wrap;
  padding: 3px 10px 3px 8px;
  @apply text-gray-9;
  @apply italic;
}

.dot {
  width: 10px;
  height: 10px;
  background: black;
  display: inline-block;
  @apply rounded-full;
  @apply mr-1;
}
</style>
