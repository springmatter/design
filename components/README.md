# @springmatter/components

The Springmatter Component Library is a set of components and tools for rapidly building applications from the ground up.

* [Getting Started](#getting-started)
* [Core Elements](#core-elements)
  * [Spacing](#spacing)
  * [Colors](#colors)
  * [Typography](#typography)
  * [Utilities](#utilities)
* [Layout](#layout)
  * [SmApp](#smapp)
  * [SmColumnBox](#smcolumnbox)
  * [SmScrollBox](#smscrollbox)
  * [SmTabBox](#smtabbox)
* [Components](#components)
  * [SmButton](#smbutton)
  * [SmCard](#smcard)
  * [SmIcon](#smicon)
  * [SmLoading](#smloading)
  * [SmTag](#smtag)

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

## Core Elements

### Spacing
We adhere to an 8px spacing scheme, which means that in general we try to make all of our margins, padding, widths and heights divisible by 8. For smaller spaces, multiples of 4 are acceptible. The type scale can be easily adhered to when using utility classes:

| Scale | Utility example |
| ----- | --------------- |
| 0px | `m-0` |
| 1px | `m-px` |
| 4px | `m-1` |
| 8px | `m-2` |
| 12px | `m-3` |
| 16px | `m-4` |
| 24px | `m-5` |
| 32px | `m-6` |
| 40px | `m-7` |
| 48px | `m-8` |
| 56px | `m-9` |
| 64px | `m-10` |
| (n * 8)px | Use custom CSS |

### Colors
We have a minimal set of colors to help with various visual cues. Each color has a name that can be used in our [utility classes](#utilities) and also has a corresponding CSS custom property.

| Color | Name | CSS | Utility example |
| ----- | ---- | ------------------ | --------------- |
| ![primary](https://user-images.githubusercontent.com/4454291/67504816-1e743d00-f658-11e9-9390-ec3e95743a0d.jpg) | Primary | `var(--primary)` | `bg-primary` |
| ![primary-hover](https://user-images.githubusercontent.com/4454291/67505914-203f0000-f65a-11e9-9cfe-7222454521b0.jpg) | Primary-hover | `var(--primary-hover)` | `bg-primary-hover` |
| ![secondary](https://user-images.githubusercontent.com/4454291/67504825-216f2d80-f658-11e9-92ff-abdadd035550.jpg) | Secondary | `var(--secondary)` | `bg-secondary` |
| ![secondary-hover](https://user-images.githubusercontent.com/4454291/67505916-20d79680-f65a-11e9-83c5-e3885e75e6e4.jpg) | Secondary-hover | `black` | `bg-secondary-hover` |
| ![error](https://user-images.githubusercontent.com/4454291/67504835-2338f100-f658-11e9-8c9d-7c26bea18987.jpg) | Error | `var(--error)` | `bg-error` |
| ![success](https://user-images.githubusercontent.com/4454291/67504840-2502b480-f658-11e9-96e6-1484fa78fbea.jpg) | Success | `var(--success)` | `bg-success` |
| ![highlight](https://user-images.githubusercontent.com/4454291/67504844-26cc7800-f658-11e9-9217-7b35e9e15f1a.jpg) | Highlight | `var(--highlight)` | `bg-highlight` |
| ![white](https://user-images.githubusercontent.com/4454291/67505913-203f0000-f65a-11e9-94eb-52b1329e2b9a.jpg) | White | `white` | `bg-white` |
| ![Gray 1](https://user-images.githubusercontent.com/4454291/67505909-203f0000-f65a-11e9-9be8-0e786ed095f2.jpg) | Gray 1 | `var(--gray-1)` | `bg-gray-1` |
| ![Gray 2](https://user-images.githubusercontent.com/4454291/67505910-203f0000-f65a-11e9-960a-6ad9631fab36.jpg) | Gray 2 | `var(--gray-2)` | `bg-gray-2` |
| ![Gray 3](https://user-images.githubusercontent.com/4454291/67505911-203f0000-f65a-11e9-9569-a908bb85af26.jpg) | Gray 3 | `var(--gray-3)` | `bg-gray-3` |
| ![Gray 4](https://user-images.githubusercontent.com/4454291/67505912-203f0000-f65a-11e9-88aa-89a4342af8dc.jpg) | Gray 4 | `var(--gray-4)` | `bg-gray-4` |
| ![Black](https://user-images.githubusercontent.com/4454291/67505908-1fa66980-f65a-11e9-8736-80e37f9599de.jpg) | Black | `black` | `bg-black` |


### Typography
We have set defaults for common HTML typography elements. All of our typography elements have 0 margins and altered line-height. We rely on the line-height of these tags to conform with our 8px spacing system. In general, the user of the system should almost never declare custom typography rules in their CSS. For 99% of use cases on of our pre-styled elements should do the trick.

| Element | Description | 
| ------- | ----------- |
