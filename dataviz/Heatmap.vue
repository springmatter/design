<template>
  <div ref="container" class="full">
    <svg ref="svg" class="svg" :viewBox="viewBox">
      <g v-for="(level, index) in polyDict" :key="index">
        <polygon
          v-for="(points, cnt) in level"
          :key="cnt"
          :id="index"
          :points="points"
          stroke-width="0.5"
          :style="{ fill: colors[index], fillOpacity: 0.2 }"
          @mouseover="mouseover($event)"
          @mouseout="mouseout($event)"
        />
      </g>
    </svg>
    <!-- <svg :width="gWidth" height="40px" class="slider">
      <line x1="0" y1="50%" :x2="gWidth" y2="50%" style="stroke:black;stroke-width:1;" />
      <circle r="10" cx="50%" cy="50%" fill="lightgrey" stroke="black" />
    </svg>-->
  </div>
</template>

<script>
import * as d3 from "d3";
import gradient from "gradient-color";

export default {
  name: "Heatmap",
  props: {
    width: Number,
    height: Number,
    geojson: String,
    bounds: Object
  },
  data() {
    return {
      polyDict: {},
      originalWidth: 0,
      originalHeight: 0,
      showContours: false,
      theme: ["#ffe55e", "#da1e28"],
      colors: []
    };
  },
  computed: {
    viewBox: function() {
      return "0 0 " + this.originalWidth + " " + this.originalHeight;
    }
  },
  methods: {
    plotContours() {
      var x = d3
        .scaleLinear()
        .domain([this.bounds.west, this.bounds.east])
        .range([0, this.width]);
      var y = d3
        .scaleLinear()
        .domain([this.bounds.south, this.bounds.north])
        .range([this.height, 0]);
      let self = this;
      let contours = JSON.parse(this.geojson);
      for (var feature of contours.features) {
        var points = "";
        feature.geometry.coordinates[0].forEach(function(point) {
          points += x(point[0]);
          points += ",";
          points += y(point[1]);
          points += " ";
        });
        var levelNum;
        if (feature.properties.level.charAt(0) == "l") {
          levelNum = feature.properties.level.substring(5);
        } else {
          levelNum = feature.properties.level;
        }
        if (levelNum in self.polyDict) {
          self.polyDict[levelNum].push(points);
        } else {
          self.polyDict[levelNum] = [points];
        }
      }
      self.colors = gradient(self.theme, Object.keys(self.polyDict).length);
      self.$forceUpdate();
    },
    mouseover(event) {
      event.target.style.stroke = "white";
      event.target.style.strokeOpacity = 1;
      console.log(Number(event.target.id) / Object.keys(this.polyDict).length);
      this.$emit(
        "highlighted",
        (Number(event.target.id) + 1) / Object.keys(this.polyDict).length
      );
    },
    mouseout(event) {
      event.target.style.stroke = event.target.style.fill;
      event.target.style.strokeOpacity = 0.2;
    }
    // dragmove() {
    //   let circle = d3.select("circle");
    //   let line = d3.select("line");
    //   var x = d3.event.x;
    //   let x1 = Number(line.attr("x1"));
    //   let x2 = Number(line.attr("x2"));
    //   let r = Number(circle.attr("r"));
    //   // Constrain x location to be within sliding bounds.
    //   x = x < x1 + r + 1 ? x1 + r + 1 : x;
    //   x = x > x2 - r - 1 ? x2 - r - 1 : x;
    //   circle.attr("cx", x);
    //   // Set opacity based on slider.
    //   let opacityValue = d3
    //     .scaleLinear()
    //     .domain([x1 + r + 1, x2 - r - 1])
    //     .range([0.0, 0.5]);
    //   d3.selectAll("polygon").style("fill-opacity", opacityValue(x));
    // }
  },
  mounted() {
    this.originalWidth = this.width;
    this.originalHeight = this.height;
    this.plotContours();
  }
};
</script>

<style>
.full {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.svg {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
