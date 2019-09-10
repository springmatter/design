<template>
  <button class="SmButton" :class="[kind, { small: small }]" @click="$emit('click')">
    <slot></slot>
    <SmIcon 
      v-if="icon" 
      :name="icon" 
      :size="small ? 's' : 'm'" 
    />
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
      default: "blank",
      validator: function(value) {
        return ["primary", "secondary", "ghost", "blank"].indexOf(value) !== -1
      },
      description: "Determines the visual style of the button. If no kind is applied the button acts as a simple clickable wrapper."
    },
    icon: {
      type: String,
      required: false,
      description: "The name of an icon to be included in the button. In primary, secondary, and ghost buttons the icon will appear beside the text, in default buttons the icon will be centered. Must correspond to the name of an icon from the feather icons set (See SmIcon page for full list of available icons)."
    },
    small: {
      type: Boolean,
      required: false,
      description: "Shrinks the button vertically for use inline, in headers, etc."
    }
  },
}
</script>

<style scoped>
.SmButton {
  @apply text-white;
  @apply flex;
  @apply items-center;
  @apply rounded-sm;
  @apply p-1;
  @apply bg-transparent;
}

.SmButton:disabled {
  @apply text-gray-5;
  @apply pointer-events-none;
}

.primary,
.secondary {
  @apply py-2;
  @apply px-4;
}

.primary > svg,
.secondary > svg,
.ghost > svg {
  @apply ml-2;
}

.primary:disabled,
.secondary:disabled {
  @apply py-2;
  @apply px-4;
  @apply bg-gray-2;
}

.primary {
  @apply bg-blue;
}

.primary:hover {
  @apply bg-blue-dark;
}

.secondary {
  @apply bg-gray-9;
}

.secondary:hover {
  @apply bg-black;
}

.ghost {
  @apply text-blue;
}

.ghost:hover {
  @apply text-blue-dark;
}

.blank {
  @apply text-gray-9;
}

.blank:hover {
  @apply text-black;
}

.small, .small:disabled {
  @apply py-1;
}
</style>
