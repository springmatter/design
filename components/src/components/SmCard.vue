<template>
  <div class="SmCard" :class="{ linked: linked, modal: modal }">
    <SmButton v-if="modal" class="close-btn" icon="x" @click="$emit('close')" />
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
      description:
        "Styles the card for use as a modal window that appears centered on top of existing content. Adds a close button that emits a 'close' event. User is responsible for hiding and showing the modal."
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
};
</script>

<style scoped>
.SmCard {
  overflow: scroll;
}

.linked:hover {
}

.modal {
  position: fixed;
  top: 40vh;
  transform: translateY(-50%);
}

.modal > .close-btn {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
