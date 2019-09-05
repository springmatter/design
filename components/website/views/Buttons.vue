<template>
  <SmTextLayout class="root">
    <ComponentSpec :comp="SmButton" />
    <SmButton kind="primary" small>Click me</SmButton>
    <SmButton kind="secondary">Click me</SmButton>
    <SmButton kind="ghost">Click me</SmButton>
    <SmButton icon="map"/>
    <br />

    <SmButton kind="primary"disabled>Click me</SmButton>
    <SmButton kind="secondary" disabled>Click me</SmButton>
    <SmButton kind="ghost" disabled>Click me</SmButton>
    <SmButton icon="map" disabled/>
    <br />
    
    <SmButton kind="primary" icon="plus">Click me</SmButton>
    <SmButton kind="secondary" icon="plus">Click me</SmButton>
    <SmButton kind="ghost" icon="plus">Click me</SmButton>
  </SmTextLayout>
</template>

<script>
import ComponentSpec from "../components/ComponentSpec.vue";
import SmButton from "../../../components/src/components/SmButton.vue";

export default {
  components: { ComponentSpec },
  data: function() {
    return {
      SmButton: SmButton
    };
  }
};
</script>

<style scoped>
.root * {
  @apply m-2;
}
</style>
