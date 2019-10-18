<template>
  <div class="SmFlexLayout">
    <aside class="SmFlexLayoutLeft">
      <slot name="left"></slot>
    </aside>
    <main class="SmFlexLayoutCenter">
      <slot></slot>
    </main>
    <aside class="SmFlexLayoutRight">
      <slot name="right"></slot>
    </aside>
  </div>
</template>

<script>
export default {
  name: "SmFlexLayout",
  slotted: true
};
</script>

<style scoped>
.SmFlexLayout {
  width: 100%;
  height: 100%;
  display: flex;
}

.SmFlexLayoutLeft {
  height: 100%;
  margin: 32px 32px;
}

.SmFlexLayoutCenter {
  flex-grow: 1;
  height: 100%;
  width: 100%;
  margin: 32px 0px 32px 0px;
}

.SmFlexLayoutRight {
  height: 100%;
  margin: 32px 64px;
}
</style>
