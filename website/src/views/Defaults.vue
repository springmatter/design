<template>
  <SmTextLayout class="wrapper">
    <h1>Defaults</h1>
    <p>We've added sane defaults to a handful of HTML tags.</p>
    <ol>
      <li><code>body</code> has custom typography settings</li>
      <li>
        <code>h1</code>-<code>h6</code>, <code>p</code>, <code>small</code>, and
        <code>a</code> tags have custom type sizes and margins removed
      </li>
      <li>
        Focusable elements (buttons, links, etc.) have a custom focus border for
        accessibility
      </li>
      <li><code>hr</code> has custom styling</li>
      <li>List itmes have margin-bottom</li>
      <li><code>ul</code> has its bullets removed</li>
      <li>Form inputs have custom styling</li>
    </ol>

    <p>
      In general, we encourage usage of plain HTML tags that do not have a
      corresponding component in our system. Below is a visual guide to our
      typography tags.
    </p>

    <h1>
      <code class="text-xs">&lt;h1&gt;</code>
      I am a header
      <code class="text-xs">&lt;/h1&gt;</code>
    </h1>
    <h2>
      <code class="text-xs">&lt;h2&gt;</code>
      I am a header
      <code class="text-xs">&lt;/h2&gt;</code>
    </h2>
    <h3>
      <code class="text-xs">&lt;h3&gt;</code>
      I am a header
      <code class="text-xs">&lt;/h3&gt;</code>
    </h3>
    <h4>
      <code class="text-xs">&lt;h4&gt;</code>
      I am a header
      <code class="text-xs">&lt;/h4&gt;</code>
    </h4>
    <h5>
      <code class="text-xs">&lt;h5&gt;</code>
      I am a header
      <code class="text-xs">&lt;/h5&gt;</code>
    </h5>
    <h6>
      <code class="text-xs">&lt;h6&gt;</code>
      I am a header
      <code class="text-xs">&lt;/h6&gt;</code>
    </h6>
    <p class="mt-6 block">
      <code class="text-xs">&lt;p&gt;</code>
      I am body text
      <code class="text-xs">&lt;/p&gt;</code>
    </p>
    <small class="mt-6 block">
      <code class="text-xs">&lt;small&gt;</code>
      I am small text
      <code class="text-xs">&lt;/small&gt;</code>
    </small>
    <code class="text-xs">&lt;a&gt;</code>
    <a href="#" class="inline-block mt-6">I am a link</a>
    <code class="text-xs">&lt;/a&gt;</code>

    <br />
    <code class="text-xs">&lt;a class="text-black"&gt;</code>
    <a href="#" class="text-black inline-block mt-5">I am a dark link</a>
    <code class="text-xs">&lt;/a&gt;</code>

    <br />
    <br />
    <code class="text-xs">&lt;ul&gt;</code>
    <ul>
      <li>Unordered list item 1</li>
      <li>Unordered list item 2</li>
      <li>Unordered list item 3</li>
      <li>Unordered list item 4</li>
      <li>Unordered list item 5</li>
    </ul>
    <code class="text-xs">&lt;/ul&gt;</code>

    <br />
    <br />
    <code class="text-xs">&lt;ol&gt;</code>
    <ol>
      <li>Ordered list item 1</li>
      <li>Ordered list item 2</li>
      <li>Ordered list item 3</li>
      <li>Ordered list item 4</li>
      <li>Ordered list item 5</li>
    </ol>
    <code class="text-xs">&lt;/ol&gt;</code>
  </SmTextLayout>
</template>

<script>
</script>

<style scoped>
</style>
