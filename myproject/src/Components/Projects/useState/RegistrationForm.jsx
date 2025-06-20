import { useState } from "react";
import "./form.css";
export const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "phone":
        setPhone(value);
    }
  };

  const handleFormSubmit =()=>{
    const formData ={
      firstName,
      lastName,
      email,
      password,
      phone,
    }
    console.log(formData)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <section className="data">
        <p>My name is <span>{firstName}{lastName}</span></p>
        <p>My Email address <span>{email}</span></p>
        <p>Phone No <span>{phone}</span></p>
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
          value={firstName}
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
          value={lastName}
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
          value={email}
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
          value={password}
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
          value={phone}
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
