<template>
  <div id="SmApp">
    <nav id="SmAppNav">
      <router-link to="/">
        <img :src="logoSrc" />
      </router-link>
      <router-link v-for="(link, index) in links" :key="index" :to="link.route">
        <SmIcon :name="link.icon" size="l" />
      </router-link>
      <router-link to="/settings" v-if="!noSettings">
        <SmIcon name="settings" size="l" />
      </router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "SmApp",
  props: {
    logoSrc: {
      type: String,
      required: false
    },
    links: {
      type: Array,
      required: false,
      validator: function(value) {
        for (let link of value) {
          if (!link.icon || !link.route) {
            return false;
          }
        }

        return true;
      }
    },
    noSettings: {
      type: Boolean,
      default: false,
      required: false
    }
  }
};
</script>

<style>
#SmApp {
  width: 100vw;
  height: 100vh;

  display: flex;
  overflow: hidden;
}

#SmAppNav {
  width: 64px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#SmAppNav > a {
  padding: 8px 20px;
  height: 40px;
  width: 100%;
  color: var(--secondary);
}

#SmAppNav > a:first-child {
  height: 64px;
  margin-bottom: auto;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
}

#SmAppNav > a:first-child:hover {
  opacity: 1;
}

#SmAppNav > a:last-child {
  padding: 20px;
  height: 64px;
  margin-top: auto;
}

#SmAppNav > a:hover {
  color: black;
}
</style>
