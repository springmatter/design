# Usage

## Framework Structure

Fundamentally `@springmatter/components` is broken down into two parts:

### Core
1. Globally usable default style variables for colors and spacing
2. Styles targeting HTML tags for typography tokens (like `<h1>` - `<h5>`)
3. CSS layout rules
4. CSS utilitiy functions for on the fly styling

### Components
1. Styles targeting HTML tags for base components (like `<button>`)
2. Vue components for more complex components

## Setup

Springmatter components is intended to be used with vue-cli 3 or later. 

First install:
```
npm install @springmatter/components
```

Second import the components into your main file and register the components (note this must be done before calling `new Vue()`:
```
import components from "@springmatter/components";
components.forEach(comp => { Vue.component(comp.name, comp); });

new Vue({ ... });
```

## General Usage

It is expected that this framework is used as the basis for all styling and layout in the application. When building a page the user is expected to:

1. Try designing as much as possible with pure HTML
2. Add CSS utility classes for basic styling/layout nudging
3. Add custom CSS per component in a Vue `<style scoped>` block
