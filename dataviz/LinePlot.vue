<template>
  <div ref="container" class="full">
    <div :id="'tooltip_' + graphId" class="tooltip"></div>
    <div class="labels" :style="{ maxWidth: gWidth + 'px' }">
      <div
        v-for="(label, index) in yLabels"
        :key="label"
        class="label"
        @mouseover="highlight(label)"
      >
        <span class="dot" :style="{ backgroundColor: colors[index] }"></span>
        {{ label }}
      </div>
    </div>
    <svg class="full svg">
      <g v-if="dualAxis" class="colorBar">
        <line
          :x1="plotInset"
          :y1="plotInset"
          :x2="plotInset"
          :y2="gHeight + plotInset"
          :style="{ stroke: colors[0] }"
        />
        <line
          :x1="plotInset + gWidth + 1"
          :y1="plotInset"
          :x2="plotInset + gWidth + 1"
          :y2="gHeight + plotInset"
          :style="{ stroke: colors[1] }"
        />
      </g>
      <g :id="'xAxis_' + graphId" style="text-anchor:end" />
      <g :id="'yAxis_' + graphId" />
      <g v-if="dualAxis" :id="'yAxis-Right_' + graphId" />
      <g class="inset">
        <g class="grid">
          <g :id="'xGrid_' + graphId" />
          <g :id="'yGrid_' + graphId" />
        </g>
        <path
          v-for="(path, index) in paths"
          :key="path"
          class="dataPath"
          :stroke="colors[index]"
          :id="'path_' + yLabels[index]"
          :d="path"
        />
        <g v-for="(series, cnt) in data" :key="cnt">
          <g v-for="(pt, index) in series" :key="index">
            <line
              class="newLine"
              :id="'line_' + yLabels[cnt] + '_' + index"
              :x1="pt.x_px"
              :y1="pt.y_px"
              :x2="pt.x_px"
              :y2="gHeight"
            />
            <circle
              class="point"
              :class="yLabels[cnt]"
              :id="'pt_' + yLabels[cnt] + '_' + index"
              r="4"
              :cx="pt.x_px"
              :cy="pt.y_px"
              :ptx="pt.x"
              :pty="pt.y"
              :fill="colors[cnt]"
              @mouseover="activateHover($event)"
              @mouseout="removeMarkers($event)"
            />
          </g>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  props: {
    xType: {
      type: String,
      required: true,
      description:
        "Will only check to see if type is 'date.' If so, date-time is parsed from string."
    },
    xValues: {
      type: Array,
      required: true,
      description:
        "An array of 'x' values to associate with each array in yValues."
    },
    yValues: {
      type: Array,
      required: true,
      description:
        "An array of arrays where each array defines values in association with xValues for a set that defines a line."
    },
    yLabels: {
      type: Array,
      required: true,
      description:
        "Identifies labels for each yValues array in the same indexed order."
    },
    dualAxis: {
      type: Boolean,
      required: false,
      default: false,
      description: "Flag for creating two 'y' axes."
    }
  },
  data() {
    return {
      data: [],
      paths: [],
      plotInset: 60,
      gWidth: 0,
      gHeight: 0,
      colors: ["green", "blue", "red"]
    };
  },
  computed: {
    graphId: function() {
      let ids = "";
      this.yLabels.forEach(label => {
        ids += label;
      });
      return ids;
    }
  },
  methods: {
    createGraph() {
      // Get bounding width and height of exterior container.
      let bounding = this.$refs.container.getBoundingClientRect();
      // Define a width and height for the graph.
      this.gWidth = bounding.width - this.plotInset * 2;
      this.gHeight = bounding.height - this.plotInset * 2;

      // Enforce type of x data if of type 'date.'
      let xData = [];
      if (this.xType == "date") {
        this.xValues.forEach((x, index) => {
          xData[index] = new Date(x);
        });
      } else {
        xData = this.xValues;
      }

      // Set range variables.
      var xRange = d3.extent(xData);

      // Set scale functions.
      var scaleX;
      if (this.xType == "date") {
        scaleX = d3
          .scaleTime()
          .domain(xRange)
          .range([0, this.gWidth]);
      } else {
        scaleX = d3
          .scaleLinear()
          .domain(xRange)
          .range([0, this.gWidth]);
      }
      var scaleY = [];
      if (this.dualAxis) {
        let yRange = [];
        this.yValues.forEach(y => {
          yRange.push(d3.extent(y));
        });
        yRange.forEach(r => {
          scaleY.push(
            d3
              .scaleLinear()
              .domain(r)
              .range([this.gHeight, 0])
          );
        });
      } else {
        let yValues = [];
        this.yValues.forEach(y => {
          yValues.push(...y);
        });
        let yRange = d3.extent(yValues);
        scaleY.push(
          d3
            .scaleLinear()
            .domain(yRange)
            .range([this.gHeight, 0])
        );
      }

      // Set gridline functions.
      function make_x_gridlines() {
        return d3.axisBottom(scaleX).ticks(5);
      }
      function make_y_gridlines() {
        return d3.axisLeft(scaleY[0]).ticks(5);
      }
      d3.select("#xGrid_" + this.graphId).call(
        make_x_gridlines()
          .tickSize(this.gHeight)
          .tickFormat("")
      );
      d3.select("#yGrid_" + this.graphId).call(
        make_y_gridlines()
          .tickSize(-this.gWidth)
          .tickFormat("")
      );

      // Add axes.
      var xAxis = d3.axisBottom(scaleX).ticks(10);
      let gX = d3
        .select("#xAxis_" + this.graphId)
        .attr(
          "transform",
          "translate(" +
            this.plotInset +
            "," +
            (this.gHeight + this.plotInset) +
            ")"
        )
        .call(xAxis)
        .call(g => g.select(".domain").remove()); // Remove connecting line.
      // Rotate date text.
      if (this.xType == "date") {
        gX.selectAll("text")
          .attr("dx", "-.8em")
          .attr("dy", ".15em")
          .attr("transform", "rotate(-65)");
      }
      var yAxis = d3.axisLeft(scaleY[0]).ticks(10);
      let gYL = d3
        .select("#yAxis_" + this.graphId)
        .attr(
          "transform",
          "translate(" + this.plotInset + "," + this.plotInset + ")"
        )
        .call(yAxis)
        .call(g => g.select(".domain").remove());
      if (this.dualAxis) {
        let yAxisR = d3.axisRight(scaleY[1]).ticks(10);
        let gYR = d3
          .select("#yAxis-Right_" + this.graphId)
          .attr(
            "transform",
            "translate(" +
              (this.plotInset + this.gWidth) +
              "," +
              this.plotInset +
              ")"
          )
          .call(yAxisR)
          .call(g => g.select(".domain").remove());
      }

      // Collect data for each line.
      this.yValues.forEach((line, cnt) => {
        let series = [];
        if (this.dualAxis) {
          line.forEach((y, index) => {
            series.push({
              x: xData[index],
              y: y,
              x_px: scaleX(xData[index]),
              y_px: scaleY[cnt](y)
            });
          });
        } else {
          line.forEach((y, index) => {
            series.push({
              x: xData[index],
              y: y,
              x_px: scaleX(xData[index]),
              y_px: scaleY[0](y)
            });
          });
        }
        this.data.push(series);
      });
      // Define an svg 'path' for each line.
      this.data.forEach((series, index) => {
        var valueline;
        if (this.dualAxis) {
          valueline = d3
            .line()
            .x(function(series) {
              return scaleX(series.x);
            })
            .y(function(series) {
              return scaleY[index](series.y);
            });
        } else {
          valueline = d3
            .line()
            .x(function(series) {
              return scaleX(series.x);
            })
            .y(function(series) {
              return scaleY[0](series.y);
            });
        }
        this.paths.push(valueline(series));
      });
    },
    activateHover(event) {
      let point = event.target;
      point.style.opacity = 1.0;
      // Determine location of tooltip in px
      let i = point.cx.baseVal.value;
      let j = point.cy.baseVal.value;
      // Extract names and locate other objects
      let label = point.id.split("_")[1];
      let cnt = point.id.split("_")[2];
      let line = document.getElementById("line_" + label + "_" + cnt);
      line.style.stroke = "grey";
      // Determine mouse position in plot
      let left = i;
      let right = Math.abs(this.gWidth - i);
      let h = Math.min(...[left, right]);
      // Transition tooltip.
      let tt = document.getElementById("tooltip_" + this.graphId);
      tt.style.opacity = 1.0;
      let val = Number(point.getAttribute("pty"));
      tt.innerHTML = val.toFixed(2);
      tt.style.top = j - 10 + "px";
      if (h == left) {
        tt.style.left = i + 10 + "px";
      } else {
        tt.style.left = i - 52 + "px";
      }
    },
    removeMarkers(event) {
      // Transition point, line, and tooltip.
      let point = event.target;
      point.style.opacity = 0.0;
      let label = point.id.split("_")[1];
      let cnt = point.id.split("_")[2];
      let line = document.getElementById("line_" + label + "_" + cnt);
      line.style.stroke = "transparent";
      let tt = document.getElementById("tooltip_" + this.graphId);
      tt.style.opacity = 0.0;
    },
    highlight(label, item) {
      console.log("highlight");
      // let label = event.target
      // label.style.border = "1px solid grey"
    }
  },
  mounted() {
    this.createGraph();
  }
};
</script>

