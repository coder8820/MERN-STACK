import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { DateTime } from "./DateTime";

export const Todo = () => {
  const [task, setTask] = useState([]);

  const handleFormSubmit = (inputValue) => {
    const {id, content, isChacked} = inputValue;
    if (!content) return;
    const ifTodoExists = task.find((data) => data.content === content);
    if (ifTodoExists) {
      alert("This todo already exists");
      return;
    }
    setTask((prev) => {
      return [...prev, {id, content, isChacked}];
    });
  };


  // delete todo functionality
  const handleDeleteTodo = (e) => {
    const updatedTask = task.filter((data) => data.content !== e);
    setTask(updatedTask);
  };
  // handle check todo functionality
  const handleCheckTodo = (contents) => {
    const updatedTask = task.map((data) => {
      if (data.content === contents) {
        return { ...data, chacked: !data.chacked };
      }
      return data;
    });
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
          {task.map((item) => (
            <TodoList
             key={item.id}
             data={item.content}
             chacked={item.chacked}
             handleDeleteTodo={handleDeleteTodo}
             onhandleCheckTodo={handleCheckTodo}
             />
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
