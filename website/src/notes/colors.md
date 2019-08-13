# Colors

We use a set of 5 colors, 3 primary and 2 tertiary, each with a hover state included. These are used for anything in the app that requires visual separation, and should be used sparingly.

`var(--black)` and `var(--white)` should be used despite potential redundancy, as neither of these values represent absolute black or white. `var(--black)` is a bit lighter than true black and `var(--white)` may change to off-white in the future.

`var(--black)` is our default foreground color, and `var(--white)` is our default background color.

In addition to black and white we have a grayscale that is used for adding visual aids. In general the designer/developer should carefully consider the use of each gray, and be consistent with its use. For example, if I use gray 1 to delineate one section on my page, I should use it to delineate all similar sections on my page.

The last color is overlay, which is a transparent dark gray. This is primarly used for modal overlays, but can be used for anything that requires a dark overlay.
