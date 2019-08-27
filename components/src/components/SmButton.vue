<template>
  <button class="SmButton" :class="[kind, { small: small }]" @click="$emit('click')">
    <slot></slot>
    <SmIcon 
      v-if="icon !== ''" 
      :name="icon" 
      :class="{ 'ml-2': kind !== 'icon'}"
      :size="kind === 'icon' && !small ? 'm' : 's'" 
    />
  </button>
</template>

<script>
export default {
  name: "SmButton",
  props: {
    kind: {
      type: String,
      required: false,
      default: "icon",
      validator: function(value) {
        return ["primary", "secondary", "ghost", "icon"].indexOf(value) !== -1
      }
    },
    icon: {
      type: String,
      required: false,
      default: ""
    },
    small: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
}
</script>

<style scoped>
.SmButton {
  @apply text-white;
  @apply flex;
  @apply items-center;
  @apply rounded-lg;
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

.ghost,
.icon {
  @apply p-1;
  @apply bg-transparent;
}

.ghost {
  @apply text-blue;
}

.ghost:hover {
  @apply text-blue-dark;
}

.icon {
  @apply text-gray-10;
}

.icon:hover {
  @apply text-black;
}

.small, .small:disabled {
  @apply py-1;
}
</style>
