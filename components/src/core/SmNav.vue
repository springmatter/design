<template>
  <nav>
    <router-link
      v-for="(link, index) in links"
      :key="index"
      :to="link.route"
      class="mb-3 text-black"
    >
      <SmIcon :name="link.name" />
    </router-link>
    <slot></slot>
  </nav>
</template>

<script>
export default {
  name: "SmNav",
  slotted: true,
  props: {
    logoPath: {
      type: String,
      required: false,
      description:
        "This is the path to your app's logo that will appear in the top left of the app."
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
#nav-top {
  grid-area: topNav;
  display: flex;
}

#nav-side {
  grid-area: sideNav;
  display: flex;
  flex-flow: column;
  margin-top: -1px;
}
</style>
