<template>
  <div class="m-10">
    <input type="text" placeholder="Placeholder" disabled />
    <input type="search" placeholder="Search" />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      open: true
    };
  },
  methods: {
    closeTest(evt) {
      console.log("closeTest", evt);
      if (evt === 1) {
        this.open = false;
      }
    }
  }
};
</script>

<style>
.SmCard {
  margin-bottom: 8px;
}
</style>