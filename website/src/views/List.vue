
<template>
  <div>
    <main v-if="notes" class="p79">
      <CNotes />
    </main>
    <template v-if="!notes">
      <main>
        <div class="lsts">
          <ul>
            <li>I'm a standard list</li>
            <li>Made with a ul tag</li>
            <li>I can be used</li>
            <li>For many things!</li>
          </ul>
          <figure>
            <figcaption>
              <h3>Lists work well inside figures</h3>
            </figcaption>
            <dl>
              <dt>I'm a</dt>
              <dd>Definition list</dd>
              <dt>Made with dt tag</dt>
              <dd>and with dd tag</dd>
              <dt>Wrapped in</dt>
              <dd>dl tag</dd>
              <dt>Useful for</dt>
              <dd>Things like this</dd>
              <dt>Time</dt>
              <dd>12:01am</dd>
              <dt>Date</dt>
              <dd>August 22, 1994</dd>
              <dt>Sex</dt>
              <dd>Male</dd>
              <dt>Weight</dt>
              <dd>7.2 lbs</dd>
            </dl>
          </figure>
          <ol>
            <li>I'm an ordered list</li>
            <li>Made with an ol tag</li>
            <li>I can be used</li>
            <li>To keep your items</li>
            <li>In line!</li>
          </ol>
        </div>
      </main>
    </template>
  </div>
</template>

<script>
import CNotes from "@/notes/lists.md";

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
.lsts {
  margin: 0 auto;
  display: flex;
  height: 100%;
  justify-content: space-around;
  align-items: center;
}
</style>
