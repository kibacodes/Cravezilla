import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// const jsxHeading = (
//   <h1 id="heading" tabIndex="5">
//     Namaste React using JSX 🚀
//   </h1>
// );

const spanElem = <span>React Element</span>;

const title = (
  <h1 id="heading" tabIndex="5">
    {spanElem}
    Namaste React using JSX 🚀
  </h1>
);

// React Functional Component
// Lines 14-22 do the same thing but written differently.

// const HeadingComponent = () => {
//   return <h1> Namaste React Functional Component</h1>
// };


const HeadingComponent = () => (
  <div id="container">
    {title}
    <h1 className="heading"> Namaste React Functional Component </h1>
  </div>
);

// const HeadingComponent = <h1>Namaste React Functional Component</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
// it will replace everything that is inside the root in the HTML file

// React Element vs React Component: Difference in Rendering
// root.render(jsxHeading);
root.render(<HeadingComponent />);
