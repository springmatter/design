<template>
  <div class="SmGridLayout">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SmGridLayout"
}
</script>

<style scoped>
.SmGridLayout {
  grid-area: content;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
  "header aside"
  "main   aside"
  "footer aside";
  overflow: hidden;

  @apply w-full;
  @apply h-full;
}

.SmGridLayout > header {
  grid-area: header;
  display: flex;
  @apply border-b;
  @apply border-gray-1;
  @apply p-2;
}

.SmGridLayout > footer {
  grid-area: footer;
  display: flex;
  @apply border-t;
  @apply border-gray-1;
  @apply p-2;
}

.SmGridLayout > aside {
  grid-area: aside;
  @apply border-l;
  @apply border-gray-1;
  @apply p-2;
}

.SmGridLayout > aside > .SmCard {
  @apply border-t-0 border-r-0 border-l-0 border-gray-1 rounded-none;
}

.SmGridLayout > main {
  grid-area: main;
  overflow: scroll;
  @apply p-2;
}

</style>
