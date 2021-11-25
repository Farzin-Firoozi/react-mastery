---
sidebar_position: 16
---

# What is key?

## What is "key" prop and what is the benefit of using it in arrays of elements?

A key is a special string attribute you **should** include
when creating arrays of elements. Key prop helps
React **identify** which items have changed, are added,
or are removed.

Most often we use ID from our data as key:

```jsx
const todoItems = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);
```

When you don't have stable IDs for rendered items,
you may use the item index as a key as a last resort:

```jsx
const todoItems = todos.map((todo, index) => <li key={index}>{todo.text}</li>);
```

### Note:

1.  Using indexes for keys is not recommended if
    the order of items may change. This can
    negatively impact performance and may
    cause issues with component state.

2.  If you extract a list item as a separate
    component then apply keys on the list
    component instead of li tag.

3.  There will be a warning message in the
    console if the key prop is not present on list
    items.
