<template>
  <SmTextLayout>
    <ComponentSpec compName="SmApp" />
    <p>
      This is our basic app layout component. By default it comes with a top and
      a side nav bar, and a <code>router-view</code> from
      <a href="https://router.vuejs.org/">Vue Router</a> for the main content
      area. All app layout can be handled via this component and our various
      layout components.
    </p>

    <p>
      The inner html of the nav bars can then be accessed with
      <a href="https://vuejs.org/v2/guide/components-slots.html#Named-Slots"
        >Vue's named slots</a
      >. If you'd like a completely blank app that maintains the standard
      layout, you need only omit the <code>title</code> and
      <code>links</code> props in <code>SmApp</code>. Then you can add in your
      own content via the named slots. Example:
    </p>

    <pre>
&lt;SmApp&gt;
  &lt;template #nav-top&gt;
    Top nav content here
  &lt;/template&gt;

  &lt;template #nav-side&gt;
    Side nav content here
  &lt;/template&gt;
&lt;/SmApp&gt;</pre
    >
  </SmTextLayout>
</template>
