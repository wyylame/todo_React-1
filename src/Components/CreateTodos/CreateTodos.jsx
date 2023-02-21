import React, { useState } from "react";
import MyButton from "../../UI/MyButton/MyButton";
import MyInput from "../../UI/MyInput/MyInput";
import FilterComponent from "../FilterComponent/FilterComponent";

const CreateTodos = ({ todos, create, filter }) => {
  const [todo, setTodo] = useState("");

  const addNewTodo = (e) => {
    e.preventDefault();
    if (todo === "") {
      alert("Поле не должно быть пустым");
    } else if (todo.length >= 30) {
      alert('Слишком длинное название задачи')
    } else {
      const newTodo = {
        id: Date.now(),
        body: todo,
        status: true
      };
      create(newTodo);
      setTodo("");
    }
  };

  return (
    <div className="">
      <MyInput
        type="text"
        placeholder="Добавить новую задачу"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <MyButton onClick={addNewTodo}>Добавить</MyButton>
      <FilterComponent filter={filter}/>
    </div>
  );
};

export default CreateTodos;
