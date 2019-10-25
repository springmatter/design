# @springmatter/components

The Springmatter Component Library is a set of components and tools for rapidly building applications from the ground up.

## Getting Started

### Install
```
npm install @springmatter/components
```

### Import
Import the components into your main file and register the components. This must be done before calling `new Vue()`, and it will also automatically include our CSS files.

```js
import components from "@springmatter/components";
for (let c of components) { Vue.component(c.name, c); }

new Vue({ ... });
```

### [Documentation can be found on the wiki](https://github.com/springmatter/design/wiki)
