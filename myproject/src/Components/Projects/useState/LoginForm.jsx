import { useState } from "react";
import "./form.css";
export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleFormSubmit=(e)=>{
    e.preventDefault()
    const loginData={
        username,
        password
    }
    console.log(loginData)
  }

  return (
    <section className="container">
      <div className="card">
        <h1>Login Form</h1>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="off"
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            autoComplete="off"
          />

          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    </section>
  );
};
