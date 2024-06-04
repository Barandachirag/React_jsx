import React from 'react'
// What is Header and Content Components in React Js?
const que6 = () => {
  return (
    <div>
      In React.js, components like Header and Content are commonly used to organize and structure the layout of a web application. These components encapsulate specific parts of the UI and make it easier to manage and reuse code.

      Header Component
      The Header component typically contains the top section of a web page, including elements like the navigation menu, logo, and sometimes search bars or user profile links.

      Example of a Header Component
      Here's a simple example of a Header component:

      {/* import React from 'react';

     function Header() {
      return (
     <header>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      </header>
      );
      }

     export default Header; */}


     Content Component
     The Content component usually holds the main content of the web page. It can be a placeholder for other components or dynamic content that changes based on the application's state or routing.

     Example of a Content Component
     Here's a simple example of a Content component:

     {/* import React from 'react';

     function Content() {
     return (
     <main>
      <h1>Welcome to Our Website</h1>
      <p>This is the main content of the page.</p>
     </main>
     );
     }

     export default Content; */}

    </div>
  )
}

export default que6