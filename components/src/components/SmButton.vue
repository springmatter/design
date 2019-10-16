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
      default: "blank",
      validator: function(value) {
        return (
          ["primary", "secondary", "alternate", "blank"].indexOf(value) !== -1
        );
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
.SmButton {
  color: white;
  display: flex;
  align-items: center;
  padding: 8px;
}

.SmButton:disabled {
}

.primary,
.secondary {
}

.primary > svg,
.secondary > svg,
.alternate > svg {
}

.primary:disabled,
.secondary:disabled {
}

.primary {
}

.primary:hover {
}

.secondary {
}

.secondary:hover {
}

.alternate {
}

.alternate:hover {
}

.blank {
}

.blank:hover {
}

.small,
.small:disabled {
}
</style>
