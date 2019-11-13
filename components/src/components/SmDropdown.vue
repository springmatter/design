<template>
  <div class="rel">
    <div
      class="selectionClass"
      :class="{ highlightSelection: expanded }"
      @click="expanded ? contract() : expand()"
      :id="id"
    >
      {{ precedingText + selection }}
      <SmIcon
        class="SmDropdownChevron"
        :class="{ chevronRotate: expanded }"
        name="chevron-down"
      />
    </div>
    <div v-if="expanded" class="SmDropdown">
      <div class="SmSearch" v-if="searchable">
        <SmSearch v-model="results" :targets="targets" />
      </div>
      <div class="results">
        <div
          v-for="(result, index) in results"
          :key="index"
          class="resultClass"
          @click="selectTarget(result)"
        >
          {{ result }}
        </div>
        <div v-if="results.length == 0" class="noResult">No Results Found</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SmDropDown",
  data: function() {
    return {
      expanded: false,
      precedingText: "Select...",
      selection: "",
      results: []
    };
  },
  props: {
    targets: {
      type: Array,
      required: true,
      description: "A list of targets to select."
    },
    searchable: {
      type: Boolean,
      required: false,
      description: "Provides Fuse search functionality."
    }
  },
  computed: {
    id: function() {
      let id = "";
      for (var t in this.targets) {
        id += t;
      }
      return id;
    }
  },
  methods: {
    expand: function() {
      this.results = this.targets;
      this.expanded = true;
      // Select the component's unique selection box and raise z-index.
      let selectionBox = document.getElementById(this.id);
      selectionBox.style.zIndex = 9999;
    },
    selectTarget(result) {
      this.precedingText = "Selected: ";
      this.selection = result;
      this.$emit("input", this.selection);
      this.contract();
    },
    contract: function() {
      this.expanded = false;
      // Select the component's unique selection box and lower z-index.
      let selectionBox = document.getElementById(this.id);
      selectionBox.style.zIndex = 1;
    }
  }
};
</script>

<style scoped>
.rel {
  position: relative;
}

.SmDropdown {
  box-shadow: 0 0 0 1px var(--secondary);
  border-radius: 0px 0px 2px 2px;
  color: black;
  background: white;
  margin-top: -2px;
  position: absolute;
  width: 100%;
  z-index: 9998;
}

.selectionClass {
  border: 1px solid var(--secondary);
  color: black;
  background: white;
  position: relative;
  padding: 8px 16px;
  user-select: none;
}

.highlightSelection {
  border: 1px solid var(--primary-hover);
  box-shadow: 0 0 0 1px var(--primary-hover);
}

.SmDropdownChevron {
  position: relative;
  float: right;
  margin-top: 2px;
}

.chevronRotate {
  transform: rotate(180deg);
}

.SmSearch {
  position: relative;
  margin: 0px 12px;
  padding: 14px 4px 12px 4px;
  border-bottom: 1px solid black;
  border-radius: 0px;
}

.results {
  padding: 8px 0px;
  overflow: scroll;
  max-height: 176px;
}

.resultClass {
  padding: 4px 16px;
  border-radius: 0px;
  cursor: pointer;
  user-select: none;
}

.resultClass:hover {
  background: var(--primary-hover);
  color: white;
}

.noResult {
  color: grey;
  text-align: center;
}
</style>
