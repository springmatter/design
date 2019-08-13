<template>
  <div>
    <main v-if="notes" class="p79">
      <CNotes />
    </main>
    <template v-if="!notes">
      <main>
        <div class="flex-center">
          <dl class="dl">
            <dt :style="{ background: 'var(--blue)' }"></dt>
            <dd>var(--blue)</dd>
            <dt :style="{ background: 'var(--blue-hover)' }"></dt>
            <dd :style="{ marginBottom: 'var(--sp3)' }">var(--blue-hover)</dd>
            <dt :style="{ background: 'var(--red)' }"></dt>
            <dd>var(--red)</dd>
            <dt :style="{ background: 'var(--red-hover)' }"></dt>
            <dd :style="{ marginBottom: 'var(--sp3)' }">var(--red-hover)</dd>
            <dt :style="{ background: 'var(--green)' }"></dt>
            <dd>var(--green)</dd>
            <dt :style="{ background: 'var(--green-hover)' }"></dt>
            <dd :style="{ marginBottom: 'var(--sp3)' }">var(--green-hover)</dd>
            <dt :style="{ background: 'var(--yellow)' }"></dt>
            <dd>var(--yellow)</dd>
            <dt :style="{ background: 'var(--yellow-hover)' }"></dt>
            <dd :style="{ marginBottom: 'var(--sp3)' }">var(--yellow-hover)</dd>
            <dt :style="{ background: 'var(--purple)' }"></dt>
            <dd>var(--purple)</dd>
            <dt :style="{ background: 'var(--purple-hover)' }"></dt>
            <dd>var(--purple-hover)</dd>
          </dl>
          <dl class="dl">
            <dt :style="{ border: '1px solid var(--black)' }"></dt>
            <dd>var(--white)</dd>
            <dt :style="{ background: 'var(--gray1)' }"></dt>
            <dd>var(--gray1)</dd>
            <dt :style="{ background: 'var(--gray2)' }"></dt>
            <dd>var(--gray2)</dd>
            <dt :style="{ background: 'var(--gray3)' }"></dt>
            <dd>var(--gray3)</dd>
            <dt :style="{ background: 'var(--gray4)' }"></dt>
            <dd>var(--gray4)</dd>
            <dt :style="{ background: 'var(--gray5)' }"></dt>
            <dd>var(--gray5)</dd>
            <dt :style="{ background: 'var(--gray6)' }"></dt>
            <dd>var(--gray6)</dd>
            <dt :style="{ background: 'var(--gray7)' }"></dt>
            <dd>var(--gray7)</dd>
            <dt :style="{ background: 'var(--gray8)' }"></dt>
            <dd>var(--gray8)</dd>
            <dt :style="{ background: 'var(--gray9)' }"></dt>
            <dd>var(--gray9)</dd>
            <dt :style="{ background: 'var(--black)' }"></dt>
            <dd :style="{ marginBottom: '12px' }">var(--black)</dd>
            <dt :style="{ background: 'var(--overlay)' }"></dt>
            <dd>var(--overlay)</dd>
          </dl>
        </div>
      </main>
    </template>
  </div>
</template>

<script>
import CNotes from "@/notes/colors.md";

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
  text-align: left;
  margin-bottom: var(--sp1);
}

.dl > dt {
  width: var(--sp9);
  height: var(--sp3);
  margin-right: var(--sp2);
}
</style>
