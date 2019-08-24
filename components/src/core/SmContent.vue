<template>
  <div class="SmContent">
    <header><slot name="header"></slot></header>
    <main><slot></slot></main>
    <footer><slot name="footer"></slot></footer>
    <aside><slot name="aside"></slot></aside>
  </div>
</template>

<script>
export default {
  name: "SmContent"
}
</script>

<style scoped>
.SmContent {
}
</style>
