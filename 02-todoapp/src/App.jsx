import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import ToDoItem from "./Components/ToDoItem";
import Button from "./Components/Button";
import "./style.css";
/*
function HelloWorld() {
  return <h1>Hello from the HELLO WORLD</h1>;
}
const MyComponent = () => {
  let name = "Piyush Ghah";
  return <h1>HELLO from {name}</h1>;
};
function FormatName(user) {
  let fullName = user.firstName + " " + user.lastName;
  return fullName;
}
const user = {
  firstName: "ojass",
  lastName: "b",
};
let add = (a, b) => {
  return a + b;
};
*/
function App() {
  /*
  return (
    <>
      {" "}
      <HelloWorld />
      <MyComponent />
      <h1>Hello , {FormatName(user)}!</h1>
      <h1>Add {add(2, 3)}!</h1>
    </>
  );
  */
  return (
    <div className="todo-container">
      <Header />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <Button />
    </div>
  );
}

export default App;
