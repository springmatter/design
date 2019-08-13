# Typography

The font that we use is the user's default system font. This means the user will get a different font depending on the operating system they are using. This allows for the application to have a more native feel, and also increases performance as the font is already locally installed.

We have a collection of 7 type tokens that should be used for all type in our applications, except for the very rare instance in which something custom is needed. The majority of applications will never need a custom solution.

- `h1` through `h4` are headers
- `h5` is a side header floated to the right. Note that it needs to appear directly before the title it will be to the right of (see example below).
- `label` is for small text
- any other text will be rendered as body text

Please see the canvas for visual aid and typical use cases.

Here's an example of some type tokens in a figure:

```html
<figure>
  <figcaption>
    <h5>I will be a sidetitle</h5>
    <h3>Main figure header</h3>
    <h4>I'm a subtitle</h4>
  </figcaption>
  <p>I will be rendered as body text</p>
  <label>I'm a little footnote</label>
</figure>
```
