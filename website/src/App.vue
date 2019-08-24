<template>
  <SmApp blank>
    <SmNav type="top" title="Springmatter" blank>
      <router-link class="logolink" to="/">
        <img src="./logo.png" />
      </router-link>
      <router-link
        :to="$route.fullPath.replace(/\/notes/, '')"
        class="view-toggle ml-auto"
        :class="{ active: !notes, disabled: onIntro }"
      >
        Canvas
      </router-link>
      <router-link
        :to="$route.fullPath + '/notes'"
        class="view-toggle"
        :class="{ active: notes, disabled: onIntro }"
      >
        Notes
      </router-link>
    </SmNav>
    <SmNav type="side" class="sidenav" blank>
      <h3 class="m-0 mt-4">Introduction</h3>
      <ul>
        <li v-for="page in introPages" :key="page.name" class="m-0">
          <router-link :to="'/' + page.name + (notes ? '/notes' : '')">
            {{ page.name }}
          </router-link>
        </li>
      </ul>
      <h3 class="m-0 mt-4">Core</h3>
      <ul>
        <li v-for="page in corePages" :key="page.name" class="m-0">
          <router-link :to="'/' + page.name + (notes ? '/notes' : '')">
            {{ page.name }}
          </router-link>
        </li>
      </ul>
      <h3 class="m-0 mt-4">Components</h3>
      <ul>
        <li v-for="page in componentPages" :key="page.name" class="m-0">
          <router-link :to="'/' + page.name + (notes ? '/notes' : '')">
            {{ page.name }}
          </router-link>
        </li>
      </ul>
    </SmNav>
  </SmApp>
</template>

<script>
export default {
  computed: {
    introPages: function() {
      return this.$router.options.routes.slice(1, 3);
    },
    corePages: function() {
      return this.$router.options.routes.slice(3, 7);
    },
    componentPages: function() {
      return this.$router.options.routes.slice(7);
    },
    notes: function() {
      return this.$route.fullPath.endsWith("notes");
    },
    onIntro: function() {
      return (
        this.$route.fullPath.includes("usage") ||
        this.$route.fullPath.includes("philosophy")
      );
    }
  }
};
</script>

<style scoped>
.sidenav {
  width: calc(var(--sp9) * 2) !important;
  display: block !important;
  padding: 0 var(--sp4) !important;
}

.logolink {
  margin: 0;
  padding: var(--sp2);
  display: flex;
  margin-left: var(--sp2);
}
.logolink > img {
  width: calc(var(--sp9) * 1.6);
  height: auto;
  object-fit: cover;
}

.view-toggle {
  border-bottom: 3px solid white;
  height: 100%;
  margin-right: var(--sp3);
  display: flex;
  align-items: center;
}

.active {
  border-bottom: 3px solid var(--blue);
}

.disabled {
  color: var(--gray3);
  border-bottom: 3px solid white;
  pointer-events: none;
}
</style>
