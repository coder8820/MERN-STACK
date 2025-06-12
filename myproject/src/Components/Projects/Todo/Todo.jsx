import { useEffect, useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const [task, setTask] = useState([]);
  const [dateTime, setDatetime] = useState("");

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


  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString("en-Us", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      const formattedTime = currentDate.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setDatetime(`${formattedDate} - ${formattedTime}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // delete todo functionality
  const handleDeleteTodo = (e) => {
    const updatedTask = task.filter((data) => data !== e);
    setTask(updatedTask);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>My Todo Applicaiton</h1>
        <h2 className="date-time">{dateTime}</h2>
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
