<template>
  <div class="SmCard" :class="{ linked: linked, modal: modal }">
    <SmButton v-if="modal" class="close-btn" icon="x" @click="$emit('close')"/>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SmCard",
  data: function() {
    return {
      linked: false
    };
  },
  props: {
    modal: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    update: function() {
      this.linked = this.$el.parentNode.tagName === "A";
    }
  },
  beforeUpdate: function() {
    this.update();
  },
  mounted: function() {
    this.update();
  }
}
</script>

<style scoped>
.SmCard {
  @apply bg-white;
  @apply p-3;
  @apply border;
  @apply border-gray-2;
  @apply rounded;
  @apply text-black;
}

.linked:hover {
  @apply border-blue;
}

.modal {
  position: fixed;
  @apply mx-auto inset-x-0;
  @apply z-40;
  @apply shadow-xl;
}

.modal .close-btn {
  position: absolute;
  top: 0;
  right: 0;
  @apply m-1;
  @apply z-50;
}
</style>
