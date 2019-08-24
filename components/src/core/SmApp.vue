<template>
  <div id="app">
    <template v-if="!blank">
      <SmNav type="top" :title="title" />
      <SmNav type="side" :links="links" :collapse="collapseSide" />
      <!-- <SmContent /> -->
    </template>
    <slot v-if="blank"></slot>
  </div>
</template>

<script>
export default {
  name: "SmApp",
  props: {
    blank: {
      type: Boolean,
      required: false,
      default: false
    },
    collapseSide: {
      type: Boolean,
      required: false,
      default: false
    },
    title: {
      type: String,
      required: false,
      default: ""
    },
    links: {
      type: Array,
      required: false,
      default: () => [],
      validator: function (value) {
        if (value.length > 0) {
          return "name" in value[0] && "route" in value[0];
        } else {
          return true;
        }
      }
    }
  }
}
</script>

<style scoped>
#app {
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "topNav  topNav"
    "sideNav content";
}
</style>
