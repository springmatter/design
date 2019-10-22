<template>
  <div class="SmCard" :class="{ SmCardLinked: linked, SmCardModal: modal }">
    <SmButton
      v-if="modal"
      class="SmCardModalCloseBtn"
      icon="x"
      @click="$emit('closed')"
    />
    <h5 v-if="sidetitle" class="SmCardSidetitle">{{ sidetitle }}</h5>
    <h4 v-if="title">{{ title }}</h4>
    <h5 v-if="subtitle" class="SmCardSubtitle">{{ subtitle }}</h5>
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
    },
    title: {
      type: String,
      required: false,
      description: "Adds a title to the top of the card."
    },
    subtitle: {
      type: String,
      required: false,
      description: "Adds a subtitle to the card."
    },
    sidetitle: {
      type: String,
      required: false,
      description: "Adds a sidetitle to the card."
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

/* .SmCardModal {
  position: fixed;
  top: 40vh;
  transform: translateY(-50%);
} */

.SmCardModal > .SmCardModalCloseBtn {
  position: absolute;
  top: 0;
  right: 0;
}

.SmCardSidetitle {
  float: right;
  margin-top: 8px;
}

.SmCardSubtitle {
  margin: 2px 2px 12px 2px;
}
</style>
