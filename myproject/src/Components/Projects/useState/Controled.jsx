import { useState } from "react";
import "./States.css";
export const Controlled = () => {
  const [setp, setStep] = useState("");

  const handleSubmit = (e) => {
    e.preventdefault();
    const dataValue = document.querySelector("#inputName").value;
    console.log(dataValue);
  };
  console.log(setp)
  return (
    <section className="container">
      <h1>Controlled Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            id="inputName"
            name="name"
            type="text"
            value={setp}
            onChange={(e) => setStep(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};
