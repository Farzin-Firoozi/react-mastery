---
sidebar_position: 17
---

# What is ref?

## What is the use of refs?

The ref is used to return a reference to the element.
They should be avoided in most cases, however,
they can be useful when you need direct access to
the DOM element or an instance of a component.

- It stands for refrence.
- It is used to refer the element in the components.
- I will be added to the **actual DOM** of the component.

## How to create refs?

There are two approaches

This is a recently added approach. Refs are created
using `React.createRef()` method and attached to React
elements via the ref attribute. In order to use refs
throughout the component, just assign the ref to the
instance property within the constructor.

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
```

You can also use `useRef` callbacks approach regardless of
React version. For example, the search bar
component's input element accessed as follows:

```jsx
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.txtSearch = null;
    this.state = { term: "" };
    this.setInputSearchRef = (e) => {
      this.txtSearch = e;
    };
  }
  onInputChange(event) {
    this.setState({ term: this.txtSearch.value });
  }
  render() {
    return (
      <input
        value={this.state.term}
        onChange={this.onInputChange.bind(this)}
        ref={this.setInputSearchRef}
      />
    );
  }
}
```

You can also use refs in function components using
closures. Note: You can also use inline ref callbacks
even though it is not a recommended approach.

## What are forward refs?

Ref forwarding is a feature that lets some components
take a ref they receive, and pass it further down to a
child.

```jsx
const ButtonElement = React.forwardRef((props, ref) => (
  <button ref={ref} className="CustomButton">
    {props.children}
  </button>
));

// Create ref to the DOM button:
const ref = React.createRef();
<ButtonElement ref={ref}>{"Forward Ref"}</ButtonElement>;
```

## Which is the preferred option within callback refs and findDOMNode()?

It is preferred to use callback refs over `findDOMNode()`
API. Because `findDOMNode()` prevents certain
improvements in React in the future.

The legacy approach of using **findDOMNode**:

```jsx
class MyComponent extends Component {
  componentDidMount() {
    findDOMNode(this).scrollIntoView();
  }
  render() {
    return <div />;
  }
}
```

The recommended approach is:

```jsx
class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.node = createRef();
  }
  componentDidMount() {
    this.node.current.scrollIntoView();
  }
  render() {
    return <div ref={this.node} />;
  }
}
```

## Why are String Refs legacy?

If you worked with React before, you might be
familiar with an older API where the ref attribute is a
string, like `ref={'textInput'}`, and the DOM node
is accessed as `this.refs.textInput`. We advise
**against** it because string refs have below issues, and
are considered legacy. String refs were removed in
React v16.

1. They force React to keep track of the currently
   executing component. This is problematic
   because it makes the react module stateful,
   and thus causes weird errors when the react
   module is duplicated in the bundle.
2. They are not composable — if a library puts a
   ref on the passed child, the user can't put
   another ref on it. Callback refs are perfectly
   composable.
3. They don't work with static analysis like Flow.
   Flow can't guess the magic that framework
   does to make the string ref appear on
   `this.refs`, as well as its type (which could be
   different). Callback refs are friendlier to static
   analysis.

It doesn't work as most people would expect with the
"render callback" pattern (e.g. )
class MyComponent extends Componen

```jsx
class MyComponent extends Component {
  renderRow = (index) => {
    // This won't work. Ref will get attached to DataTable rather than MyComponent:
    return <input ref={"input-" + index} />;
    // This would work though! Callback refs are awesome.
    return <input ref={(input) => (this["input-" + index] = input)} />;
  };
  render() {
    return <DataTable data={this.props.data} renderRow={this.renderRow} />;
  }
}
```
