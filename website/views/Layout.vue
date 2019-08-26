<template>
  <SmTabLayout @close-tab="tabs.splice($event - 1, 1)">
    <SmTextLayout data-tab="SmTextLayout">
      <SmButton type="primary" @click="tabs.push(tabs.length)">Spawn tab</SmButton>
    </SmTextLayout>
    <SmGridLayout
      v-for="tab in tabs"
      :key="tab"
      :data-tab="'SmGridLayout #' + tab">
      <template #header>
        HEADER {{ tab }}
      </template>
      <template #main>
        MAIN {{ tab }}
      </template>
      <template #footer>
        FOOTER {{ tab }}
      </template>
      <template #aside>
        ASIDE {{ tab }}
      </template>
    </SmGridLayout>
  </SmTabLayout>
</template>

<script>
export default {
  data: function() {
    return {
      tabs: [ 0, 1, 2, 3 ]
    };
  }
}
</script>

<style scoped>
</style>
