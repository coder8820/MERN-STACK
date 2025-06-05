/* eslint-disable no-unused-vars */
import { FaCheck } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";

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
        if(task.includes(inputValue))
        {
            alert("Task already exists");
            setInputValue("");
            return;
        }
        setTask((prev)=> {
            return [...prev, inputValue]
        })
        setInputValue("");
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
        <section className="myUnOrdList">
            <ul>
                {
                    task.map((item, index)=>(
                        <li key={index} className="todo-item">
                            <span>{item}</span>
                            <button className="check-btn"><FaCheck/></button>
                            <button className="delete-btn"><MdDeleteForever/></button>
                        </li>
                    ))
                }
            </ul>
        </section>
    </section>
  );
};
