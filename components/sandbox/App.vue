<template>
  <SmApp :logoPath="logo" title="ARGOS" :links="links" />
</template>

<script>
import logo from "./argos-logo.svg";

export default {
  data: function() {
    return {
      logo: logo,
      links: [
        {
          icon: "map",
          route: "/map-list",
          title: "Map List"
        },
        {
          icon: "layers",
          route: "/target-library",
          title: "Target Library"
        }
      ]
    };
  }
};
</script>

<style>
</style>