<template>
  <div ref="container" :id="'div_' + jpgLocation" class="full">
    <svg :id="'graph_' + jpgLocation" :width="gWidth" :height="gHeight" class="inset">
      <image
        class="img"
        :href="jpgLocation"
        :id="'jpg_'+jpgLocation"
        :width="imgWidth"
        :height="imgHeight"
        x="50%"
        y="50%"
      />
      <g v-for="(level, index) in polyDict" :key="index">
        <polygon
          v-for="(points, cnt) in level"
          :key="cnt"
          :id="level"
          :points="points"
          :style="{fill:colors[index], fillOpacity:0.25, strokeOpacity:1.0, stroke:colors[index], transform: 'translate('+(gWidth/2 - imgWidth/2)+'px,'+(gHeight/2 - imgHeight/2) +'px)'}"
          @mouseover="mouseover($event)"
          @mouseout="mouseout($event)"
        />
      </g>
    </svg>
    <svg :width="gWidth" height="40px" class="slider">
      <line x1="0" y1="50%" :x2="gWidth" y2="50%" style="stroke:black;stroke-width:1;" />
      <circle r="10" cx="50%" cy="50%" fill="lightgrey" stroke="black" />
    </svg>
  </div>
</template>

<script>
import * as d3 from "d3";
import gradient from "gradient-color";

export default {
  name: "Heatmap",
  props: {
    geojsonLocations: Array,
    jpgLocation: String,
    northBound: Number,
    eastBound: Number,
    westBound: Number,
    southBound: Number
  },
  data() {
    return {
      gWidth: 0,
      gHeight: 0,
      imgHeight: 0,
      imgWidth: 0,
      plotInset: 40,
      colors: [],
      polyDict: {}
    };
  },
  computed: {
    bounding: function() {
      return this.$refs.container.getBoundingClientRect();
    }
  },
  methods: {
    createImage() {
       let self = this;

      // Define a width and height for the graph.
      this.gWidth = this.bounding.width - this.plotInset * 2;
      this.gHeight = this.bounding.height - this.plotInset * 2;

      let img = new Image();
      img.onload = function() {
        self.imgHeight = img.height;
        self.imgWidth = img.width;
        // Scale to fit in bounding graph box.
        let difH = self.imgHeight - self.gHeight;
        let difW = self.imgWidth - self.gWidth;
        if (difH > 0 && difH >= difW) {
          // Scale by height.
          let scaleFactor = self.gHeight / self.imgHeight;
          self.imgHeight = self.gHeight;
          self.imgWidth = scaleFactor * self.imgWidth;
        }
        if (difW > 0 && difW > difH) {
          // Scale by width.
          let scaleFactor = self.gWidth / self.imgWidth;
          self.imgWidth = self.gWidth;
          self.imgHeight = scaleFactor * self.imgHeight;
        }
        let docImg = document.getElementById('jpg_'+self.jpgLocation)
        // Transpose to be in center of div.
        docImg.style.transform = 'translate(' + (-self.imgWidth/2)+'px,'+(-self.imgHeight/2)+'px)'
        self.plotContours()
      };
      img.src = this.jpgLocation;

      var drag = d3.drag().on("drag", this.dragmove);
      d3.select("circle")
        .style("cursor", "ew-resize")
        .call(drag);
    },
    plotContours() { 
      var x = d3
        .scaleLinear()
        .domain([this.westBound, this.eastBound])
        .range([0, this.imgWidth]);
      var y = d3
        .scaleLinear()
        .domain([this.southBound, this.northBound])
        .range([this.imgHeight, 0]);
      let self = this
      for (var i = 0; i < this.geojsonLocations.length; i++) {
        d3.json(this.geojsonLocations[i]).then(function(contours) {
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
          // TODO: use dif gradients for dif probability maps.
          self.colors = gradient(
            ["#FFCC00", "#FF7B00", "#E00404", "#940000"],
            Object.keys(self.polyDict).length
          );
          self.$forceUpdate();
        });
      }
    },
    mouseover(event) {
      if (event.target.tagName == "polygon") {
        event.target.style.stroke = "purple";
      }
    },
    mouseout(event) {
      if (event.target.tagName == "polygon") {
        event.target.style.stroke = event.target.style.fill;
      }
    },
    dragmove() {
      let circle = d3.select("circle");
      let line = d3.select("line");
      var x = d3.event.x;
      let x1 = Number(line.attr("x1"));
      let x2 = Number(line.attr("x2"));
      let r = Number(circle.attr("r"));
      // Constrain x location to be within sliding bounds.
      x = x < x1 + r + 1 ? x1 + r + 1 : x;
      x = x > x2 - r - 1 ? x2 - r - 1 : x;
      circle.attr("cx", x);
      // Set opacity based on slider.
      let opacityValue = d3
        .scaleLinear()
        .domain([x1 + r + 1, x2 - r - 1])
        .range([0.0, 0.5]);
      d3.selectAll("polygon").style("fill-opacity", opacityValue(x));
    }
  },
  mounted() {
    this.createImage();
  }
};
</script>

<style>
.full {
  width: 100%;
  height: 100%;
  position: relative;
}

.slider {
  transform: translate(40px, 20px);
}

.inset {
  transform: translate(40px, 20px);
  border: 1px solid lightgrey;
  border-radius: 8px;
}
</style>