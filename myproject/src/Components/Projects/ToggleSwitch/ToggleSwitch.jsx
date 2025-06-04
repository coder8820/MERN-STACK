import { useState } from 'react';
import './ToggleSwitch.css';
export const ToggleSwitch = () =>{

    const [isOn, setIsOn] = useState(false);



    return(
        <div className="toggle-switch" 
        onClick={() => setIsOn(!isOn)}
        style={{backgroundColor: isOn ? '#4CAF50' : '#f44300'}}
        >
            <div className={`switch ${isOn ? 'on' : 'off'}`}>
                <span className='swtich-state'>{isOn ? 'ON' : 'OFF'}</span>
            </div>
        </div>
    )
}