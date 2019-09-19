<template>
    <nav :id="'nav-' + kind">
      <template>
        <template v-if="kind === 'top'">
          <router-link class="text-black" to="/" title="Home" v-if="title !== ''">
            <h5>{{ title }}</h5>
          </router-link>

          <!-- <router-link -->
          <!--   class="black" -->
          <!--   v-for="(bc, index) in breadcrumbs" -->
          <!--   :key="index" -->
          <!--   :to="bc.href" -->
          <!-- > -->
          <!--   / {{ bc.printed }} -->
          <!-- </router-link> -->
          <!-- <userDropdown class="mla p3" /> -->
        </template>
        <template v-if="kind === 'side'">
          <router-link 
            v-for="(link, index) in links" 
            :key="index" 
            :to="link.route" 
            class="mb-3 text-black"
            black
          >
            <SmIcon :name="link.name" />
          </router-link>
        </template>
        <slot></slot>
      </template>
    </nav>
</template>

<script>
export default {
  name: "SmNav",
  slotted: true,
  props: {
    kind: {
      type: String,
      required: true,
      validator: function(value) {
        return ["top", "side"].indexOf(value) !== -1;
      },
      description: "This determines whether the nav is styled as a top or a side nav."
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
#nav-top {
  grid-area: topNav;
  display: flex;
  @apply border-b;
  @apply border-gray-1;
  @apply py-2 px-3;
}

#nav-side {
  grid-area: sideNav;
  display: flex;
  flex-flow: column;
  margin-top: -1px;
  @apply bg-white;
  @apply border-r;
  @apply border-gray-1;
  @apply p-3;
}
</style>
