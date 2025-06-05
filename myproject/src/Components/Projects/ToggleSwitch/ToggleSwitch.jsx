import { useState } from "react";
import "./ToggleSwitch.css";
import { IoIosSwitch } from "react-icons/io";
export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <h1>Toggle switch</h1>
      <h1><IoIosSwitch style={{color:'red',fontSize:'8rem'}} /></h1>
      <div
        className="toggle-switch"
        onClick={() => setIsOn(!isOn)}
        style={{ backgroundColor: isOn ? "#4CAF50" : "#f44300" }}
      >
        <div className={`switch ${isOn ? "on" : "off"}`}>
          <span className="swtich-state">{isOn ? "ON" : "OFF"}</span>
        </div>
      </div>
    </>
  );
};
