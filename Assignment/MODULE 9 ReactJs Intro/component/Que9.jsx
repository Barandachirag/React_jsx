import React from 'react'
// • How to change in components of React Js?

const que9 = () => {
  return (
    <div>
      Updating State
      State is a special variable that controls the behavior and rendering of the component. You can update state using the useState hook in functional components or this.setState in class components.

      Functional Components with useState

      {/* import React, { useState } from 'react'; */}
{/* 
     function Counter() {
     const [count, setCount] = useState(0);

     const increment = () => setCount(count + 1);

     return (
     <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
     );
    }

    export default Counter; */}

    2. Passing and Updating Props
    Props are read-only. To change them, you need to update the state in the parent component and pass the new state as props to the child component.
    {/* import React, { useState } from 'react';
    import ChildComponent from './ChildComponent';

    function ParentComponent() {
    const [message, setMessage] = useState('Hello World');

    const changeMessage = () => setMessage('Hello React');

    return (
    <div>
      <ChildComponent message={message} />
      <button onClick={changeMessage}>Change Message</button>
    </div>
    );
    }

    export default ParentComponent; */}
    Conditional Rendering
    You can conditionally render components or elements based on certain conditions.
    import React, { useState } from 'react';

   {/* function ConditionalRendering() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

    return (
    <div>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
      <button onClick={toggleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
    );
   }

   export default ConditionalRendering; */}

    Handling Events
    You can define event handlers that will be triggered by user interactions, such as clicks, form submissions, etc.
    import React, { useState } from 'react';

   {/* function EventHandling() {
   const [text, setText] = useState('');

   const handleChange = (event) => {
    setText(event.target.value);
   };

   const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted: ' + text);
   };

    return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter text:
        <input type="text" value={text} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
    );
   }

  export default EventHandling; */}
   Lifecycle Methods in Class Components
   If you are using class components, you can use lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount to handle changes.
   import React, { Component } from 'react';

   {/* class LifecycleExample extends Component {
  componentDidMount() {
    // Code to run after the component is mounted
    console.log('Component did mount');
  }

   componentDidUpdate(prevProps, prevState) {
    // Code to run when the component updates
    console.log('Component did update');
  }

   componentWillUnmount() {
    // Code to run just before the component unmounts
    console.log('Component will unmount');
   }

    render() {
    return <div>Check the console for lifecycle method logs</div>;
    }
   }


    export default LifecycleExample; */}

    Using Effects in Functional Components
    In functional components, you can use the useEffect hook to handle side effects.
    {/* import React, { useEffect, useState } from 'react'; */}

   {/* function EffectExample() {
   const [count, setCount] = useState(0);

    useEffect(() => {
    // Code to run on mount and when count changes
    document.title = `Count: ${count}`;

    // Optional cleanup function to run on unmount or before the effect runs again
    return () => {
      document.title = 'React App';
    };
    }, [count]); // Dependency array

   return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
    );
     }

export default EffectExample; */}




    </div>
  )
}

export default que9