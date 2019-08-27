<template>
  <div class="SmTabLayout">
    <div class="tab-bar">
      <div
        class="tab-container"
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ activeTab: activeTab === index }"
      >
        <small><SmButton type="ghost" @click="switchTab(index)" class="tab-button">
          {{ tab.tabName }}
        </SmButton></small>
        <SmButton v-if="index > 0" icon="x" @click="closeTab(index)" class="tab-close" small/>
      </div>
    </div>
    <div id="currentTab">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SmTabLayout",
  components: {},
  data: function() {
    return {
      tabs: [],
      activeTab: -1,
      observer: null
    };
  },
  methods: {
    closeTab: function(index) {
      this.$emit("close-tab", index);
      this.switchTab(-1);
    },
    switchTab: function(index) {
      this.tabs.forEach(function(tab) {
        tab.style.display = "none";
      });

      if (index !== -1) {
        this.activeTab = index;
      } else {
        if (this.activeTab >= this.tabs.length) {
          this.activeTab = this.tabs.length - 1;
        } else if (this.activeTab < 0) {
          this.activeTab = 0;
        }
      }
      this.tabs[this.activeTab].style.display = "grid";
    },
    update: function() {
      this.tabs = Array.from(document.getElementById("currentTab").childNodes);
      const at = this.activeTab;
      this.tabs.forEach(function(tab, index) {
        tab.tabName = tab.getAttribute("data-tab");
        tab.style.display = index === at ? "grid" : "none";
      });
    }
  },
  mounted: function() {
    // Create the observer (and what to do on changes...)
    this.activeTab = 0;
    this.update();
    this.observer = new MutationObserver(this.update);

    // Setup the observer
    this.observer.observe(document.getElementById("currentTab"), {
      childList: true
    });
  },

  beforeDestroy: function() {
    this.observer.disconnect();
  }
};
</script>

<style scoped>
.SmTabLayout {
  @apply flex;
  @apply flex-col;
  @apply h-full w-full overflow-hidden;
}

.tab-bar {
  @apply flex;
  @apply w-full;
  @apply border-b;
  @apply border-gray-1;
}

.tab-container {
  @apply border-r;
  @apply border-b;
  @apply border-gray-1;
  @apply bg-white;
  @apply flex;
  @apply -mb-px;
}

.tab-button {
  @apply p-2;
  @apply text-gray-3;
}

.tab-button:hover,
.tab-close:hover {
  @apply text-black;
}

#currentTab {
  @apply flex-grow;
}

.tab-close {
  @apply text-gray-3;
}

.activeTab {
  border-bottom: 1px solid white !important;
  @apply text-black;
}
</style>
