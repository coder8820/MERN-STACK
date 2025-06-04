import { useState } from "react";

export const LiftingState = () => {
  return (
    <>
      <InputComponent />
      <DisplayComponent />
    </>
  );
};

export const InputComponent = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input type="text" placeholder="Enter your name: " value={inputValue} />
    </div>
  );
};

export const DisplayComponent = () => {
  return (
    <div>
      <h1>Display Component</h1>
      <p>Input value will be displayed here.</p>
    </div>
  );
};
