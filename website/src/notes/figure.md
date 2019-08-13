# Figure

`figure` is the element we use for a typical UI "card". Figure will grow to the size of its contents and maintain an attractive padding. They can contain anything, but will typically contain an image or some text.

each `figure` can contain a `figcaption` which is a good place to put a title or label for the card.

When a figure is put in an `aside`, it is styled a bit differently and fits nicely with other figures added to the `aside`. They will fill all available space, but can be made larger or smaller by changing their `flex-grow` and `flex-shrink` values in the locally scoped css.

Here's an example of a figure with an image:

```html
<figure>
  <figcaption>
    <h5>I will be a sidetitle</h5>
    <h3>Main figure header</h3>
    <h4>I'm a subtitle</h4>
  </figcaption>
  <img src="./img.jpg" alt="Cool img bro" />
</figure>
```
