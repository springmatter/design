<template>
  <section class="SmScrollbox">
    <header class="SmScrollbox-header">
      <slot name="header" />
    </header>
    <main class="SmScrollbox-main">
      <slot />
    </main>
  </section>
</template>

<script>
export default {
  name: "SmScrollBox"
};
</script>

<style>
.SmScrollbox-header {
  min-height: 64px;
  border-radius: 0;
  border-bottom: 1px solid var(--secondary);
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  padding-bottom: 16px;
}

.SmScrollbox-main {
  overflow-y: scroll;
  padding: 0 16px;
  height: calc(100% - 64px);
}

.SmScrollbox-main > *:first-child {
  margin-top: 16px;
}

.SmScrollbox-main > *:last-child {
  margin-bottom: 16px;
}
</style>
