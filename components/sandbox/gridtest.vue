<template>
  <SmTabLayout @closed-tab="closeTest($event)">
    <SmFlexLayout data-tabname="test1">test1</SmFlexLayout>
    <SmFlexLayout v-if="open" data-tabname="test2" data-canclose
      >test2</SmFlexLayout
    >
    <SmFlexLayout data-tabname="test3">test3</SmFlexLayout>
  </SmTabLayout>
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
.ok {
  width: 280px;
}
</style>