# Spacing

Our spacing system is pretty simple.

`--sp1` through `--sp5` are smaller spaces used for aligning things within components

`--sp6` through `--sp9` are larger spaces used for layout

There are no hard and fast rules about using the spaces, it's up to the designers discretion which one to use. However, we strongly advise not using magic numbers anywhere where a space variable would suffice (i.e. `7px` as opposed to `var(--sp2)`). The reason for this is so that we can keep a consistent look and feel to our application, and it also lessens developer decision fatigue by constraining the choices for spaces.

If you need a space larger than `--sp9` we recommend using the css `calc()` function in combination with `--sp9`. For example: `width: calc(var(--sp9) * 6);`.

We understand that using these variables instead of magic numbers requires a lot more typing on the developer's part, but we strongly believe that they aid us in our goal of making consistent and attractive user experiences with speed for the reasons stated above.
