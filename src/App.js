const heading = React.createElement(
      "h1",
      { id: "heading" },
      "Hello World from React"
);
root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(heading);
