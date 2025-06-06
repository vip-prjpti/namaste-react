// const heading = React.createElement("h1", {}, "Hello World from React!");
import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";

// creating an Element using core React and JSX - Difference

// Using Core React
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement(
//       "h1",
//       { id: "heading" },
//       "Namaste React using Core React"
//     )
//   )
// );

// rendering the react object over the DOM
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
// console.log(parent);

// Using JSX
// const jsxHeading = <h1 id="heading">Namaste React using JSX🔥</h1>;
// console.log(jsxHeading);

// React Components
// - Functional Component
// A functional component is a JS function which returns JSX code.

// const Title = () => <h2>Title Component</h2>;

// const HeadingComponent = () => {
//   return (
//     <div>
//       <Title />
//       <h1>Namaste React Functional Component</h1>
//     </div>
//   );
// };





const AppLayout = () => {
  return (
    <div className="app">
      {/* <Header /> */}
      {/* {Header()}
      <Header></Header> */}
      
      <Header />
      <Body />

    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);





