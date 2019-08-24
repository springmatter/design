<template>
  <router-link :to="to" class="link" :class="{ black: black }">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: "SmLink",
  props: {
    to: {
      type: String,
      required: true
    },
    black: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style scoped>
.link {
  color: var(--blue);
  text-decoration: none;
  transition: color var(--transition-short);
  padding: var(--sp1);
  display: inline-block;
  margin: 1px;
}

.link.black {
  color: var(--black);
}

.link:hover {
  text-decoration: none;
  color: var(--blue-hover);
}

.link.black:hover {
  text-decoration: none;
  color: var(--blue);
}

.link:hover > figure {
  border: 1px solid var(--blue);
  text-decoration: none;
  color: var(--blue-hover);
}

.link:focus {
  outline: var(--focus-outline);
}

</style>
