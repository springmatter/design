<template>
  <div class="SmTabLayout">
    <div class="tab-bar">
      <div
        class="tab-container"
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ activeTab: activeTab === index }"
      >
        <SmButton kind="ghost" @click="switchTab(index)" class="tab-button">
          <small>
          {{ tab.tabName }}
          </small>
        </SmButton>
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
  slotted: true,
  components: {},
  data: function() {
    return {
      tabs: [],
      activeTab: -1,
      observer: null
    };
  },
  props: {
    noSwitch: {
      type: Boolean,
      required: false,
      description: "By default, SmTabLayout will switch to a new tab when it is added as one of its children. This disables that behavior."
    }
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
      var newChilds = Array.from(document.getElementById("currentTab").childNodes);
      var sw = this.tabs.length < newChilds.length;
      this.tabs = Array.from(document.getElementById("currentTab").childNodes);
      const at = this.activeTab;
      this.tabs.forEach(function(tab, index) {
        tab.tabName = tab.getAttribute("data-tab");
        tab.style.display = index === at ? "grid" : "none";
      });

      if (sw && !this.noSwitch) {
        this.switchTab(this.tabs.length - 1);
      }
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
  @apply h-full w-full;
  overflow: hidden;
}

.tab-bar {
  @apply border-b;
  @apply border-gray-1;
  overflow: scroll;
  white-space: nowrap;
}

.tab-bar::-webkit-scrollbar {
  display: none;
}

.tab-container {
  @apply border-r;
  @apply border-b;
  @apply border-gray-1;
  @apply bg-white;
  @apply -mb-px;
  @apply text-gray-3;
  display: inline-block;
}

.tab-button {
  @apply p-2;
  color: inherit;
  display: inline-block;
}

.tab-close {
  display: inline-block;
}

.tab-button:hover,
.tab-close:hover {
  @apply text-black;
}

.tab-button:focus,
.tab-close:focus {
  outline-offset: -2px;
  @apply relative z-30;
}

#currentTab {
  @apply flex-grow;
  overflow: scroll;
  height: 1px;
}

.tab-close {
  @apply text-gray-3;
}

.activeTab {
  border-bottom: 1px solid white !important;
  @apply text-black;
}
</style>
