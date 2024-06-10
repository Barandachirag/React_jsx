import React from 'react'
//Explain Life cycle in Class Component and functional component with Hooks


function Hooks() {
  return (
    <div>
      Class Components Lifecycle
      Class components in React have lifecycle methods that you can override to run code at specific points in the component's life.

      Lifecycle Methods
      constructor(props): Initializes the state and binds methods.
      1)componentDidMount(): Runs after the component is mounted (added to the DOM).
      2)shouldComponentUpdate(nextProps, nextState): Determines if a component should update.
      3)componentDidUpdate(prevProps, prevState): Runs after the component updates.
      4)componentWillUnmount(): Runs just before the component is unmounted (removed from the DOM).

       {/* Example:
      import React, { Component } from 'react';

      MyClassComponent extends Component {
      constructor(props) {
      super(props);
      this.state = { count: 0 };
      }

      componentDidMount() {
      console.log('Component mounted');
      // Fetch data or set up subscriptions here
      }

      shouldComponentUpdate(nextProps, nextState) {
     // Decide whether the component should re-render
     return true;
     }

     componentDidUpdate(prevProps, prevState) {
     console.log('Component updated');
     // Act on changes, like fetching new data based on prop change
     }

    componentWillUnmount() {
    console.log('Component will unmount');
    // Clean up (e.g., remove event listeners)
    }

    increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
      );
    }
   }

   export default MyClassComponent; */}

   Functional Components with Hooks
   Functional components use hooks to manage state and lifecycle events. The primary hooks used for lifecycle events are useEffect and useState.

   useEffect
   Initial Mount: Code inside useEffect runs after the initial render.
   Updates: Code inside useEffect runs after every update, unless dependencies are specified.
   Cleanup: You can return a cleanup function in useEffect to run when the component unmounts or before the effect runs again.
   {/* Example
   import React, { useState, useEffect } from 'react';

   const MyFunctionalComponent = () => {
   const [count, setCount] = useState(0);

   useEffect(() => {
    console.log('Component mounted');
    // Fetch data or set up subscriptions here

    return () => {
      console.log('Component will unmount');
      // Clean up (e.g., remove event listeners)
    };
    }, []); // Empty array ensures this runs only on mount and unmount

   useEffect(() => {
    console.log('Component updated');
    // Act on changes, like fetching new data based on state change
   }, [count]); // This runs when 'count' changes

   const increment = () => {
    setCount(count + 1);
   }

   return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
   );
   }

   export default MyFunctionalComponent; */}
    Key Differences
    State Management:

    Class Components: Use this.state and this.setState.
    Functional Components: Use useState.
    Lifecycle Methods:

    Class Components: Have distinct lifecycle methods (componentDidMount, componentDidUpdate, componentWillUnmount).
    Functional Components: Use useEffect to handle side effects and cleanup.
    Syntax:

    Class Components: Use ES6 classes and render method.
    Functional Components: Use function syntax and return JSX directly.
    Flexibility and Reusability:

    Functional Components: Hooks allow for more flexibility and the ability to easily share logic across components.
    By using hooks, functional components can achieve the same lifecycle management as class components but in a more concise and flexible manner.

    </div>
    )
  }

  export default Hooks 