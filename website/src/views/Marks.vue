
<template>
  <div>
    <main v-if="notes" class="p79">
      <CNotes />
    </main>
    <template v-if="!notes">
      <main>
        <ul class="flex-center flex-col m9">
          <li>
            <mark :style="{ color: 'var(--blue)' }">Marks</mark>
          </li>
          <li>
            <mark :style="{ color: 'var(--green)' }">Are</mark>
          </li>
          <li>
            <mark :style="{ color: 'var(--red)' }">Colorful</mark>
          </li>
          <li>
            <mark :style="{ color: 'var(--black)' }">And</mark>
          </li>
          <li>
            <mark :style="{ color: 'var(--yellow)' }">Fun!</mark>
          </li>
          <li>
            <mark :style="{ color: 'var(--purple)' }">
              They can be as long as your little heart desires.
            </mark>
          </li>
        </ul>
      </main>
    </template>
  </div>
</template>

<script>
import CNotes from "@/notes/mark.md";

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
