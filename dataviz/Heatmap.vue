<template>
  <div ref="container" class="full">
    <svg viewBox="0 0 100 100">
      <g v-for="(level, index) in polyDict" :key="index">
        <polygon
          v-for="(points, cnt) in level"
          :key="cnt"
          :id="level"
          :points="points"
          :stroke="colors[index]"
          stroke-width="0.25"
          :style="{ fill: colors[index], fillOpacity: 0.35 }"
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
import "./styles.css";

export default {
  name: "Heatmap",
  props: {
    geojsonLocation: String,
    northBound: Number,
    eastBound: Number,
    westBound: Number,
    southBound: Number,
    gradientIndex: Number
  },
  data() {
    return {
      polyDict: {},
      colors: []
    };
  },
  computed: {
    theme: function() {
      let colorStart = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--gradient" + this.gradientIndex + "a");
      let colorStop = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--gradient" + this.gradientIndex + "b");
      return [colorStart.substring(1), colorStop.substring(1)];
    }
  },
  methods: {
    plotContours() {
      var x = d3
        .scaleLinear()
        .domain([this.westBound, this.eastBound])
        .range([0, 100]);
      var y = d3
        .scaleLinear()
        .domain([this.southBound, this.northBound])
        .range([100, 0]);
      let self = this;
      d3.json(this.geojsonLocation).then(function(contours) {
        console.log(contours);
        for (var feature of contours.features) {
          var points = "";
          feature.geometry.coordinates[0].forEach(function(point) {
            points += x(point[0]);
            points += ",";
            points += y(point[1]);
            points += " ";
          });
          if (feature.properties.level in self.polyDict) {
            self.polyDict[feature.properties.level].push(points);
          } else {
            self.polyDict[feature.properties.level] = [points];
          }
        }
        self.colors = gradient(self.theme, Object.keys(self.polyDict).length);
        self.$forceUpdate();
      });
    },
    mouseover(event) {
      if (event.target.tagName == "polygon") {
        event.target.style.stroke = getComputedStyle(
          document.documentElement
        ).getPropertyValue("--primary-hover");
      }
    },
    mouseout(event) {
      if (event.target.tagName == "polygon") {
        event.target.style.stroke = event.target.style.fill;
      }
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
</style>
