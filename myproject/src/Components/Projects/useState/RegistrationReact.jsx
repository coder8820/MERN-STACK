import { useState } from "react";
import "./form.css";
export const RegistrationReact = () => {
  const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        phone:"",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev)=>({...prev, [name]: value}))
  };

  const handleFormSubmit =(e)=>{
    e.preventDefault()
    console.log(user)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <section className="data">
        <p>My name is <span>{user.firstName}{user.lastName}</span></p>
        <p>My Email address <span>{user.email}</span></p>
        <p>Phone No <span>{user.phone}</span></p>
      </section>
      <div className="container">
        <h1>Sign-Up</h1>
        <p>Please fill in this form to create the account!</p>
        <label htmlFor="firsName">
          <b>First Name</b>
        </label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter first name"
          required
          value={user.firstName}
          onChange={handleInputChange}
        />

        <label htmlFor="lastName">
          <b>Last Name:</b>
        </label>
        <input
          type="text"
          name="lastName"
          placeholder="Enter last name"
          required
          value={user.lastName}
          onChange={handleInputChange}
        />

        <label htmlFor="email">
          <b>Email:</b>
        </label>
        <input
          type="email"
          name="email"
          placeholder="abc@gmail.com"
          required
          value={user.email}
          onChange={handleInputChange}
        />

        <label htmlFor="password">
          <b>Password:</b>
        </label>
        <input
          type="password"
          placeholder="Enter passwrod"
          name="password"
          required
          value={user.password}
          onChange={handleInputChange}
        />

        <label htmlFor="phone">
          <b>Phone Number</b>
        </label>
        <input
          type="number"
          name="phone"
          placeholder="923947223423"
          required
          value={user.phone}
          onChange={handleInputChange}
        />

        <p>
          By creating an account you agree to our
          <a href="#">Terms & privacy</a>
        </p>

        <div className="clearfix">
          <button type="submit" className="btn">
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
};
