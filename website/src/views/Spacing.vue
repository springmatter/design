<template>
  <div>
    <main v-if="notes" class="p79">
      <CNotes />
    </main>
    <template v-if="!notes">
      <main>
        <div class="flex-center">
          <dl class="dl">
            <dt>var(--sp1)</dt>
            <dd :style="{ width: 'var(--sp1)' }"></dd>
            <dt>var(--sp2)</dt>
            <dd :style="{ width: 'var(--sp2)' }"></dd>
            <dt>var(--sp3)</dt>
            <dd :style="{ width: 'var(--sp3)' }"></dd>
            <dt>var(--sp4)</dt>
            <dd :style="{ width: 'var(--sp4)' }"></dd>
            <dt>var(--sp5)</dt>
            <dd :style="{ width: 'var(--sp5)' }"></dd>
            <dt>var(--sp6)</dt>
            <dd :style="{ width: 'var(--sp6)' }"></dd>
            <dt>var(--sp7)</dt>
            <dd :style="{ width: 'var(--sp7)' }"></dd>
            <dt>var(--sp8)</dt>
            <dd :style="{ width: 'var(--sp8)' }"></dd>
            <dt>var(--sp9)</dt>
            <dd :style="{ width: 'var(--sp9)' }"></dd>
          </dl>
        </div>
      </main>
    </template>
  </div>
</template>

<script>
import CNotes from "@/notes/spacing.md";

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
.flex-center {
  margin-top: var(--sp9);
}

.dl {
  width: calc(var(--sp9) * 2.5);
}

.dl > dd {
  height: var(--sp3);
  border: 1px solid var(--black);
  margin-left: calc(var(--sp8) + var(--sp2));
  margin-bottom: var(--sp3);
}

.dl > dt {
  font-style: normal;
}
</style>
