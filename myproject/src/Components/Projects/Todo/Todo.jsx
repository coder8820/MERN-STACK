import { FaCheck } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";

import { useEffect, useState } from "react";
import "./Todo.css";

export const Todo = () => {
    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([])
    const [dateTime, setDatetime] = useState("")

    const handleInputChange =(value)=>{
        setInputValue(value);
    }

    const handleFormSubmit = (e) =>{
        e.preventDefault()
        if(!inputValue) return;
        if(task.includes(inputValue))
        {
            alert("This Task already exists");
            setInputValue("");
            return;
        }
        setTask((prev)=> {
            return [...prev, inputValue]
        })
        setInputValue("");
    }

    // Date and time 
    // console.log("datetime")

    useEffect(() => {
      const interval = setInterval(() =>{
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('en-Us',{
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
        const formattedTime = currentDate.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });
        setDatetime(`${formattedDate} - ${formattedTime}`);
      },1000);
     return () => clearInterval(interval);  

    },[])

    // delete todo functionality
    const handleDeleteTodo = (e) =>{
      const updatedTask = task.filter((data) => data !== e);
      setTask(updatedTask);
      console.log(updatedTask);
      
        
    }
    
    
  return (
    <section className="todo-container">
      <header>
        <h1>My Todo Applicaiton</h1>
        <h2 className="date-time">{dateTime}</h2>
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
                            <button className="check-btn" ><FaCheck/></button>
                            <button className="delete-btn"
                            onClick={() => handleDeleteTodo(item)}>
                            <MdDeleteForever/>
                            </button>
                        </li>
                    ))
                }
            </ul>
        </section>
    </section>
  );
};
