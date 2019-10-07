<template>
  <SmTextLayout>
    <h1>Introduction</h1>
    <p>
      Hello and welcome to The Springmatter Design System documentation. The
      Springmatter Design System is a set of tools that enables us to rapidly
      create consistent and clear user experiences.
    </p>
    <p>
      It is extremely opinionated beacuse its intended use is to help us rapidly
      develop applications that are very specific to our needs.
    </p>
    <h3>Principles</h3>
    <h5>Agressively simple tooling and developer experience</h5>
    <p>
      We aim for there to be very few decisions in the layout and development of
      our web applications. This leads to higher development speed while
      maintaining consistently well designed experiences. We rely on standard
      Vue.js practices and existing web technologies wherever possible. We are
      very reluctant to add dependencies to our applications, and when we do we
      try to ensure that they are large, stable, and well supported open source
      projects.
    </p>
    <h5 class="flex items-center">
      Accessible from the start
      <small class="ml-3 mt-1"><code>Work in progress</code></small>
    </h5>
    <p>
      One never knows when a client is going to have special needs, so we aim to
      have level AA conformance to the Web Content Accessibility Guidelines
      built into the system, and we encourage users of the system aim for this
      level of conformance in their local code.
    </p>
    <h5>Performance</h5>
    <p>
      We aim to maximize performance to the best of our ability. This is mostly
      achieved automatically by keeping our dependencies light, but also
      requires continued effort to reduce image sizes, load data properly, and
      include only necessary information on each page.
    </p>
    <h5>Privacy</h5>
    <p>
      We do not use external tools that track our users&#39; behavior and send
      it off to third parties.
    </p>
  </SmTextLayout>
</template>

<style scoped>
h1,
h2,
h3,
h4,
h5,
p {
  @apply mb-4;
}
</style>
