import React, { useEffect, useState } from "react";
import "./global_reset.css";
import "./App.css";
import CreateTodos from "./Components/CreateTodos/CreateTodos";
import TodoList from "./Components/TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1, 
      body: 'viubiudniw qfqu 1',
      status: true // лучше, чтобы название логически было подобрано. Для true/false подходит completed, для status - "completed"/"active"
    },
    {
      id: 2, 
      body: 'viubiudniw qfqu 2',
      status: false
    },
    {
      id: 3, 
      body: 'viubiudniw qfqu 3',
      status: true
    },
    {
      id: 4, 
      body: 'viubiudniw qfqu 4',
      status: false
    },
    
  ]);

  const removeItem = (item) => {
    setTodos(todos.filter((n) => n.id !== item.id));
  };

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const [filtered, setFiltered] = useState(todos); // стейты нужно держать в самом начале компонента

  useEffect(() => {
    setFiltered(todos)
  }, [todos])

  // что-то непонятное происходит в statusTodo
  const statusTodo = (todo) => {
    let newTodos = [...todos].filter(n => {
      if (n.id === todo.id) {
        n.status = !n.status
      }
      return n
    })
    setTodos(newTodos)
  }

  const todoFilter = (status) => {
    if (status === "all") {
      setFiltered(todos);
    } else {
      setFiltered([...todos].filter((n) => n.status === status));
    }
  };

  return (
    <div className="App">
      <div className="app__content">
        <h1 className="todo__title">todos</h1>
        <CreateTodos filter={todoFilter} create={createTodo} todos={todos} />
        {todos.length ? (
          <TodoList statusTodo={statusTodo} removeItem={removeItem} todos={filtered} />
        ) : (
          <h1 className="netu-todo__title">Список заданий пуст</h1>
        )}
      </div>
    </div>
  );
}

export default App;
