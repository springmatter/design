<template>
  <div :class="{ 'cursor-not-allowed': disabled }" class="inline-block">
    <button :class="classes">
      <slot></slot>
      <SmIcon v-if="icon !== ''" :name="icon" :class="{ 'ml-3': type !== 'icon' }" />
    </button>
  </div>
</template>

<script>
export default {
  name: "SmButton",
  props: {
    type: {
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
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    classes: function() {
      return this[this.type + "Classes"];
    },
    defaultClasses: function() {
      return "text-white flex items-center rounded-lg";
    },
    disabledClasses: function() {
      return "text-gray-5 pointer-events-none rounded-lg";
    },
    primaryClasses: function() {
      return this.disabled ? this.disabledClasses + " py-2 px-4 bg-gray-2" : 
        this.defaultClasses + " py-2 px-4 bg-blue hover:bg-blue-dark";
    },
    secondaryClasses: function() {
      return this.disabled ? this.disabledClasses + " py-2 px-4 bg-gray-2" : 
        this.defaultClasses + " py-2 px-4 bg-gray-9 hover:bg-black";
    },
    ghostClasses: function() {
      return this.disabled ? this.disabledClasses + " p-1": 
        this.defaultClasses + " p-1 bg-transparent text-blue hover:text-blue-dark";
    },
    iconClasses: function() {
      return this.disabled ? this.disabledClasses : 
        "p-1 bg-transparent h-auto w-auto text-gray-10 hover:text-black";
    }
  }
}
</script>
