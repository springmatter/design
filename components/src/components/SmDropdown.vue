<template>
  <div class="SmDropdown">
    <div class="selection" @click="expanded? contract(): expand()">
      {{selection}}
      <SmIcon class="SmDropdownChevron" name="chevron-down" />
    </div>
    <div v-if="expanded">
      <SmSearch v-if="searchable" />
      <div
        v-for="result in results"
        :key="result"
        class="result"
        @click="selectTarget(result)"
      >{{result}}</div>
    </div>
  </div>
</template>
  <!-- <div class="container">
    <div class="card">
      <div v-if="!expanded">
        Select a Target
        <SmIcon class="icon" name="chevron-down" size="s" @click.native="expand()" />
      </div>
      <div v-if="expanded">
        <input v-model="filter" placeholder="Search..." :keyup="filterResults()" />
        <div
          class="result"
          v-for="result in results"
          :key="result"
          @click="selectTarget(result)"
        >{{result}}</div>
      </div>
    </div>
  </div>-->

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
      selection: "Select...",
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
  methods: {
    expand: function() {
      this.expanded = true;
      this.results = this.targets;
      var icon = document.getElementsByClassName("SmDropdownChevron")[0];
      icon.style.transform = "rotate(180deg)";
    },
    selectTarget(result) {
      this.selection = result;
      this.expanded = false;
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
  padding: 8px 16px 8px 16px;
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

.selection {
  color: grey;
}

.result {
  border-radius: 0px;
  border-bottom: 1px solid lightgrey;
}

.result:hover {
  color: var(--primary-hover);
}
</style>
