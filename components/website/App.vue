<template>
  <SmApp blank>
    <SmNav kind="top" class="p-2"/>
    <SmNav kind="side" class="px-3">
      <router-link to="/" class="p-2">
        <img src="./logo.png" class="w-9" />
      </router-link>
      <h6 class="m-2 mt-5">Introduction</h6>
      <ul>
        <li v-for="page in introPages" :key="page.name" class="my-1">
          <router-link :to="'/' + page.name" class="p-2">
            {{ page.name }}
          </router-link>
        </li>
      </ul>
      <h6 class="m-2 mt-5">Layout</h6>
      <ul>
        <li v-for="page in layoutPages" :key="page.name" class="my-1">
          <router-link :to="'/' + page.name" class="p-2">
            {{ page.name }}
          </router-link>
        </li>
      </ul>
      <h6 class="m-2 mt-5">Components</h6>
      <ul>
        <li v-for="page in componentPages" :key="page.name" class="my-1">
          <router-link :to="'/' + page.name" class="p-2">
            {{ page.name }}
          </router-link>
        </li>
      </ul>
    </SmNav>
    <router-view />
  </SmApp>
</template>

<script>
export default {
  computed: {
    introPages: function() {
      return this.$router.options.routes.slice(0, 4);
    },
    layoutPages: function() {
      return this.$router.options.routes.slice(4, 9);
    },
    componentPages: function() {
      return this.$router.options.routes.slice(9);
    }
  }
};
</script>
