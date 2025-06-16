import "./form.css"
export const LoginForm = () => {
  return (
    <section className="container">
      <div className="card">
        <h1>Login Form</h1>
        <form action="#">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" required autoConplete="off" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" required autoComplete="off" />
            <button type="submit" className="btn">Login</button>
        </form>
      </div>
    </section>
  );
};
