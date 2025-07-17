import { useState } from "react";
import "./form.css";

export const ContactForm = () => {
  // Using individual state variables for each input field
  //   const [username, setUsername] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [message, setMessage] = useState("");

  // Using a single state object to manage form data
  const [contacts, setContacts] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // const formData = {
    //     username,
    //     email,
    //     message
    // }
    console.log("Form submitted:", contacts);
    e.target.reset();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContacts((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Contact Form</h1>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
            value={contacts.username}
            // onChange={(e) => setUsername(e.target.value)}
            onChange={handleInputChange}
            autoComplete="off"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={contacts.email}
            // onChange={(e) => setEmail(e.target.value)}
            onChange={handleInputChange}
            autoComplete="off"
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            data-gramm="false"
            type="password"
            value={contacts.message}
            // onChange={(e) => setMessage(e.target.value)}
            onChange={handleInputChange}
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
