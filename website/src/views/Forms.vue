
<template>
  <div>
    <main v-if="notes" class="p79">
      <CNotes />
    </main>
    <template v-if="!notes">
      <main class="p79">
        Forms are still a work in progress, but should work mostly like standard HTML5 forms for now.
      </main>
    </template>
  </div>
</template>

<script>
import CNotes from "@/notes/form.md";

export default {
  components: {
    CNotes
  },
  computed: {
    notes: function() {
      return this.$route.fullPath.endsWith("notes");
    }
  }
};
</script>

<style scoped>
</style>
