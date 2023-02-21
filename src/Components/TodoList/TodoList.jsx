import React, { useState } from "react";
import TodoComponent from "../TodoComponent/TodoComponent";
import classes from "./TodoList.module.css";

const TodoList = ({ todos, removeItem, statusTodo }) => {
  // в map исправь key у элемента
  return (
    <div className={classes.todoList}>
      <h1 className={classes.title}>Список заданий:</h1>
      {todos.length ? (
        todos.map((item) => (
          <TodoComponent statusTodo={statusTodo} removeItem={removeItem} key={todos.id} item={item} />
        ))
      ) : (
        <h1 className={classes.title}>Список заданий пуст</h1>
      )}
    </div>
  );
};

export default TodoList;
