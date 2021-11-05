import React, { useEffect, useState } from "react";
import "../../App.css";
function List({ updateTodo, todos }) {
  const [filterText, setFilterText] = useState("");

  useEffect(() => {}, [todos]);

  const onSubmit = (i, todo) => (e) => {
    e.preventDefault();
    if (todo.checked) {
      todo.checked = false;
    } else {
      todo.checked = true;
    }
    todos[i].fullString = todo.fullString;
    updateTodo([...todos]);
    localStorage.setItem("todos", JSON.stringify([...todos]));
  };

  const deleteItem = (id) => (e) => {
    const newArr = [...todos];
    newArr.splice(id, 1);
    updateTodo([...newArr]);
    localStorage.setItem("todos", JSON.stringify([...newArr]));
  };

  const itemCount = () => {
    let i = 0;
    todos.forEach((todo) => {
      if (!todo.checked) i++;
    });
    return i;
  };
  function filterClick(value) {
    setFilterText(value);
  }
  const filtered = todos.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toString().toLocaleLowerCase())
    );
  });

  return (
    <div>
      <ul className="todo-list">
        {filtered.map((todo, i) => (
          <div>
            <li className={todo.checked ? "completed" : "active"} key={i}>
              <label onClick={onSubmit(i, todo)}>{todo.fullString}</label>
              <span>
                <button className="destroy" onClick={deleteItem(i)}></button>
              </span>
            </li>
          </div>
        ))}
      </ul>
      <div className="footer">
        <span className="todo-count">
          <strong>{itemCount()} </strong>
          items left
        </span>
        <ul className="filters">
          <li>
            <button className="footerButton" onClick={(e) => filterClick("")}>
              All
            </button>
          </li>
          <li>
            <button
              className="footerButton"
              onClick={(e) => filterClick(false)}
            >
              Active
            </button>
          </li>
          <li>
            <button className="footerButton" onClick={(e) => filterClick(true)}>
              Completed
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default List;
