<template>
  <SmScrollbox class="w-1/2 h-full">
    <template #header>
      <h4>Networks for xyz</h4>
    </template>
    <div class="flex flex-wrap">
      <SmCard class="w-1/3 mx-1" title="Test">
        test
      </SmCard>
      <SmCard class="w-1/3 mx-1" title="Test">
        test
      </SmCard>
      <SmCard class="w-1/3 mx-1" title="Test">
        test
      </SmCard>
      <SmCard class="w-1/3 mx-1" title="Test">
        test
      </SmCard>
      <SmCard class="w-1/3 mx-1" title="Test">
        test
      </SmCard>
      <SmCard class="w-1/3 mx-1" title="Test">
        test
      </SmCard>
      <SmCard class="w-1/3 mx-1" title="Test">
        test
      </SmCard>
      <SmCard class="w-1/3 mx-1" title="Test">
        test
      </SmCard>
      <SmCard class="w-1/3 mx-1" title="Test">
        test
      </SmCard>
      <SmCard class="w-1/3 mx-1" title="Test">
        test
      </SmCard>
      <SmCard class="w-1/3 mx-1" title="Test">
        test
      </SmCard>
      <SmCard class="w-1/3 mx-1" title="Test">
        test
      </SmCard>
      <SmCard class="w-1/3 mx-1" title="Test">
        test
      </SmCard>
      <SmCard class="w-1/3 mx-1" title="Test">
        test
      </SmCard>
      <SmCard class="w-1/3 mx-1" title="Test">
        test
      </SmCard>
      <SmCard class="w-1/3 mx-1" title="Test">
        test
      </SmCard>
      <SmCard class="w-1/3 mx-1" title="Test">
        test
      </SmCard>
      <SmCard class="w-1/3 mx-1" title="Test">
        test
      </SmCard>
      <SmCard class="w-1/3 mx-1" title="Test">
        test
      </SmCard>
      <SmCard class="w-1/3 mx-1" title="Test">
        test
      </SmCard>
      <SmCard class="w-1/3 mx-1" title="Test">
        test
      </SmCard>
      <SmCard class="w-1/3 mx-1" title="Test">
        test
      </SmCard>
      <SmCard class="w-1/3 mx-1" title="Test">
        test
      </SmCard>
      <SmCard class="w-1/3 mx-1" title="Test">
        test
      </SmCard>
      <SmCard class="w-1/3 mx-1" title="Test">
        test
      </SmCard>
      <SmCard class="w-1/3 mx-1" title="Test">
        test
      </SmCard>
      <SmCard class="w-1/3 mx-1" title="Test">
        test
      </SmCard>
      <SmCard class="w-1/3 mx-1" title="Test">
        test
      </SmCard>
    </div>
  </SmScrollbox>
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