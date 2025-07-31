import "./index.css";
import { forwardRef, useId, useRef } from "react";

export const ForwardRef = () => {
  const username = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted with ForwardRef inputs");
    username.current.value=''
    password.current.value='';
  };

  return (
    <div className="container">
      <h1>ForwardRef Example</h1>
      <form onSubmit={handleFormSubmit}>
        <BeforeReact19Input label="usename" ref={username} />
        <BeforeReact19Input label="password" ref={password} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const BeforeReact19Input = forwardRef((props, ref) => {
    const id = useId()
  return (
    <div>
        <label htmlFor={id}>{props.label}</label>
        <input
            type="text"
            id={id}
            ref={ref}
            placeholder="Enter your value"
            required
        />
    </div>
  );
});
