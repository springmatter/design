<template>
  <div class="relative" :class="{ raiseZ: expanded }" @focusout="expanded=false">
    <SmButton
      icon="more-vertical"
      class="icon"
      :class="{ iconBorder: expanded }"
      @click="expanded = !expanded"
    />
    <div v-if="expanded" class="options">
      <div
        v-for="(option, index) in options"
        :key="index"
        class="option flex items-center"
        @click="
          $emit(option.replace(' ', '_').toLowerCase()), (expanded = false)
        "
      >
        <div class="pl-2 pr-10">{{ option }}</div>
      </div>
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
    options: Array
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
  right: 0;
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
