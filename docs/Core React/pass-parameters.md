---
sidebar_position: 13
---

# Passing parameters

## How to pass a parameter to an event handler or callback?

You can use an arrow function to wrap around an
event handler and pass parameters:

```jsx
<button onClick={() => this.handleClick(id)} />
```

This is an equivalent to calling `.bind`:

```jsx
<button onClick={this.handleClick.bind(this, id)} />
```

Apart from these two approaches, you can also pass
arguments to a function which is defined as arrow
function

```jsx
handleClick = (id) => () => {
  console.log("Hello, your ticket number is", id);

  <button onClick={this.handleClick(id)} />;
};
```
