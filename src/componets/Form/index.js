import { useState, useEffect } from "react";
import "../../App.css";
function Form({ addTodo, todos }) {
  const [form, setForm] = useState({ checked: false, fullString: "" });

  useEffect(() => {
    setForm({ checked: false, fullString: "" });
  }, [todos]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.todo === "") {
      return false;
    }

    form.checked = false;

    addTodo([...todos, form]);
    localStorage.setItem("todos", JSON.stringify([...todos, form]));
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          name="fullString"
          value={form.fullString}
          onChange={onChangeInput}
        />
      </div>
    </form>
  );
}
export default Form;
