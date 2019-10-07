<template>
  <div id="SmApp">
    <SmNav kind="top" :title="title">
      <slot name="nav-top"></slot>
    </SmNav>
    <SmNav kind="side" :links="links">
      <slot name="nav-side"></slot>
    </SmNav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "SmApp",
  slotted: true,
  props: {
    title: {
      type: String,
      required: false,
      description:
        "This is the title of your app that will appear in the top left on the nav bar."
    },
    links: {
      type: Array,
      required: false,
      validator: function(value) {
        // IGNORE
        if (value.length > 0) {
          return "name" in value[0] && "route" in value[0];
        } else {
          return true;
        }
      },
      description:
        "These are the links that will appear in the side nav bar. It needs to be an array of objects with keys 'name' (the name of the icon that will represent your link) and 'route' (the route you'd like to go to in the form '/route-here'). Example: [ { name: 'map', route: '/maps' }, { name: 'archive', route: '/library' }, ... ]"
    }
  }
};
</script>

<style scoped>
#SmApp {
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
