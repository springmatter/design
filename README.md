# Springmatter Design System
The Springmatter Design System is a very opinionated set of tools that enables us to rapidly create consistent and clear user experiences on the web. It is build on top of Vue and requires Vue CLI 3 or later.

It includes:

| Package | Description |
| ------- | ----------- |
| [@springmatter/components](https://github.com/springmatter/design/tree/master/components) | Component library for building full web applications |
| [@springmatter/dataviz](https://github.com/springmatter/design/tree/master/dataviz) | Modular dataviz component library |

Documentation can be found in each package's README

## Principles

### Agressively simplified tooling and developer experience
We aim for there to be very few decisions in the layout and development of
our web applications. This leads to higher development speed while
maintaining consistently well designed experiences. We rely on standard
Vue.js practices and existing web technologies wherever possible. We are
very reluctant to add dependencies to our applications, and when we do we
try to ensure that they are large, stable, and well supported open source
projects.

### Accessible from the start (WIP)
One never knows when a client is going to have special needs, so we aim to
have level AA conformance to the Web Content Accessibility Guidelines
built into the system, and we encourage users of the system aim for this
level of conformance in their local code.

### Performance
We aim to maximize performance to the best of our ability. This is mostly
achieved automatically by keeping our dependencies light, but also
requires continued effort to reduce image sizes, load data properly, and
include only necessary information on each page.

### Privacy
We do not use external tools that track our users' behavior and send
it off to third parties.
