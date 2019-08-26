<template>
  <div class="SmGridLayout">
    <header class="SmHeader" v-if="SmHeader">
      <slot name="header"></slot>
    </header>
    <main class="SmMain" v-if="SmMain">
      <slot name="main"></slot>
    </main>
    <footer class="SmFooter" v-if="SmFooter">
      <slot name="footer"></slot>
    </footer>
    <aside class="SmAside" v-if="SmAside">
      <slot name="aside"></slot>
    </aside>
  </div>
</template>

<script>
export default {
  name: "SmGridLayout",
  data: function() {
    return {
      SmHeader: true,
      SmMain: true,
      SmFooter: true,
      SmAside: true
    };
  },
  methods: {
    update: function() {
      console.log("updating");
      for(let child of this.$el.childNodes) {
        if(!child.hasChildNodes()) {
          this[child.className.split(" ")[0]] = false;
        }
      };
    }
  },
  beforeUpdate: function() {
    this.update();
  },
  mounted: function() {
    this.update();
  }
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

.SmHeader {
  grid-area: header;
  display: flex;
  @apply border-b;
  @apply border-gray-1;
}

.SmFooter {
  grid-area: footer;
  @apply border-t;
  @apply border-gray-1;
}

.SmAside {
  grid-area: aside;
  display: flex;
  flex-flow: column;
  @apply border-l;
  @apply border-gray-1;
}

.SmMain {
  grid-area: main;
  overflow: scroll;
}
</style>
