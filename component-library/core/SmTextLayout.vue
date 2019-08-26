<template>
  <div class="SmTextLayout">
    <main class="content">
      <slot></slot>
    </main>
  </div>
</template>

<script>
export default {
  name: "SmTextLayout"
}
</script>

<style scoped>
.SmTextLayout {
  grid-area: content;
  @apply py-7;
  @apply overflow-auto;
}

.SmTextLayout > .content {
  @apply mx-auto;
  @apply w-1/2;
}
</style>
