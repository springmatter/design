<template>
  <SmApp blank>
    <SmNav type="top" class="p-2"/>
    <SmNav type="side" class="px-3" blank>
      <router-link to="/" class="p-2">
        <img src="./logo.png" class="w-9" />
      </router-link>
      <h6 class="m-2 mt-5">Core</h6>
      <ul>
        <li v-for="page in corePages" :key="page.name" class="my-1">
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
    corePages: function() {
      return this.$router.options.routes.slice(1, 5);
    },
    componentPages: function() {
      return this.$router.options.routes.slice(5);
    }
  }
};
</script>
