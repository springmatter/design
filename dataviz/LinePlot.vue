<template>
  <div class="LinePlot">
    <div class="labels">
      <div
        v-for="(label, index) in yLabels"
        :key="label"
        :id="label"
        class="label"
        @mouseover="showHighlight"
        @mouseout="removeHighlight"
      >
        <span class="dot" :style="{ backgroundColor: colors[index] }"></span>
        {{ label }}
      </div>
    </div>
    <svg
      ref="svg"
      class="svg"
      :viewBox="viewBox"
      @mousemove="selectPoint"
      @mouseout="tooltip.shown = false"
    >
      <g v-if="dualAxis" class="colorBar">
        <line
          :x1="plotInset.x"
          :y1="plotInset.y"
          :x2="plotInset.x"
          :y2="gHeight + plotInset.y"
          :style="{ stroke: colors[0] }"
        />
        <line
          :x1="plotInset.x + gWidth + 1"
          :y1="plotInset.y"
          :x2="plotInset.x + gWidth + 1"
          :y2="gHeight + plotInset.y"
          :style="{ stroke: colors[1] }"
        />
      </g>
      <g ref="xAxis" :class="{ xAxisDate: dateTime, xAxisNum: !dateTime }" />
      <g ref="yAxisL" class="yAxis" />
      <g v-if="dualAxis" ref="yAxisR" class="dualAxis" />
      <g class="rectGroup" ref="rectGroup">
        <rect :width="gWidth" :height="gHeight" class="bgRect" />
        <g class="grid">
          <g ref="xGrid" />
          <g ref="yGrid" />
        </g>
        <path
          v-for="(path, index) in paths"
          :key="index"
          class="dataPath"
          ref="dataPath"
          :stroke="
            highlight.show
              ? highlight.label == path.label
                ? path.color
                : 'lightgrey'
              : path.color
          "
          :id="'path_' + path.label"
          :d="path.d"
        />
        <g v-if="tooltip.shown">
          <line
            :x1="tooltip.cx"
            :y1="tooltip.cy"
            :x2="tooltip.cx"
            :y2="gHeight"
            class="tooltipLine"
          />
          <circle
            :cx="tooltip.cx + tooltip.x_offset"
            :cy="tooltip.cy"
            r="16"
            class="tooltip"
          />
          <text
            :x="tooltip.cx + tooltip.x_offset"
            :y="tooltip.cy + 4"
            class="tooltipText"
          >
            {{ tooltip.val }}
          </text>
          <circle
            :cx="tooltip.cx"
            :cy="tooltip.cy"
            r="4"
            :fill="tooltip.fill"
            style="pointer-events: none"
          />
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
import * as styles from "./styles.css";
import * as d3 from "d3";

