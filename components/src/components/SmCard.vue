<template>
  <div class="SmCard" :class="{ linked: linked, modal: modal }">
    <SmButton v-if="modal" class="close-btn" icon="x" @click="$emit('close')"/>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SmCard",
  slotted: true,
  data: function() {
    return {
      linked: false
    };
  },
  props: {
    modal: {
      type: Boolean,
      required: false,
      default: false,
      description: "Styles the card for use as a modal window that appears centered on top of existing content. Adds a close button that emits a 'close' event. User is responsible for hiding and showing the modal."
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
  @apply p-4;
  @apply border;
  @apply border-gray-2;
  @apply rounded;
  @apply text-black;
  overflow: scroll;
}

.linked:hover {
  @apply border-blue;
}

.modal {
  position: fixed;
  @apply mx-auto inset-x-0;
  @apply z-40;
  @apply shadow-xl;
  top: 40vh;
  transform: translateY(-50%);
}

.modal > .close-btn {
  position: absolute;
  top: 0;
  right: 0;
  @apply m-1;
  @apply z-50;
}
</style>
