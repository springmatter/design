<template>
  <img
    :src="src"
    class="SmImage"
    @load="srcLoading = false"
    :class="{ SmImageLoading: srcLoading || loading }"
    :style="{
      outlineWidth: loading || srcLoading ? `${outlineWidth}px` : 0,
      outlineOffset: `${-(outlineWidth + 1)}px`
    }"
    ref="img"
    @click="$emit('click', $event)"
  />
</template>

<script>
export default {
  name: "SmImage",
  data: function() {
    return {
      srcLoading: true,
      outlineWidth: 1000
    };
  },
  props: {
    src: {
      required: true,
      type: String
    },
    loading: {
      required: false,
      type: Boolean
    }
  },
  mounted: function() {
    this.outlineWidth = this.$refs.img.offsetWidth / 2;
  }
};
</script>

<style>
.SmImageLoading {
  animation: glow 0.75s ease-in-out infinite alternate;
  outline-color: var(--gray2);
  outline-style: solid;
  padding: 0px;
}

@keyframes glow {
  from {
    opacity: 0.2;
  }

  to {
    opacity: 1;
  }
}
</style>
