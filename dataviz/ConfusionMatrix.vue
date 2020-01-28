<template>
  <div class="ConfusionMatrix">
    <div v-if="selectedTile" class="label">
      <i>{{ selectedTile.actual }}</i> predicted
      <i>{{ selectedTile.predicted }}</i> :
      {{ selectedTile.value }}
    </div>
    <svg viewBox="0 0 100 100" class="svg">
      <rect
        v-for="(tile, index) in tiles"
        :key="index"
        :x="tile.x"
        :y="tile.y"
        :width="tileWidth"
        :height="tileHeight"
        :style="{ fill: tile.color }"
        @mouseover="selectedTile = tile"
        @mouseout="selectedTile = null"
      />
      <text
        v-if="selectedTile"
        :x="selectedTile.x + tileWidth / 2"
        :y="selectedTile.y + tileHeight / 2"
        alignment-baseline="middle"
        class="tooltip"
        fill="black"
      >
        {{ ((selectedTile.value / selectedTile.classTot) * 100).toFixed(0) }} %
      </text>
    </svg>
  </div>
</template>

<script>
import * as d3 from "d3";
import gradient from "gradient-color";

export default {
  name: "ConfusionMatrix",
  props: {
    name: String,
    values: Array,
    classes: Array
  },
  data() {
    return {
      selectedTile: null,
      tiles: [],
      tileWidth: 0,
      tileHeight: 0
    };
  },
  mounted() {
    var N = this.classes.length;
    // Fill array for cnts of predictions for each class.
    let prediction_class_cnts = Array(N).fill(0);
    for (var i = 0; i < N; i++) {
      for (var j = 0; j < N; j++) {
        prediction_class_cnts[j] += this.values[i][j];
      }
    }
    // Fill an array of color gradients that range for each class total.
    let colors = [];
    for (var i = 0; i < N; i++) {
      colors.push(gradient(["#FEFEFE", "#0032e3"], prediction_class_cnts[i]));
    }
    // Calculate metrics.
    var metrics = Array(N);
    for (var i = 0; i < N; i++) {
      var M_ii = this.values[i][i];
      var recall_sum = 0;
      for (var j = 0; j < N; j++) {
        recall_sum += this.values[i][j];
      }
      metrics[i] = [this.classes[i]];
      metrics[i].push((M_ii / prediction_class_cnts[i]).toFixed(3));
      metrics[i].push((M_ii / recall_sum).toFixed(3));
    }

    // Define margins and sizing for svg.
    var margin = { top: 30, right: 30, bottom: 30, left: 30 },
      width = 500,
      height = 500;

    // // Create table for metrics.
    // var table = d3.select("#div_" + this.name)
    //               .append("table")
    //               .attr("width", width)
    // table.style('text-align', 'right')
    //      .append('thead').append('tr')
    // table.selectAll('th')
    //      .data(['', 'Precision', 'Recall']).enter()
    //      .append('th')
    //      .text(function(d) { return d; });
    // var table_body = table.append('tbody')
    // var rows = table_body.selectAll("tr")
    //         .data(metrics)
    //         .enter()
    //         .append("tr");
    // var cells = rows.selectAll("td")
    //         .data(function(d) {return d;})
    //         .enter()
    //         .append("td")
    //         .text(function(d) {
    //             return d;
    //         });

    let padding = 0.005 * this.classes.length;
    var x = d3
      .scaleBand()
      .range([2, 98])
      .domain(this.classes)
      .padding(padding);

    var y = d3
      .scaleBand()
      .range([98, 2])
      .domain(Object.assign([], this.classes).reverse())
      .padding(padding);

    this.tileWidth = x.bandwidth();
    this.tileHeight = y.bandwidth();
    for (var i = 0; i < this.classes.length; i++) {
      for (var j = 0; j < this.classes.length; j++) {
        this.tiles.push({
          x: x(this.classes[i]),
          y: y(this.classes[j]),
          value: this.values[j][i],
          classTot: prediction_class_cnts[i],
          color: colors[i][this.values[j][i]],
          actual: this.classes[j],
          predicted: this.classes[i]
        });
      }
    }
  }
};
</script>

<style>
.ConfusionMatrix {
  position: relative;
  width: 100%;
  padding-top: 48px;
}
.svg {
  display: inline-block;
  position: relative;
  margin: 0px 16px 16px 16px;
  border: 1px solid red;
}

.tooltip {
  font-size: 3px;
  pointer-events: none;
  z-index: 9999;
  text-anchor: middle;
}
.label {
  width: 100%;
  /* margin: 8px 0px; */
  border: 1px solid black;
  padding: 4px 16px;
  text-align: center;
}
</style>
