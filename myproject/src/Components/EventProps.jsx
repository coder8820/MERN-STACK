import './EV.css'

export const EventProps = () =>{

    const handleWelcomeUser = (user)=>{
        alert(`Welcome , ${user}!`);
    }
    const handleHover = ()=>{
        console.log("Mouse is hovering over the button");
    }

    return(
        <>
          <WelcomeUser
           onClick={()=> handleWelcomeUser("coder")}
           onMouseEnter={()=> handleHover()}
           />
        </>
    )
}


export const WelcomeUser = (props)=>{
    const {onClick, onMouseEnter} = props;
    const handleGreeting = () =>{
        console.log("Hellow, Welcome to our Website!");
        onClick();
    }
    return(
        <>
          <button onClick={onClick}>Click</button>
          <button onMouseEnter={onMouseEnter}>Hover me</button>
          <button onClick={handleGreeting}>Greeting</button>
        </>
    )
}