import './form.css';

export const ContactForm = () => {
  return (
    <div className="container">
      <div className="card">
        <h1>Contact Form</h1>
        <form action="#">
          <label htmlFor="username">username</label>
          <input type="text" name="username" autoComplete="off" required />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" autoComplete="off" required />

          <textarea
            name="textarea"
            id="textarea"
            type="password"
            cols="30"
            rows="10"
            placeholder="Type your message here..."
            autoComplete="off"
            required
          />
        </form>
      </div>
    </div>
  );
};
