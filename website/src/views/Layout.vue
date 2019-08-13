<template>
  <div>
    <main v-if="notes" class="p79">
      <CNotes />
    </main>
    <template v-if="!notes">
      <header id="h" @click="hide">
        I am a header. Click to hide me.
      </header>
      <main id="m" @click="show">
        I'm a main. Click to restore the other elements.
      </main>
      <aside id="a" @click="hide">I'm an aside. Click to hide me.</aside>
      <footer id="f" @click="hide">I'm a footer. Click to hide me.</footer>
    </template>
  </div>
</template>

<script>
import CNotes from "@/notes/layout.md";

export default {
  components: {
    CNotes
  },
  computed: {
    notes: function() {
      return this.$route.fullPath.endsWith("notes");
    }
  },
  methods: {
    hide: function(evt) {
      evt.target.style.display = "none";
    },
    show: function() {
      document.getElementById("h").style.display = "block";
      document.getElementById("a").style.display = "block";
      document.getElementById("f").style.display = "block";
    }
  }
};
</script>

<style scoped>
#h {
  display: block;
  padding: var(--sp2);
}
#m {
  display: block;
  padding: var(--sp2);
}
#a {
  display: block;
  padding: var(--sp2);
}
#f {
  display: block;
  padding: var(--sp2);
  height: var(--sp9);
}
</style>
