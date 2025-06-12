import { useState } from "react";

export const TodoForm = ({onAddTodo}) => {
  const [inputValue, setInputValue] = useState({});

  const handleInputChange = (value) => {
    setInputValue({id:value, content:value, chacked: false});
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onAddTodo(inputValue);
    setInputValue({id:'', content:'', chacked: false});
  }

  return (
    <section className="form">
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            checked={false}
            value={inputValue.content}
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="todo-btn">
            Add task
          </button>
        </div>
      </form>
    </section>
  );
};
