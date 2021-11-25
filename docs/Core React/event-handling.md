---
sidebar_position: 11
---

# Event handling

## What is the difference between HTML and React event handling?

Below are some of the main differences between
HTML and React event handling:

1. In HTML, the event name usually represents
   in lowercase as a convention:

```html
<button onclick="activateLasers()">...</button>
```

Whereas in React it follows camelCase:

```jsx
<button onClick={activateLasers}>...</button>
```

2. In HTML, you can return false to prevent default behavior:

```html
<a href="#" onclick='console.log("The link was clicked.");return false;' />
```

Whereas in React you must call `preventDefault()`
explicitly:

```jsx
function handleClick(event) {
  event.preventDefault();
  console.log("The link was clicked.");
}
```

3. In HTML, you need to invoke the function by
   appending **()** Whereas in react you should not
   append () with the function name.
   (refer
   "activateLasers" function in the first point for
   example)