<style>
.labels {
  @apply flex;
  transform: translate(60px, 5px);
}

.label {
  @apply flex-auto;
  @apply text-center;
  @apply px-4;
  @apply py-2;
  @apply m-2;
  @apply rounded-full;

  background: whitesmoke;
  border: 1px solid lightgrey;
}

.dot {
  @apply mx-2;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: inline-block;
}

.full {
  @apply w-full;
  @apply h-full;
  position: relative;
}

.svg {
  top: -50px;
  left: 0px;
}

.svg .grid {
  color: lightgrey;
}

.tooltip {
  @apply p-2;
  @apply text-xs;
  @apply rounded-full;
  opacity: 0;
  position: absolute;
  text-align: "center";
  background: whitesmoke;
  border: 1px solid lightgrey;
  pointer-events: none;
  transform: translate(60px, 60px);
}

.colorBar {
  opacity: 0.3;
  stroke-width: 2;
}
.svg .point {
  opacity: 0;
  stroke: transparent;
  stroke-width: 40;
}
.svg .newLine {
  stroke-width: 1;
  stroke: transparent;
  stroke-dasharray: 5;
  fill: none;
}
.svg .dataPath {
  fill: none;
  pointer-events: none;
}
.svg .inset {
  transform: translate(60px, 60px);
}
</style>