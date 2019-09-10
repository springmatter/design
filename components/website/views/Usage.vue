<template>
  <SmTextLayout>
    <h1>Usage</h1>

    <h3>Framework Structure</h3>
    <p>Fundamentally <code>@springmatter/components</code> consists of:</p>
    <ol>
      <li>Custom HTML defaults built on top of
        <a href="https://necolas.github.io/normalize.css/">normalize.css</a>
      </li>
      <li>Layout components</li>
      <li>Other components</li>
      <li>CSS utility classes via 
        <a href="https://tailwindcss.com/">tailwindcss</a>
      </li>
    </ol>

    <h3>Setup</h3>
    <p>Springmatter components is intended to be used with vue-cli 3 or later. </p>
    <p>First install:</p>

    <pre>npm install @springmatter/components</pre>

    <p>Second import the components into your main file and register the components (note this must be done before calling <code>new Vue()</code>, and it will also automatically include our CSS files):</p>

    <pre>
  import components from "@springmatter/components";
  for (let c of components) { Vue.component(c.name, c); }

  new Vue({ ... });</pre>

    <p>Using this method, the components will be globally registered and usable in any of your Vue components.</p>

  </SmTextLayout>
</template>

<script>
</script>
