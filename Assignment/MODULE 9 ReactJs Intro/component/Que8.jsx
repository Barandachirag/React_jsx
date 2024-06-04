import React from 'react'
// How to check version of React Js?


const que8 = () => {
  return (
    <div>
        To check the version of React.js installed in your project, you can use several methods. Here are the most common ways to do it:

        Method 1: Check package.json File
        The package.json file in your React project contains the versions of all dependencies, including React. You can open this file and look for the react and react-dom entries.
    
        Open package.json:
    
        Locate and open the package.json file in your project's root directory.
        Find the React Entries:
    
        Look for the lines with react and react-dom.
        Example of a package.json snippet:

        {/* {
       "dependencies": {
        "react": "^18.0.0",
        "react-dom": "^18.0.0",
    // other dependencies
        }
       } */}
       Method 2: Use the Command Line
       You can also use the command line to check the installed version of React.

       Navigate to Your Project Directory:

       Open a terminal or command prompt and navigate to the root directory of your React project.
       Run npm list:

       Use the following command to list the installed version of React:
       npm list react
       npm list react-dom
       This will display the installed version of React and ReactDOM.
       Example output:
       my-app@0.1.0 /path/to/your/project
       ├── react@18.0.0
       └── react-dom@18.0.0
       Method 3: Use React's Global Object in Browser Console
       If your React application is running in the browser, you can check the version of React using the browser's developer tools.

       Open the Developer Tools:

       In your web browser, open the developer tools (usually by right-clicking on the page and selecting "Inspect" or pressing F12).
       Go to the Console Tab:

       Navigate to the "Console" tab.
       Type the Following Command:

       Run the following command in the console to check the React version:
       console.log(React.version);
       Make sure React is imported or available globally. This will print the React version to the console.
       Summary
       Check package.json: Look for react and react-dom entries to see the version.
       Command Line: Use npm list react and npm list react-dom to list the installed versions.
       Browser Console: Use console.log(React.version) to print the React version in the developer tools console. 




    </div>
  )
}

export default que8