# Marks

Marks are a bit niche, but they are essentially what other applications call "tags". Marks typically contain some text content.

Marks can be colored any color, but its critical to note that to change the background color, you actually need to change the `color` in CSS. This is due to some CSS trickery that is used to get the mark to render properly.

For example this will create a red mark:

```css
.red-mark {
  color: red;
}
```

But this will not:

```css
.red-mark {
  background-color: red;
}
```

Sorry.

In Vue you can easily set their color like this:
```html
<mark :style="{ color: 'var(--blue)' }">I'm colored manually</mark>
<mark :style="{ color: someVariable }">I'm colored programatically</mark>
```
