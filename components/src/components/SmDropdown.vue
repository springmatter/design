<template>
  <div class="SmDropdown">
    <div class="selectionClass" @click="expanded? contract(): expand()">
      {{selection}}
      <SmIcon class="SmDropdownChevron" name="chevron-down" />
    </div>
    <div v-if="expanded">
      <SmSearch v-if="searchable" />
      <div
        v-for="(result, index) in results"
        :key="result"
        :class="[index == 0 ? 'topResultClass':'', index != Object.keys(results).length - 1 ? 'resultClass':'']"
        @click="selectTarget(result)"
      >{{result}}</div>
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
      selection: "Select..."
    };
  },
  computed: {
    results: function() {
      if (this.targetType == "string") {
        return this.targets;
      }
      // Else, use first key as a display for results.
      let results = [];
      for (var i = 0; i < this.targets.length; i++) {
        let key = Object.keys(this.targets[i])[0];
        results.push(this.targets[i][key]);
      }
      return results;
    }
  },
  props: {
    targets: {
      type: Array,
      required: true,
      description: "A list of targets to select."
    },
    targetType: {
      type: String,
      required: false,
      default: "string",
      description:
        "Used to determine if 'targets' is a list of dictionaries or strings."
    },
    searchable: {
      type: Boolean,
      required: false,
      description: "Provides Fuse search functionality."
    }
  },
  methods: {
    expand: function() {
      this.expanded = true;
      var icon = document.getElementsByClassName("SmDropdownChevron")[0];
      icon.style.transform = "rotate(180deg)";
    },
    selectTarget(result) {
      this.selection = "Selected: " + result;
      this.contract();
    },
    contract: function() {
      this.expanded = false;
      var icon = document.getElementsByClassName("SmDropdownChevron")[0];
      icon.style.transform = "rotate(0deg)";
    }
  }
};
</script>

<style scoped>
.SmDropdown {
  border: 1px solid var(--secondary);
  padding: 8px 16px 6px 16px;
  display: inline-block;
  color: black;
  background: white;
  position: relative;
}

.SmDropdown:hover {
  border: 1px solid var(--primary-hover);
}

.SmDropdownChevron {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.selectionClass {
  padding-bottom: 2px;
}

.resultClass {
  border-radius: 0px;
  border-bottom: 1px solid lightgrey;
}

.topResultClass {
  border-top: 1px solid lightgrey;
}

.resultClass:hover {
  color: var(--primary-hover);
}
</style>
