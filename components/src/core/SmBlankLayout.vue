<template>
  <div class="SmBlankLayout">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SmBlankLayout",
  slotted: true
}
</script>

<style>
.SmBlankLayout {
  grid-area: content;
}
</style>

