<template>
  <div class="SmSelectMultiple">
    <div class="SmSearch" v-if="searchable">
      <SmSearch class="mb-2" :targets="resultsCopy" v-model="results" />
    </div>
    <div class="options">
      <div
        v-for="(result, index) in results"
        :key="index"
        :id="result.id"
        @click="select(result)"
        class="p-1 m-1 pl-2"
        :class="{'select':result.selected, 'option': !result.selected}"
      >
        <div v-for="(key, index) in display" :key="index">{{result[key]}}</div>
      </div>
      <div v-if="results.length == 0" class="noResult">No Results Found</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SmSelectMultiple",
  props: {
    targets: Array,
    searchable: Boolean,
    displayKeys: {
      type: Array,
      required: false
    }
  },
  data() {
    return {
      results: [],
      display: [],
      selected: [],
      resultsCopy: []
    };
  },
  methods: {
    select: function(result) {
      result.selected = !result.selected;
      let el = document.getElementById(result.id);
      if (!result.selected) {
        this.selected.splice(this.selected.indexOf(this.targets[result.id]), 1);
      } else {
        this.selected.push(this.targets[result.id]);
      }
      console.log(this.selected);
      this.$emit("selected", this.selected);
    }
  },
  created: function() {
    if (typeof this.targets[0] == "string") {
      for (let i in this.targets) {
        this.results.push({ target: this.targets[i], selected: false, id: i });
      }
    } else {
      for (let i in this.targets) {
        this.targets[i].selected = false;
        this.targets[i].id = i;
        this.results.push(this.targets[i]);
      }
    }
    this.resultsCopy = this.results;
    if (!this.displayKeys) {
      this.display = ["target"];
    } else {
      this.display = this.displayKeys;
    }
  }
};
</script>

<style scoped>
.SmSelectMultiple {
  border: 1px solid black;
}
.SmSearch {
  position: relative;
  margin: 0px 12px;
  padding: 14px 4px 12px 4px;
  border-bottom: 1px solid black;
  border-radius: 0px;
}
.options {
  max-height: 320px;
  overflow-y: scroll;
}
.select {
  background: var(--primary);
  border-radius: 2px;
  color: white;
  padding: 4px 16px;
  cursor: pointer;
}
.option {
  cursor: pointer;
  padding: 4px 16px;
}
.option:hover {
  color: var(--primary);
}
.noResult {
  color: grey;
  text-align: center;
  margin: 8px;
}
</style>
