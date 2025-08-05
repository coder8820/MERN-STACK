import { useId } from "react";
import "./index.css";
export const UseIdHook = () => {
  //     const usernameId = useId();
  //     const emailId = useId();

  //     const handleSubmit = (event) => {
  //     event.preventDefault();
  //     }
  //   return (
  //     <form onSubmit={handleSubmit} className='form'>
  //       <div>
  //         <label htmlFor={usernameId}>Username</label>
  //         <input type="text" id={usernameId} name="name" />
  //       </div>
  //       <div>
  //         <label htmlFor={emailId}>Email</label>
  //         <input type="email" id={emailId} name="email" />
  //       </div>
  //       <button type="submit">Submit</button>
  //     </form>
  //   );

  const id = useId()

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    alert(`Username: ${data.name}, Email: ${data.email}, Password: ${data.password}`);
    event.target.reset(); // Reset the form after submission    
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <h1>UseId Hook Example</h1><br />
      <div>
        <label htmlFor={id + "usernameId"}>Username</label>
        <input type="text" id={id+"usernameId"} name="name" />
      </div>
      <div>
        <label htmlFor={id + "emailId"}>Email</label>
        <input type="email" id={id + "emailId"} name="email" />
      </div>
      <div>
        <label htmlFor={id + "passwordId"}>Password</label>
        <input type="password" id={id + "passwordId"} name="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
