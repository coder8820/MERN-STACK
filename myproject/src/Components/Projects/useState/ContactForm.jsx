import { useState } from "react";
import "./form.css";

export const ContactForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventdefault();
    if (username && email && message) {
        alert(`Thank you ${username}, your message has been sent!`);
        setUsername("");
        setEmail("");
        setMessage("");
        }
    else {
        alert("Please fill in all fields.");
    }
    // e.target.reset();
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Contact Form</h1>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="off"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            data-gramm="false"
            type="password"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            autoComplete="off"
            required
          />
          <button className="btn" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
