<template>
  <div class="SmCard" :class="{ linked: linked, modal: modal }">
    <SmButton class="close-btn" icon="x" @click="$emit('close')"/>
    <div v-if="title || sidetitle || subtitle" class="card-title">
      <small v-if="sidetitle" class="sidetitle side-title"><slot name="sidetitle"></slot></small>
      <h5 v-if="title" class="title"><slot name="title"></slot></h5>
      <small v-if="subtitle" class="subtitle"><slot name="subtitle"></slot></small>
    </div>
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SmCard",
  data: function() {
    return {
      title: true,
      sidetitle: true,
      subtitle: true,
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
      for(let child of this.$el.childNodes[0].childNodes) {
        if(!child.hasChildNodes()) {
          this[child.className.split(" ")[0]] = false;
        }
      };
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

.card-title {
  @apply w-full;
  @apply pb-3;
}

.side-title {
  @apply float-right;
}

.linked:hover {
  @apply border-blue;
}

.modal {
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 30vh;
  @apply z-50;
  @apply w-1/4;
  @apply shadow-xl;
}

.modal .close-btn {
  position: absolute;
  top: 0;
  right: 0;
  @apply m-1;
}
</style>
