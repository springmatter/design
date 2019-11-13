<template>
  <div class="SmLoading">
    <div class="SmLoadingDot"></div>
    <div class="SmLoadingDot"></div>
    <div class="SmLoadingDot"></div>
  </div>
</template>

<script>
export default {
  name: "SmLoading"
};
</script>

<style scoped>
.SmLoading {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.SmLoadingDot {
  width: 16px;
  height: 16px;
  margin: 32px 4px;
  border-radius: 50%;
  animation: 0.6s bounce infinite alternate;
  background: var(--secondary);
}

.SmLoadingDot:nth-child(2) {
  animation-delay: 0.2s;
}

.SmLoadingDot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes bounce {
  to {
    opacity: 0.3;
    transform: translate3d(0, -1rem, 0);
  }
}
</style>
