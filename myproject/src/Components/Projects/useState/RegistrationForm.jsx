import "./form.css"
export const RegistrationForm = () => {
  return (
    <form action="#">
        <h1>Registration Form</h1>
      <div className="container">
        <h1>SignUp</h1>
        <p>Please fill in this form to create the account!</p>
        <label htmlFor="firsName">
          <b>First Name</b>
        </label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter first name"
          required
        />

        <label htmlFor="lastName"><b>Last Name:</b></label>
        <input type="text" name="lastName" placeholder="Enter last name" required/>

        <label htmlFor="email"><b>email:</b></label>
        <input type="email" name="email" placeholder="abc@gmail.com" required/>

        <label htmlFor="password"><b>Password:</b></label>
        <input type="password" placeholder="Enter passwrod" name="password" required />

        <label htmlFor="phone"><b>Phone Number</b></label>
        <input type="number" name="phone" placeholder="923947223423" required />

        <p>
            By creating an account you agree to our
            <a href="#" style={{color:"dodgerblue"}}>Terms & privacy</a>
        </p>

        <div className="clearfix">
            <button type="submit"className="btn">Sign Up</button>
        </div>
      </div>
    </form>
  );
};
