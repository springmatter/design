<template>
  <div class="m-10">
    <SmButton>Wrapper</SmButton>
    <div class="flex">
      <div class="mr-4">
        <SmButton kind="primary">Primary</SmButton>
        <br />
        <SmButton kind="primary" icon="plus">Add New</SmButton>
        <br />
        <SmButton kind="primary" disabled>Primary</SmButton>
        <br />
        <SmButton kind="primary" small>Primary</SmButton>
        <br />
        <SmButton kind="primary" icon="plus" small>Add New</SmButton>
        <br />
        <SmButton kind="primary" icon="plus" small disabled>Add New</SmButton>
      </div>
      <div class="mr-4">
        <SmButton kind="secondary">Secondary</SmButton>
        <br />
        <SmButton kind="secondary" icon="upload">Upload</SmButton>
        <br />
        <SmButton kind="secondary" disabled>Secondary</SmButton>
        <br />
        <SmButton kind="secondary" small>Secondary</SmButton>
        <br />
        <SmButton kind="secondary" icon="upload" small>Upload</SmButton>
        <br />
        <SmButton kind="secondary" icon="upload" small disabled
          >Upload</SmButton
        >
      </div>
      <div>
        <SmButton kind="alternate">Alternate</SmButton>
        <br />
        <SmButton kind="alternate" icon="unlock">Lock</SmButton>
        <br />
        <SmButton kind="alternate" disabled>Alternate</SmButton>
        <br />
        <SmButton kind="alternate" small>Alternate</SmButton>
        <br />
        <SmButton kind="alternate" icon="unlock" small>Lock</SmButton>
        <br />
        <SmButton kind="alternate" icon="unlock" small disabled>Lock</SmButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>