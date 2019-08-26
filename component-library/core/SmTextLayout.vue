<template>
  <div class="SmTextLayout py-7 overflow-auto">
    <main class="mx-auto w-1/2">
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
}
</style>
