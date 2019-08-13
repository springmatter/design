# Tabs


## Basics

Our tabs component is a bit special. It is actually designed to be a root element in a view that your `<router-view class="content" />` in `App.vue` will point to.

```html
<template>
  <SmTabs>
  </SmTabs>
</template>
```

`<SmTabs>` can contain any number of `<div>` elements as children. Each of these `<div>` elements has a standard content grid applied to it, meaning you can use `<main>` `<header>` `<footer>` and `<aside>` tags just like in our normal layout. Lastly, each `<div>` child of `<SmTabs>` should contain a `data-tab` attribute. This will be the name of the tab. Ex:

```html
<template>
  <SmTabs>

    <div data-tab="First Tab">
      <header>I'm a header</header>
      <main>I will work like a normal main element (see layout)</main>
    </div>

    <div data-tab="Second Tab">
      <header>I'm a header</header>
      <main>I'm a main</main>
      <footer>I'm a footer</footer>
      <aside>I'm an aside</aside>
    </div>

  </SmTabs>
</template>
```

## Spawning tabs dynamically

`<SmTabs>` will automatically update its tabs based on its children. No configuration is necessary for the display of tabs. A common way to do it is to have an array of tab objects in your data function and display tabs based off this data. Keep in mind tabs can also be components.

```
<template>
  <SmTabs>
    
    <CustomComponent some-prop="tabs[0]" data-tab="tabs[0].name" />

    <div v-for="(tab, index) in tabs.slice(1)" :key="index" :data-tab="tab.name">
      <main>{{ tab.content }}</main>
    </div>

  </SmTabs>
</template>

<script>
import CustomComponent from "@/components/CustomComponent";

export default {
  components: { CustomComponent },
  data: function() {
    return {
      tabs: [
        { name: "Main Tab", content: "Main tab content blah blah blah" },
        { name: "A very nice tab", content: "This tab is nice" },
        { name: "A mean tab!", content: "This tab is mean!" },
        { name: "Sad tab :(", content: "This tab is sad :(" },
        { name: "MANIC TAB", content: "THIS TAB IS MMANANNICCCC!!!!" },
      ]
    }
  }
}
</script>
```

## Closing tabs

Since our tabs component just blindly renders its children as tabs, the best way to close tabs is to remove tabs from our `tabs` data structure. Here we're taking advantage of Vue's reactivity system, which will remove the element from the DOM when we remove it from the array.

To accomplish this, SmTabs emits a `close-tab` event that we can react to. `close-tab` will emit the index of the closing tab which we can grab by calling our method like this `close($event)`. Below is a full general use tabs example.

```
<template>
  <SmTabs @close-tab="close($event)">
    <div v-for="(tab, index) in tabs" :key="index" :data-tab="tab.name">
      <main>{{ tab.content }}</main>
    </div>
  </SmTabs>
</template>

<script>
import CustomComponent from "@/components/CustomComponent";

export default {
  components: { CustomComponent },
  data: function() {
    return {
      tabs: [
        { name: "Main Tab", content: "Main tab content blah blah blah" },
        { name: "A very nice tab", content: "This tab is nice" },
        { name: "A mean tab!", content: "This tab is mean!" },
        { name: "Sad tab :(", content: "This tab is sad :(" },
        { name: "MANIC TAB", content: "THIS TAB IS MMANANNICCCC!!!!" },
      ]
    }
  },
  methods: {
    close: function(index) {
      this.tabs.splice(index, 1);
    }
  }
}
</script>
```
