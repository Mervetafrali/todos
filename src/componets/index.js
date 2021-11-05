import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";
import "../App.css";

export default function TODOs() {
  const getLocalData = () => {
    const local = localStorage.getItem("todos");
    return local ? JSON.parse(local) : [];
  };
  const [todos, setTodos] = useState(getLocalData());
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="todoapp">
      <header className="header">
        <h1>TODOS</h1>
      </header>
      <Form addTodo={setTodos} todos={todos} />
      <List updateTodo={setTodos} todos={todos} />
    </div>
  );
}
