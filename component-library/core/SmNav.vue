<template>
    <nav :class="classes">
      <template v-if="!blank">
        <template v-if="type === 'top'">
          <router-link to="/" title="Home" black>
            <h4 class="m-0">{{ title }}</h4>
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
            v-for="link in links" 
            :key="link.route" 
            :to="link.route" 
            class="mb-1 mx-1"
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
  computed: {
    classes: function() {
      const BORDER = this.type === "top" ? "border-b" : "border-r";
      return `nav-${this.type} ${BORDER} border-gray-1`;
    }
  },
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
}

nav.nav-side {
  grid-area: sideNav;
  display: flex;
  flex-flow: column;
  border-top: 1px solid white;
  margin-top: -1px;
}
</style>
