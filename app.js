const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.age),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { class: "title" }, "React is rendered"),
    React.createElement(Person, { name: "Istvan", age: 28 }, null),
    React.createElement(Person, { name: "John", age: 30 }, null),
    React.createElement(Person, { name: "Alex", age: 7 }, null),
  ]);
};

const container = document.getElementById("root");
const root = React.createRoot(container);
root.render(React.createElement(App));
