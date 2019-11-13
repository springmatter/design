<template>
  <figure class="SmImage">
    <transition name="fade">
      <img
        :src="src"
        @load="srcLoading = false"
        v-show="!srcLoading && !loading"
        class="SmImageImg"
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
    }
  }
};
</script>

<style>
.SmImage {
  position: relative;
  border: 1px solid var(--secondary);
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