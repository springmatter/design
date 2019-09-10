<template>
  <div class="SmTextLayout">
    <main class="content">
      <slot></slot>
    </main>
  </div>
</template>

<script>
export default {
  name: "SmTextLayout",
  slotted: true
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

pre {
  @apply bg-gray-1 p-2 my-4;
}

h1, h2, h3, h4, h5, h6, p {
  @apply mb-4;
}

li {
  @apply my-1;
}

ol, ul {
  @apply m-4 list-inside;
}
</style>
