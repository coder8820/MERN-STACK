import { useState, useEffect } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { DateTime } from "./DateTime";
import { getInitailTodoData, setTodoData } from "./TodoLocalStorage";

export const Todo = () => {
  const [task, setTask] = useState(() => getInitailTodoData());

  // Save to localStorage only when 'task' changes
  useEffect(() => {
    setTodoData(task);
  }, [task]);

  const handleFormSubmit = ({ id, content, isChacked }) => {
    if (!content.trim()) return;

    const isDuplicate = task.some((todo) => todo.content === content);
    if (isDuplicate) {
      alert("This todo already exists");
      return;
    }

    setTask((prev) => [...prev, { id, content, isChacked }]);
  };

  const handleDeleteTodo = (contentToDelete) => {
    setTask((prev) => prev.filter((todo) => todo.content !== contentToDelete));
  };

  const handleCheckTodo = (contentToToggle) => {
    setTask((prev) =>
      prev.map((todo) =>
        todo.content === contentToToggle
          ? { ...todo, chacked: !todo.chacked }
          : todo
      )
    );
  };

  const handleClearAll = () => {
    if (task.length > 0 && window.confirm("Are you sure you want to clear all todos?")) {
      setTask([]);
    }
  };

  return (
    <section className="todo-container">
      <header>
        <h1>My Todo Application</h1>
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
        <button className="clear-btn" onClick={handleClearAll}>
          Clear All
        </button>
      </section>
    </section>
  );
};
