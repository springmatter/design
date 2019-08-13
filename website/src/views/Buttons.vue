<template>
  <div>
    <main v-if="notes" class="p79">
      <CNotes />
    </main>
    <template v-if="!notes">
      <main>
        <div class="btns">
          <div class="std">
            <button>Primary</button>
            <button class="secondary">Secondary</button>
            <button class="ghost">Ghost</button>
          </div>
          <div class="icns">
            <button>Primary <SmIcon name="plus" /></button>
            <button class="secondary">Secondary <SmIcon name="plus" /></button>
            <button class="ghost">Ghost <SmIcon name="plus" /></button>
          </div>
          <button class="icon"><SmIcon name="map" /></button>
        </div>
      </main>
    </template>
  </div>
</template>

<script>
import CNotes from "@/notes/button.md";

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
.btns {
  margin-top: var(--sp9);
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.btns > div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 200px;
  margin: 0 var(--sp3);
}
</style>
