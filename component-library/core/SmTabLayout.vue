<template>
  <div class="SmTabLayout">
    <header id="tabBar">
      <div
        class="border-r border-b border-gray-1 bg-white h-full relative flex items-center"
        v-for="(tab, index) in tabs"
        :class="{ activeTab: activeTab === index }"
        :key="index"
      >
        <!-- <button class="ghost" @click="switchTab(index)"> -->
        <!--   <label :style="{ pointerEvents: 'none' }">{{ tab.tabName }}</label> -->
        <!-- </button> -->
        <!-- <button v-if="index > 0" class="icon close" @click="closeTab(index)"> -->
        <!--   <SmIcon name="x-circle" size="small" /> -->
        <!-- </button> -->
      </div>
    </header>
    <main id="currentTab">
      <slot></slot>
    </main>
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

<style>
#tabBar {
  padding: 0;
}


.activeTab {
  border-bottom: 1px solid var(--white);
  position: relative;
}

.tab > .ghost {
  color: var(--gray2);
  height: 100%;
  margin: 0;
}

.activeTab > .ghost {
  color: var(--black);
}
.tab > .ghost:hover {
  color: var(--black);
}

.tab > .ghost:focus {
  z-index: var(--z8);
  color: var(--black);
}

.tab > .close {
  color: var(--gray2);
}

.tab > .close:hover {
  color: var(--black);
}

#currentTab > * {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header aside"
    "main   aside"
    "footer aside";
  height: 100%;
  width: 100%;
}
</style>
