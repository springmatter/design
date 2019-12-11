<template>
  <button
    class="SmButton"
    :class="[kind, { small: small }]"
    @click="$emit('click')"
    @mouseover="$emit('mouseover')"
    @mouseenter="$emit('mouseenter')"
    :style="{
      lineHeight: icon ? '0' : 'inherit',
      padding: icon ? '4px' : 'unset'
    }"
  >
    <slot></slot>
    <SmIcon v-if="icon" :name="icon" :size="small ? 's' : 'm'" />
  </button>
</template>

<script>
export default {
  name: "SmButton",
  props: {
    kind: {
      type: String,
      required: false,
      default: "",
      validator: function(value) {
        return ["primary", "secondary", "alternate", ""].indexOf(value) !== -1;
      }
    },
    icon: {
      type: String,
      required: false
    },
    small: {
      type: Boolean,
      required: false
    }
  }
};
</script>

<style scoped>
.SmButton {
  display: inline;
  text-align: left;
}

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
  opacity: 0.25;
  cursor: not-allowed;
}

.SmButton:active,
.primary:active,
.secondary:active {
  opacity: 0.75;
}

.alternate:active {
  opacity: 0.5;
}

.primary,
.primary:disabled:hover {
  background: var(--primary);
  color: white;
}

.primary:hover {
  background: var(--primary-hover);
}

.secondary,
.secondary:disabled:hover {
  background: var(--secondary);
  color: white;
  border: none;
}

.secondary:hover {
  background: black;
  border: 2px solid var(--primary);
}

.alternate,
.alternate:disabled:hover {
  background: white;
  color: black;
  border: 1px solid var(--secondary);
}

.alternate:hover {
  border: 1px solid var(--primary);
  color: var(--primary);
}

.small {
  min-width: 120px;
  height: 32px;
}
</style>
