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

![typography-scale](https://user-images.githubusercontent.com/4454291/67506831-c8a19400-f65b-11e9-98f3-a760ffa097e4.jpg)

`<h1>`-`<h3>` are good for page-level titles, `<h4>` is good for component-level titles, `<h5>` is good for subtitles and lables, `<small>` is good for small labels/captions/tooltips/etc., and `<p>` is good for blocks of body text. We have also implemented `<i>` and `<b>` to always be italic and bold respectively.

### Utilities
We provide a set of CSS utility classes that allow us to quickly develop and tweak layout. If you are unfamiliar with CSS utility classes here is a [brief explanation](https://tailwindcss.com/docs/utility-first). We are using [Tailwindcss](https://tailwindcss.com) to generate a custom set of utility classes. Here is a full list of them:

#### Flexbox
```css
.items-stretch { align-items: stretch; }
.items-start { align-items: flex-start; }
.items-center { align-items: center; }
.items-end { align-items: flex-end; }
.items-baseline { align-items: baseline; }

.justify-start { justify-content: flex-start; }
.justify-center { justify-content: center; }
.justify-end { justify-content: flex-end; }
.justify-between { justify-content: space-between; }
.justify-around { justify-content: space-around; }

.flex-row { flex-direction: row; }
.flex-row-reverse { flex-direction: row-reverse; }
.flex-col { flex-direction: column; }
.flex-col-reverse { flex-direction: column-reverse; }

.flex-grow { flex-grow: 1; }
.flex-grow-0 { flex-grow: 0; }

.flex-shrink { flex-shrink: 1; }
.flex-shrink-0 { flex-shrink: 0; }

.flex-no-wrap { flex-wrap: nowrap; }
.flex-wrap { flex-wrap: wrap; }
.flex-wrap-reverse { flex-wrap: wrap-reverse; }
```

#### Display
```css
.block { display: block; }
.inline-block { display: inline-block; }
.inline { display: inline; }
.flex { display: flex; }
.inline-flex { display: inline-flex; }
.table { display: table; }
.table-row { display: table-row; }
.table-cell { display: table-cell; }
.hidden { display: none; }
```

#### Height
```css
.h-0 { height: 0; }
.h-1 { height: 4px; }
.h-2 { height: 8px; }
.h-3 { height: 12px; }
.h-4 { height: 16px; }
.h-5 { height: 24px; }
.h-6 { height: 32px; }
.h-7 { height: 40px; }
.h-8 { height: 48px; }
.h-9 { height: 56px; }
.h-10 { height: 64px; }

.h-auto { height: auto; }
.h-px { height: 1px; }
.h-full { height: 100%; }
.h-screen { height: 100vh; }
```

#### Width
```css
.w-0 { width: 0; }
.w-1 { width: 4px; }
.w-2 { width: 8px; }
.w-3 { width: 12px; }
.w-4 { width: 16px; }
.w-5 { width: 24px; }
.w-6 { width: 32px; }
.w-7 { width: 40px; }
.w-8 { width: 48px; }
.w-9 { width: 56px; }
.w-10 { width: 64px; }

.w-1/2 { width: 50%; }
.w-1/3 { width: 33.333333%; }
.w-2/3 { width: 66.666667%; }
.w-1/4 { width: 25%; }
.w-2/4 { width: 50%; }
.w-3/4 { width: 75%; }
.w-1/5 { width: 20%; }
.w-2/5 { width: 40%; }
.w-3/5 { width: 60%; }
.w-4/5 { width: 80%; }

.w-auto { width: auto; }
.w-px { width: 1px; }
.w-full { width: 100%; }
.w-screen { width: 100vw; }
```

#### Top/Right/Bottom/Left
```css
.inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
.inset-y-0 { top: 0; bottom: 0; }
.inset-x-0 { right: 0; left: 0; }
.top-0 { top: 0; }
.right-0 { right: 0; }
.bottom-0 { bottom: 0; }
.left-0 { left: 0; }
.inset-auto { top: auto; right: auto; bottom: auto; left: auto; }
.inset-y-auto { top: auto; bottom: auto; }
.inset-x-auto { left: auto; right: auto; }
.top-auto { top: auto; }
.bottom-auto { bottom: auto; }
.left-auto { left: auto; }
.right-auto { right: auto; }
```

#### Position
```css
.static { position: static; }
.fixed { position: fixed; }
.absolute { position: absolute; }
.relative { position: relative; }
.sticky { position: sticky; }
```

#### Text
```css
.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }
.text-justify { text-align: justify; }

.uppercase { text-transform: uppercase; }
.lowercase { text-transform: lowercase; }
.capitalize { text-transform: capitalize; }
.normal-case { text-transform: none; }
```

#### Z Index
```css
.z-0 { z-index: 0; }
.z-10 { z-index: 10; }
.z-20 { z-index: 20; }
.z-30 { z-index: 30; }
.z-40 { z-index: 40; }
.z-50 { z-index: 50; }
.z-auto { z-index: auto; }
```

#### Margin / Padding
There are many margin and padding classes, so instead of listing them we will explain how they work.

Basic margin/padding classes are formed by the prefixes `m-` or `p-` followed by a number from 0 to 10. These classes will add margin or padding to all sides:
```css
.m-0 .m-1 .m-2 ... .m-10
.p-0 .p-1 .p-2 ... .p-10
```

You can modify the class to work on only one side by appending one of `t`, `r`, `b`, `l` before the dash, which will target top, right, bottom, and left respectively:
```css
.mt-1 .mr-2 .mb-3 .ml-4
.pt-5 .pr-6 .pb-7 .bl-8
```

You can also target two sides by appending `x` or `y`, which will target the x and y axis respectively:
```css
.mx-2 .my-3
.px-1 .py-0
```

Instead of a number after the dash you can use `px` for 1px margins. This will work with all modifiers:
```css
.m-px .ml-px .mx-px
.p-px .pr-px .py-px
```

Lastly, margins can also take `auto` instead of a number. This will work with all modifiers:
```css
.m-auto .ml-auto .mx-auto
```
