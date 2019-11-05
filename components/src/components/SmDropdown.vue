<template>
  <div>
    <div
      class="selectionClass"
      :class="{highlightSelection: expanded}"
      @click="expanded? contract(): expand()"
    >
      {{precedingText + selection}}
      <SmIcon class="SmDropdownChevron" :class="{chevronRotate: expanded}" name="chevron-down" />
    </div>
    <div v-if="expanded" class="SmDropdown">
      <div class="SmSearch" v-if="searchable">
        <SmSearch :targets="targets" @searched="updateResults" />
      </div>
      <div class="results">
        <div
          v-for="(result, index) in results"
          :key="index"
          class="resultClass"
          @click="selectTarget(result)"
        >{{result}}</div>
        <div v-if="noneFound" class="noResult">No Results Found</div>
      </div>
    </div>
  </div>
</template>

<script>
import SmIcon from "./SmIcon.vue";
import SmSearch from "./SmSearch.vue";

export default {
  name: "SmDropDown",
  components: {
    SmIcon,
    SmSearch
  },
  data: function() {
    return {
      expanded: false,
      noneFound: false,
      precedingText: "Select...",
      selection: "",
      results: [],
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
  methods: {
    expand: function() {
      this.results = this.targets;
      this.expanded = true;
    },
    selectTarget(result) {
      this.precedingText = "Selected: ";
      this.selection = result;
      this.$emit('input', this.selection)
      this.contract();
    },
    contract: function() {
      this.expanded = false;
      this.noneFound = false;
    },
    updateResults(searchedResults) {
      this.results = searchedResults;
      if (this.results.length == 0) {
        this.noneFound = true;
      } else {
        this.noneFound = false;
      }
    }
  }
};
</script>

<style scoped>
.SmDropdown {
  box-shadow: 0 0 0 1px var(--secondary);
  border-radius: 0px 0px 2px 2px;
  color: black;
  background: white;
  margin-top: -2px;
  width: 100%;
}

.selectionClass {
  border: 1px solid var(--secondary);
  color: black;
  background: white;
  position: relative;
  padding: 8px 16px;
  z-index: 1;
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
