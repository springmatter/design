<template>
  <div>
    <div v-if="notes" class="content">
      <main class="p79">
        <CNotes />
      </main>
    </div>
    <SmTabs v-if="!notes" class="content" @close-tab="close($event)">
      <div v-for="(tab, index) in tabs" :key="index" :data-tab="tab">
        <main class="p79">
          Hey I'm a main tag in tab {{ index + 1 }}
          <br />
          <br />
          <button
            v-if="index === 0"
            @click="tabs.push('Tab ' + (tabs.length + 1))"
          >
            Spawn Tab
          </button>
        </main>
        <aside v-if="index > 3">Hey I'm an aside in tab {{ index + 1 }}</aside>
        <header v-if="index > 1">
          Hey I'm a header in tab {{ index + 1 }}
        </header>
        <footer v-if="index > 2">
          Hey I'm a footer in tab {{ index + 1 }}
        </footer>
      </div>
    </SmTabs>
  </div>
</template>

<script>
import CNotes from "@/notes/tabs.md";

export default {
  data: function() {
    return {
      tabs: ["Main Tab"]
    };
  },
  components: {
    CNotes
  },
  computed: {
    notes: function() {
      return this.$route.fullPath.endsWith("notes");
    }
  },
  methods: {
    close: function(index) {
      console.log("closing " + index);
      this.tabs.splice(index, 1);
      console.log(this.tabs);
    }
  }
};
</script>

<style scoped>
.fig {
  width: calc(var(--sp9) * 5);
}
</style>
