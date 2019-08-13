<template>
  <div>
    <main v-if="notes" class="p79">
      <CNotes />
    </main>
    <template v-if="!notes">
      <main>
        <div class="container">
          <h1>
            <label>&lt;h1&gt;</label>
            This is for page-level titles
            <label>&lt;/h2&gt;</label>
          </h1>
          <h2>
            <label>&lt;h2&gt;</label>
            This is for section-level titles
            <label>&lt;/h2&gt;</label>
          </h2>
          <h3>
            <label>&lt;h3&gt;</label>
            This is for component-level titles
            <label>&lt;/h3&gt;</label>
          </h3>
          <h5>
            <label>&lt;h5&gt;</label>
            Sidetitle
            <label>&lt;/h5&gt;</label>
          </h5>
          <h4>
            <label>&lt;h4&gt;</label>
            This is for component-level subtitles
            <label>&lt;/h4&gt;</label>
          </h4>
          <label id="lbl">
            <label>&lt;label&gt;</label>
            This is label text
            <label>&lt;/label&gt;</label>
          </label>
          <p>
            This is standard body text. It will be applied to all text<br />that
            is not contained in one of the tags listed above
          </p>
        </div>
      </main>
    </template>
  </div>
</template>

<script>
import CNotes from "@/notes/typography.md";

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
.container {
  width: calc(var(--sp9) * 4.75);
  margin: var(--sp9) auto;
}

h1,
h2,
h3,
h4,
h5,
#lbl {
  margin-bottom: var(--sp7);
}

p {
  margin-top: var(--sp7);
}

#lbl {
  display: block;
}
</style>
