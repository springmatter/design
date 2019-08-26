<template>
  <div class="SmGridLayout">
    <header class="SmHeader border-b border-gray-1" v-if="SmHeader">
      <slot name="header"></slot>
    </header>
    <main class="SmMain" v-if="SmMain">
      <slot name="main"></slot>
    </main>
    <footer class="SmFooter border-t border-gray-1" v-if="SmFooter">
      <slot name="footer"></slot>
    </footer>
    <aside class="SmAside border-l border-gray-1" v-if="SmAside">
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
}

.SmHeader {
  grid-area: header;
  display: flex;
}

.SmFooter {
  grid-area: footer;
}

.SmAside {
  grid-area: aside;
  display: flex;
  flex-flow: column;
}

.SmMain {
  grid-area: main;
  overflow: scroll;
}
</style>
