---
sidebar_position: 18
---

# What is Virtual DOM?

The Virtual DOM (VDOM) is an in-memory
representation of Real DOM.

The representation of a UI is kept in memory and synced with the "real" DOM. It's a step that happens between the render
function being called and the displaying of elements
on the screen. This entire process is called
**reconciliation**.

## How does Virtual DOM work?

The Virtual DOM works in three simple steps.

1. Whenever any underlying data changes, the
   entire UI is re-rendered in Virtual DOM
   representation.
2. Then the difference between the previous
   DOM representation and the new one is
   calculated.
3. Once the calculations are done, the real DOM
   will be updated with only the things that have
   actually changed

// TODO Add image

## Difference between Shadow DOM and Virtual DOM

The Shadow DOM is a browser technology designed
primarily for scoping variables and CSS in web
components. The Virtual DOM is a concept
implemented by libraries in JavaScript on top of
browser APIs.
