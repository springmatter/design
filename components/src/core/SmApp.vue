<template>
  <div id="SmApp">
    <nav id="SmAppNav">
      <router-link to="/">
        <img :src="logoPath" />
      </router-link>
      <router-link v-for="(link, index) in links" :key="index" :to="link.route">
        <SmIcon :name="link.icon" size="l" />
      </router-link>
      <router-link to="/settings">
        <SmIcon name="settings" size="l" />
      </router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "SmApp",
  slotted: true,
  props: {
    title: {
      type: String,
      required: false,
      description:
        "This is the title of your app that will appear in the top left on the nav bar."
    },
    logoPath: {
      type: String,
      required: false,
      description:
        "This is the path to your app's logo that will appear in the top left of the app."
    },
    links: {
      type: Array,
      required: false,
      validator: function(value) {
        // IGNORE
        if (value.length > 0) {
          return (
            "icon" in value[0] && "route" in value[0] && "title" in value[0]
          );
        } else {
          return true;
        }
      },
      description:
        "These are the links that will appear in the side nav bar. It needs to be an array of objects with keys 'name' (the name of the icon that will represent your link) and 'route' (the route you'd like to go to in the form '/route-here'). Example: [ { icon: 'map', route: '/maps', title: 'Map List' }, { icon: 'archive', route: '/library', title: 'Target Library' }, ... ]"
    }
  }
};
</script>

<style>
#SmApp {
  width: 100vw;
  height: 100vh;

  display: flex;
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
