# @springmatter/components

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

## Foundations
We've added sane default styling to a handful of HTML tags.

### Spacing
We adhere to an 8px spacing scheme, which means that in general we try to make all of our margins, padding, widths and heights divisible by 8. For smaller spaces, multiples of 4 are acceptible. The scale goes like this:

* 4px
* 8px
* 12px
* 16px
* 24px
* 32px
* ...
* (n * 8)px

### Typography
We have set defaults for common HTML typography elements. All of our typography elements have 0 margins and altered line-height. We rely on the line-height of these tags to conform with our 8px spacing system. In general, the user of the system should almost never declare custom typography rules in their CSS. For 99% of use cases on of our pre-styled elements should do the trick.

| Element | Description | 
| ------- | ----------- |
| 

