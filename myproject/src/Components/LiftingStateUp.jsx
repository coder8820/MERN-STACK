import { useState } from "react";

export const LiftingState = () => {
  const [inputValue, setInputValue] = useState("");// lifting the stateUp
    
  return (
    <>
      <InputComponent inputValue ={inputValue} setInputValue = {setInputValue} />
      <DisplayComponent inputValue = {inputValue} />
    </>
  );
};

export const InputComponent = (props) => {
    const { inputValue, setInputValue } = props;

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name: "
        className="input-field"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export const DisplayComponent = (props) => {
    const { inputValue } = props;
  return (
    <div>
      <h1>Display Component</h1>
      <p>Input value will be displayed here.</p>
        <p>Your Value: {inputValue}</p>
    </div>
  );
};
