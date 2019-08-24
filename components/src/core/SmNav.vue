<template>
    <nav :class="'nav-' + type" :hidden="collapse">
      <template v-if="!blank">
        <template v-if="type === 'top'">
          <SmLink to="/" title="Home" black>
            <h3 class="m-0 font-weight-normal">{{ title }}</h3>
          </SmLink>

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
          <SmLink 
            v-for="link in links" 
            :key="link.route" 
            :to="link.route" 
            class="side-link"
            black
          >
            <SmIcon :name="link.name" />
          </SmLink>
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
    collapse: {
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
  height: var(--sp7);
  padding-left: var(--sp1);
  display: flex;
  align-items: center;
  background: var(--white);
  border-bottom: 1px solid var(--gray1);
}

nav.nav-side {
  grid-area: sideNav;
  width: var(--sp7);
  display: flex;
  align-items: center;
  flex-flow: column;
  background: var(--white);
  border-right: 1px solid var(--gray1);
  border-top: 1px solid white;
  margin-top: -1px;
  padding: var(--sp2) 0;
}

.side-link {
  padding: var(--sp1);
  width: 28px;
  height: 28px;
  margin-bottom: var(--sp2);
}
</style>
