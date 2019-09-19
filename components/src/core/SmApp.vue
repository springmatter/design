<template>
  <div id="SmApp">
    <template v-if="!blank">
      <SmNav type="top" :title="title" />
      <SmNav type="side" :links="links" />
      <router-view></router-view>
    </template>
    <template v-if="blank">
      <slot></slot>
    </template>
  </div>
</template>

<script>
export default {
  name: "SmApp",
  slotted: true,
  props: {
    blank: {
      type: Boolean,
      required: false,
      description: "Removes all default children of SmApp but maintains its grid structure. This is useful if you want to keep the app layout but tweak the nav bars. Check out the source for this website on github for an example."
    },
    title: {
      type: String,
      required: false,
      description: "This is the title of your app that will appear in the top left on the nav bar."
    },
    links: {
      type: Array,
      required: false,
      validator: function (value) {
        // IGNORE
        if (value.length > 0) {
          return "name" in value[0] && "route" in value[0];
        } else {
          return true;
        }
      },
      description: "These are the links that will appear in the side nav bar. It needs to be an array of objects with keys 'name' (the name of the icon that will represent your link) and 'route' (the route you'd like to go to in the form '/route-here'). Example: [ { name: 'map', route: '/maps' }, { name: 'archive', route: '/library' }, ... ]"
    }
  }
}
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
