<template>
  <div class="SmGridLayout">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SmGridLayout",
  slotted: true
};
</script>

<style scoped>
.SmGridLayout {
  grid-area: content;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "leftaside header aside"
    "leftaside main   aside"
    "leftaside footer aside";
  overflow: hidden;
}

.SmGridLayout > header {
  grid-area: header;
}

.SmGridLayout > footer {
  grid-area: footer;
}

.SmGridLayout > aside {
  grid-area: aside;
}

.SmGridLayout > aside.left {
  grid-area: leftaside;
}

.SmGridLayout > aside > .SmCard {
}

.SmGridLayout > main {
  grid-area: main;
  overflow: scroll;
}
</style>
