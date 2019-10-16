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
};
</script>

<style scoped>
.SmTextLayout {
  grid-area: content;
}

.SmTextLayout > .content {
}

.SmTextLayout > pre {
}

.SmTextLayout > h1,
.SmTextLayout > h2,
.SmTextLayout > h3,
.SmTextLayout > h4,
.SmTextLayout > h5,
.SmTextLayout > h6,
.SmTextLayout > p {
}

.SmTextLayout > ul > li,
.SmTextLayout > ol > li {
}

.SmTextLayout > ol,
.SmTextLayout > ul {
}
</style>
