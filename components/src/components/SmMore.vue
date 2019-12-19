<template>
  <div class="maxWidth" :class="{ raiseZ: expanded }">
    <div @click="expanded = !expanded">
      <SmButton
        icon="more-vertical"
        class="icon"
        :class="{ iconBorder: expanded }"
      />
    </div>
    <div v-if="expanded" class="options">
      <SmButton
        v-if="info"
        class="option"
        @click="$emit('info'), (expanded = false)"
        ><div class="pl-2">Info</div></SmButton
      >
      <SmButton
        v-if="edit"
        class="option"
        @click="$emit('edit'), (expanded = false)"
      >
        <div class="pl-2">Edit</div></SmButton
      >
      <SmButton
        v-if="del"
        class="option"
        @click="$emit('delete'), (expanded = false)"
        ><div class="pl-2">Delete</div></SmButton
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "SmMore",
  data: function() {
    return {
      expanded: false
    };
  },
  props: {
    edit: Boolean,
    del: Boolean,
    info: Boolean
  }
};
</script>

<style scoped>
.icon {
  border-radius: 2px;
  cursor: pointer;
  background: white;
  float: right;
  border: 1px solid white;
  border-bottom: 0px solid white;
  width: 32px;
  height: 32px;
  position: relative;
}
.iconBorder {
  z-index: 60;
  border-radius: 2px 2px 0px 0px;
  border-top: 1px solid black;
  border-right: 1px solid black;
  border-left: 1px solid black;
}
.options {
  border-radius: 2px 0px 2px 2px;
  border: 1px solid black;
  background: white;
  transform: translateY(31px);
  position: absolute;
  width: 100%;
}
.maxWidth {
  width: 112px;
  position: absolute;
}
.raiseZ {
  z-index: 50;
}
.option {
  border-radius: 0px;
  height: 32px;
  cursor: pointer;
  width: 100%;
}
.option:focus,
.icon:focus {
  outline-offset: -2px;
}
.option:hover {
  background: var(--primary-hover);
  color: white;
}
</style>
