import { useRef } from "react";
import "./index.css";
export const UseRef = () => {
  // const username = document.getElementById('username').value;
  // const username = document.getElementById('username').value;

  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Username: ${username.current.value}, ${email.current.value}, Password: ${password.current.value}`
    );
    // You can also clear the input fields after submission
    username.current.value = "";
    email.current.value = "";
    password.current.value = "";
  };

  return (
    <div className="container">
      <h1>useRef Hook Example</h1>
      <form onSubmit={handleSubmit} className="form">
        <h1>Login Form</h1>
        <input
          type="text"
          id="username"
          placeholder="Username"
          ref={username}
          required
        />
        <input
          type="email"
          id="email"
          placeholder="abc@gmail.com"
          ref={email}
          required
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          ref={password}
          required
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
