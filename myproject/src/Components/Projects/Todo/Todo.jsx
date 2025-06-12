import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { DateTime } from "./DateTime";

export const Todo = () => {
  const [task, setTask] = useState([]);

  const handleFormSubmit = (inputValue) => {
    if (!inputValue) return;
    if (task.includes(inputValue)) {
      alert("This Task already exists");
      return;
    }
    setTask((prev) => {
      return [...prev, inputValue];
    });
  };


  // delete todo functionality
  const handleDeleteTodo = (e) => {
    const updatedTask = task.filter((data) => data !== e);
    setTask(updatedTask);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>My Todo Applicaiton</h1>
        <DateTime />
      </header>
     <TodoForm onAddTodo={handleFormSubmit} />
      <section className="myUnOrdList">
        <ul>
          {task.map((item, index) => (
            <TodoList key={index} data={item} handleDeleteTodo={handleDeleteTodo}/>
          ))}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={() => setTask([])}>
          clear All
        </button>
      </section>
    </section>
  );
};
