import { useState } from "react";
import "./form.css";

export const ContactForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="container">
      <div className="card">
        <h1>Contact Form</h1>
        <form action="#">
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="username"
            value={username}
            autoComplete="off"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            autoComplete="off"
            required
          />
          <legend htmlFor="message">Message</legend>
          <textarea
            name="message"
            id="textarea"
            type="password"
            // cols="30"
            rows="6"
            placeholder="Type your message here..."
            autoComplete="off"
            required
          />
          <button className="btn" type="submit">
            send Message
          </button>
        </form>
      </div>
    </div>
  );
};
