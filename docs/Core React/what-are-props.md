---
sidebar_position: 9
---

# What are props?

Props are inputs to components.
They are single values or objects containing a set of values that are passed to components on creation using a naming
convention similar to HTML-tag attributes.

They are data passed down from a parent component to a child
component.

The primary purpose of props in React is to provide
following component functionality:

- Pass custom data to your component.
- Trigger state changes.
- Use via **props.myProp** inside
  component `render()` method

For example, let us create an element with **myProp**
property:

```jsx
<Element myProp="1" />
```

This **myProp** (or whatever you came up with) name
then becomes a property attached to React's native
props object which originally already exists on all
components created using React library.
