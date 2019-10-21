<template>
  <div class="SmTabLayout">
    <div class="SmTabLayout-tabs">
      <SmButton
        v-for="(tab, index) in tabs"
        :key="index"
        @click="switchTab(index)"
        class="SmTabLayout-tab"
      >
        <h5>
          {{ tab }}
        </h5>
      </SmButton>
    </div>
    <div ref="bodies" class="SmTabLayout-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SmTabLayout",
  slotted: true,
  props: {
    tabs: {
      required: true,
      type: Array,
      description:
        "A list of tab names. If you remove a tab from DOM be sure to also remove its name from the list."
    }
  },
  methods: {
    switchTab: function(index) {
      var children = Array.from(this.$refs.bodies.childNodes);
      children.forEach(function(tab) {
        tab.classList.add("hidden");
      });

      children[index].classList.remove("hidden");
    }
  },
  mounted: function() {
    this.switchTab(0);
  }
};
</script>

<style scoped>
.SmTabLayout-tabs {
  width: 100%;
  height: 64px;
  border-bottom: 1px solid var(--secondary);
  border-radius: 0;
  display: flex;
  align-items: flex-end;
}

.SmTabLayout-tab {
  padding: 8px 16px;
}
.hidden {
  display: none;
}
</style>
