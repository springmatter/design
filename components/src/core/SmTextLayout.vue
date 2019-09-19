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

.SmTextLayout > pre {
  @apply bg-gray-1 p-2 my-4;
}

.SmTextLayout > h1,
.SmTextLayout > h2,
.SmTextLayout > h3,
.SmTextLayout > h4,
.SmTextLayout > h5,
.SmTextLayout > h6,
.SmTextLayout > p {
  @apply mb-4;
}

.SmTextLayout > ul > li,
.SmTextLayout > ol > li {
  @apply my-1;
}

.SmTextLayout > ol,
.SmTextLayout > ul {
  @apply m-4 list-inside;
}
</style>
