<template>
    <nav :class="'nav-' + type">
      <template v-if="!blank">
        <template v-if="type === 'top'">
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
        <template v-if="type === 'side'">
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
      </template>
      <slot v-if="blank"></slot>
    </nav>
</template>

<script>
export default {
  name: "SmNav",
  props: {
    blank: {
      type: Boolean,
      required: false,
      default: false
    },
    type: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: false,
      default: ""
    },
    links: {
      type: Array,
      required: false,
      default: null,
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
nav.nav-top {
  grid-area: topNav;
  display: flex;
  @apply border-b;
  @apply border-gray-1;
  @apply py-2 px-3;
}

nav.nav-side {
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
