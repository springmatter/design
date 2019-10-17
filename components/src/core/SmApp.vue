<template>
  <div id="SmApp">
    <nav id="SmAppNav">
      <router-link to="/" id="SmAppNavBranding">
        <img :src="logoPath" />
      </router-link>
      <div id="SmAppNavLinks">
        <router-link
          v-for="(link, index) in links"
          :key="index"
          :to="link.route"
        >
          <SmIcon :name="link.icon" size="l" />
          <span v-if="expanded">{{ link.title }}</span>
        </router-link>
      </div>
      <SmButton id="SmAppNavExpand" @click="expanded = !expanded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-1 0 18 24"
          id="SmAppNavExpandSvg"
        >
          <line y1="18" x1="0" y2="18" x2="4" stroke-linecap="round"></line>
          <line y1="12" x1="0" y2="12" x2="10" stroke-linecap="round"></line>
          <line y1="6" x1="0" y2="6" x2="16" stroke-linecap="round"></line>
        </svg>
      </SmButton>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "SmApp",
  slotted: true,
  data: function() {
    return {
      expanded: false
    };
  },
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
}

#SmAppNavBranding {
  width: 64px;
  height: 64px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#SmAppNavBranding > img {
  opacity: 0.25;
  transition: var(--transition-short);
}

#SmAppNavBranding:hover > img {
  opacity: 1;
}

#SmAppNavLinks {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#SmAppNavLinks > a {
  padding: 8px;
  width: 40px;
  height: 40px;
  color: var(--secondary);
  display: flex;
  justify-content: center;
  align-content: center;
}

#SmAppNavLinks > a:hover {
  color: black;
}

#SmAppNavExpand {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#SmAppNavExpand:hover > svg {
  opacity: 1;
}

#SmAppNavExpand:hover > svg > line:nth-child(2) {
  transform: scaleX(1.57) translateX(0.1px);
}
#SmAppNavExpand:hover > svg > line:nth-child(1) {
  transform: scaleX(3.4) translateX(0.3px);
}

#SmAppNavExpandSvg {
  width: 28px;
  height: 28px;
  stroke: black;
  transition: var(--transition-short);
  opacity: 0.5;
}

#SmAppNavExpandSvg > line {
  transition: var(--transition-short);
}
</style>
