import { useState } from "react";
import "./States.css";

export const Controlled = () => {
  const [step, setStep] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(step);
  };

  const handleChange = (e) => {
    setStep(e.target.value);
  };

  return (
    <section className="container">
      <h1>Controlled Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          User Name:
          <input
            id="inputName"
            name="name"
            type="text"
            value={step}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
        <p>{step}</p>
      </form>
    </section>
  );
};
