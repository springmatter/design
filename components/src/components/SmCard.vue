<template>
  <div
    class="SmCard"
    :class="{ SmCardLinked: linked || expandable, SmCardModal: modal }"
    @click="expanded = !expanded"
  >
    <SmButton
      v-if="modal"
      class="SmCardModalCloseBtn"
      icon="x"
      @click="$emit('close')"
    />
    <h5 v-if="sidetitle" class="SmCardSidetitle">{{ sidetitle }}</h5>
    <h4 v-if="title">{{ title }}</h4>
    <h5 v-if="subtitle" class="SmCardSubtitle">{{ subtitle }}</h5>
    <slot></slot>
    <div v-if="expanded" class="below-fold">
      <slot name="below-fold"></slot>
    </div>
    <SmIcon
      class="SmCardChevron"
      v-if="expandable"
      name="chevron-down"
      :style="{
        transform: expanded ? 'rotate(180deg)' : 'none'
      }"
    />
  </div>
</template>

<script>
export default {
  name: "SmCard",
  data: function() {
    return {
      linked: false,
      expanded: false
    };
  },
  props: {
    modal: {
      type: Boolean,
      required: false,
      default: false
    },
    title: {
      type: String,
      required: false
    },
    subtitle: {
      type: String,
      required: false
    },
    sidetitle: {
      type: String,
      required: false
    },
    expandable: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    update: function() {
      this.linked =
        this.$el.parentNode.tagName === "A" ||
        this.$el.parentNode.tagName === "BUTTON";
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
  border: 1px solid var(--secondary);
  padding: 8px 16px 8px 16px;
  display: inline-block;
  color: black;
  background: white;
  position: relative;
}

.SmCardLinked:hover::before {
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  content: "";
  height: 100%;
  border: 1px solid var(--primary-hover);
  border-radius: 0;
}

.SmCardLinked:hover {
  border: 1px solid var(--primary-hover);
}

.SmCardModal {
  position: fixed;
  top: 40vh;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: 0 auto;
}

.SmCardModal > .SmCardModalCloseBtn {
  position: absolute;
  top: 4px;
  right: 4px;
  z-index: 10000;
}

.SmCardSidetitle {
  float: right;
  margin-top: 8px;
}

.SmCardSubtitle {
  margin: 2px 2px 12px 2px;
}

.SmCardChevron {
  position: absolute;
  right: 0;
  bottom: 0;
  margin-right: 16px;
  margin-bottom: 8px;
}
</style>
