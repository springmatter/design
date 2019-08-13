<template>
  <div id="app">
    <nav id="nav-top">
      <router-link class="logolink" to="/">
        <img src="./logo.png" />
      </router-link>
      <router-link
        :to="$route.fullPath.replace(/\/notes/, '')"
        class="view-toggle mla"
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
    </nav>
    <nav id="nav-side">
      <h3>Introduction</h3>
      <ul>
        <li v-for="page in introPages" :key="page.name">
          <router-link :to="'/' + page.name + (notes ? '/notes' : '')">
            {{ page.name }}
          </router-link>
        </li>
      </ul>
      <h3>Core</h3>
      <ul>
        <li v-for="page in corePages" :key="page.name">
          <router-link :to="'/' + page.name + (notes ? '/notes' : '')">
            {{ page.name }}
          </router-link>
        </li>
      </ul>
      <h3>Components</h3>
      <ul>
        <li v-for="page in componentPages" :key="page.name">
          <router-link :to="'/' + page.name + (notes ? '/notes' : '')">
            {{ page.name }}
          </router-link>
        </li>
      </ul>
    </nav>
    <router-view class="content" />
  </div>
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
.meta-nav {
  width: 300px;
  height: 100vh;
  background: blue;
}

#nav-side {
  width: calc(var(--sp9) * 2);
  display: block;
  padding: 0 var(--sp4);
}

#nav-side > ul > li {
  margin: 0;
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

#nav-side > h3 {
  margin: var(--sp4) 0 var(--sp1) 0;
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
