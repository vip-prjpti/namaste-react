// const heading = React.createElement("h1", {}, "Hello World from React!");



const parent = React.createElement(
    "div",{ id: "parent" },
    React.createElement("div", { id: "child" },
        React.createElement("h1", {}, "this is h1 tag"))
    );

    
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);