<template>
  <SmTextLayout>
    <VueMarkdown>
# Usage

### Framework Structure

Fundamentally `@springmatter/components` consists of:

1. Sane HTML defaults via [Bootstrap's Reboot](https://getbootstrap.com/docs/4.3/content/reboot/)
2. App and content level layout components
3. CSS utility classes via [Bootstrap's Utilities](https://getbootstrap.com/docs/4.3/utilities/)
4. A Vue component library

### Setup

Springmatter components is intended to be used with vue-cli 3 or later. 

First install:
```
npm install @springmatter/components
```

Second import the components into your main file and register the components (note this must be done before calling `new Vue()`, and it will also automatically include our CSS files):
```
import components from "@springmatter/components";
components.forEach(comp => { Vue.component(comp.name, comp); });

new Vue({ ... });
```
    </VueMarkdown>
    <p>If this is your first time using @springmatter/design we recommend you head to the <router-link to="/layout">layout section</router-link>, as this is the basis for all Springmatter apps.</p>
  </SmTextLayout>
</template>

<script>
</script>