export default {
  props: {
    dateTime: {
      type: Boolean,
      required: false
    },
    xValues: {
      type: Array,
      required: true
    },
    yValues: {
      type: Array,
      required: true
    },
    yLabels: {
      type: Array,
      required: true
    },
    dualAxis: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      data: [],
      paths: [],
      plotInset: {
        x: 48,
        y: 16
      },
      svgWidth: 600,
      svgHeight: 400,
      tooltip: {
        shown: false,
        cx: 0,
        cy: 0,
        x_offset: 0,
        fill: "",
        val: "0"
      },
      highlight: {
        show: false,
        label: null
      }
    };
  },
  computed: {
    viewBox: function() {
      return "0 0 " + this.svgWidth + " " + this.svgHeight;
    },
    gHeight: function() {
      if (this.dateTime) {
        return this.svgHeight - this.plotInset.y * 4;
      }
      return this.svgHeight - this.plotInset.y * 3;
    },
    gWidth: function() {
      return this.svgWidth - this.plotInset.x * 2;
    },
    colors: function() {
      let N = this.yValues.length;
      let ret = [];
      for (var i = 0; i < N; i++) {
        let color = getComputedStyle(document.documentElement).getPropertyValue(
          "--series" + i
        );
        ret.push(color);
      }
      return ret;
    }
  },
  methods: {
    createGraph() {
      // Enforce type of x data if of type 'date.'
      let xData = [];
      if (this.dateTime) {
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
      if (this.dateTime) {
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
      d3.select(this.$refs.xGrid).call(
        make_x_gridlines()
          .tickSize(this.gHeight)
          .tickFormat("")
      );
      d3.select(this.$refs.yGrid).call(
        make_y_gridlines()
          .tickSize(-this.gWidth)
          .tickFormat("")
      );

      // Add axes.
      var xAxis = d3.axisBottom(scaleX).ticks(10);
      let gX = d3
        .select(this.$refs.xAxis)
        .call(xAxis)
        .call(g => g.select(".domain").remove()); // Remove connecting line.
      // Rotate date text.
      if (this.dateTime) {
        gX.selectAll("text")
          .attr("dx", "-.8em")
          .attr("dy", ".15em")
          .attr("transform", "rotate(-65)");
      }
      var yAxis = d3.axisLeft(scaleY[0]).ticks(10);
      let gYL = d3
        .select(this.$refs.yAxisL)
        .call(yAxis)
        .call(g => g.select(".domain").remove());
      if (this.dualAxis) {
        let yAxisR = d3.axisRight(scaleY[1]).ticks(10);
        let gYR = d3
          .select(this.$refs.yAxisR)
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
        this.paths.push({
          d: valueline(series),
          label: this.yLabels[index],
          color: this.colors[index]
        });
      });
    },
    selectPoint(event) {
      var m = this.$refs.rectGroup.getScreenCTM();
      var mouse = this.$refs.svg.createSVGPoint();
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse = mouse.matrixTransform(m.inverse());
      // Find closest point within 64px.
      var min_dist = 100;
      var pt;
      for (var i = 0; i < this.data.length; i++) {
        for (var j = 0; j < this.data[i].length; j++) {
          if (
            Math.abs(this.data[i][j]["x_px"] - mouse.x) <= 64 &&
            Math.abs(this.data[i][j]["y_px"] - mouse.y) <= 64
          ) {
            let dist = Math.sqrt(
              Math.pow(this.data[i][j]["x_px"] - mouse.x, 2) +
                Math.pow(this.data[i][j]["y_px"] - mouse.y, 2)
            );
            if (dist < min_dist) {
              pt = {
                val: this.data[i][j]["y"],
                x_px: this.data[i][j]["x_px"],
                y_px: this.data[i][j]["y_px"],
                index: i
              };
              min_dist = dist;
            }
          }
        }
      }
      if (pt != undefined) {
        this.tooltip.cx = pt.x_px;
        this.tooltip.cy = pt.y_px;
        this.tooltip.fill = this.colors[pt.index];
        this.tooltip.val = Number(pt.val).toFixed(2);
        let left = pt.x_px;
        let right = Math.abs(this.gWidth - pt.x_px);
        let h = Math.min(...[left, right]);
        if (h == left) {
          this.tooltip.x_offset = 30;
        } else {
          this.tooltip.x_offset = -30;
        }
        this.tooltip.shown = true;
      } else {
        this.tooltip.shown = false;
      }
    },
    showHighlight(event) {
      let label = event.target;
      let path = this.paths.find(function(path) {
        return path.label == label.id;
      });
      this.paths = this.paths.filter(function(path) {
        return path.label != label.id;
      });
      this.paths.push(path);
      this.highlight.show = true;
      this.highlight.label = label.id;
    },
    removeHighlight() {
      this.highlight.show = false;
    }
  },
  mounted() {
    this.createGraph();
  }
};
</script>

<style scoped>
.LinePlot {
  display: inline-block;
  position: relative;
  width: 100%;
  padding-bottom: 8px;
}

.labels {
  display: flex;
  margin: 16px 48px 0px;
  flex-direction: row;
  justify-content: space-between;
}

.bgRect {
  fill: white;
}

.label {
  border-radius: 2px;
  padding: 4px;
  padding-right: 12px;
  border: 1px solid lightgrey;
  font-size: 18px;
  vertical-align: middle;
  cursor: pointer;
}

.label:hover {
  border: 1px solid var(--primary-hover);
}

.dot {
  margin-left: 0.5rem;
  margin-right: 0.2rem;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  pointer-events: none;
  transform: translate(0px, -1px);
}

.svg .xAxisDate {
  text-anchor: end;
  transform: translate(48px, 352px);
}

.svg .xAxisNum {
  transform: translate(48px, 369px);
}

.svg .yAxis {
  transform: translate(48px, 16px);
}

.svg .dualAxis {
  transform: translate(552px, 16px);
}

.svg {
  display: inline-block;
  position: relative;
}

.svg .grid {
  color: lightgrey;
}

.tooltip {
  stroke: lightgrey;
  stroke-width: 1;
  fill: white;
  pointer-events: none;
}

.tooltipText {
  text-anchor: middle;
  stroke: black;
  font-size: 10px;
  stroke-width: 0.2;
  pointer-events: none;
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

.svg .tooltipLine {
  stroke-width: 1;
  stroke: grey;
  stroke-dasharray: 5;
  fill: none;
  pointer-events: none;
}

.svg .dataPath {
  fill: none;
  pointer-events: none;
  stroke-width: 1.5;
}

.rectGroup {
  transform: translate(48px, 16px);
}
</style>
