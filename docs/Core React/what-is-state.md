---
sidebar_position: 8
---

# What is the state?

State of a component is an object that holds some
information that may change over the lifetime of the
component.

We should always try to make our state as **simple** as possible and **minimize** the number of stateful components.

Let's create a user component with message state,

```jsx
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Welcome to React world",
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}
```

State is similar to props, but it is **private** and **fully controlled** by the component. i.e, It is not accessible to
any other component until the owner component decides to pass it.
