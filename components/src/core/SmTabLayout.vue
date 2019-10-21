<template>
  <div class="SmTabLayout">
    <div class="SmTabLayoutTabBar">
      <div
        class="SmTabLayoutTab"
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ activeTab: activeTab === index }"
      >
        <SmButton @click="switchTab(index)">
          <h5>
            {{ tab.tabName }}
          </h5>
        </SmButton>
        <SmButton v-if="tab.canclose" icon="x" @click="closeTab(index)" small />
      </div>
    </div>
    <div ref="bodies">
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
      description:
        "By default, SmTabLayout will switch to a new tab when it is added as one of its children. This disables that behavior."
    }
  },
  methods: {
    closeTab: function(index) {
      this.$emit("closed-tab", index);
      this.switchTab(-1);
    },
    switchTab: function(index) {
      if (this.$refs.current.firstChild) {
        this.$refs.current.removeChild(this.$refs.current.firstChild);
      }

      if (index !== -1) {
        this.activeTab = index;
      } else {
        if (this.activeTab >= this.tabs.length) {
          this.activeTab = this.tabs.length - 1;
        } else if (this.activeTab < 0) {
          this.activeTab = 0;
        }
      }
      this.$refs.current.appendChild(this.tabs[this.activeTab]);
    },
    update: function() {
      console.log("updating");
      var newChilds = Array.from(this.$refs.bodies.childNodes);
      this.tabs = this.tabs.concat(newChilds);
      this.tabs.forEach(function(tab, index) {
        tab.tabName = tab.getAttribute("data-tabname");
        tab.canclose = tab.getAttribute("data-canclose") !== null;
        tab.remove();
      });
      this.switchTab(this.tabs.length - 1);
    }
  },
  mounted: function() {
    // Create the observer (and what to do on changes...)
    this.activeTab = 0;
    this.update();
    this.observer = new MutationObserver(this.update);

    // Setup the observer
    this.observer.observe(this.$refs.bodies, { childList: true });
  },

  beforeDestroy: function() {
    this.observer.disconnect();
  }
};
</script>

<style scoped>
.SmTabLayout {
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.SmTabLayoutTabBar {
  display: flex;
  align-items: center;
}

.SmTabLayoutTab {
}

#currentTab {
}
</style>
