// const heading = React.createElement("h1", {}, "Hello World from React!");
import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import { Provider } from "react-redux";
import RestaurantMenu from "./components/RestaurantMenu";
import appStore from "../utils/appStore";

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
    <Provider store={appStore}>

      <div className="app">
        <Header />
        <Outlet />


      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />

  },

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);






