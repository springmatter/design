<template>
  <div class="SmDropdown">
    <div
      :class="{ selectionClass: true, highlightSelection: expanded }"
      @click="expanded = !expanded"
    >
      {{ selection.display }}
      <SmIcon
        class="SmDropdownChevron"
        :class="{ chevronRotate: expanded }"
        name="chevron-down"
      />
    </div>
    <div v-if="expanded" class="SmDropdownList">
      <div class="SmSearch" v-if="searchable">
        <SmSearch v-model="results" :targets="targets" />
      </div>
      <div class="results">
        <div
          v-for="(result, index) in results"
          :key="index"
          class="resultClass"
          @click="selectTarget(result, index)"
        >
          {{ targetKey ? result[targetKey] : result }}
        </div>
        <div v-if="results.length == 0" class="noResult">No Results Found</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SmDropdown",
  data: function() {
    return {
      expanded: false,
      selection: {
        display: "",
        return: null
      },
      results: []
    };
  },
  props: {
    targets: {
      type: Array,
      required: true
    },
    searchable: {
      type: Boolean,
      required: false
    },
    targetKey: {
      type: String,
      required: false
    }
  },
  methods: {
    selectTarget(result, index) {
      if (this.targetKey) {
        this.selection.display = result[this.targetKey];
        this.selection.return = this.targets[index];
      } else {
        this.selection.display = result;
        this.selection.return = result;
      }
      this.$emit("input", this.selection.return);
      this.results = this.targets;
      this.expanded = false;
    }
  },
  created: function() {
    this.results = this.targets;
  }
};
</script>

<style scoped>
.SmDropdown {
  position: relative;
}

.SmDropdownList {
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
  height: 40px;
}

.highlightSelection {
  border: 1px solid var(--primary-hover);
  box-shadow: 0 0 0 1px var(--primary-hover);
  z-index: 9999;
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
