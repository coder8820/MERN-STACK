import { useId } from 'react';
import './index.css';
export const UseIdHook = () => {

    const usernameId = useId();
    const emailId = useId();

    const handleSubmit = (event) => {
    event.preventDefault();
    }
  return (
    <form onSubmit={handleSubmit} className='form'>
      <div>
        <label htmlFor={usernameId}>Username</label>
        <input type="text" id={usernameId} name="name" />
      </div>
      <div>
        <label htmlFor={emailId}>Email</label>
        <input type="email" id={emailId} name="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
