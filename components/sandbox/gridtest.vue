<template>
  <SmTabLayout :tabs="['tab1', 'tab2', 'tab3']">
    <SmFlexLayout :data-tab="{ name: 'tab1' }">test1</SmFlexLayout>
    <SmFlexLayout :data-tab="{ name: 'tab2' }">test2</SmFlexLayout>
    <SmFlexLayout :data-tab="{ name: 'tab3' }">test3</SmFlexLayout>
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