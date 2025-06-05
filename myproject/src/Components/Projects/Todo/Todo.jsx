/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./Todo.css";

export const Todo = () => {
    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([])
    const handleInputChange =(value)=>{
        setInputValue(value);
    }
    const handleFormSubmit = (e) =>{
        e.preventDefault()
        if(!inputValue) return;
        setTask((prev)=> {
            return [...prev, inputValue]
        })
    }
  return (
    <section className="todo-container">
      <header>
        <h1>Todo Applicaiton</h1>
      </header>
      <section className="form">
        <form onSubmit={(e) => handleFormSubmit(e)}>
          <div>
            <input type="text" className="todo-input" 
            autoComplete="off" 
            value={inputValue}
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
    </section>
  );
};
