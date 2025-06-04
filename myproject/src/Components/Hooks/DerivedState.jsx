/* eslint-disable no-unused-vars */
import { useState } from "react";
import "../EV.css";

export const DerivedState = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Kumail Abbass", age: 30 },
    { id: 2, name: "Shahid Hussain", age: 25 },
    { id: 3, name: "Basit Ali", age: 28 },
    { id: 4, name: "Saleem ", age: 35 },
  ]);
  return (
    <div className="container">
      <div className="main-div">
        <h1>Derived State Example</h1>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <h2>{user.name}</h2>
              <p>Age: {user.age}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
