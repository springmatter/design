<template>
  <button
    class="SmButton"
    :class="[kind, { small: small }]"
    @click="$emit('click')"
    @mouseover="$emit('mouseover')"
    @mouseenter="$emit('mouseenter')"
  >
    <slot></slot>
    <SmIcon v-if="icon" :name="icon" :size="small ? 's' : 'm'" />
  </button>
</template>

<script>
export default {
  name: "SmButton",
  slotted: true,
  props: {
    kind: {
      type: String,
      required: false,
      default: "",
      validator: function(value) {
        return ["primary", "secondary", "alternate", ""].indexOf(value) !== -1;
      },
      description:
        "Determines the visual style of the button. If no kind is applied the button acts as a simple clickable wrapper."
    },
    icon: {
      type: String,
      required: false,
      description:
        "The name of an icon to be included in the button. In primary, secondary, and alternate buttons the icon will appear beside the text, in default buttons the icon will be centered. Must correspond to the name of an icon from the feather icons set (See SmIcon page for full list of available icons)."
    },
    small: {
      type: Boolean,
      required: false,
      description:
        "Shrinks the button vertically for use inline, in headers, etc."
    }
  }
};
</script>

<style scoped>
.primary,
.secondary,
.alternate {
  min-width: 176px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
}

.primary > svg,
.secondary > svg,
.alternate > svg {
  margin-left: 8px;
}

.SmButton:disabled,
.primary:disabled,
.secondary:disabled,
.alternate:disabled {
  @apply opacity-25;
  cursor: not-allowed;
}

.SmButton:active,
.primary:active,
.secondary:active {
  @apply opacity-75;
}

.alternate:active {
  @apply opacity-50;
}

.primary,
.primary:disabled:hover {
  @apply bg-primary;
  color: white;
}

.primary:hover {
  @apply bg-primary-hover;
}

.secondary,
.secondary:disabled:hover {
  @apply bg-secondary;
  color: white;
  @apply border-0;
}

.secondary:hover {
  background: black;
  @apply border-2;
  @apply border-primary;
}

.alternate,
.alternate:disabled:hover {
  background: white;
  @apply border;
  @apply border-secondary;
  color: black;
}

.alternate:hover {
  @apply border-primary;
  @apply text-primary;
}

.small {
  min-width: 120px;
  height: 32px;
}
</style>
