<template>
  <div class="SmColumnBox">
    <aside class="SmColumnBoxLeft">
      <slot name="left"></slot>
    </aside>
    <main class="SmColumnBoxCenter">
      <slot></slot>
    </main>
    <aside class="SmColumnBoxRight">
      <slot name="right"></slot>
    </aside>
  </div>
</template>

<script>
export default {
  name: "SmColumnBox"
};
</script>

<style scoped>
.SmColumnBox {
  width: 100%;
  height: 100%;
  display: flex;
}

.SmColumnBoxLeft {
  height: 100%;
  padding: 32px 32px;
}

.SmColumnBoxCenter {
  flex-grow: 1;
  height: 100%;
  width: 100%;
  padding: 32px 0px 32px 0px;
}

.SmColumnBoxRight {
  height: 100%;
  padding: 32px 32px;
}
</style>
