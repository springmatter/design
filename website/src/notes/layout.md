# Layout
This layout is the foundation of the Springmatter Design System. It consists of two CSS grids. The first is the App Layout, which governs the nav bars and content container. The second is the Content Layout.

## App Layout

For all of this to work, your Vue.js app container should be a `div#app`. Inside `div#app` should be a `nav#nav-top`, `nav#nav-side`, and a Vue `router-view#content`. This is what the basic structure looks like:

```html
<div id="app">
  <nav id="nav-top"></nav>
  <nav id="nav-side"></nav>
  <router-view id="content"></router-view>
</div>
```

`nav#nav-side` is designed to contain a list of icon-links. For example:

```html
<nav id="nav-side">
  <router-link to="/maps">
    <SmIcon name="map" />
  </router-link>
  <router-link to="/target-library">
    <SmIcon name="layers" />
  </router-link>
</nav>
```

`nav#nav-top` is a row oriented flex-box, and can contain whatever the app calls for.

## Content Layout

The content layout is the layout system that will govern everything inside `router-view#content`. As you can see, this is a Vue router-view, so the contents will be served by the Vue Router. Each view should be a Vue single file component that contains a `div` as its root with at least a `main` element inside of that. The system is designed such that the `main` element will fill as much space as it can, but will shrink appropriately when a `header`, `footer`, or `aside` is added. Here's what that looks like with all four elements:

```html
<div>
  <header>I'm a thin header/toolbar at the top of the content window</header>
  <main>I'm the main content that fills the space</main>
  <footer>I'm a thin footer for extra info on the bottom of the content window</footer>
  <aside>I'm a sidebar for even more extra info/tools</aside>
</div>
```

The order of the elements does not matter. 

And here's what the minimum required setup looks like:

```html
<div>
  <main>In this example, I will fill the entire content space</main>
</div>
```

You can have any combination of `header`, `footer`, and `aside`:

```html
<div>
  <header></header>
  <main></main>
</div>
```

```html
<div>
  <aside></aside>
  <main></main>
  <footer></footer>
</div>
```

```html
<div>
  <main></main>
  <aside></aside>
</div>
```

etc....


Notice that none of the elements inside our Content Layout requires classes or IDs to work. This is because we aim for each view to be highly composable with base HTML5 elements alone. This allows for semantic, composable, readable code where we will be doing most of our coding. Unfortunately this couldn't be accomplished with our App Layout, but the App Layout is typically pretty standard and static anyway.
