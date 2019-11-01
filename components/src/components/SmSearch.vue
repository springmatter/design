<template>
  <div id="SmSearchDiv">
    <input class="SmSearch" v-model="filter" placeholder="Search..." @keyup="filterResults" />
    <SmIcon class="SmSearchIcon" name="search" />
  </div>
</template>

<script>
import SmIcon from "./SmIcon.vue";
import * as Fuse from "fuse.js";

export default {
  name: "SmSearch",
  data: function() {
    return {
      results: [],
      filter: ""
    };
  },
  computed: {
    options: function() {
      // First key will be returned.
      return {
        shouldSort: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: Object.keys(this.targets[0]),
        id: Object.keys(this.targets[0])[0]
      };
    },
    fuse: function() {
      return new Fuse(this.targets, this.options);
    }
  },
  props: {
    targets: {
      type: Array,
      required: true,
      description: "A list of targets to select."
    }
  },
  methods: {
    filterResults() {
      // If filter is empty, return all results
      if (this.filter == "") {
        let all = [];
        for (var i = 0; i < this.targets.length; i++) {
          all.push(this.targets[i][this.options.id]);
        }
        this.results = all;
      } else {
        this.results = this.fuse.search(this.filter);
      }
      this.$emit("searched", this.results);
    }
  }
};
</script>

<style scoped>
.SmSearch {
  border-radius: 9999px;
  border: 1px solid grey;
  width: 100%;
  position: relative;
  padding-right: 40px;
  margin-bottom: 5px;
  margin-top: 2px;
}

.SmSearchIcon {
  float: right;
  transform: translate(-14px, -35px);
}
</style>