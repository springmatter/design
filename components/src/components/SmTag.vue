<template>
  <div class="SmTag" :style="{ border: '1px solid ' + hexColor }">
    <span class="SmTagDot" :style="{ background: hexColor }"></span>
    <small>
      <slot></slot>
    </small>
  </div>
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
      },
      description:
        "The background color of the tag. Must be a valid hex color in one of the following forms: #123456, #123, 12345, or 123"
    }
  },
  computed: {
    rgbaColor: function() {
      // I copied this from the internet
      var hex = this.color.replace("#", "");
      var r = parseInt(
        hex.length == 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2),
        16
      );
      var g = parseInt(
        hex.length == 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4),
        16
      );
      var b = parseInt(
        hex.length == 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6),
        16
      );
      return "rgba(" + r + ", " + g + ", " + b + ", 0.15)";
    },
    hexColor: function() {
      return this.color.charAt(0) === "#" ? this.color : "#" + this.color;
    }
  }
};
</script>

<style scoped>
.SmTag {
  border-radius: 100px;
  white-space: nowrap;
  padding: 4px 8px 4px 8px;
  display: inline-flex;
  align-items: center;
}

.SmTagDot {
  width: 8px;
  height: 8px;
  border-radius: 100px;
  margin-right: 8px;
}
</style>
