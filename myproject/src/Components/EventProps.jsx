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
    const handleGreeting = () =>{
        console.log("Hellow, Welcome to our Website!");
    }
    return(
        <>
          <button onClick={props.onClick}>Click</button>
          <button onMouseEnter={props.onMouseEnter}>Hover me</button>
          <button onClick={handleGreeting}>Greeting</button>
        </>
    )
}