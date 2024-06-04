import React from 'react'
// What is Components in React Js?

const que5 = () => {
  return (
    <div>
        In React.js, components are the building blocks of a React application. They encapsulate a piece of the user interface and the logic associated with it. Components can be thought of as custom HTML elements, and they can be nested, managed, and handled independently.

        Types of Components in React
        Functional Components:

        These are simple JavaScript functions that accept props (properties) as arguments and return React elements. They do not have their own state or lifecycle methods but can use hooks like useState and useEffect to add state and side effects.
        Class Components:

        These are ES6 classes that extend from React.Component. They can have their own state and lifecycle methods, making them more suitable for complex components that need to manage state and lifecycle events.

        Example of Functional and Class Components
        Functional Component
        Here's an example of a simple functional component that displays a greeting message:

        {/* import React from 'react';

        function Greeting(props) {
        return <h1>Hello, {props.name}!</h1>;
        }

        export default Greeting; */}

        {/* import React from 'react';
        import Greeting from './Greeting';

        function App() {
        return (
        <div>
        <Greeting name="Alice" />
        <Greeting name="Bob" />
        </div>
        );
        } */}

        {/* export default App; */}
      </div>
  )
}

export default que5