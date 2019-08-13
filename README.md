# The Springmatter Design System

Hello. The Springmatter Design System is a set of tools that enables us to rapidly create consistent and clear user experiences.

It is extremely opinionated beacuse its intended use is to help us rapidly develop applications that are very specific to our needs. It is not meant to be used as a general purpose tool or drop-in UI library. We may consider making the components drop-in, but for now there is no guarantee that they will work if you are not using the whole system.

## Principles

#### Agressively simple tooling and developer experience
This is the primary reason the system is so opinionated. We aim for there to be very few decisions in the layout and development of our web applications. This leads to higher development speed while maintaining consistently well designed experiences and aesthetics. We rely on stnadard Vue.js practices, and existing web technologies wherever possible. We are very reluctant to add dependencies to our applications, and when we do we try to ensure that they are large, stable, and well supported open source projects.

#### Accessible from the start
One never knows when a client is going to have special needs, so we aim to have level AA conformance to the Web Content Accessibility Guidelines built in to the system, and we encourage users of the system aim for this level of conformance in their local code.

#### Performance
We aim to maximize performance to the best of our ability. This is mostly achieved automatically by keeping our dependencies light, but also requires continued effort to reduce image sizes, load data properly, and include only necessary information on each page.

#### Privacy
We do not use external tools that tracks our users' behavior and sends it off to a third party.

## Some notes on the design decisions of the system

#### Simple components
Related to the first principle above, we actually tend to avoid using Vue components whenever possible. It is not necessary to make a `<v-button>` when HTML5 already has a perfectly usable and styleable `<button>` component. Wherever possible we use semantic HTML5 elements as base components, and we style them globally. We try our best to maintain the semantic meaning of the elements. This leads to higly composable and readable HTML. When variations are needed we use element scoped CSS classes like `button.secondary`

#### Scoped CSS and utilities
When extra CSS is needed, the user of the system should first have a look at our CSS utility classes. We find it to be very cumbersome to add scoped css in your Vue component/view just to add some margin to an element, or to center it. For many small tweaks like this we have utility classes. When the style that is needed cannot be achieved using components and utilities, we use scoped CSS inside a custom Vue component or view.

