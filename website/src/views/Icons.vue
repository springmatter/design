
<template>
  <div>
    <main v-if="notes" class="p79">
      <CNotes />
    </main>
    <template v-if="!notes">
      <main>
        <div class="flex-center h100">
          <SmIcon name="map" size="small" class="m3" />
          <SmIcon name="map" class="m3" />
          <SmIcon name="map" size="large" class="m3" />
        </div>
      </main>
    </template>
  </div>
</template>

<script>
import CNotes from "@/notes/icon.md";

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
