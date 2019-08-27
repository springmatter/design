<template>
  <SmTabLayout @close-tab="tabs.splice($event - 1, 1)">
    <SmTextLayout data-tab="SmTextLayout">
      <SmButton type="primary" @click="tabs.push(tabs.length)">Spawn tab</SmButton>
    </SmTextLayout>
    <SmGridLayout
      v-for="tab in tabs"
      :key="tab"
      :data-tab="'SmGridLayout #' + tab">
      <header>
        HEADER {{ tab }}
      </header>
      <main>
        MAIN {{ tab }}
      </main>
      <footer>
        FOOTER {{ tab }}
      </footer>
      <aside>
        ASIDE {{ tab }}
      </aside>
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
