import React from "react";
const ToDoItem = () => {
  return (
    <li className="todo-item">
      <span>
        <input type="checkbox" />
        <p className="todo-itemtext">Eat</p>
      </span>
      <p>...</p>
    </li>
  );
};

export default ToDoItem;
