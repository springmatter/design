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
}
</script>

<style scoped>
.SmLoading {
  display: flex;
  justify-content: center;
}

.SmLoadingDot {
  width: 1rem;
  height: 1rem;
  margin: 2rem 0.3rem;
  @apply bg-black;
  border-radius: 50%;
  animation: 0.9s bounce infinite alternate;
}

.SmLoadingDot:nth-child(2) {
  animation-delay: 0.3s;
}

.SmLoadingDot:nth-child(3) {
  animation-delay: 0.6s;
}

@keyframes bounce {
  to {
    opacity: 0.3;
    transform: translate3d(0, -1rem, 0);
  }
}
</style>
