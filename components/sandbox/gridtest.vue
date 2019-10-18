<template>
  <SmFlexLayout>
    <template #left>
      test left
    </template>
    test center
    <template #right>
      test right
      <SmCard class="ok">ok ok</SmCard>
    </template>
  </SmFlexLayout>
</template>

<script>
export default {};
</script>

<style>
.ok {
  width: 280px;
}
</style>