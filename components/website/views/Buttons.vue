<template>
  <SmTextLayout class="root">
    <SmButton type="primary" small>Click me</SmButton>
    <SmButton type="secondary">Click me</SmButton>
    <SmButton type="ghost">Click me</SmButton>
    <SmButton icon="map"/>
    <br />

    <SmButton type="primary"disabled>Click me</SmButton>
    <SmButton type="secondary" disabled>Click me</SmButton>
    <SmButton type="ghost" disabled>Click me</SmButton>
    <SmButton icon="map" disabled/>
    <br />
    
    <SmButton type="primary" icon="plus">Click me</SmButton>
    <SmButton type="secondary" icon="plus">Click me</SmButton>
    <SmButton type="ghost" icon="plus">Click me</SmButton>
  </SmTextLayout>
</template>

<script>
export default {
};
</script>

<style scoped>
.root * {
  @apply m-2;
}
</style>
