<template>
  <SmTextLayout>
    <div class="flex justify-center items-center mb-5">
      <SmIcon name="smile" size="s" />
      <SmIcon name="smile" class="ml-2"/>
      <SmIcon name="smile" size="l" class="ml-2"/>
    </div>
    <div class="flex flex-wrap justify-between">
      <div v-for="icon in icons" :key="icon.name" class="mb-4 w-1/4 flex flex-col items-center justify-center">
        <SmIcon :name="icon.name" />
        <small>{{ icon.name }}</small>
      </div>
    </div>
  </SmTextLayout>
</template>

<script>
import feather from "feather-icons";
export default {
  data: function() {
    return {
      icons: feather.icons
    };
  }
}
</script>
