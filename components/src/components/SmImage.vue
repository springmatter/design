<template>
  <figure class="SmImage">
    <transition name="fade">
      <img
        :src="src"
        @load="srcLoading = false"
        v-show="!srcLoading && !loading"
        class="SmImageImg"
        :style="{
          objectFit: objectFit,
          objectPosition: objectPosition
        }"
      />
    </transition>
    <div class="SmImageGlow" v-if="srcLoading || loading">
      <SmIcon name="image" class="SmImageGlowIcon" />
    </div>
  </figure>
</template>

<script>
export default {
  name: "SmImage",
  data: function() {
    return {
      srcLoading: true
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
    },
    objectFit: {
      required: false,
      type: String,
      default: "unset",
      validator: function(value) {
        return (
          ["contain", "cover", "fill", "none", "scale-down", "unset"].indexOf(
            value
          ) !== -1
        );
      }
    },
    objectPosition: {
      required: false,
      type: String,
      default: "unset",
      validator: function(value) {
        const MATCH = value.match(
          /([0-9]*px|[0-9]*%|right|left|top|bottom|center)/g
        );
        return (MATCH !== null && MATCH.length === 2) || value === "unset";
      }
    }
  }
};
</script>

<style>
.SmImage {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.SmImageImg {
  width: 100%;
  height: 100%;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.75s ease;
}

.SmImageGlow {
  width: 100%;
  height: 100%;
  outline: 4px solid var(--gray2);
  outline-offset: -8px;
  animation: 0.75s infinite linear glow alternate;
  display: flex;
  align-items: center;
  justify-content: center;
}

.SmImageGlowIcon {
  width: 50% !important;
  height: 50% !important;
  max-width: 80px !important;
  max-height: 80px !important;
  color: var(--gray2);
  position: absolute;
}

@keyframes glow {
  from {
    opacity: 0.2;
  }

  to {
    opacity: 0.75;
  }
}
</style>
